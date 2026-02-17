/**
 * Constellation stick figures and famous asterisms
 * Star keys reference STARS in stars.js
 */

// Constellation stick figure patterns
// Each entry: { name, lines: [[starA, starB], ...], labelStar }
export const CONSTELLATIONS = [
    // ── ORION ──
    {
        name: "Orion",
        lines: [
            ["betelgeuse", "bellatrix"],
            ["betelgeuse", "mintaka"],
            ["bellatrix", "mintaka"],
            ["mintaka", "alnilam"],
            ["alnilam", "alnitak"],
            ["betelgeuse", "saiph"],      // left side (mirrored on sky)
            ["bellatrix", "rigel"],       // right side
            ["saiph", "alnitak"],
            ["rigel", "alnitak"],
        ],
        labelStar: "alnilam",
    },

    // ── HERCULES ──
    {
        name: "Hercules",
        lines: [
            ["rasalgethi", "kornephoros"],
            ["kornephoros", "zeta_her"],
            ["zeta_her", "eta_her"],
            ["eta_her", "pi_her"],
            ["pi_her", "epsilon_her"],
            ["epsilon_her", "zeta_her"],
            // Keystone: zeta, eta, pi, epsilon
        ],
        labelStar: "kornephoros",
    },

    // ── PEGASUS ──
    {
        name: "Pegasus",
        lines: [
            ["markab", "scheat"],
            ["scheat", "alpheratz"],
            ["alpheratz", "algenib"],
            ["algenib", "markab"],
        ],
        labelStar: "scheat",
    },

    // ── ANDROMEDA ──
    {
        name: "Andromeda",
        lines: [
            ["alpheratz", "mirach"],
            ["mirach", "almach"],
            ["mirach", "mu_and"],
        ],
        labelStar: "mirach",
    },

    // ── LEO ──
    {
        name: "Leo",
        lines: [
            ["regulus", "eta_leo"],
            ["eta_leo", "algieba"],
            ["algieba", "zosma"],
            ["zosma", "denebola"],
            ["denebola", "chertan"],
            ["chertan", "regulus"],
            ["zosma", "chertan"],
        ],
        labelStar: "algieba",
    },

    // ── CASSIOPEIA ──
    {
        name: "Cassiopeia",
        lines: [
            ["caph", "schedar"],
            ["schedar", "gamma_cas"],
            ["gamma_cas", "ruchbah"],
            ["ruchbah", "segin"],
        ],
        labelStar: "gamma_cas",
    },

    // ── PERSEUS ──
    {
        name: "Perseus",
        lines: [
            ["mirfak", "algol"],
            ["mirfak", "eta_per"],
        ],
        labelStar: "mirfak",
    },

    // ── URSA MAJOR ──
    {
        name: "Ursa Major",
        lines: [
            ["dubhe", "merak"],
            ["merak", "phecda"],
            ["phecda", "megrez"],
            ["megrez", "dubhe"],
            ["megrez", "alioth"],
            ["alioth", "mizar"],
            ["mizar", "alkaid"],
        ],
        labelStar: "megrez",
    },

    // ── LYRA ──
    {
        name: "Lyra",
        lines: [
            ["vega", "epsilon_lyr"],
            ["vega", "delta_lyr"],
            ["vega", "sulafat"],
            ["sulafat", "sheliak"],
            ["sheliak", "delta_lyr"],
            ["delta_lyr", "sulafat"],
        ],
        labelStar: "vega",
    },

    // ── CYGNUS ──
    {
        name: "Cygnus",
        lines: [
            ["deneb", "sadr"],
            ["sadr", "albireo"],
            ["sadr", "gienah_cyg"],
            ["sadr", "delta_cyg"],
            ["deneb", "delta_cyg"],
        ],
        labelStar: "sadr",
    },

    // ── AQUILA ──
    {
        name: "Aquila",
        lines: [
            ["altair", "tarazed"],
        ],
        labelStar: "altair",
    },

    // ── SAGITTARIUS ──
    {
        name: "Sagittarius",
        lines: [
            ["kaus_australis", "kaus_media"],
            ["kaus_media", "kaus_borealis"],
            ["kaus_borealis", "phi_sgr"],
            ["phi_sgr", "nunki"],
            ["nunki", "ascella"],
            ["ascella", "kaus_australis"],
            ["kaus_media", "nash"],
            ["nash", "kaus_australis"],
            ["nunki", "phi_sgr"],
            ["kaus_borealis", "lambda_sgr"],
        ],
        labelStar: "kaus_media",
    },

    // ── SCORPIUS ──
    {
        name: "Scorpius",
        lines: [
            ["antares", "dschubba"],
            ["dschubba", "acrab"],
            ["antares", "shaula"],
            ["shaula", "sargas"],
        ],
        labelStar: "antares",
    },

    // ── GEMINI ──
    {
        name: "Gemini",
        lines: [
            ["castor", "pollux"],
            ["castor", "mebsuta"],
            ["mebsuta", "alhena"],
            ["pollux", "wasat"],
            ["wasat", "alhena"],
        ],
        labelStar: "castor",
    },

    // ── TAURUS ──
    {
        name: "Taurus",
        lines: [
            ["aldebaran", "elnath"],
            ["aldebaran", "zeta_tau"],
            ["elnath", "zeta_tau"],
        ],
        labelStar: "aldebaran",
    },

    // ── AURIGA ──
    {
        name: "Auriga",
        lines: [
            ["capella", "menkalinan"],
            ["menkalinan", "theta_aur"],
            ["theta_aur", "iota_aur"],
            ["iota_aur", "capella"],
        ],
        labelStar: "capella",
    },

    // ── CANIS MAJOR ──
    {
        name: "Canis Major",
        lines: [
            ["sirius", "mirzam"],
            ["sirius", "adhara"],
            ["adhara", "wezen"],
            ["wezen", "aludra"],
        ],
        labelStar: "sirius",
    },

    // ── VIRGO ──
    {
        name: "Virgo",
        lines: [
            ["spica", "porrima"],
            ["porrima", "vindemiatrix"],
        ],
        labelStar: "spica",
    },

    // ── CANES VENATICI ──
    {
        name: "Canes Venatici",
        lines: [
            ["cor_caroli", "chara"],
        ],
        labelStar: "cor_caroli",
    },

    // ── DRACO (partial) ──
    {
        name: "Draco",
        lines: [
            ["eltanin", "rastaban"],
        ],
        labelStar: "eltanin",
    },
];

