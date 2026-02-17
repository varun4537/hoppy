/**
 * SkyMap — Custom Canvas-based star renderer
 * 
 * Uses stereographic projection to convert RA/Dec to screen coordinates.
 * Renders stars, constellation lines, highlights, and animated arrows.
 * Supports: red light mode, pinch-to-zoom, drag-to-pan.
 */
import { useRef, useEffect, useCallback, useState } from "react";
import { STARS, DSOs } from "../data/stars";
import { CONSTELLATIONS, ASTERISMS } from "../data/constellations";
import { useGame } from "../context/GameContext";

// Convert RA (hours) / Dec (degrees) to radians
function raDecToRad(raH, decDeg) {
    return {
        ra: (raH / 24) * 2 * Math.PI,
        dec: (decDeg / 180) * Math.PI,
    };
}

// Stereographic projection centered on (ra0, dec0)
function project(raH, decDeg, centerRA, centerDec, scale, cx, cy) {
    const { ra, dec } = raDecToRad(raH, decDeg);
    const { ra: ra0, dec: dec0 } = raDecToRad(centerRA, centerDec);

    const dRA = ra - ra0;
    const cosc =
        Math.sin(dec0) * Math.sin(dec) +
        Math.cos(dec0) * Math.cos(dec) * Math.cos(dRA);

    if (cosc < 0.05) return null;

    const k = scale / cosc;
    const x = cx - k * Math.cos(dec) * Math.sin(dRA);
    const y = cy - k * (Math.cos(dec0) * Math.sin(dec) - Math.sin(dec0) * Math.cos(dec) * Math.cos(dRA));
    return { x, y };
}

function magToRadius(mag, zoom) {
    const base = Math.max(1, 6 - mag);
    return base * (0.6 + zoom * 0.3);
}

function generateBgStars(count) {
    const stars = [];
    for (let i = 0; i < count; i++) {
        stars.push({
            ra: Math.random() * 24,
            dec: Math.random() * 180 - 90,
            mag: 4 + Math.random() * 3,
        });
    }
    return stars;
}

const BG_STARS = generateBgStars(800);



// Color transformers for red-light mode
// Returns hex format to ensure compatibility with hex alpha suffixes like + "80"
function toHex(n) { return Math.round(Math.max(0, Math.min(255, n))).toString(16).padStart(2, '0'); }

function toRed(hexOrRgba) {
    if (hexOrRgba.startsWith("#")) {
        const r = parseInt(hexOrRgba.slice(1, 3), 16);
        const g = parseInt(hexOrRgba.slice(3, 5), 16) || 0;
        const brightness = Math.min(255, r + g * 0.2);
        const b2 = brightness * 0.08;
        return `#${toHex(brightness)}${toHex(b2)}00`;
    }
    // For rgb/rgba strings, still return hex
    const nums = hexOrRgba.match(/[\d.]+/g);
    if (nums) {
        const brightness = Math.min(255, Number(nums[0]) + (Number(nums[1]) || 0) * 0.2);
        return `#${toHex(brightness)}${toHex(brightness * 0.08)}00`;
    }
    return hexOrRgba;
}

// Safe alpha helper: works with both hex and rgb colors
function withAlpha(color, alpha) {
    if (color.startsWith("#")) {
        // Append hex alpha
        const hexA = toHex(alpha * 255);
        const base = color.length > 7 ? color.slice(0, 7) : color;
        return base + hexA;
    }
    // For rgb/rgba, parse and rebuild
    const nums = color.match(/[\d.]+/g);
    if (nums) {
        return `rgba(${nums[0]}, ${nums[1]}, ${nums[2]}, ${alpha})`;
    }
    return color;
}

