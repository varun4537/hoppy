/**
 * Hop Sequences for Hoppy
 * 
 * Hand-crafted sequences for the original 5 showcase objects,
 * plus auto-generated sequences for the remaining 50 Messier objects.
 * 
 * Each hop has steps with: center, zoom, highlight, connectStars, arrows, title, instruction
 */

import { STARS, DSOs } from "./stars";

// ═══════════════════════════════════════════════════════════════
// HAND-CRAFTED SEQUENCES — the 5 original showcase hops
// ═══════════════════════════════════════════════════════════════

const HAND_CRAFTED = {
    M42: {
        id: "M42", name: "Orion Nebula", subtitle: "The easiest star hop for beginners",
        constellation: "Orion", difficulty: 1,
        steps: [
            {
                center: [5.6, -1.0], zoom: 1, highlight: ["betelgeuse", "rigel", "bellatrix", "mintaka", "alnilam", "alnitak", "saiph"],
                connectStars: [["betelgeuse", "bellatrix"], ["bellatrix", "mintaka"], ["mintaka", "alnilam"], ["alnilam", "alnitak"], ["alnitak", "saiph"], ["saiph", "rigel"], ["rigel", "mintaka"], ["betelgeuse", "alnitak"]],
                arrows: [], title: "Find Orion", instruction: "Look for Orion — one of the most recognisable constellations. The three bright stars in a row form Orion's Belt."
            },
            {
                center: [5.6, -1.0], zoom: 1.5, highlight: ["mintaka", "alnilam", "alnitak"],
                connectStars: [["mintaka", "alnilam"], ["alnilam", "alnitak"]],
                arrows: [], title: "Focus on the Belt", instruction: "Zero in on Orion's Belt — three stars lined up almost perfectly: Mintaka, Alnilam, and Alnitak."
            },
            {
                center: [5.62, -3.5], zoom: 2.5, highlight: ["alnitak", "iota_ori", "theta1OriC"],
                connectStars: [], arrows: [["alnitak", "theta1OriC"]],
                title: "Drop Down to the Sword", instruction: "From Alnitak (leftmost belt star), look straight down. A small line of fainter stars hangs below — this is Orion's Sword."
            },
            {
                center: [5.588, -5.39], zoom: 4, highlight: ["theta1OriC"], connectStars: [], arrows: [],
                title: "🎉 You found M42!", instruction: "The fuzzy 'star' in the middle of the Sword isn't a star — it's the Orion Nebula! Through binoculars you'll see a glowing cloud of gas.", isTarget: true
            },
        ],
    },

    M13: {
        id: "M13", name: "Great Globular Cluster", subtitle: "Find it in the Keystone of Hercules",
        constellation: "Hercules", difficulty: 2,
        steps: [
            {
                center: [17.0, 33.0], zoom: 1, highlight: ["eta_her", "zeta_her", "epsilon_her", "pi_her"],
                connectStars: [["eta_her", "zeta_her"], ["zeta_her", "epsilon_her"], ["epsilon_her", "pi_her"], ["pi_her", "eta_her"]],
                arrows: [], title: "Find the Keystone", instruction: "Look for the Keystone — a lopsided square in Hercules, high overhead in summer."
            },
            {
                center: [16.7, 37.0], zoom: 2, highlight: ["eta_her", "zeta_her"],
                connectStars: [["eta_her", "zeta_her"]], arrows: [],
                title: "Western Side", instruction: "Find η Her at the top and ζ Her below on the western (right) side of the Keystone."
            },
            {
                center: [16.7, 37.5], zoom: 3.5, highlight: ["eta_her", "zeta_her"],
                connectStars: [["eta_her", "zeta_her"]], arrows: [["eta_her", "M13_target"]],
                title: "One-Third Down from η", instruction: "From η Her, look one-third of the way toward ζ Her. M13 sits just to the west."
            },
            {
                center: [16.695, 36.462], zoom: 5, highlight: [], connectStars: [], arrows: [],
                title: "🎉 You found M13!", instruction: "That faint fuzzy spot is M13 — a ball of 300,000 stars! In binoculars it's a glowing cotton ball.", isTarget: true
            },
        ],
    },

    M31: {
        id: "M31", name: "Andromeda Galaxy", subtitle: "Our nearest galactic neighbour",
        constellation: "Andromeda", difficulty: 2,
        steps: [
            {
                center: [23.5, 22.0], zoom: 0.8, highlight: ["markab", "scheat", "algenib", "alpheratz"],
                connectStars: [["markab", "scheat"], ["scheat", "alpheratz"], ["alpheratz", "algenib"], ["algenib", "markab"]],
                arrows: [], title: "Find the Great Square", instruction: "Start with the Great Square of Pegasus — four bright stars forming a large square."
            },
            {
                center: [0.5, 33.0], zoom: 1.5, highlight: ["alpheratz", "mirach"],
                connectStars: [["alpheratz", "mirach"]], arrows: [["alpheratz", "mirach"]],
                title: "Hop to Mirach", instruction: "From Alpheratz (top-left of the Square), hop northeast to Mirach — a bright, slightly orange star."
            },
            {
                center: [0.9, 38.0], zoom: 2.5, highlight: ["mirach", "mu_and"],
                connectStars: [], arrows: [["mirach", "mu_and"]],
                title: "Turn North to μ And", instruction: "From Mirach, make a sharp right turn north to the fainter μ Andromedae."
            },
            {
                center: [0.712, 41.269], zoom: 4, highlight: ["mu_and"],
                connectStars: [], arrows: [["mu_and", "M31_target"]],
                title: "🎉 You found M31!", instruction: "Continue past μ And and you'll see a faint elongated smudge — M31, 2.5 million light-years away!", isTarget: true
            },
        ],
    },

    M44: {
        id: "M44", name: "Beehive Cluster", subtitle: "A swarm of stars in Cancer",
        constellation: "Cancer", difficulty: 3,
        steps: [
            {
                center: [10.0, 17.0], zoom: 0.8, highlight: ["regulus", "algieba", "eta_leo", "denebola", "zosma"],
                connectStars: [["regulus", "eta_leo"], ["eta_leo", "algieba"], ["algieba", "zosma"], ["zosma", "denebola"]],
                arrows: [], title: "Find Leo's Sickle", instruction: "Start with Leo — the backwards question mark (the Sickle) with bright Regulus at its base."
            },
            {
                center: [9.5, 19.0], zoom: 1.2, highlight: ["regulus", "eta_leo"],
                connectStars: [], arrows: [["regulus", "asellus_borealis"]],
                title: "Look West of Leo", instruction: "From Regulus, look westward (right). Cancer sits between Leo and Gemini — no bright stars."
            },
            {
                center: [8.75, 20.0], zoom: 2.5, highlight: ["asellus_borealis", "asellus_australis"],
                connectStars: [], arrows: [],
                title: "Find the Donkey Stars", instruction: "Look for Asellus Borealis and Australis (the donkeys). M44 sits right between them."
            },
            {
                center: [8.668, 19.983], zoom: 4, highlight: [], connectStars: [], arrows: [],
                title: "🎉 You found M44!", instruction: "That hazy patch between the donkeys is M44 — the Beehive! Through binoculars, dozens of individual stars.", isTarget: true
            },
        ],
    },

    NGC869: {
        id: "NGC869", name: "Double Cluster", subtitle: "A pair of dazzling star clusters",
        constellation: "Perseus", difficulty: 2,
        steps: [
            {
                center: [1.0, 60.0], zoom: 0.8, highlight: ["schedar", "caph", "gamma_cas", "ruchbah", "segin"],
                connectStars: [["caph", "schedar"], ["schedar", "gamma_cas"], ["gamma_cas", "ruchbah"], ["ruchbah", "segin"]],
                arrows: [], title: "Find Cassiopeia's W", instruction: "Find Cassiopeia's W (or M) near the North Star — visible year-round."
            },
            {
                center: [1.3, 60.0], zoom: 1.5, highlight: ["ruchbah", "segin"],
                connectStars: [["ruchbah", "segin"]], arrows: [],
                title: "The Deeper V", instruction: "The two rightmost stars: Ruchbah (δ) and Segin (ε) point the way."
            },
            {
                center: [2.2, 57.5], zoom: 2.5, highlight: ["segin", "eta_per"],
                connectStars: [], arrows: [["segin", "eta_per"]],
                title: "Follow the Pointer", instruction: "Extend the line from Ruchbah through Segin the same distance. Look between Cassiopeia and Perseus."
            },
            {
                center: [2.319, 57.133], zoom: 4, highlight: [], connectStars: [], arrows: [],
                title: "🎉 You found the Double Cluster!", instruction: "Two dense swarms of young hot stars side by side — spectacular in binoculars!", isTarget: true
            },
        ],
    },
};