// ═══════════════════════════════════════════
// FAMOUS ASTERISMS
// ═══════════════════════════════════════════
export const ASTERISMS = [
    {
        name: "Big Dipper",
        stars: ["dubhe", "merak", "phecda", "megrez", "alioth", "mizar", "alkaid"],
        lines: [
            ["dubhe", "merak"], ["merak", "phecda"], ["phecda", "megrez"],
            ["megrez", "dubhe"], ["megrez", "alioth"], ["alioth", "mizar"],
            ["mizar", "alkaid"],
        ],
        labelStar: "megrez",
    },
    {
        name: "Summer Triangle",
        stars: ["vega", "deneb", "altair"],
        lines: [
            ["vega", "deneb"], ["deneb", "altair"], ["altair", "vega"],
        ],
        labelStar: "vega",
    },
    {
        name: "Winter Hexagon",
        stars: ["sirius", "rigel", "aldebaran", "capella", "pollux", "procyon"],
        lines: [
            ["sirius", "rigel"], ["rigel", "aldebaran"], ["aldebaran", "capella"],
            ["capella", "pollux"], ["pollux", "procyon"], ["procyon", "sirius"],
        ],
        labelStar: "capella",
    },
    {
        name: "Orion's Belt",
        stars: ["mintaka", "alnilam", "alnitak"],
        lines: [
            ["mintaka", "alnilam"], ["alnilam", "alnitak"],
        ],
        labelStar: "alnilam",
    },
    {
        name: "Teapot",
        stars: ["kaus_australis", "kaus_media", "kaus_borealis", "phi_sgr", "nunki", "ascella", "nash", "lambda_sgr"],
        lines: [
            ["kaus_australis", "kaus_media"], ["kaus_media", "kaus_borealis"],
            ["kaus_borealis", "phi_sgr"], ["phi_sgr", "nunki"],
            ["nunki", "ascella"], ["ascella", "kaus_australis"],
            ["kaus_media", "nash"], ["nash", "kaus_australis"],
        ],
        labelStar: "kaus_media",
    },
    {
        name: "Great Square",
        stars: ["markab", "scheat", "alpheratz", "algenib"],
        lines: [
            ["markab", "scheat"], ["scheat", "alpheratz"],
            ["alpheratz", "algenib"], ["algenib", "markab"],
        ],
        labelStar: "scheat",
    },
    {
        name: "Keystone",
        stars: ["eta_her", "pi_her", "epsilon_her", "zeta_her"],
        lines: [
            ["eta_her", "pi_her"], ["pi_her", "epsilon_her"],
            ["epsilon_her", "zeta_her"], ["zeta_her", "eta_her"],
        ],
        labelStar: "zeta_her",
    },
    {
        name: "Northern Cross",
        stars: ["deneb", "sadr", "albireo", "gienah_cyg", "delta_cyg"],
        lines: [
            ["deneb", "sadr"], ["sadr", "albireo"],
            ["gienah_cyg", "sadr"], ["sadr", "delta_cyg"],
        ],
        labelStar: "sadr",
    },
];

// We also need procyon for Winter Hexagon — it may not be in stars.js yet
