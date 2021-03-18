import SpellLaw from "../../interfaces/SpellLaw"

const FireLaw: SpellLaw = {
    UUID: "65f4c71f-d9d7-4d6e-a332-a798955e841d",
    name: "Voie du feu",
    fontAwesomeIcon: "fire",
    backgroundColor: [255, 78, 72],
    textColorClass: "dark",
    spells: [
        {
            UUID: "0f3e9c65-c587-44fd-901b-6fa8dbe5d0ba",
            level: 1,
            name: "Ebullition-Liquide c",
            duration: "C",
            radius: "3m",
            description: "Peut amener 27 dm3/niv ([level*27]dm3) de liquide à ébullition au rythme de 27 dm3/rd."
        },
        {
            UUID: "dc6f00ea-af5e-457b-af7d-175e66b9bff8",
            level: 2,
            name: "Echauffement-solide",
            duration: "24h",
            radius: "3m",
            description: "Tout solide inanimé de matière non-métallique 27 dm3/niv ([level*27]dm3) peut être chauffer à 37°C au rythme de 27 dm3/rd."
        },
        {
            UUID: "10303598-fdfe-4fa3-b9f8-f74c8ae4d810",
            level: 3,
            name: "Feu de Bois",
            duration: "_",
            radius: "30 cm",
            description: "Fait s'enflammer et brûler tout bois. Tout le bois qui a pris feu doit se trouver à moins de 30 cm de la paume du lanceur."
        },
        {
            UUID: "bd01a23d-bfaa-4a63-bd4e-a33595774973",
            level: 4,
            name: "Mur de Feu",
            duration: "1rd/niv ([level*1]rd)",
            radius: "30 m",
            description: "Crée un mur de feu opaque (pouvant atteindre 3m x 3m x 1.8m). Quiconque passe à travers reçoit un critique de chaleur A (pas de JR)"
        },
        {
            UUID: "345d0a25-39bd-4407-a627-4946c344655f",
            level: 5,
            name: "Solide ardent",
            duration: "_",
            radius: "_",
            description: "Comme [#UUID(dc6f00ea-af5e-457b-af7d-175e66b9bff8)], la matière pouvant être chauffé à 250°C au rythme de 50°C/rd"
        },
        {
            UUID: "b9f0d4ad-2510-4d3f-b224-b43178d6e238",
            level: 6,
            name: "Eclair de Feu (30m)",
            duration: "_",
            radius: "30m",
            description: "Un éclaire de feu jaillit de la paume du lanceur; les résultats sont déterminés sur la table de éclaires de feu."
        },
        {
            UUID: "a52358c9-215c-4171-95d4-72c7c84c61d2",
            level: 7,
            name: "Evocation Flamboyante (27 m3)",
            duration: "_",
            radius: "3m",
            description: "Comme [#UUID(bd01a23d-bfaa-4a63-bd4e-a33595774973)], en créant un cube de flammes (pouvant atteindre 3m x 3m x 3m); le cube se forme et est efficace en 1 round. Chaque round passé à le traverser ou dedans inflige une critique de Chaleur A. La portée n'est que de 3m"
        },
        {
            UUID: "1b18899c-634f-4816-a4c6-cdc16654cbe3",
            level: 8,
            name: "Boule de Feu",
            duration: "_",
            radius: "30m",
            description: "Une boule de feu de 30cm jaillit de la paume du lanceur; elle explose en affectant une zone de 3m R; les résultat sont déterminés sur la table de Boules de Feu."
        },
        {
            UUID: "b48559a5-6682-4a7e-83bb-473bc742793c",
            level: 10,
            name: "Cercle enflammé",
            duration: "_",
            radius: "_",
            description: "Comme [#UUID(bd01a23d-bfaa-4a63-bd4e-a33595774973)], mais le mur mesure 3m de faut et forme un cercle de 3m R (15cm d'épaisseur), le lanceur étant en son centre (il n'est pas mobile)."
        }
    ]
}
export default FireLaw