export default function SkyMap({ step, dso, equipment, onObjectClick }) {
    const canvasRef = useRef(null);
    const animRef = useRef(null);
    const { redMode, showConstellations } = useGame();
    const [arrowProgress, setArrowProgress] = useState(0);
    const [dimensions, setDimensions] = useState({ w: 0, h: 0 });

    // Touch gesture state
    const [panOffset, setPanOffset] = useState({ x: 0, y: 0 });
    const [userZoom, setUserZoom] = useState(1);
    const touchRef = useRef({
        dragging: false,
        lastX: 0, lastY: 0,
        pinching: false,
        initialDist: 0,
        initialZoom: 1,
        panX: 0, panY: 0,
        // Timestamp for tap detection
        touchStartTime: 0,
    });


    // Reset user pan/zoom when step changes
    useEffect(() => {
        setPanOffset({ x: 0, y: 0 });
        setUserZoom(1);
        touchRef.current.panX = 0;
        touchRef.current.panY = 0;
    }, [step]);

    // Touch handlers
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        function getFingerDist(e) {
            const [a, b] = [e.touches[0], e.touches[1]];
            return Math.hypot(a.clientX - b.clientX, a.clientY - b.clientY);
        }

        function onTouchStart(e) {
            e.preventDefault();
            if (e.touches.length === 2) {
                // Pinch start
                touchRef.current.pinching = true;
                touchRef.current.dragging = false;
                touchRef.current.initialDist = getFingerDist(e);
                touchRef.current.initialZoom = userZoom;
            } else if (e.touches.length === 1) {
                // Drag start
                touchRef.current.dragging = true;
                touchRef.current.pinching = false;
                touchRef.current.lastX = e.touches[0].clientX;
                touchRef.current.lastY = e.touches[0].clientY;
            }
        }

        function onTouchMove(e) {
            e.preventDefault();
            if (touchRef.current.pinching && e.touches.length === 2) {
                const dist = getFingerDist(e);
                const ratio = dist / touchRef.current.initialDist;
                const newZoom = Math.max(0.3, Math.min(5, touchRef.current.initialZoom * ratio));
                setUserZoom(newZoom);
            } else if (touchRef.current.dragging && e.touches.length === 1) {
                const dx = e.touches[0].clientX - touchRef.current.lastX;
                const dy = e.touches[0].clientY - touchRef.current.lastY;
                touchRef.current.lastX = e.touches[0].clientX;
                touchRef.current.lastY = e.touches[0].clientY;
                touchRef.current.panX += dx;
                touchRef.current.panY += dy;
                setPanOffset({ x: touchRef.current.panX, y: touchRef.current.panY });
            }
        }

        function onTouchEnd(e) {
            if (e.touches.length < 2) touchRef.current.pinching = false;
            if (e.touches.length < 1) touchRef.current.dragging = false;
        }

        // Mouse wheel zoom (desktop)
        function onWheel(e) {
            e.preventDefault();
            const delta = e.deltaY > 0 ? 0.9 : 1.1;
            setUserZoom(z => Math.max(0.3, Math.min(5, z * delta)));
        }

        // Mouse drag (desktop)
        let mouseDown = false;
        let mx = 0, my = 0;
        function onMouseDown(e) {
            mouseDown = true;
            mx = e.clientX; my = e.clientY;
        }
        function onMouseMove(e) {
            if (!mouseDown) return;
            const dx = e.clientX - mx;
            const dy = e.clientY - my;
            mx = e.clientX; my = e.clientY;
            touchRef.current.panX += dx;
            touchRef.current.panY += dy;
            setPanOffset({ x: touchRef.current.panX, y: touchRef.current.panY });
        }
        function onMouseUp() { mouseDown = false; }

        canvas.addEventListener("touchstart", onTouchStart, { passive: false });
        canvas.addEventListener("touchmove", onTouchMove, { passive: false });
        canvas.addEventListener("touchend", onTouchEnd);
        canvas.addEventListener("wheel", onWheel, { passive: false });
        canvas.addEventListener("mousedown", onMouseDown);
        window.addEventListener("mousemove", onMouseMove);
        window.addEventListener("mouseup", onMouseUp);

        return () => {
            canvas.removeEventListener("touchstart", onTouchStart);
            canvas.removeEventListener("touchmove", onTouchMove);
            canvas.removeEventListener("touchend", onTouchEnd);
            canvas.removeEventListener("wheel", onWheel);
            canvas.removeEventListener("mousedown", onMouseDown);
            window.removeEventListener("mousemove", onMouseMove);
            window.removeEventListener("mouseup", onMouseUp);
        };
    }, [userZoom]);

    // Click / Tap detection
    function handleCanvasClick(e) {
        if (!onObjectClick) return;

        // Ignore if we just dragged
        if (touchRef.current.dragging || touchRef.current.pinching) return;

        const canvas = canvasRef.current;
        const rect = canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const [centerRA, centerDec] = step.center;
        const zoom = (step.zoom || 1) * userZoom;
        const w = dimensions.w;
        const h = dimensions.h;
        const scale = Math.min(w, h) * 0.35 * zoom;
        const cx = w / 2 + panOffset.x;
        const cy = h / 2 + panOffset.y;

        // Find closest object
        let bestKey = null;
        let bestDist = 40; // Hit radius in pixels

        // Check Stars
        for (const [key, star] of Object.entries(STARS)) {
            // Optimization: skip if magnitude too dim?
            // For now check all, ~800 is fast enough
            const pos = project(star.ra, star.dec, centerRA, centerDec, scale, cx, cy);
            if (!pos) continue;

            const dx = pos.x - x;
            const dy = pos.y - y;
            const dist = Math.hypot(dx, dy);

            if (dist < bestDist) {
                bestDist = dist;
                bestKey = key;
            }
        }

        if (bestKey) {
            onObjectClick(bestKey, STARS[bestKey]);
        }
    }

    // Resize handler
    useEffect(() => {
        function handleResize() {
            const canvas = canvasRef.current;
            if (!canvas) return;
            const parent = canvas.parentElement;
            const dpr = window.devicePixelRatio || 1;
            const w = parent.clientWidth;
            const h = parent.clientHeight;
            canvas.width = w * dpr;
            canvas.height = h * dpr;
            canvas.style.width = w + "px";
            canvas.style.height = h + "px";
            setDimensions({ w, h });
        }
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Arrow animation reset on step change
    useEffect(() => {
        setArrowProgress(0);
        if (step?.arrows?.length > 0) {
            const start = performance.now();
            const duration = 1200;
            function animate(now) {
                const elapsed = now - start;
                const t = Math.min(elapsed / duration, 1);
                const eased = 1 - Math.pow(1 - t, 3);
                setArrowProgress(eased);
                if (t < 1) animRef.current = requestAnimationFrame(animate);
            }
            animRef.current = requestAnimationFrame(animate);
        }
        return () => { if (animRef.current) cancelAnimationFrame(animRef.current); };
    }, [step]);

    // Theme colors
    const theme = redMode ? {
        bgInner: "#1a0000",
        bgMid: "#120000",
        bgOuter: "#080000",
        conLine: "rgba(180, 40, 40, 0.30)",
        label: "rgba(255, 140, 120, 0.85)",
        arrowGlow: "rgba(200, 30, 30, 0.15)",
        arrowStart: "rgba(200, 50, 50, 0.4)",
        arrowEnd: "#ff3030",
        arrowHead: "#ff3030",
        targetGlowInner: "rgba(200, 50, 30, 0.35)",
        targetGlowMid: "rgba(200, 50, 30, 0.1)",
        targetStroke: "rgba(200, 80, 50, 0.7)",
        targetLabel: "#ff6644",
        fov: "rgba(200, 40, 20, 0.3)",
        bgStarColor: (opacity) => `rgba(180, 30, 0, ${opacity * 0.6})`,
    } : {
        bgInner: "#0a0e1a",
        bgMid: "#060a14",
        bgOuter: "#020408",
        conLine: "rgba(100, 160, 255, 0.25)",
        label: "rgba(220, 235, 255, 0.85)",
        arrowGlow: "rgba(0, 220, 255, 0.15)",
        arrowStart: "rgba(0, 200, 255, 0.4)",
        arrowEnd: "#00e0ff",
        arrowHead: "#00e0ff",
        targetGlowInner: "rgba(255, 200, 50, 0.35)",
        targetGlowMid: "rgba(255, 200, 50, 0.1)",
        targetStroke: "rgba(255, 220, 100, 0.7)",
        targetLabel: "#ffd866",
        fov: "rgba(0, 200, 255, 0.25)",
        bgStarColor: (opacity) => `rgba(255, 255, 255, ${opacity})`,
    };


    // Main render
    const draw = useCallback(() => {
        const canvas = canvasRef.current;
        if (!canvas || !step) return;
        const ctx = canvas.getContext("2d");
        const dpr = window.devicePixelRatio || 1;
        const w = canvas.width / dpr;
        const h = canvas.height / dpr;
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

        const [centerRA, centerDec] = step.center;
        const zoom = (step.zoom || 1) * userZoom;
        const scale = Math.min(w, h) * 0.35 * zoom;
        const cx = w / 2 + panOffset.x;
        const cy = h / 2 + panOffset.y;

        // Clear to dark sky gradient
        const grad = ctx.createRadialGradient(w / 2, h / 2, 0, w / 2, h / 2, Math.max(w, h));
        grad.addColorStop(0, theme.bgInner);
        grad.addColorStop(0.5, theme.bgMid);
        grad.addColorStop(1, theme.bgOuter);
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, w, h);

        // Draw FOV circle
        if (equipment && equipment.fov) {
            const fovRad = (equipment.fov * Math.PI) / 180;
            // Scale is roughly pixels per radian at center
            const radius = scale * (fovRad / 2);

            // Only draw if sensible size
            if (radius > 5 && radius < Math.max(w, h)) {
                ctx.beginPath();
                ctx.arc(cx, cy, radius, 0, Math.PI * 2);
                ctx.strokeStyle = theme.fov;
                ctx.lineWidth = 2;
                ctx.setLineDash([10, 10]);
                ctx.stroke();
                ctx.setLineDash([]);
            }
        }

        // Background stars
        for (const s of BG_STARS) {
            const pos = project(s.ra, s.dec, centerRA, centerDec, scale, cx, cy);
            if (!pos) continue;
            if (pos.x < -10 || pos.x > w + 10 || pos.y < -10 || pos.y > h + 10) continue;
            const r = magToRadius(s.mag, zoom) * 0.4;
            ctx.beginPath();
            ctx.arc(pos.x, pos.y, r, 0, Math.PI * 2);
            ctx.fillStyle = theme.bgStarColor(0.2 + (s.mag - 4) * 0.15);
            ctx.fill();
        }

        // ── CONSTELLATION LINES & LABELS ──
        if (showConstellations) {
            ctx.save();
            ctx.strokeStyle = redMode ? "rgba(120, 30, 30, 0.35)" : "rgba(60, 120, 200, 0.22)";
            ctx.lineWidth = 1;
            ctx.setLineDash([4, 6]);
            for (const con of CONSTELLATIONS) {
                for (const [a, b] of con.lines) {
                    const sa = STARS[a], sb = STARS[b];
                    if (!sa || !sb) continue;
                    const pa = project(sa.ra, sa.dec, centerRA, centerDec, scale, cx, cy);
                    const pb = project(sb.ra, sb.dec, centerRA, centerDec, scale, cx, cy);
                    if (!pa || !pb) continue;
                    if (pa.x < -50 || pa.x > w + 50 || pa.y < -50 || pa.y > h + 50) continue;
                    ctx.beginPath();
                    ctx.moveTo(pa.x, pa.y);
                    ctx.lineTo(pb.x, pb.y);
                    ctx.stroke();
                }
                // Label
                if (con.labelStar && STARS[con.labelStar]) {
                    const ls = STARS[con.labelStar];
                    const lp = project(ls.ra, ls.dec, centerRA, centerDec, scale, cx, cy);
                    if (lp && lp.x > -50 && lp.x < w + 50 && lp.y > -50 && lp.y < h + 50) {
                        ctx.font = `${Math.max(10, 11 * (zoom * 0.3))}px 'Inter', sans-serif`;
                        ctx.fillStyle = redMode ? "rgba(180, 60, 40, 0.55)" : "rgba(100, 160, 255, 0.55)";
                        ctx.textAlign = "center";
                        ctx.textBaseline = "top";
                        ctx.fillText(con.name, lp.x, lp.y + 14);
                    }
                }
            }
            ctx.setLineDash([]);

            // ── ASTERISM OVERLAYS ──
            for (const ast of ASTERISMS) {
                const astColor = redMode ? toRed(ast.color || "#ffaa44") : (ast.color || "#ffaa44");
                ctx.strokeStyle = withAlpha(astColor, 0.45);
                ctx.lineWidth = 2.5;
                ctx.setLineDash([]);
                let anyVisible = false;
                for (const [a, b] of ast.lines) {
                    const sa = STARS[a], sb = STARS[b];
                    if (!sa || !sb) continue;
                    const pa = project(sa.ra, sa.dec, centerRA, centerDec, scale, cx, cy);
                    const pb = project(sb.ra, sb.dec, centerRA, centerDec, scale, cx, cy);
                    if (!pa || !pb) continue;
                    if (pa.x < -50 || pa.x > w + 50 || pa.y < -50 || pa.y > h + 50) continue;
                    anyVisible = true;
                    ctx.beginPath();
                    ctx.moveTo(pa.x, pa.y);
                    ctx.lineTo(pb.x, pb.y);
                    ctx.stroke();
                }
                // Asterism label
                if (anyVisible && ast.labelStar && STARS[ast.labelStar]) {
                    const ls = STARS[ast.labelStar];
                    const lp = project(ls.ra, ls.dec, centerRA, centerDec, scale, cx, cy);
                    if (lp) {
                        ctx.font = `bold ${Math.max(11, 12 * (zoom * 0.3))}px 'Inter', sans-serif`;
                        ctx.fillStyle = withAlpha(astColor, 0.75);
                        ctx.textAlign = "center";
                        ctx.textBaseline = "bottom";
                        ctx.fillText(ast.name, lp.x, lp.y - 16);
                    }
                }
            }
            ctx.restore();
        }

        // Helper to get screen position
        function getPos(key) {
            // Dynamic target keys like "M42_target"
            if (key.endsWith("_target")) {
                const dsoKey = key.replace("_target", "");
                const d = DSOs[dsoKey];
                if (d) return project(d.ra, d.dec, centerRA, centerDec, scale, cx, cy);
            }
            if (STARS[key]) return project(STARS[key].ra, STARS[key].dec, centerRA, centerDec, scale, cx, cy);
            return null;
        }

        // Draw constellation lines
        if (step.connectStars) {
            ctx.strokeStyle = theme.conLine;
            ctx.lineWidth = 1.5;
            ctx.setLineDash([6, 4]);
            for (const [a, b] of step.connectStars) {
                const pa = getPos(a);
                const pb = getPos(b);
                if (pa && pb) {
                    ctx.beginPath();
                    ctx.moveTo(pa.x, pa.y);
                    ctx.lineTo(pb.x, pb.y);
                    ctx.stroke();
                }
            }
            ctx.setLineDash([]);
        }

        // Draw catalog stars
        const highlightSet = new Set(step.highlight || []);
        for (const [key, star] of Object.entries(STARS)) {
            const pos = project(star.ra, star.dec, centerRA, centerDec, scale, cx, cy);
            if (!pos) continue;
            if (pos.x < -20 || pos.x > w + 20 || pos.y < -20 || pos.y > h + 20) continue;

            const r = magToRadius(star.mag, zoom);
            const isHighlighted = highlightSet.has(key);
            const starColor = redMode ? toRed(star.color) : star.color;

            if (isHighlighted) {
                const glow = ctx.createRadialGradient(pos.x, pos.y, 0, pos.x, pos.y, r * 5);
                glow.addColorStop(0, withAlpha(starColor, 0.5));
                glow.addColorStop(0.5, withAlpha(starColor, 0.12));
                glow.addColorStop(1, "transparent");
                ctx.beginPath();
                ctx.arc(pos.x, pos.y, r * 5, 0, Math.PI * 2);
                ctx.fillStyle = glow;
                ctx.fill();
            }

            ctx.beginPath();
            ctx.arc(pos.x, pos.y, isHighlighted ? r * 1.3 : r, 0, Math.PI * 2);
            ctx.fillStyle = starColor;
            ctx.fill();

            if (isHighlighted && zoom >= 1) {
                ctx.font = `${Math.max(11, 13 * (zoom * 0.3))}px 'Inter', sans-serif`;
                ctx.fillStyle = theme.label;
                ctx.textAlign = "left";
                ctx.textBaseline = "middle";
                ctx.fillText(star.name, pos.x + r * 2 + 4, pos.y);
            }
        }

        // Draw DSO target marker
        if (step.isTarget && dso) {
            const tPos = project(dso.ra, dso.dec, centerRA, centerDec, scale, cx, cy);
            if (tPos) {
                const pulse = 0.8 + Math.sin(Date.now() / 300) * 0.2;
                const targetR = 18 * pulse;

                const tGlow = ctx.createRadialGradient(tPos.x, tPos.y, 0, tPos.x, tPos.y, targetR * 3);
                tGlow.addColorStop(0, theme.targetGlowInner);
                tGlow.addColorStop(0.5, theme.targetGlowMid);
                tGlow.addColorStop(1, "transparent");
                ctx.beginPath();
                ctx.arc(tPos.x, tPos.y, targetR * 3, 0, Math.PI * 2);
                ctx.fillStyle = tGlow;
                ctx.fill();

                ctx.strokeStyle = theme.targetStroke;
                ctx.lineWidth = 2;
                ctx.beginPath();
                ctx.arc(tPos.x, tPos.y, targetR, 0, Math.PI * 2);
                ctx.stroke();

                ctx.font = "bold 16px 'Inter', sans-serif";
                ctx.fillStyle = theme.targetLabel;
                ctx.textAlign = "center";
                ctx.fillText(dso.name, tPos.x, tPos.y - targetR - 10);
            }
        }

        // Draw animated pulsing arrows
        if (step.arrows && arrowProgress > 0) {
            for (const [fromKey, toKey] of step.arrows) {
                const from = getPos(fromKey);
                const to = getPos(toKey);
                if (!from || !to) continue;

                const dx = to.x - from.x;
                const dy = to.y - from.y;
                const len = Math.hypot(dx, dy);
                const endX = from.x + dx * arrowProgress;
                const endY = from.y + dy * arrowProgress;
                const angle = Math.atan2(dy, dx);

                // Glow trail
                ctx.strokeStyle = theme.arrowGlow;
                ctx.lineWidth = 14;
                ctx.lineCap = "round";
                ctx.beginPath();
                ctx.moveTo(from.x, from.y);
                ctx.lineTo(endX, endY);
                ctx.stroke();

                // Main line
                const arrowGrad = ctx.createLinearGradient(from.x, from.y, endX, endY);
                arrowGrad.addColorStop(0, theme.arrowStart);
                arrowGrad.addColorStop(1, theme.arrowEnd);
                ctx.strokeStyle = arrowGrad;
                ctx.lineWidth = 3;
                ctx.beginPath();
                ctx.moveTo(from.x, from.y);
                ctx.lineTo(endX, endY);
                ctx.stroke();

                // Arrowhead at tip
                if (arrowProgress > 0.1) {
                    const headLen = 14;
                    ctx.fillStyle = theme.arrowHead;
                    ctx.beginPath();
                    ctx.moveTo(endX, endY);
                    ctx.lineTo(endX - headLen * Math.cos(angle - 0.4), endY - headLen * Math.sin(angle - 0.4));
                    ctx.lineTo(endX - headLen * Math.cos(angle + 0.4), endY - headLen * Math.sin(angle + 0.4));
                    ctx.closePath();
                    ctx.fill();
                }

                // Pulsing chevron markers travelling along the arrow
                if (arrowProgress > 0.5) {
                    const time = Date.now() / 800;
                    const chevronCount = 3;
                    const currentLen = len * arrowProgress;
                    for (let i = 0; i < chevronCount; i++) {
                        const phase = ((time + i * 0.33) % 1);
                        const t = phase * arrowProgress;
                        const cx2 = from.x + dx * t;
                        const cy2 = from.y + dy * t;
                        const chevAlpha = Math.sin(phase * Math.PI) * 0.8;
                        const chevSize = 8;

                        ctx.strokeStyle = withAlpha(theme.arrowEnd, chevAlpha);
                        ctx.lineWidth = 2.5;
                        ctx.lineCap = "round";
                        ctx.beginPath();
                        ctx.moveTo(
                            cx2 - chevSize * Math.cos(angle - 0.5),
                            cy2 - chevSize * Math.sin(angle - 0.5)
                        );
                        ctx.lineTo(cx2, cy2);
                        ctx.lineTo(
                            cx2 - chevSize * Math.cos(angle + 0.5),
                            cy2 - chevSize * Math.sin(angle + 0.5)
                        );
                        ctx.stroke();
                    }
                }
            }
        }
    }, [step, dso, equipment, arrowProgress, dimensions, redMode, userZoom, panOffset, theme, showConstellations]);

    // Render loop
    useEffect(() => {
        let running = true;
        function loop() {
            draw();
            if (running) requestAnimationFrame(loop);
        }
        loop();
        return () => { running = false; };
    }, [draw]);

    return (
        <div
            style={{
                position: "absolute",
                inset: 0,
                overflow: "hidden",
                background: redMode ? "#080000" : "#020408",
                touchAction: "none",
            }}
            onClick={handleCanvasClick}
        >
            <canvas
                ref={canvasRef}
                style={{ display: "block", width: "100%", height: "100%", cursor: "grab" }}
            />
        </div>
    );
}
