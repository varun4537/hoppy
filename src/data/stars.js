/**
 * Comprehensive Star Catalog for Hoppy
 * Real coordinates: RA (hours), Dec (degrees), apparent visual magnitude
 * Organized by constellation / region for easy reference
 */

export const STARS = {
  // ═══════════════════════════════════════════
  // ORION
  // ═══════════════════════════════════════════
  betelgeuse: { name: "Betelgeuse", ra: 5.919, dec: 7.407, mag: 0.42, color: "#ffcc6f" },
  rigel: { name: "Rigel", ra: 5.242, dec: -8.202, mag: 0.13, color: "#a0c4ff" },
  bellatrix: { name: "Bellatrix", ra: 5.419, dec: 6.350, mag: 1.64, color: "#b0d0ff" },
  mintaka: { name: "Mintaka", ra: 5.533, dec: -0.299, mag: 2.23, color: "#c0d8ff" },
  alnilam: { name: "Alnilam", ra: 5.603, dec: -1.202, mag: 1.69, color: "#c0d8ff" },
  alnitak: { name: "Alnitak", ra: 5.679, dec: -1.943, mag: 1.77, color: "#c0d8ff" },
  saiph: { name: "Saiph", ra: 5.796, dec: -9.670, mag: 2.06, color: "#b0d0ff" },
  theta1OriC: { name: "θ¹ Ori C", ra: 5.588, dec: -5.390, mag: 5.13, color: "#ffffff" },
  iota_ori: { name: "ι Ori", ra: 5.591, dec: -5.910, mag: 2.77, color: "#c0d8ff" },

  // ═══════════════════════════════════════════
  // HERCULES
  // ═══════════════════════════════════════════
  rasalgethi: { name: "Rasalgethi", ra: 17.244, dec: 14.390, mag: 3.48, color: "#ffcc6f" },
  kornephoros: { name: "Kornephoros", ra: 16.504, dec: 21.489, mag: 2.77, color: "#ffe0a0" },
  eta_her: { name: "η Her", ra: 16.715, dec: 38.922, mag: 3.53, color: "#ffe8c0" },
  zeta_her: { name: "ζ Her", ra: 16.688, dec: 31.603, mag: 2.81, color: "#ffe8c0" },
  epsilon_her: { name: "ε Her", ra: 17.005, dec: 30.926, mag: 3.92, color: "#ffffff" },
  pi_her: { name: "π Her", ra: 17.251, dec: 36.809, mag: 3.16, color: "#ffe8c0" },

  // ═══════════════════════════════════════════
  // PEGASUS / ANDROMEDA
  // ═══════════════════════════════════════════
  markab: { name: "Markab", ra: 23.079, dec: 15.205, mag: 2.49, color: "#c8dcff" },
  scheat: { name: "Scheat", ra: 23.063, dec: 28.083, mag: 2.42, color: "#ffcc6f" },
  algenib: { name: "Algenib", ra: 0.221, dec: 15.184, mag: 2.83, color: "#c0d8ff" },
  alpheratz: { name: "Alpheratz", ra: 0.140, dec: 29.091, mag: 2.06, color: "#c0d8ff" },
  mirach: { name: "Mirach", ra: 1.163, dec: 35.621, mag: 2.05, color: "#ffcc6f" },
  mu_and: { name: "μ And", ra: 0.946, dec: 38.500, mag: 3.87, color: "#ffffff" },
  almach: { name: "Almach", ra: 2.065, dec: 42.330, mag: 2.17, color: "#ffcc6f" },

  // ═══════════════════════════════════════════
  // LEO
  // ═══════════════════════════════════════════
  regulus: { name: "Regulus", ra: 10.140, dec: 11.967, mag: 1.35, color: "#c0d8ff" },
  eta_leo: { name: "η Leo", ra: 10.122, dec: 16.763, mag: 3.52, color: "#ffffff" },
  algieba: { name: "Algieba", ra: 10.333, dec: 19.842, mag: 2.28, color: "#ffe0a0" },
  zosma: { name: "Zosma", ra: 11.235, dec: 20.524, mag: 2.56, color: "#ffffff" },
  denebola: { name: "Denebola", ra: 11.818, dec: 14.572, mag: 2.14, color: "#ffffff" },
  chertan: { name: "Chertan", ra: 11.237, dec: 15.430, mag: 3.34, color: "#ffffff" },
  theta_leo: { name: "θ Leo", ra: 11.238, dec: 15.430, mag: 3.34, color: "#ffffff" },

  // ═══════════════════════════════════════════
  // CANCER
  // ═══════════════════════════════════════════
  asellus_borealis: { name: "Asellus Borealis", ra: 8.775, dec: 21.469, mag: 4.66, color: "#ffe8c0" },
  asellus_australis: { name: "Asellus Australis", ra: 8.745, dec: 18.154, mag: 3.94, color: "#ffe8c0" },
  acubens: { name: "Acubens", ra: 8.975, dec: 11.858, mag: 4.25, color: "#ffffff" },

  // ═══════════════════════════════════════════
  // CASSIOPEIA
  // ═══════════════════════════════════════════
  schedar: { name: "Schedar", ra: 0.675, dec: 56.537, mag: 2.23, color: "#ffcc6f" },
  caph: { name: "Caph", ra: 0.153, dec: 59.150, mag: 2.27, color: "#ffffff" },
  gamma_cas: { name: "γ Cas", ra: 0.945, dec: 60.717, mag: 2.47, color: "#c0d8ff" },
  ruchbah: { name: "Ruchbah", ra: 1.430, dec: 60.235, mag: 2.68, color: "#ffffff" },
  segin: { name: "Segin", ra: 1.907, dec: 63.670, mag: 3.37, color: "#c0d8ff" },

  // ═══════════════════════════════════════════
  // PERSEUS
  // ═══════════════════════════════════════════
  mirfak: { name: "Mirfak", ra: 3.406, dec: 49.861, mag: 1.79, color: "#ffe8c0" },
  algol: { name: "Algol", ra: 3.136, dec: 40.956, mag: 2.12, color: "#c0d8ff" },
  eta_per: { name: "η Per", ra: 2.845, dec: 55.896, mag: 3.76, color: "#ffcc6f" },

  // ═══════════════════════════════════════════
  // URSA MAJOR (Big Dipper)
  // ═══════════════════════════════════════════
  dubhe: { name: "Dubhe", ra: 11.062, dec: 61.751, mag: 1.79, color: "#ffcc6f" },
  merak: { name: "Merak", ra: 11.031, dec: 56.382, mag: 2.37, color: "#ffffff" },
  phecda: { name: "Phecda", ra: 11.897, dec: 53.695, mag: 2.44, color: "#ffffff" },
  megrez: { name: "Megrez", ra: 12.257, dec: 57.033, mag: 3.31, color: "#ffffff" },
  alioth: { name: "Alioth", ra: 12.900, dec: 55.960, mag: 1.77, color: "#ffffff" },
  mizar: { name: "Mizar", ra: 13.399, dec: 54.925, mag: 2.27, color: "#ffffff" },
  alkaid: { name: "Alkaid", ra: 13.792, dec: 49.313, mag: 1.86, color: "#c0d8ff" },

  // ═══════════════════════════════════════════
  // URSA MINOR
  // ═══════════════════════════════════════════
  polaris: { name: "Polaris", ra: 2.530, dec: 89.264, mag: 1.98, color: "#ffe8c0" },

  // ═══════════════════════════════════════════
  // LYRA
  // ═══════════════════════════════════════════
  vega: { name: "Vega", ra: 18.616, dec: 38.784, mag: 0.03, color: "#c0d8ff" },
  sheliak: { name: "Sheliak", ra: 18.835, dec: 33.363, mag: 3.45, color: "#c0d8ff" },
  sulafat: { name: "Sulafat", ra: 18.982, dec: 32.690, mag: 3.24, color: "#c0d8ff" },
  epsilon_lyr: { name: "ε Lyr", ra: 18.739, dec: 39.670, mag: 4.67, color: "#ffffff" },
  delta_lyr: { name: "δ Lyr", ra: 18.908, dec: 36.899, mag: 4.30, color: "#ffcc6f" },

  // ═══════════════════════════════════════════
  // CYGNUS
  // ═══════════════════════════════════════════
  deneb: { name: "Deneb", ra: 20.690, dec: 45.280, mag: 1.25, color: "#ffffff" },
  sadr: { name: "Sadr", ra: 20.370, dec: 40.257, mag: 2.20, color: "#ffe8c0" },
  albireo: { name: "Albireo", ra: 19.512, dec: 27.960, mag: 3.18, color: "#ffcc6f" },
  gienah_cyg: { name: "Gienah", ra: 20.770, dec: 33.970, mag: 2.46, color: "#ffffff" },
  delta_cyg: { name: "δ Cyg", ra: 19.750, dec: 45.131, mag: 2.87, color: "#c0d8ff" },

  // ═══════════════════════════════════════════
  // AQUILA
  // ═══════════════════════════════════════════
  altair: { name: "Altair", ra: 19.846, dec: 8.868, mag: 0.77, color: "#ffffff" },
  tarazed: { name: "Tarazed", ra: 19.771, dec: 10.613, mag: 2.72, color: "#ffcc6f" },

  // ═══════════════════════════════════════════
  // SAGITTARIUS
  // ═══════════════════════════════════════════
  kaus_australis: { name: "Kaus Australis", ra: 18.402, dec: -34.384, mag: 1.85, color: "#c0d8ff" },
  kaus_media: { name: "Kaus Media", ra: 18.350, dec: -29.828, mag: 2.70, color: "#ffe8c0" },
  kaus_borealis: { name: "Kaus Borealis", ra: 18.467, dec: -25.422, mag: 2.81, color: "#ffe8c0" },
  nunki: { name: "Nunki", ra: 18.921, dec: -26.297, mag: 2.02, color: "#c0d8ff" },
  ascella: { name: "Ascella", ra: 19.043, dec: -29.880, mag: 2.59, color: "#ffffff" },
  nash: { name: "Nash", ra: 18.097, dec: -30.424, mag: 2.99, color: "#ffe8c0" },
  phi_sgr: { name: "φ Sgr", ra: 18.761, dec: -26.991, mag: 3.17, color: "#c0d8ff" },
  lambda_sgr: { name: "λ Sgr", ra: 18.466, dec: -25.421, mag: 2.81, color: "#ffcc6f" },
  mu_sgr: { name: "μ Sgr", ra: 18.229, dec: -21.059, mag: 3.86, color: "#c0d8ff" },

  // ═══════════════════════════════════════════
  // SCORPIUS
  // ═══════════════════════════════════════════
  antares: { name: "Antares", ra: 16.490, dec: -26.432, mag: 1.09, color: "#ff8844" },
  shaula: { name: "Shaula", ra: 17.560, dec: -37.104, mag: 1.62, color: "#c0d8ff" },
  sargas: { name: "Sargas", ra: 17.622, dec: -42.998, mag: 1.87, color: "#ffe8c0" },
  dschubba: { name: "Dschubba", ra: 16.006, dec: -22.622, mag: 2.32, color: "#c0d8ff" },
  acrab: { name: "Acrab", ra: 16.091, dec: -19.805, mag: 2.62, color: "#c0d8ff" },

  // ═══════════════════════════════════════════
  // SERPENS / OPHIUCHUS
  // ═══════════════════════════════════════════
  rasalhague: { name: "Rasalhague", ra: 17.582, dec: 12.560, mag: 2.08, color: "#ffffff" },
  cebalrai: { name: "Cebalrai", ra: 17.724, dec: 4.567, mag: 2.77, color: "#ffcc6f" },
  unukalhai: { name: "Unukalhai", ra: 15.738, dec: 6.426, mag: 2.65, color: "#ffcc6f" },
  eta_oph: { name: "η Oph", ra: 17.173, dec: -15.725, mag: 2.43, color: "#ffffff" },

  // ═══════════════════════════════════════════
  // VIRGO
  // ═══════════════════════════════════════════
  spica: { name: "Spica", ra: 13.420, dec: -11.161, mag: 0.97, color: "#c0d8ff" },
  vindemiatrix: { name: "Vindemiatrix", ra: 13.036, dec: 10.959, mag: 2.83, color: "#ffe8c0" },
  porrima: { name: "Porrima", ra: 12.694, dec: -1.449, mag: 2.74, color: "#ffffff" },
  epsilon_vir: { name: "ε Vir", ra: 13.036, dec: 10.959, mag: 2.83, color: "#ffe8c0" },

  // ═══════════════════════════════════════════
  // COMA BERENICES / BOÖTES
  // ═══════════════════════════════════════════
  arcturus: { name: "Arcturus", ra: 14.261, dec: 19.183, mag: -0.05, color: "#ffcc6f" },
  diadem: { name: "Diadem", ra: 13.167, dec: 17.529, mag: 4.32, color: "#ffffff" },
  beta_com: { name: "β Com", ra: 13.198, dec: 27.878, mag: 4.26, color: "#ffffff" },

  // ═══════════════════════════════════════════
  // GEMINI
  // ═══════════════════════════════════════════
  castor: { name: "Castor", ra: 7.577, dec: 31.888, mag: 1.58, color: "#ffffff" },
  pollux: { name: "Pollux", ra: 7.755, dec: 28.026, mag: 1.14, color: "#ffcc6f" },
  alhena: { name: "Alhena", ra: 6.629, dec: 16.399, mag: 1.93, color: "#ffffff" },
  wasat: { name: "Wasat", ra: 7.335, dec: 21.982, mag: 3.53, color: "#ffffff" },
  mebsuta: { name: "Mebsuta", ra: 6.732, dec: 25.131, mag: 3.06, color: "#ffe8c0" },

  // ═══════════════════════════════════════════
  // TAURUS
  // ═══════════════════════════════════════════
  aldebaran: { name: "Aldebaran", ra: 4.599, dec: 16.509, mag: 0.85, color: "#ff9944" },
  elnath: { name: "Elnath", ra: 5.438, dec: 28.608, mag: 1.65, color: "#c0d8ff" },
  alcyone: { name: "Alcyone", ra: 3.791, dec: 24.105, mag: 2.87, color: "#c0d8ff" },
  zeta_tau: { name: "ζ Tau", ra: 5.627, dec: 21.143, mag: 3.03, color: "#c0d8ff" },

  // ═══════════════════════════════════════════
  // AURIGA
  // ═══════════════════════════════════════════
  capella: { name: "Capella", ra: 5.278, dec: 45.998, mag: 0.08, color: "#ffe8c0" },
  menkalinan: { name: "Menkalinan", ra: 5.992, dec: 44.947, mag: 1.90, color: "#ffffff" },
  theta_aur: { name: "θ Aur", ra: 5.995, dec: 37.213, mag: 2.62, color: "#ffffff" },
  iota_aur: { name: "ι Aur", ra: 4.950, dec: 33.166, mag: 2.69, color: "#ffcc6f" },

  // ═══════════════════════════════════════════
  // CANIS MAJOR / PUPPIS / LEPUS
  // ═══════════════════════════════════════════
  sirius: { name: "Sirius", ra: 6.752, dec: -16.716, mag: -1.46, color: "#c0d8ff" },
  mirzam: { name: "Mirzam", ra: 6.378, dec: -17.956, mag: 1.98, color: "#c0d8ff" },
  adhara: { name: "Adhara", ra: 6.977, dec: -28.972, mag: 1.50, color: "#c0d8ff" },
  wezen: { name: "Wezen", ra: 7.140, dec: -26.393, mag: 1.84, color: "#ffe8c0" },
  aludra: { name: "Aludra", ra: 7.402, dec: -29.303, mag: 2.45, color: "#c0d8ff" },

  // ═══════════════════════════════════════════
  // CANIS MINOR
  // ═══════════════════════════════════════════
  procyon: { name: "Procyon", ra: 7.655, dec: 5.225, mag: 0.34, color: "#ffe8c0" },

  // ═══════════════════════════════════════════
  // MONOCEROS
  // ═══════════════════════════════════════════
  alpha_mon: { name: "α Mon", ra: 7.687, dec: -9.551, mag: 3.93, color: "#ffcc6f" },

  // ═══════════════════════════════════════════
  // TRIANGULUM
  // ═══════════════════════════════════════════
  beta_tri: { name: "β Tri", ra: 2.159, dec: 34.987, mag: 3.00, color: "#ffffff" },
  alpha_tri: { name: "α Tri", ra: 1.885, dec: 29.579, mag: 3.41, color: "#ffe8c0" },

  // ═══════════════════════════════════════════
  // CANES VENATICI
  // ═══════════════════════════════════════════
  cor_caroli: { name: "Cor Caroli", ra: 12.934, dec: 38.318, mag: 2.89, color: "#ffffff" },
  chara: { name: "Chara", ra: 12.558, dec: 41.358, mag: 4.26, color: "#ffe8c0" },

  // ═══════════════════════════════════════════
  // VULPECULA / SAGITTA
  // ═══════════════════════════════════════════
  alpha_sge: { name: "α Sge", ra: 19.979, dec: 18.014, mag: 4.38, color: "#ffe8c0" },
  gamma_sge: { name: "γ Sge", ra: 19.979, dec: 19.492, mag: 3.47, color: "#ffcc6f" },

  // ═══════════════════════════════════════════
  // SCUTUM
  // ═══════════════════════════════════════════
  alpha_sct: { name: "α Sct", ra: 18.587, dec: -8.244, mag: 3.85, color: "#ffcc6f" },

  // ═══════════════════════════════════════════
  // HYDRA / CRATER / CORVUS
  // ═══════════════════════════════════════════
  alphard: { name: "Alphard", ra: 9.460, dec: -8.659, mag: 1.98, color: "#ffcc6f" },
  gamma_hya: { name: "γ Hya", ra: 13.315, dec: -23.172, mag: 3.00, color: "#ffe8c0" },

  // ═══════════════════════════════════════════
  // CENTAURUS / LUPUS (Southern)
  // ═══════════════════════════════════════════
  omega_cen_guide: { name: "ε Cen", ra: 13.665, dec: -53.466, mag: 2.30, color: "#c0d8ff" },

  // ═══════════════════════════════════════════
  // DRACO
  // ═══════════════════════════════════════════
  eltanin: { name: "Eltanin", ra: 17.943, dec: 51.489, mag: 2.23, color: "#ffcc6f" },
  rastaban: { name: "Rastaban", ra: 17.507, dec: 52.301, mag: 2.79, color: "#ffe8c0" },

  // ═══════════════════════════════════════════
  // PISCES
  // ═══════════════════════════════════════════
  eta_psc: { name: "η Psc", ra: 1.525, dec: 15.346, mag: 3.62, color: "#ffe8c0" },

  // ═══════════════════════════════════════════
  // CETUS
  // ═══════════════════════════════════════════
  diphda: { name: "Diphda", ra: 0.726, dec: -17.987, mag: 2.02, color: "#ffcc6f" },
  menkar: { name: "Menkar", ra: 3.038, dec: 4.090, mag: 2.53, color: "#ffcc6f" },
};