// ═══════════════════════════════════════════════════════════════
// HOP PATH DEFINITIONS for remaining objects
// Each entry maps to a DSO key and defines: 
//   guideStars — stars to highlight in the wide view
//   constellationLines — connections to draw
//   startStar — the bright star to begin from
//   hopStars — intermediate stars leading to the target
//   startInstruction — what to tell the user at the beginning
//   hopInstruction — what to say during the hop
// ═══════════════════════════════════════════════════════════════

const HOP_PATHS = {
    // === SAGITTARIUS ===
    M8: {
        guideStars: ["kaus_australis", "kaus_media", "kaus_borealis", "nunki", "nash", "ascella"],
        lines: [["nash", "kaus_australis"], ["kaus_australis", "kaus_media"], ["kaus_media", "kaus_borealis"], ["kaus_borealis", "nunki"], ["nunki", "ascella"], ["ascella", "kaus_australis"]],
        startStar: "kaus_borealis", hopStars: [], startZoom: 0.8,
        startInstruction: "Find the Teapot asterism in Sagittarius — six stars forming a teapot shape low in the south.",
        hopInstruction: "From the top of the Teapot (Kaus Borealis), look about 5° northwest."
    },
    M17: {
        guideStars: ["kaus_borealis", "mu_sgr"],
        lines: [["kaus_borealis", "mu_sgr"]],
        startStar: "mu_sgr", hopStars: [], startZoom: 1,
        startInstruction: "Start from the Teapot's lid (Kaus Borealis) in Sagittarius.",
        hopInstruction: "From μ Sgr, look about 2° south-southwest."
    },
    M20: {
        guideStars: ["kaus_australis", "kaus_media", "kaus_borealis", "nash"],
        lines: [["nash", "kaus_australis"], ["kaus_australis", "kaus_media"], ["kaus_media", "kaus_borealis"]],
        startStar: "kaus_borealis", hopStars: [], startZoom: 0.8,
        startInstruction: "Find the Teapot in Sagittarius.",
        hopInstruction: "The Trifid sits north of M8 (Lagoon) — look 5° northwest of the Teapot's lid."
    },
    M22: {
        guideStars: ["kaus_borealis", "nunki", "ascella"],
        lines: [["kaus_borealis", "nunki"], ["nunki", "ascella"]],
        startStar: "kaus_borealis", hopStars: [], startZoom: 1,
        startInstruction: "Start at the Teapot's lid (Kaus Borealis).",
        hopInstruction: "M22 is just 2.5° northeast of Kaus Borealis — one of the easiest globulars to find."
    },
    M24: {
        guideStars: ["kaus_borealis", "mu_sgr"],
        lines: [["kaus_borealis", "mu_sgr"]],
        startStar: "mu_sgr", hopStars: [], startZoom: 1,
        startInstruction: "Start at the top of the Sagittarius Teapot.",
        hopInstruction: "Look north from μ Sgr — the Star Cloud is a dense patch of Milky Way you can't miss."
    },
    M25: {
        guideStars: ["kaus_borealis", "mu_sgr"],
        lines: [["kaus_borealis", "mu_sgr"]],
        startStar: "mu_sgr", hopStars: [], startZoom: 1,
        startInstruction: "Start at the Sagittarius Teapot region.",
        hopInstruction: "M25 is about 3° north-northeast of M24 (the Star Cloud)."
    },
    M28: {
        guideStars: ["kaus_borealis"],
        lines: [],
        startStar: "kaus_borealis", hopStars: [], startZoom: 1.5,
        startInstruction: "Find Kaus Borealis — the top of the Teapot's lid.",
        hopInstruction: "M28 is less than 1° northwest of Kaus Borealis — very close!"
    },

    // === SCORPIUS ===
    M4: {
        guideStars: ["antares", "dschubba", "acrab"],
        lines: [["acrab", "dschubba"], ["dschubba", "antares"]],
        startStar: "antares", hopStars: [], startZoom: 1,
        startInstruction: "Find Antares — the brilliant red heart of Scorpius.",
        hopInstruction: "M4 is just 1.3° west of Antares — one of the easiest globulars to find!"
    },
    M6: {
        guideStars: ["shaula", "sargas", "antares"],
        lines: [["antares", "shaula"]],
        startStar: "shaula", hopStars: [], startZoom: 0.8,
        startInstruction: "Find the Scorpion's tail — Shaula marks the stinger.",
        hopInstruction: "From Shaula, look about 5° north for a butterfly-shaped group of stars."
    },
    M7: {
        guideStars: ["shaula", "sargas"],
        lines: [["shaula", "sargas"]],
        startStar: "shaula", hopStars: [], startZoom: 0.8,
        startInstruction: "Start at Shaula, the bright star at Scorpius's stinger.",
        hopInstruction: "Look about 4° northeast of Shaula — M7 is bright and obvious."
    },
    M80: {
        guideStars: ["antares", "dschubba", "acrab"],
        lines: [["acrab", "dschubba"], ["dschubba", "antares"]],
        startStar: "antares", hopStars: ["dschubba"], startZoom: 1,
        startInstruction: "Find Antares in Scorpius.",
        hopInstruction: "M80 is halfway between Antares and Dschubba (δ Sco) — look for a faint fuzzy spot."
    },

    // === OPHIUCHUS / SERPENS ===
    M5: {
        guideStars: ["unukalhai", "arcturus"],
        lines: [],
        startStar: "unukalhai", hopStars: [], startZoom: 1,
        startInstruction: "Find Unukalhai (α Serpentis) — the brightest star in Serpens Caput.",
        hopInstruction: "M5 is about 8° southwest of Unukalhai — a glorious globular rival to M13."
    },
    M10: {
        guideStars: ["rasalhague", "cebalrai", "eta_oph"],
        lines: [["rasalhague", "cebalrai"]],
        startStar: "cebalrai", hopStars: [], startZoom: 1,
        startInstruction: "Find Ophiuchus — the large constellation between Hercules and Scorpius.",
        hopInstruction: "M10 sits in central Ophiuchus, about 8° south of its head star Rasalhague."
    },
    M12: {
        guideStars: ["rasalhague", "cebalrai"],
        lines: [["rasalhague", "cebalrai"]],
        startStar: "cebalrai", hopStars: [], startZoom: 1,
        startInstruction: "Start in central Ophiuchus.",
        hopInstruction: "M12 is about 3° northwest of M10 — observe them as a pair!"
    },
    M16: {
        guideStars: ["kaus_borealis", "mu_sgr", "eta_oph"],
        lines: [],
        startStar: "mu_sgr", hopStars: [], startZoom: 0.8,
        startInstruction: "Start from the northern Sagittarius region.",
        hopInstruction: "M16 (Eagle Nebula) sits in Serpens Cauda — home of the Pillars of Creation."
    },
    M9: {
        guideStars: ["eta_oph", "antares"],
        lines: [],
        startStar: "eta_oph", hopStars: [], startZoom: 1,
        startInstruction: "Start from η Ophiuchi.",
        hopInstruction: "M9 is about 3° southeast of η Oph."
    },
    M19: {
        guideStars: ["antares", "eta_oph"],
        lines: [],
        startStar: "antares", hopStars: [], startZoom: 1,
        startInstruction: "Find Antares in Scorpius.",
        hopInstruction: "M19 is about 7° east of Antares."
    },
    M62: {
        guideStars: ["antares", "eta_oph"],
        lines: [],
        startStar: "antares", hopStars: [], startZoom: 0.8,
        startInstruction: "Start from Antares.",
        hopInstruction: "M62 is about 7.5° south-southeast of Antares."
    },

    // === LYRA / VULPECULA / SAGITTA ===
    M57: {
        guideStars: ["vega", "sheliak", "sulafat"],
        lines: [["vega", "sheliak"], ["sheliak", "sulafat"]],
        startStar: "sheliak", hopStars: ["sulafat"], startZoom: 1.5,
        startInstruction: "Start at Vega — the brilliant blue-white star overhead in summer.",
        hopInstruction: "M57 (Ring Nebula) sits exactly between Sheliak (β) and Sulafat (γ) in Lyra."
    },
    M56: {
        guideStars: ["sulafat", "albireo"],
        lines: [["sulafat", "albireo"]],
        startStar: "sulafat", hopStars: ["albireo"], startZoom: 1,
        startInstruction: "Start at Sulafat in Lyra.",
        hopInstruction: "M56 is about halfway between Sulafat and Albireo (β Cygni)."
    },
    M27: {
        guideStars: ["gamma_sge", "alpha_sge", "altair"],
        lines: [["alpha_sge", "gamma_sge"]],
        startStar: "gamma_sge", hopStars: [], startZoom: 1,
        startInstruction: "Find the tiny arrow of Sagitta, north of Altair.",
        hopInstruction: "From γ Sagitta, look about 3° north into Vulpecula — that's the Dumbbell Nebula."
    },
    M71: {
        guideStars: ["gamma_sge", "alpha_sge"],
        lines: [["alpha_sge", "gamma_sge"]],
        startStar: "gamma_sge", hopStars: ["alpha_sge"], startZoom: 1.5,
        startInstruction: "Find Sagitta — the Arrow constellation.",
        hopInstruction: "M71 sits right in the middle of Sagitta's arrow shaft."
    },

    // === URSA MAJOR / CANES VENATICI ===
    M81: {
        guideStars: ["dubhe", "merak", "phecda", "megrez", "alioth", "mizar", "alkaid"],
        lines: [["dubhe", "merak"], ["merak", "phecda"], ["phecda", "megrez"], ["megrez", "alioth"], ["alioth", "mizar"], ["mizar", "alkaid"]],
        startStar: "dubhe", hopStars: [], startZoom: 0.7,
        startInstruction: "Start at the Big Dipper — one of the most familiar star patterns.",
        hopInstruction: "Draw a diagonal from Phecda through Dubhe and continue the same distance — M81 and M82 are there together."
    },
    M82: {
        guideStars: ["dubhe", "phecda"],
        lines: [["dubhe", "phecda"]],
        startStar: "dubhe", hopStars: [], startZoom: 0.8,
        startInstruction: "Start at Dubhe in the Big Dipper.",
        hopInstruction: "M82 (Cigar Galaxy) is right next to M81 — look for a thin streak beside the round glow."
    },
    M97: {
        guideStars: ["merak", "phecda", "dubhe"],
        lines: [["merak", "phecda"], ["phecda", "dubhe"], ["dubhe", "merak"]],
        startStar: "merak", hopStars: [], startZoom: 1.5,
        startInstruction: "Find the bottom of the Big Dipper's bowl — Merak and Phecda.",
        hopInstruction: "M97 (Owl Nebula) sits about 2.5° southeast of Merak."
    },
    M101: {
        guideStars: ["mizar", "alkaid"],
        lines: [["mizar", "alkaid"]],
        startStar: "mizar", hopStars: ["alkaid"], startZoom: 1,
        startInstruction: "Start at the handle of the Big Dipper — Mizar and Alkaid.",
        hopInstruction: "Form an equilateral triangle with Mizar and Alkaid — M101 is at the third point, north."
    },
    M108: {
        guideStars: ["merak", "phecda"],
        lines: [["merak", "phecda"]],
        startStar: "merak", hopStars: [], startZoom: 1.5,
        startInstruction: "Start at Merak in the Big Dipper's bowl.",
        hopInstruction: "M108 is very near M97 (Owl Nebula) — just 1.5° southeast of Merak."
    },
    M109: {
        guideStars: ["phecda", "megrez"],
        lines: [["phecda", "megrez"]],
        startStar: "phecda", hopStars: [], startZoom: 1.5,
        startInstruction: "Start at Phecda in the Big Dipper.",
        hopInstruction: "M109 is just under 1° east-southeast of Phecda."
    },
    M51: {
        guideStars: ["alkaid", "mizar", "cor_caroli"],
        lines: [["mizar", "alkaid"]],
        startStar: "alkaid", hopStars: [], startZoom: 1,
        startInstruction: "Start at Alkaid, the tip of the Big Dipper's handle.",
        hopInstruction: "M51 (Whirlpool) is about 3.5° southwest of Alkaid — look toward Cor Caroli."
    },
    M63: {
        guideStars: ["cor_caroli", "alkaid"],
        lines: [],
        startStar: "cor_caroli", hopStars: [], startZoom: 1,
        startInstruction: "Find Cor Caroli — the brightest star in Canes Venatici.",
        hopInstruction: "M63 (Sunflower Galaxy) is about 5° north-northeast of Cor Caroli."
    },
    M94: {
        guideStars: ["cor_caroli", "chara"],
        lines: [["cor_caroli", "chara"]],
        startStar: "cor_caroli", hopStars: ["chara"], startZoom: 1.5,
        startInstruction: "Find Cor Caroli in Canes Venatici.",
        hopInstruction: "M94 sits about halfway between Cor Caroli and Chara, slightly north."
    },
    M106: {
        guideStars: ["phecda", "chara"],
        lines: [],
        startStar: "chara", hopStars: [], startZoom: 1,
        startInstruction: "Start at Chara (β CVn).",
        hopInstruction: "M106 is about 4° south of Phecda, near the Dipper/CVn border."
    },
    M3: {
        guideStars: ["arcturus", "cor_caroli"],
        lines: [],
        startStar: "arcturus", hopStars: ["cor_caroli"], startZoom: 0.7,
        startInstruction: "Find Arcturus — the brilliant orange star in Boötes.",
        hopInstruction: "M3 is about halfway between Arcturus and Cor Caroli."
    },

    // === COMA BERENICES / VIRGO ===
    M53: {
        guideStars: ["diadem", "arcturus"],
        lines: [],
        startStar: "diadem", hopStars: [], startZoom: 1.5,
        startInstruction: "Find Diadem (α Com) in Coma Berenices.",
        hopInstruction: "M53 is only about 1° northeast of Diadem — very close!"
    },
    M64: {
        guideStars: ["diadem", "vindemiatrix"],
        lines: [],
        startStar: "diadem", hopStars: [], startZoom: 1.5,
        startInstruction: "Start at Diadem in Coma Berenices.",
        hopInstruction: "M64 (Black Eye Galaxy) is about 5° northeast of Diadem."
    },
    M85: {
        guideStars: ["denebola", "vindemiatrix"],
        lines: [["denebola", "vindemiatrix"]],
        startStar: "denebola", hopStars: [], startZoom: 0.8,
        startInstruction: "Find Denebola (the tail of Leo) and Vindemiatrix (ε Vir).",
        hopInstruction: "M85 sits between Denebola and Vindemiatrix — the northern edge of the Virgo Cluster."
    },
    M49: {
        guideStars: ["vindemiatrix", "denebola"],
        lines: [],
        startStar: "vindemiatrix", hopStars: [], startZoom: 1,
        startInstruction: "Start from Vindemiatrix (ε Vir).",
        hopInstruction: "M49 is about 4° south-southwest of Vindemiatrix."
    },
    M87: {
        guideStars: ["vindemiatrix", "denebola"],
        lines: [["vindemiatrix", "denebola"]],
        startStar: "vindemiatrix", hopStars: [], startZoom: 1,
        startInstruction: "Find the area between Leo and Virgo.",
        hopInstruction: "M87 (Virgo A) sits in the heart of the Virgo Cluster — midway between Denebola and Vindemiatrix."
    },
    M104: {
        guideStars: ["spica", "porrima"],
        lines: [],
        startStar: "spica", hopStars: ["porrima"], startZoom: 0.8,
        startInstruction: "Start from Spica — the brightest star in Virgo.",
        hopInstruction: "M104 (Sombrero) is about 11° west of Spica — form a triangle with Spica and Porrima."
    },

    // === GEMINI / AURIGA ===
    M35: {
        guideStars: ["castor", "pollux", "alhena", "mebsuta", "wasat"],
        lines: [["castor", "pollux"], ["castor", "mebsuta"], ["pollux", "wasat"], ["wasat", "alhena"]],
        startStar: "castor", hopStars: [], startZoom: 0.8,
        startInstruction: "Find the twin stars Castor and Pollux — the heads of the Gemini twins.",
        hopInstruction: "From Castor, look west (right) to the 'foot' of Gemini — M35 is at the tip."
    },
    M36: {
        guideStars: ["capella", "menkalinan", "theta_aur", "iota_aur", "elnath"],
        lines: [["capella", "menkalinan"], ["menkalinan", "theta_aur"], ["theta_aur", "iota_aur"], ["iota_aur", "capella"]],
        startStar: "theta_aur", hopStars: [], startZoom: 0.8,
        startInstruction: "Find the pentagon of Auriga with brilliant Capella.",
        hopInstruction: "The three Auriga clusters (M36, M37, M38) sit in a line between θ Aur and Elnath."
    },
    M37: {
        guideStars: ["theta_aur", "elnath"],
        lines: [["theta_aur", "elnath"]],
        startStar: "theta_aur", hopStars: ["elnath"], startZoom: 1,
        startInstruction: "Start at θ Aurigae.",
        hopInstruction: "M37 is the middle and richest of the three Auriga clusters, roughly between θ Aur and Elnath."
    },
    M38: {
        guideStars: ["theta_aur", "iota_aur"],
        lines: [["theta_aur", "iota_aur"]],
        startStar: "theta_aur", hopStars: [], startZoom: 1,
        startInstruction: "Start at θ Aurigae.",
        hopInstruction: "M38 is about 2.5° northwest of θ Aur — the westernmost of the three Auriga clusters."
    },

    // === TAURUS ===
    M1: {
        guideStars: ["zeta_tau", "elnath", "aldebaran"],
        lines: [["aldebaran", "zeta_tau"], ["zeta_tau", "elnath"]],
        startStar: "zeta_tau", hopStars: [], startZoom: 1,
        startInstruction: "Find ζ Tauri — the southern horn tip of Taurus the Bull.",
        hopInstruction: "M1 (Crab Nebula) is just 1° northwest of ζ Tau — the remnant of a 1054 AD supernova."
    },
    M45: {
        guideStars: ["aldebaran", "alcyone"],
        lines: [],
        startStar: "aldebaran", hopStars: ["alcyone"], startZoom: 0.7,
        startInstruction: "Find Aldebaran — the bright orange eye of Taurus.",
        hopInstruction: "Look about 14° northwest of Aldebaran for a tight cluster of bright blue stars — the Pleiades! You can't miss them."
    },

    // === PUPPIS / MONOCEROS / CANIS MAJOR ===
    M46: {
        guideStars: ["sirius", "mirzam", "wezen", "aludra"],
        lines: [["sirius", "mirzam"], ["sirius", "wezen"]],
        startStar: "sirius", hopStars: [], startZoom: 0.7,
        startInstruction: "Start from Sirius — the brightest star in the entire sky.",
        hopInstruction: "M46 is about 14° east of Sirius in Puppis."
    },
    M47: {
        guideStars: ["sirius"],
        lines: [],
        startStar: "sirius", hopStars: [], startZoom: 0.8,
        startInstruction: "Start from Sirius.",
        hopInstruction: "M47 is about 1° west of M46 — they make a fine pair in binoculars!"
    },
    M50: {
        guideStars: ["sirius", "alpha_mon"],
        lines: [],
        startStar: "sirius", hopStars: [], startZoom: 0.8,
        startInstruction: "Start from Sirius.",
        hopInstruction: "M50 is about 10° northeast of Sirius in Monoceros."
    },
    M41: {
        guideStars: ["sirius", "mirzam", "adhara", "wezen"],
        lines: [["sirius", "mirzam"], ["sirius", "adhara"], ["adhara", "wezen"]],
        startStar: "sirius", hopStars: [], startZoom: 1,
        startInstruction: "Start at Sirius — it's unmissable!",
        hopInstruction: "M41 is just 4° south of Sirius — drop straight down."
    },

    // === HYDRA ===
    M48: {
        guideStars: ["alphard"],
        lines: [],
        startStar: "alphard", hopStars: [], startZoom: 0.8,
        startInstruction: "Find Alphard — the lonely bright star in Hydra.",
        hopInstruction: "M48 is about 14° west-northwest of Alphard."
    },
    M83: {
        guideStars: ["gamma_hya", "spica"],
        lines: [],
        startStar: "gamma_hya", hopStars: [], startZoom: 0.8,
        startInstruction: "Find γ Hydrae in the southern sky.",
        hopInstruction: "M83 (Southern Pinwheel) is about 6° south of γ Hya."
    },
    M68: {
        guideStars: ["gamma_hya", "spica"],
        lines: [],
        startStar: "gamma_hya", hopStars: [], startZoom: 1,
        startInstruction: "Start from γ Hydrae.",
        hopInstruction: "M68 is about 3.5° south-southeast of γ Hya — look for a faint fuzzy glow."
    },

    // === TRIANGULUM / PISCES ===
    M33: {
        guideStars: ["mirach", "alpheratz", "beta_tri", "alpha_tri"],
        lines: [["beta_tri", "alpha_tri"]],
        startStar: "mirach", hopStars: ["beta_tri"], startZoom: 0.8,
        startInstruction: "Start from Mirach in Andromeda (same route as M31).",
        hopInstruction: "Instead of going north to M31, go about 7° west to the Triangulum constellation."
    },
    M74: {
        guideStars: ["eta_psc", "algenib"],
        lines: [],
        startStar: "eta_psc", hopStars: [], startZoom: 1,
        startInstruction: "Find η Piscium — one of the brighter stars in Pisces.",
        hopInstruction: "M74 is about 1.5° east-northeast of η Psc — but be warned, this is one of the hardest Messier objects!"
    },

    // === CYGNUS ===
    M29: {
        guideStars: ["deneb", "sadr", "gienah_cyg", "albireo", "delta_cyg"],
        lines: [["deneb", "sadr"], ["sadr", "albireo"], ["sadr", "gienah_cyg"], ["deneb", "delta_cyg"]],
        startStar: "sadr", hopStars: [], startZoom: 1,
        startInstruction: "Find Sadr — the star at the centre of Cygnus's cross.",
        hopInstruction: "M29 is less than 2° south-southeast of Sadr — very close!"
    },
    M39: {
        guideStars: ["deneb", "sadr"],
        lines: [["deneb", "sadr"]],
        startStar: "deneb", hopStars: [], startZoom: 0.8,
        startInstruction: "Start from Deneb — the brilliant tail star of Cygnus.",
        hopInstruction: "M39 is about 9° east-northeast of Deneb."
    },

    // === SCUTUM ===
    M11: {
        guideStars: ["altair", "tarazed", "alpha_sct"],
        lines: [["altair", "tarazed"]],
        startStar: "altair", hopStars: ["alpha_sct"], startZoom: 0.8,
        startInstruction: "Start from Altair — the bright star in Aquila.",
        hopInstruction: "Look about 8° south-southwest of Altair into Scutum to find M11 (Wild Duck Cluster)."
    },

    // === AQUARIUS / CAPRICORNUS / PEGASUS ===
    M2: {
        guideStars: ["markab", "scheat"],
        lines: [["markab", "scheat"]],
        startStar: "markab", hopStars: [], startZoom: 0.8,
        startInstruction: "Start from the Great Square of Pegasus.",
        hopInstruction: "From Markab, look about 13° south for M2 in Aquarius."
    },
    M72: {
        guideStars: ["markab", "diphda"],
        lines: [],
        startStar: "markab", hopStars: [], startZoom: 0.7,
        startInstruction: "Start from Markab in Pegasus.",
        hopInstruction: "M72 is in a barren region of Aquarius — a challenge to find!"
    },
    M30: {
        guideStars: ["diphda", "markab"],
        lines: [],
        startStar: "diphda", hopStars: [], startZoom: 0.8,
        startInstruction: "Find Diphda (β Ceti).",
        hopInstruction: "M30 is about 3° east of 41 Cap — look south of the Capricornus area."
    },
    M15: {
        guideStars: ["markab", "scheat", "algenib"],
        lines: [["markab", "scheat"]],
        startStar: "markab", hopStars: [], startZoom: 1,
        startInstruction: "Start from Markab — the southwest corner of the Great Square.",
        hopInstruction: "M15 is about 4° northwest of Markab — a compact, brilliant globular."
    },
};


