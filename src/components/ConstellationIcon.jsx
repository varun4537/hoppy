
import { useMemo } from "react";
import { STARS } from "../data/stars";

export default function ConstellationIcon({ constellation, size = 100, color = "#fff", strokeWidth = 2 }) {
    const { lines } = constellation;

    // Calculate layout
    const layout = useMemo(() => {
        // Collect all unique stars
        const starKeys = new Set();
        lines.forEach(line => {
            starKeys.add(line[0]);
            starKeys.add(line[1]);
        });

        const starPoints = [];
        let minRa = 100, maxRa = -100, minDec = 100, maxDec = -100;

        // First pass: get raw coordinates
        const rawStars = [];
        starKeys.forEach(key => {
            const star = STARS[key];
            if (star) {
                rawStars.push({ key, ra: star.ra, dec: star.dec });
            }
        });

        if (rawStars.length === 0) return null;

        // Check for RA wrap-around (e.g. Pegasus/Andromeda crossing 0h/24h)
        // Heuristic: if spread is > 12 hours, shift stars < 12h by +24h
        const ras = rawStars.map(s => s.ra);
        const rawMinRa = Math.min(...ras);
        const rawMaxRa = Math.max(...ras);

        let shiftRa = false;
        if (rawMaxRa - rawMinRa > 12) {
            shiftRa = true;
        }

        rawStars.forEach(s => {
            let ra = s.ra;
            if (shiftRa && ra < 12) ra += 24;

            s.mappedRa = ra;
            minRa = Math.min(minRa, ra);
            maxRa = Math.max(maxRa, ra);
            minDec = Math.min(minDec, s.dec);
            maxDec = Math.max(maxDec, s.dec);
        });

        // Add padding
        const raSpan = maxRa - minRa || 1;
        const decSpan = maxDec - minDec || 1;
        const padding = 0.2; // 20% padding

        // Mapping function to 0-100 viewBox
        // RA increases to LEFT (East), so we invert X
        // Dec increases to TOP, so we invert Y (SVG 0 is top)

        const mapStar = (star) => {
            // Validate star existence
            if (!star) return { x: 50, y: 50 }; // Fallback

            // Re-apply shift logic if looking up from STARS directly
            let ra = star.ra;
            if (shiftRa && ra < 12) ra += 24;

            // Normalize
            const xPct = (ra - minRa) / raSpan; // 0 to 1 (left to right in value)
            const yPct = (star.dec - minDec) / decSpan; // 0 to 1 (bottom to top)

            // Map to viewBox 10..90 to keep padding
            // X: Invert (higher RA is left). Map 0->90, 1->10
            const x = 90 - (xPct * 80);

            // Y: Invert (higher Dec is top, SVG 0 is top). Map 1->10, 0->90
            const y = 90 - (yPct * 80);

            return { x, y };
        };

        return { mapStar };

    }, [lines]);

    if (!layout) return null;

    return (
        <svg width={size} height={size} viewBox="0 0 100 100" style={{ overflow: "visible" }}>
            {/* Lines */}
            {lines.map((line, i) => {
                const start = STARS[line[0]];
                const end = STARS[line[1]];
                if (!start || !end) return null;

                const p1 = layout.mapStar(start);
                const p2 = layout.mapStar(end);

                return (
                    <line
                        key={i}
                        x1={p1.x} y1={p1.y}
                        x2={p2.x} y2={p2.y}
                        stroke={color}
                        strokeWidth={strokeWidth}
                        opacity={0.6}
                        strokeLinecap="round"
                    />
                );
            })}

            {/* Stars (Nodes) */}
            {Array.from(new Set(lines.flat())).map(starKey => {
                const star = STARS[starKey];
                if (!star) return null;
                const p = layout.mapStar(star);
                // Magnitude scaling: brighter (lower mag) = bigger
                // Mag range roughly -1 to 5.
                // Scale factor: 4 - (mag * 0.5) clamped to min 1.5
                const radius = Math.max(1.5, 4 - (star.mag * 0.6)) * (size / 100);

                return (
                    <circle
                        key={starKey}
                        cx={p.x} cy={p.y}
                        r={radius}
                        fill={color}
                    />
                );
            })}
        </svg>
    );
}