/**
 * Deep Sky Objects — 55 Messier objects
 * Enriched with NASA Hubble Messier Catalog data
 */
export const DSOs = {
  // === Original 5 ===
  M42: { name: "M42", fullName: "Orion Nebula", ra: 5.588, dec: -5.390, type: "emission nebula", magnitude: 4.0, distance: "1,344 light-years", description: "Believed to be the cosmic fire of creation by the Maya of Mesoamerica, M42 blazes brightly in Orion. This stellar nursery is the closest large star-forming region to Earth, offering an excellent peek at stellar birth.", funFact: "Created from 520 Hubble exposures, the mosaic of M42 contains over one billion pixels!", bestSeason: "Winter", difficulty: 1, constellation: "Orion", nasaUrl: "https://science.nasa.gov/mission/hubble/science/explore-the-night-sky/hubble-messier-catalog/messier-42/" },
  M13: { name: "M13", fullName: "Great Globular Cluster in Hercules", ra: 16.695, dec: 36.462, type: "globular cluster", magnitude: 5.8, distance: "22,200 light-years", description: "A spectacular globular cluster containing about 300,000 stars packed into a ball 145 light-years across.", funFact: "In 1974, Arecibo beamed a message toward M13 about humanity. It arrives in ~25,000 years!", bestSeason: "Summer", difficulty: 2, constellation: "Hercules", nasaUrl: "https://science.nasa.gov/mission/hubble/science/explore-the-night-sky/hubble-messier-catalog/messier-13/" },
  M31: { name: "M31", fullName: "Andromeda Galaxy", ra: 0.712, dec: 41.269, type: "spiral galaxy", magnitude: 3.4, distance: "2.5 million light-years", description: "Our nearest major galactic neighbour. Persian astronomer Abd al-rahman al-Sufi first recorded it in The Book of Fixed Stars in 964 AD. Hubble required over 1,000 orbits spanning a decade to photograph its disk.", funFact: "Andromeda is on collision course with the Milky Way — merger in ~4.5 billion years.", bestSeason: "Autumn", difficulty: 2, constellation: "Andromeda", nasaUrl: "https://science.nasa.gov/mission/hubble/science/explore-the-night-sky/hubble-messier-catalog/messier-31/" },
  M44: { name: "M44", fullName: "Beehive Cluster", ra: 8.668, dec: 19.983, type: "open cluster", magnitude: 3.7, distance: "577 light-years", description: "An open cluster in Cancer known since antiquity. Ancient Greeks and Romans saw it as a misty object in the constellation of Cancer.", funFact: "Galileo was the first to resolve M44 into individual stars with his telescope in 1609.", bestSeason: "Spring", difficulty: 3, constellation: "Cancer", nasaUrl: "https://science.nasa.gov/mission/hubble/science/explore-the-night-sky/hubble-messier-catalog/messier-44/" },
  NGC869: { name: "NGC 869/884", fullName: "Double Cluster", ra: 2.319, dec: 57.133, type: "open cluster", magnitude: 3.7, distance: "7,500 light-years", description: "A stunning pair of open clusters in Perseus, each containing several hundred stars. Visible to the naked eye as a hazy patch in the Milky Way.", funFact: "The two clusters formed from the same molecular cloud about 13 million years ago.", bestSeason: "Autumn", difficulty: 2, constellation: "Perseus" },

  // === SAGITTARIUS / GALACTIC CENTER REGION ===
  M8: { name: "M8", fullName: "Lagoon Nebula", ra: 18.063, dec: -24.383, type: "emission nebula", magnitude: 5.8, distance: "4,100 light-years", description: "A giant interstellar cloud in Sagittarius, one of only two star-forming nebulae visible to the naked eye from mid-northern latitudes.", funFact: "The Lagoon is about 110×50 light-years in size and contains a young open cluster.", bestSeason: "Summer", difficulty: 2, constellation: "Sagittarius", nasaUrl: "https://science.nasa.gov/mission/hubble/science/explore-the-night-sky/hubble-messier-catalog/messier-8/" },
  M17: { name: "M17", fullName: "Omega Nebula", ra: 18.346, dec: -16.183, type: "emission nebula", magnitude: 6.0, distance: "5,000 light-years", description: "Also called the Swan, Horseshoe, or Lobster Nebula. One of the brightest and most massive star-forming regions in our galaxy.", funFact: "M17 contains an open cluster of 35 hot young stars that illuminate the nebula.", bestSeason: "Summer", difficulty: 3, constellation: "Sagittarius", nasaUrl: "https://science.nasa.gov/mission/hubble/science/explore-the-night-sky/hubble-messier-catalog/messier-17/" },
  M20: { name: "M20", fullName: "Trifid Nebula", ra: 18.044, dec: -23.033, type: "emission nebula", magnitude: 6.3, distance: "5,200 light-years", description: "Famous nebula split into three lobes by dark dust lanes. A rare combination of three nebula types in one object.", funFact: "The Trifid combines emission (red), reflection (blue), and dark nebulae in one object.", bestSeason: "Summer", difficulty: 3, constellation: "Sagittarius", nasaUrl: "https://science.nasa.gov/mission/hubble/science/explore-the-night-sky/hubble-messier-catalog/messier-20/" },
  M22: { name: "M22", fullName: "Sagittarius Cluster", ra: 18.607, dec: -23.905, type: "globular cluster", magnitude: 5.1, distance: "10,600 light-years", description: "One of the nearest globular clusters to Earth and one of the brightest. It was discovered by Abraham Ihle in 1665.", funFact: "M22 was one of the first globulars ever discovered, and may contain two black holes.", bestSeason: "Summer", difficulty: 2, constellation: "Sagittarius", nasaUrl: "https://science.nasa.gov/mission/hubble/science/explore-the-night-sky/hubble-messier-catalog/messier-22/" },
  M24: { name: "M24", fullName: "Sagittarius Star Cloud", ra: 18.283, dec: -18.517, type: "star cloud", magnitude: 4.6, distance: "10,000 light-years", description: "Not a true cluster but a dense patch of Milky Way stars seen through a gap in the interstellar dust.", funFact: "You're looking at stars 10,000–16,000 light-years away through a window in the cosmic dust.", bestSeason: "Summer", difficulty: 2, constellation: "Sagittarius", nasaUrl: "https://science.nasa.gov/mission/hubble/science/explore-the-night-sky/hubble-messier-catalog/messier-24/" },
  M25: { name: "M25", fullName: "IC 4725", ra: 18.527, dec: -19.117, type: "open cluster", magnitude: 4.6, distance: "2,000 light-years", description: "A bright open cluster in Sagittarius with about 600 stars.", funFact: "Contains one of the few Cepheid variable stars visible in a small telescope.", bestSeason: "Summer", difficulty: 3, constellation: "Sagittarius", nasaUrl: "https://science.nasa.gov/mission/hubble/science/explore-the-night-sky/hubble-messier-catalog/messier-25/" },
  M28: { name: "M28", fullName: "NGC 6626", ra: 18.409, dec: -24.870, type: "globular cluster", magnitude: 6.8, distance: "17,900 light-years", description: "A globular cluster near the top of the Sagittarius Teapot.", funFact: "M28 was among the first globulars where a millisecond pulsar was discovered.", bestSeason: "Summer", difficulty: 3, constellation: "Sagittarius", nasaUrl: "https://science.nasa.gov/mission/hubble/science/explore-the-night-sky/hubble-messier-catalog/messier-28/" },

  // === SCORPIUS ===
  M4: { name: "M4", fullName: "NGC 6121", ra: 16.393, dec: -26.526, type: "globular cluster", magnitude: 5.6, distance: "7,200 light-years", description: "The closest globular cluster to Earth, easy to find just 1.3° west of bright Antares.", funFact: "At only 7,200 light-years away, M4 is the closest globular to our solar system.", bestSeason: "Summer", difficulty: 1, constellation: "Scorpius", nasaUrl: "https://science.nasa.gov/mission/hubble/science/explore-the-night-sky/hubble-messier-catalog/messier-4/" },
  M6: { name: "M6", fullName: "Butterfly Cluster", ra: 17.668, dec: -32.217, type: "open cluster", magnitude: 4.2, distance: "1,600 light-years", description: "An open cluster whose brightest stars outline the shape of a butterfly.", funFact: "Its brightest star, BM Scorpii, is an orange variable giant that changes colour.", bestSeason: "Summer", difficulty: 2, constellation: "Scorpius", nasaUrl: "https://science.nasa.gov/mission/hubble/science/explore-the-night-sky/hubble-messier-catalog/messier-6/" },
  M7: { name: "M7", fullName: "Ptolemy's Cluster", ra: 17.899, dec: -34.817, type: "open cluster", magnitude: 3.3, distance: "980 light-years", description: "A large, bright open cluster known since antiquity, mentioned by Ptolemy in 130 AD.", funFact: "Ptolemy described it in 130 AD as 'the nebula following the sting of Scorpius'.", bestSeason: "Summer", difficulty: 1, constellation: "Scorpius", nasaUrl: "https://science.nasa.gov/mission/hubble/science/explore-the-night-sky/hubble-messier-catalog/messier-7/" },
  M80: { name: "M80", fullName: "NGC 6093", ra: 16.284, dec: -22.976, type: "globular cluster", magnitude: 7.3, distance: "32,600 light-years", description: "A dense globular cluster between Antares and Dschubba in Scorpius.", funFact: "In 1860 a nova appeared in M80, temporarily making it brighter than the entire cluster.", bestSeason: "Summer", difficulty: 3, constellation: "Scorpius", nasaUrl: "https://science.nasa.gov/mission/hubble/science/explore-the-night-sky/hubble-messier-catalog/messier-80/" },

  // === OPHIUCHUS / SERPENS ===
  M5: { name: "M5", fullName: "NGC 5904", ra: 15.309, dec: 2.083, type: "globular cluster", magnitude: 5.6, distance: "24,500 light-years", description: "One of the finest globular clusters, rivalling M13 in magnificence. Contains over 100,000 stars.", funFact: "M5 is about 13 billion years old — nearly as old as the universe itself.", bestSeason: "Summer", difficulty: 2, constellation: "Serpens", nasaUrl: "https://science.nasa.gov/mission/hubble/science/explore-the-night-sky/hubble-messier-catalog/messier-5/" },
  M10: { name: "M10", fullName: "NGC 6254", ra: 16.952, dec: -4.100, type: "globular cluster", magnitude: 6.6, distance: "14,300 light-years", description: "A bright globular cluster in Ophiuchus, forming a pair with nearby M12.", funFact: "M10 is approaching us at 69 km/s — but don't worry, it's still 14,300 light-years away.", bestSeason: "Summer", difficulty: 3, constellation: "Ophiuchus", nasaUrl: "https://science.nasa.gov/mission/hubble/science/explore-the-night-sky/hubble-messier-catalog/messier-10/" },
  M12: { name: "M12", fullName: "NGC 6218", ra: 16.787, dec: -1.949, type: "globular cluster", magnitude: 6.7, distance: "15,700 light-years", description: "A globular cluster often observed alongside its neighbour M10.", funFact: "M12 has lost many low-mass stars to the Milky Way's gravitational tidal forces.", bestSeason: "Summer", difficulty: 3, constellation: "Ophiuchus", nasaUrl: "https://science.nasa.gov/mission/hubble/science/explore-the-night-sky/hubble-messier-catalog/messier-12/" },
  M16: { name: "M16", fullName: "Eagle Nebula", ra: 18.314, dec: -13.783, type: "emission nebula", magnitude: 6.0, distance: "7,000 light-years", description: "Home of the iconic Pillars of Creation — one of the most famous images in astronomy, photographed by Hubble in 1995 and again in 2014.", funFact: "The famous 'Pillars of Creation' are columns of gas about 5 light-years tall.", bestSeason: "Summer", difficulty: 3, constellation: "Serpens", nasaUrl: "https://science.nasa.gov/mission/hubble/science/explore-the-night-sky/hubble-messier-catalog/messier-16/" },
  M9: { name: "M9", fullName: "NGC 6333", ra: 17.319, dec: -18.516, type: "globular cluster", magnitude: 7.7, distance: "25,800 light-years", description: "One of the nearer globular clusters to the galactic centre.", funFact: "M9 is only about 5,500 light-years from the Milky Way's centre.", bestSeason: "Summer", difficulty: 4, constellation: "Ophiuchus", nasaUrl: "https://science.nasa.gov/mission/hubble/science/explore-the-night-sky/hubble-messier-catalog/messier-9/" },
  M19: { name: "M19", fullName: "NGC 6273", ra: 17.044, dec: -26.268, type: "globular cluster", magnitude: 6.8, distance: "28,700 light-years", description: "One of the most oblate (elongated) globular clusters known.", funFact: "M19 is visibly elongated — probably from the Milky Way's tidal forces.", bestSeason: "Summer", difficulty: 3, constellation: "Ophiuchus", nasaUrl: "https://science.nasa.gov/mission/hubble/science/explore-the-night-sky/hubble-messier-catalog/messier-19/" },
  M62: { name: "M62", fullName: "NGC 6266", ra: 17.022, dec: -30.113, type: "globular cluster", magnitude: 6.5, distance: "22,500 light-years", description: "A globular cluster close to the galactic centre with an irregular shape.", funFact: "M62 contains more X-ray sources than almost any other globular cluster.", bestSeason: "Summer", difficulty: 3, constellation: "Ophiuchus", nasaUrl: "https://science.nasa.gov/mission/hubble/science/explore-the-night-sky/hubble-messier-catalog/messier-62/" },

  // === LYRA / VULPECULA / SAGITTA ===
  M57: { name: "M57", fullName: "Ring Nebula", ra: 18.893, dec: 33.029, type: "planetary nebula", magnitude: 8.8, distance: "2,283 light-years", description: "A planetary nebula between Sheliak and Sulafat in Lyra, looking like a cosmic smoke ring. The gently glowing ring is the outer layers of a star expelled into space.", funFact: "The Ring is the glowing shell of gas expelled by a dying star about 4,000 years ago.", bestSeason: "Summer", difficulty: 2, constellation: "Lyra", nasaUrl: "https://science.nasa.gov/mission/hubble/science/explore-the-night-sky/hubble-messier-catalog/messier-57/" },
  M56: { name: "M56", fullName: "NGC 6779", ra: 19.277, dec: 30.184, type: "globular cluster", magnitude: 8.3, distance: "32,900 light-years", description: "A globular cluster between Albireo and Sulafat.", funFact: "M56 is one of the less concentrated globular clusters, making it appear 'fluffy'.", bestSeason: "Summer", difficulty: 3, constellation: "Lyra", nasaUrl: "https://science.nasa.gov/mission/hubble/science/explore-the-night-sky/hubble-messier-catalog/messier-56/" },
  M27: { name: "M27", fullName: "Dumbbell Nebula", ra: 19.994, dec: 22.721, type: "planetary nebula", magnitude: 7.4, distance: "1,360 light-years", description: "The first planetary nebula ever discovered (by Charles Messier in 1764), shaped like an apple core or dumbbell.", funFact: "The central white dwarf is one of the largest known, bigger than any other white dwarf observed.", bestSeason: "Summer", difficulty: 2, constellation: "Vulpecula", nasaUrl: "https://science.nasa.gov/mission/hubble/science/explore-the-night-sky/hubble-messier-catalog/messier-27/" },
  M71: { name: "M71", fullName: "NGC 6838", ra: 19.896, dec: 18.779, type: "globular cluster", magnitude: 8.2, distance: "13,000 light-years", description: "An unusual, loosely concentrated globular cluster in Sagitta.", funFact: "For decades astronomers debated whether M71 was a dense open cluster or loose globular.", bestSeason: "Summer", difficulty: 3, constellation: "Sagitta", nasaUrl: "https://science.nasa.gov/mission/hubble/science/explore-the-night-sky/hubble-messier-catalog/messier-71/" },

  // === URSA MAJOR / CANES VENATICI ===
  M81: { name: "M81", fullName: "Bode's Galaxy", ra: 9.926, dec: 69.066, type: "spiral galaxy", magnitude: 6.9, distance: "11.8 million light-years", description: "A grand design spiral galaxy and one of the brightest in the night sky. It's gravitationally interacting with its neighbour M82.", funFact: "M81 and M82 are gravitationally interacting — you can see them in the same binocular field!", bestSeason: "Spring", difficulty: 2, constellation: "Ursa Major", nasaUrl: "https://science.nasa.gov/mission/hubble/science/explore-the-night-sky/hubble-messier-catalog/messier-81/" },
  M82: { name: "M82", fullName: "Cigar Galaxy", ra: 9.927, dec: 69.680, type: "starburst galaxy", magnitude: 8.4, distance: "11.5 million light-years", description: "An edge-on starburst galaxy being distorted by its neighbour M81. Its centre is a cauldron of star formation.", funFact: "M82 is forming stars 10× faster than the Milky Way due to M81's gravitational pull.", bestSeason: "Spring", difficulty: 2, constellation: "Ursa Major", nasaUrl: "https://science.nasa.gov/mission/hubble/science/explore-the-night-sky/hubble-messier-catalog/messier-82/" },
  M97: { name: "M97", fullName: "Owl Nebula", ra: 11.248, dec: 55.019, type: "planetary nebula", magnitude: 9.9, distance: "2,030 light-years", description: "A planetary nebula named for its two dark 'eyes' that resemble an owl face.", funFact: "The Owl is about 8,000 years old — a brief cosmic moment in the death of a star.", bestSeason: "Spring", difficulty: 4, constellation: "Ursa Major", nasaUrl: "https://science.nasa.gov/mission/hubble/science/explore-the-night-sky/hubble-messier-catalog/messier-97/" },
  M101: { name: "M101", fullName: "Pinwheel Galaxy", ra: 14.054, dec: 54.349, type: "spiral galaxy", magnitude: 7.9, distance: "20.9 million light-years", description: "A magnificent face-on spiral galaxy, nearly twice the size of the Milky Way.", funFact: "M101 is lopsided — gravitational interactions with companions have pulled its arms askew.", bestSeason: "Spring", difficulty: 3, constellation: "Ursa Major", nasaUrl: "https://science.nasa.gov/mission/hubble/science/explore-the-night-sky/hubble-messier-catalog/messier-101/" },
  M108: { name: "M108", fullName: "Surfboard Galaxy", ra: 11.191, dec: 55.674, type: "barred spiral galaxy", magnitude: 10.0, distance: "45.9 million light-years", description: "An edge-on galaxy near the Owl Nebula M97.", funFact: "M108 has no central bulge — it's practically all disk, which is quite unusual.", bestSeason: "Spring", difficulty: 4, constellation: "Ursa Major", nasaUrl: "https://science.nasa.gov/mission/hubble/science/explore-the-night-sky/hubble-messier-catalog/messier-108/" },
  M109: { name: "M109", fullName: "NGC 3992", ra: 11.960, dec: 53.375, type: "barred spiral galaxy", magnitude: 9.8, distance: "83.5 million light-years", description: "A barred spiral galaxy near Phecda in the Big Dipper.", funFact: "M109 has a prominent central bar, one of the earliest barred spirals recognized.", bestSeason: "Spring", difficulty: 4, constellation: "Ursa Major", nasaUrl: "https://science.nasa.gov/mission/hubble/science/explore-the-night-sky/hubble-messier-catalog/messier-109/" },
  M51: { name: "M51", fullName: "Whirlpool Galaxy", ra: 13.498, dec: 47.195, type: "spiral galaxy", magnitude: 8.4, distance: "31 million light-years", description: "A grand-design face-on spiral galaxy with a companion galaxy NGC 5195. Its stunning spiral arms were the first observed in any galaxy.", funFact: "M51 was the first galaxy whose spiral structure was observed, by Lord Rosse in 1845.", bestSeason: "Spring", difficulty: 3, constellation: "Canes Venatici", nasaUrl: "https://science.nasa.gov/mission/hubble/science/explore-the-night-sky/hubble-messier-catalog/messier-51/" },
  M63: { name: "M63", fullName: "Sunflower Galaxy", ra: 13.264, dec: 42.029, type: "spiral galaxy", magnitude: 8.6, distance: "29.3 million light-years", description: "A flocculent spiral galaxy with patchy, fragmented arms like sunflower petals.", funFact: "M63 was the first object Pierre Méchain discovered, in 1779.", bestSeason: "Spring", difficulty: 3, constellation: "Canes Venatici", nasaUrl: "https://science.nasa.gov/mission/hubble/science/explore-the-night-sky/hubble-messier-catalog/messier-63/" },
  M94: { name: "M94", fullName: "Cat's Eye Galaxy", ra: 12.849, dec: 41.120, type: "spiral galaxy", magnitude: 8.2, distance: "16 million light-years", description: "A compact spiral with a very bright inner ring of active star formation.", funFact: "M94 has a mysterious outer ring that may not actually be a ring but tightly wound spiral arms.", bestSeason: "Spring", difficulty: 3, constellation: "Canes Venatici", nasaUrl: "https://science.nasa.gov/mission/hubble/science/explore-the-night-sky/hubble-messier-catalog/messier-94/" },
  M106: { name: "M106", fullName: "NGC 4258", ra: 12.319, dec: 47.305, type: "spiral galaxy", magnitude: 8.4, distance: "23.7 million light-years", description: "A Seyfert galaxy with anomalous arms of excited hydrogen gas.", funFact: "M106's supermassive black hole produces water masers — natural cosmic lasers!", bestSeason: "Spring", difficulty: 3, constellation: "Canes Venatici", nasaUrl: "https://science.nasa.gov/mission/hubble/science/explore-the-night-sky/hubble-messier-catalog/messier-106/" },
  M3: { name: "M3", fullName: "NGC 5272", ra: 13.703, dec: 28.377, type: "globular cluster", magnitude: 6.2, distance: "33,900 light-years", description: "One of the largest and brightest globular clusters, with about 500,000 stars.", funFact: "M3 contains more variable stars than any other known globular cluster — about 274.", bestSeason: "Spring", difficulty: 2, constellation: "Canes Venatici", nasaUrl: "https://science.nasa.gov/mission/hubble/science/explore-the-night-sky/hubble-messier-catalog/messier-3/" },

  // === COMA BERENICES / VIRGO CLUSTER ===
  M53: { name: "M53", fullName: "NGC 5024", ra: 13.214, dec: 18.168, type: "globular cluster", magnitude: 7.6, distance: "58,000 light-years", description: "A remote globular cluster in Coma Berenices.", funFact: "M53 is one of the most distant globulars from the galactic centre — about 60,000 ly away.", bestSeason: "Spring", difficulty: 3, constellation: "Coma Berenices", nasaUrl: "https://science.nasa.gov/mission/hubble/science/explore-the-night-sky/hubble-messier-catalog/messier-53/" },
  M64: { name: "M64", fullName: "Black Eye Galaxy", ra: 12.945, dec: 21.684, type: "spiral galaxy", magnitude: 8.5, distance: "17 million light-years", description: "Named for a spectacular dark band of dust across its nucleus, giving it a dramatic 'black eye' appearance.", funFact: "The outer region of M64 rotates opposite to its inner region — likely from absorbing a companion galaxy.", bestSeason: "Spring", difficulty: 3, constellation: "Coma Berenices", nasaUrl: "https://science.nasa.gov/mission/hubble/science/explore-the-night-sky/hubble-messier-catalog/messier-64/" },
  M85: { name: "M85", fullName: "NGC 4382", ra: 12.424, dec: 18.191, type: "lenticular galaxy", magnitude: 9.1, distance: "60 million light-years", description: "The northernmost member of the Virgo Cluster of galaxies.", funFact: "M85 swallowed a smaller galaxy about 4-7 billion years ago.", bestSeason: "Spring", difficulty: 4, constellation: "Coma Berenices", nasaUrl: "https://science.nasa.gov/mission/hubble/science/explore-the-night-sky/hubble-messier-catalog/messier-85/" },
  M49: { name: "M49", fullName: "NGC 4472", ra: 12.497, dec: 8.000, type: "elliptical galaxy", magnitude: 8.4, distance: "55.9 million light-years", description: "The brightest galaxy in the Virgo Cluster and the first member to be discovered.", funFact: "M49 was the first Virgo Cluster member to be discovered — by Messier in 1771.", bestSeason: "Spring", difficulty: 3, constellation: "Virgo", nasaUrl: "https://science.nasa.gov/mission/hubble/science/explore-the-night-sky/hubble-messier-catalog/messier-49/" },
  M87: { name: "M87", fullName: "Virgo A", ra: 12.514, dec: 12.391, type: "elliptical galaxy", magnitude: 8.6, distance: "53.5 million light-years", description: "A supergiant elliptical galaxy at the centre of the Virgo Cluster, famous for its enormous relativistic jet.", funFact: "M87's supermassive black hole was the first ever directly imaged by the Event Horizon Telescope in 2019!", bestSeason: "Spring", difficulty: 3, constellation: "Virgo", nasaUrl: "https://science.nasa.gov/mission/hubble/science/explore-the-night-sky/hubble-messier-catalog/messier-87/" },
  M104: { name: "M104", fullName: "Sombrero Galaxy", ra: 12.666, dec: -11.623, type: "spiral galaxy", magnitude: 8.0, distance: "29.3 million light-years", description: "An unbarred spiral galaxy with a brilliant white core and prominent dust lane that gives it a hat-like silhouette.", funFact: "The Sombrero's central bulge contains a supermassive black hole of 1 billion solar masses.", bestSeason: "Spring", difficulty: 3, constellation: "Virgo", nasaUrl: "https://science.nasa.gov/mission/hubble/science/explore-the-night-sky/hubble-messier-catalog/messier-104/" },

  // === GEMINI / AURIGA ===
  M35: { name: "M35", fullName: "NGC 2168", ra: 6.146, dec: 24.333, type: "open cluster", magnitude: 5.3, distance: "2,800 light-years", description: "A bright open cluster at the foot of Gemini, visible to the naked eye.", funFact: "Right next to M35 is NGC 2158, a much older, denser cluster 5× farther away.", bestSeason: "Winter", difficulty: 2, constellation: "Gemini", nasaUrl: "https://science.nasa.gov/mission/hubble/science/explore-the-night-sky/hubble-messier-catalog/messier-35/" },
  M36: { name: "M36", fullName: "Pinwheel Cluster", ra: 5.601, dec: 34.133, type: "open cluster", magnitude: 6.3, distance: "4,100 light-years", description: "A compact open cluster in Auriga with about 60 stars.", funFact: "M36 is the smallest of the three famous Auriga clusters (M36, M37, M38).", bestSeason: "Winter", difficulty: 2, constellation: "Auriga", nasaUrl: "https://science.nasa.gov/mission/hubble/science/explore-the-night-sky/hubble-messier-catalog/messier-36/" },
  M37: { name: "M37", fullName: "NGC 2099", ra: 5.873, dec: 32.550, type: "open cluster", magnitude: 5.6, distance: "4,500 light-years", description: "The richest and brightest of the three Auriga clusters with about 500 stars.", funFact: "M37 contains about 500 stars, including at least a dozen red giants.", bestSeason: "Winter", difficulty: 2, constellation: "Auriga", nasaUrl: "https://science.nasa.gov/mission/hubble/science/explore-the-night-sky/hubble-messier-catalog/messier-37/" },
  M38: { name: "M38", fullName: "Starfish Cluster", ra: 5.478, dec: 35.833, type: "open cluster", magnitude: 7.4, distance: "4,200 light-years", description: "An open cluster sometimes said to resemble a starfish or the Greek letter π.", funFact: "M38's brightest star is a yellow giant 900 times more luminous than the Sun.", bestSeason: "Winter", difficulty: 2, constellation: "Auriga", nasaUrl: "https://science.nasa.gov/mission/hubble/science/explore-the-night-sky/hubble-messier-catalog/messier-38/" },

  // === TAURUS ===
  M1: { name: "M1", fullName: "Crab Nebula", ra: 5.575, dec: 22.017, type: "supernova remnant", magnitude: 8.4, distance: "6,500 light-years", description: "The remnant of a supernova observed by Chinese and Arab astronomers in 1054 AD. At its heart lies a rapidly spinning neutron star (pulsar).", funFact: "M1 contains a pulsar spinning 30 times per second — the collapsed core of the exploded star.", bestSeason: "Winter", difficulty: 3, constellation: "Taurus", nasaUrl: "https://science.nasa.gov/mission/hubble/science/explore-the-night-sky/hubble-messier-catalog/messier-1/" },
  M45: { name: "M45", fullName: "Pleiades", ra: 3.791, dec: 24.117, type: "open cluster", magnitude: 1.6, distance: "444 light-years", description: "The Seven Sisters — the most famous star cluster in the sky. Known to virtually every culture, it contains hot blue stars surrounded by a faint reflection nebula.", funFact: "Most people can see 6-7 stars; sharp-eyed observers can count up to 14 without optics.", bestSeason: "Winter", difficulty: 1, constellation: "Taurus", nasaUrl: "https://science.nasa.gov/mission/hubble/science/explore-the-night-sky/hubble-messier-catalog/messier-45/" },

  // === MONOCEROS / CANIS MAJOR / PUPPIS ===
  M46: { name: "M46", fullName: "NGC 2437", ra: 7.697, dec: -14.817, type: "open cluster", magnitude: 6.1, distance: "5,400 light-years", description: "A rich open cluster with a bonus — a planetary nebula projected on its face.", funFact: "The planetary nebula NGC 2438 appears to lie in M46 but is actually a foreground object.", bestSeason: "Winter", difficulty: 3, constellation: "Puppis", nasaUrl: "https://science.nasa.gov/mission/hubble/science/explore-the-night-sky/hubble-messier-catalog/messier-46/" },
  M47: { name: "M47", fullName: "NGC 2422", ra: 7.610, dec: -14.500, type: "open cluster", magnitude: 4.4, distance: "1,600 light-years", description: "A bright, coarse open cluster visible to the naked eye near M46.", funFact: "Messier made an error in his coordinates — M47 was 'lost' until 1959!", bestSeason: "Winter", difficulty: 2, constellation: "Puppis", nasaUrl: "https://science.nasa.gov/mission/hubble/science/explore-the-night-sky/hubble-messier-catalog/messier-47/" },
  M50: { name: "M50", fullName: "NGC 2323", ra: 7.052, dec: -8.333, type: "open cluster", magnitude: 5.9, distance: "3,200 light-years", description: "An open cluster in Monoceros with a distinctive heart shape.", funFact: "M50 has a prominent red giant star near its centre that contrasts with the blue-white members.", bestSeason: "Winter", difficulty: 3, constellation: "Monoceros", nasaUrl: "https://science.nasa.gov/mission/hubble/science/explore-the-night-sky/hubble-messier-catalog/messier-50/" },
  M41: { name: "M41", fullName: "NGC 2287", ra: 6.783, dec: -20.733, type: "open cluster", magnitude: 4.5, distance: "2,300 light-years", description: "A bright open cluster about 4° south of Sirius.", funFact: "Aristotle may have recorded M41 as a 'cloudy spot' in 325 BC — making it an ancient discovery.", bestSeason: "Winter", difficulty: 1, constellation: "Canis Major", nasaUrl: "https://science.nasa.gov/mission/hubble/science/explore-the-night-sky/hubble-messier-catalog/messier-41/" },

  // === HYDRA ===
  M48: { name: "M48", fullName: "NGC 2548", ra: 8.228, dec: -5.800, type: "open cluster", magnitude: 5.8, distance: "1,500 light-years", description: "A large open cluster in Hydra, about the apparent size of the full Moon.", funFact: "Like M47, Messier originally recorded wrong coordinates — M48 was re-identified in 1934.", bestSeason: "Spring", difficulty: 3, constellation: "Hydra", nasaUrl: "https://science.nasa.gov/mission/hubble/science/explore-the-night-sky/hubble-messier-catalog/messier-48/" },
  M83: { name: "M83", fullName: "Southern Pinwheel Galaxy", ra: 13.617, dec: -29.867, type: "barred spiral galaxy", magnitude: 7.5, distance: "14.7 million light-years", description: "A bright face-on barred spiral, one of the nearest starburst galaxies.", funFact: "M83 has produced 6 observed supernovae — more than any other galaxy!", bestSeason: "Spring", difficulty: 3, constellation: "Hydra", nasaUrl: "https://science.nasa.gov/mission/hubble/science/explore-the-night-sky/hubble-messier-catalog/messier-83/" },
  M68: { name: "M68", fullName: "NGC 4590", ra: 12.656, dec: -26.745, type: "globular cluster", magnitude: 7.8, distance: "33,600 light-years", description: "A globular cluster in Hydra, fairly far south for Messier observers.", funFact: "M68 is one of the more metal-poor globulars, containing mostly ancient, first-generation stars.", bestSeason: "Spring", difficulty: 3, constellation: "Hydra", nasaUrl: "https://science.nasa.gov/mission/hubble/science/explore-the-night-sky/hubble-messier-catalog/messier-68/" },

  // === TRIANGULUM / PISCES ===
  M33: { name: "M33", fullName: "Triangulum Galaxy", ra: 1.564, dec: 30.660, type: "spiral galaxy", magnitude: 5.7, distance: "2.7 million light-years", description: "The third-largest galaxy in our Local Group, a face-on spiral in Triangulum. It is the most distant object visible to the naked eye.", funFact: "M33 is the most distant object visible to the naked eye — about 2.7 million light-years away.", bestSeason: "Autumn", difficulty: 3, constellation: "Triangulum", nasaUrl: "https://science.nasa.gov/mission/hubble/science/explore-the-night-sky/hubble-messier-catalog/messier-33/" },
  M74: { name: "M74", fullName: "Phantom Galaxy", ra: 1.611, dec: 15.783, type: "spiral galaxy", magnitude: 9.4, distance: "32 million light-years", description: "A perfect face-on grand-design spiral, but very faint with low surface brightness. It's been called the 'Phantom Galaxy' for its elusiveness.", funFact: "M74 is one of the hardest Messier objects to find due to its very low surface brightness.", bestSeason: "Autumn", difficulty: 5, constellation: "Pisces", nasaUrl: "https://science.nasa.gov/mission/hubble/science/explore-the-night-sky/hubble-messier-catalog/messier-74/" },

  // === CYGNUS ===
  M29: { name: "M29", fullName: "NGC 6913", ra: 20.399, dec: 38.517, type: "open cluster", magnitude: 7.1, distance: "4,000 light-years", description: "A small but easy-to-find open cluster near Sadr in the heart of Cygnus.", funFact: "M29 appears dimmer than expected — heavy interstellar dust dims it by about 2 magnitudes.", bestSeason: "Summer", difficulty: 2, constellation: "Cygnus", nasaUrl: "https://science.nasa.gov/mission/hubble/science/explore-the-night-sky/hubble-messier-catalog/messier-29/" },
  M39: { name: "M39", fullName: "NGC 7092", ra: 21.537, dec: 48.433, type: "open cluster", magnitude: 4.6, distance: "825 light-years", description: "A loose, bright open cluster near Deneb, best in binoculars due to its large size.", funFact: "M39 is only about 825 light-years away, making it one of the nearest open clusters.", bestSeason: "Summer", difficulty: 2, constellation: "Cygnus", nasaUrl: "https://science.nasa.gov/mission/hubble/science/explore-the-night-sky/hubble-messier-catalog/messier-39/" },

  // === SCUTUM ===
  M11: { name: "M11", fullName: "Wild Duck Cluster", ra: 18.851, dec: -6.267, type: "open cluster", magnitude: 5.8, distance: "6,200 light-years", description: "One of the richest and most compact open clusters known, with ~2,900 stars.", funFact: "Named because its brightest stars form a V-shape resembling a flock of wild ducks in flight.", bestSeason: "Summer", difficulty: 2, constellation: "Scutum", nasaUrl: "https://science.nasa.gov/mission/hubble/science/explore-the-night-sky/hubble-messier-catalog/messier-11/" },

  // === AQUARIUS / CAPRICORNUS ===
  M2: { name: "M2", fullName: "NGC 7089", ra: 21.558, dec: -0.823, type: "globular cluster", magnitude: 6.5, distance: "37,500 light-years", description: "One of the largest known globulars, spanning 175 light-years across.", funFact: "M2 contains about 150,000 stars and is approximately 37,500 light-years away.", bestSeason: "Autumn", difficulty: 3, constellation: "Aquarius", nasaUrl: "https://science.nasa.gov/mission/hubble/science/explore-the-night-sky/hubble-messier-catalog/messier-2/" },
  M72: { name: "M72", fullName: "NGC 6981", ra: 20.890, dec: -12.537, type: "globular cluster", magnitude: 9.3, distance: "55,400 light-years", description: "One of the remoter and fainter Messier globulars.", funFact: "M72 is about 55,000 light-years from us — one of the most distant Messier globulars.", bestSeason: "Autumn", difficulty: 4, constellation: "Aquarius", nasaUrl: "https://science.nasa.gov/mission/hubble/science/explore-the-night-sky/hubble-messier-catalog/messier-72/" },
  M30: { name: "M30", fullName: "NGC 7099", ra: 21.673, dec: -23.180, type: "globular cluster", magnitude: 7.2, distance: "26,100 light-years", description: "A compact globular cluster in Capricornus with a dense collapsed core.", funFact: "M30 has undergone 'core collapse' — its centre has become extremely dense.", bestSeason: "Autumn", difficulty: 3, constellation: "Capricornus", nasaUrl: "https://science.nasa.gov/mission/hubble/science/explore-the-night-sky/hubble-messier-catalog/messier-30/" },

  // === PEGASUS ===
  M15: { name: "M15", fullName: "Great Pegasus Cluster", ra: 21.500, dec: 12.167, type: "globular cluster", magnitude: 6.2, distance: "33,600 light-years", description: "One of the densest globular clusters known. It may harbour an intermediate-mass black hole at its core.", funFact: "M15 may contain an intermediate-mass black hole of ~4,000 solar masses at its core.", bestSeason: "Autumn", difficulty: 2, constellation: "Pegasus", nasaUrl: "https://science.nasa.gov/mission/hubble/science/explore-the-night-sky/hubble-messier-catalog/messier-15/" },
};