// ═══════════════════════════════════════════════════════════════
// AUTO-GENERATE SEQUENCES from HOP_PATHS
// ═══════════════════════════════════════════════════════════════

function generateHop(dsoKey) {
    const dso = DSOs[dsoKey];
    const path = HOP_PATHS[dsoKey];
    if (!dso || !path) return null;

    const diff = dso.difficulty || 3;
    const startStarData = STARS[path.startStar];
    const startCenter = startStarData
        ? [startStarData.ra, startStarData.dec]
        : [dso.ra, dso.dec];

    const steps = [];

    // Step 1: Wide view with guide stars
    steps.push({
        center: startCenter,
        zoom: path.startZoom || 1,
        highlight: path.guideStars,
        connectStars: path.lines || [],
        arrows: [],
        title: `Locate ${dso.constellation}`,
        instruction: path.startInstruction,
    });

    // Step 2: Focus + hop arrow
    const hopTarget = path.hopStars.length > 0 ? path.hopStars[0] : null;
    const arrowTo = hopTarget || `${dsoKey}_target`;
    const midRA = startStarData ? (startStarData.ra + dso.ra) / 2 : dso.ra;
    const midDec = startStarData ? (startStarData.dec + dso.dec) / 2 : dso.dec;
    steps.push({
        center: [midRA, midDec],
        zoom: 2,
        highlight: [path.startStar, ...(hopTarget ? [hopTarget] : [])].filter(Boolean),
        connectStars: [],
        arrows: [[path.startStar, arrowTo]],
        title: `Hop toward ${dso.name}`,
        instruction: path.hopInstruction,
    });

    // Step 3: Target found
    steps.push({
        center: [dso.ra, dso.dec],
        zoom: 4,
        highlight: [],
        connectStars: [],
        arrows: [],
        title: `🎉 You found ${dso.name}!`,
        instruction: dso.description,
        isTarget: true,
    });

    return {
        id: dsoKey,
        name: dso.fullName || dso.name,
        subtitle: dso.description.slice(0, 60) + "…",
        constellation: dso.constellation,
        difficulty: diff,
        steps,
    };
}


// ═══════════════════════════════════════════════════════════════
// BUILD FINAL HOPS OBJECT
// ═══════════════════════════════════════════════════════════════

const HOPS = { ...HAND_CRAFTED };

// Add all auto-generated hops
for (const key of Object.keys(HOP_PATHS)) {
    if (!HOPS[key]) {
        const hop = generateHop(key);
        if (hop) HOPS[key] = hop;
    }
}

export default HOPS;
