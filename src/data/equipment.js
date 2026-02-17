/**
 * Equipment Presets for Hoppy
 * 
 * Each preset has a true field of view (TFOV) in degrees,
 * used to calculate "move X view-widths" instructions.
 * FOVs sourced from Cloudy Nights consensus & manufacturer specs.
 */

const EQUIPMENT = [
    {
        id: "binoculars_10x50",
        name: "10×50 Binoculars",
        icon: "🔭",
        fov: 6.5,
        fovLabel: "6.5° field",
        shortName: "binocular widths",
        description: "The classic beginner choice — wide field, easy to use. Perfect for star hopping!",
    },
    {
        id: "dob_8inch",
        name: '8" Dobsonian',
        icon: "🌌",
        fov: 1.5,
        fovLabel: "~1.5° field (25mm EP)",
        shortName: "eyepiece widths",
        description: "The most popular visual telescope. Narrower view — you'll hop in smaller steps.",
    },
    {
        id: "refractor_80mm",
        name: "Small Refractor (80mm)",
        icon: "✨",
        fov: 2.0,
        fovLabel: "~2° field (25mm EP)",
        shortName: "eyepiece widths",
        description: "Portable and sharp. Great for clusters and nebulae.",
    },
    {
        id: "naked_eye",
        name: "Naked Eye / Finder",
        icon: "👁️",
        fov: 5.0,
        fovLabel: "~5° field",
        shortName: "fist-widths",
        description: "Your fist at arm's length ≈ 10°. Use two fingers ≈ 3°. Great for learning the sky!",
    },
];

export default EQUIPMENT;

/**
 * Get equipment by ID
 */
export function getEquipment(id) {
    return EQUIPMENT.find(e => e.id === id) || EQUIPMENT[0];
}

/**
 * Calculate angular distance between two RA/Dec points (in degrees)
 * RA is in hours, Dec is in degrees
 */
export function angularDistance(ra1, dec1, ra2, dec2) {
    const toRad = d => d * Math.PI / 180;
    const ra1Deg = ra1 * 15; // hours to degrees
    const ra2Deg = ra2 * 15;
    const d1 = toRad(dec1);
    const d2 = toRad(dec2);
    const dRA = toRad(ra2Deg - ra1Deg);
    const cosD = Math.sin(d1) * Math.sin(d2) + Math.cos(d1) * Math.cos(d2) * Math.cos(dRA);
    return Math.acos(Math.min(1, Math.max(-1, cosD))) * 180 / Math.PI;
}

/**
 * Calculate cardinal direction from point 1 to point 2
 * Returns a friendly string like "north", "south-southwest"
 */
export function cardinalDirection(ra1, dec1, ra2, dec2) {
    // Convert RA to degrees (RA increases eastward on sky)
    const dRA = (ra2 - ra1) * 15; // degrees
    const dDec = dec2 - dec1;
    // On the sky: positive dRA = east, positive dDec = north
    const angle = Math.atan2(dRA, dDec) * 180 / Math.PI; // 0=N, 90=E

    const dirs = [
        "north", "north-northeast", "northeast", "east-northeast",
        "east", "east-southeast", "southeast", "south-southeast",
        "south", "south-southwest", "southwest", "west-southwest",
        "west", "west-northwest", "northwest", "north-northwest"
    ];
    const idx = Math.round(((angle % 360 + 360) % 360) / 22.5) % 16;
    return dirs[idx];
}

/**
 * Format view-length instruction
 */
export function formatViewLength(distanceDeg, equipment) {
    const views = distanceDeg / equipment.fov;
    if (views < 0.3) return `less than half a ${equipment.shortName.replace(/s$/, '')}`;
    if (views < 0.7) return `about half a ${equipment.shortName.replace(/s$/, '')}`;
    if (views < 1.3) return `about 1 ${equipment.shortName.replace(/s$/, '')}`;
    if (views < 1.7) return `about 1.5 ${equipment.shortName}`;
    return `about ${Math.round(views * 2) / 2} ${equipment.shortName}`;
}
