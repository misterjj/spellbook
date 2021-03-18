import SpellLaw from "../../interfaces/SpellLaw"

const IceLaw: SpellLaw = {
    UUID: "098ead98-2acc-4332-907f-28798f6cf41a",
    name: "Voie du froid",
    fontAwesomeIcon: "snowflake",
    backgroundColor: [57, 195, 237],
    textColorClass: "light",
    spells: [
        {
            UUID: "592d0e20-cee0-46dc-9cfb-7a9084f9aa32",
            level: 1,
            name: "Congélation-Liquide",
            duration: "C",
            radius: "3m",
            description: "Peut amener 27 dm3/niv ([level*27]dm3) de liquide sont refroidis jusqu'à congélation au rythme de 27 dm3/rd (la température ne peut pas descendre en dessous de -28°C)."
        },
        {
            UUID: "9bad1a48-7896-4914-b66d-352d6d2880bf",
            level: 2,
            name: "Refroidissement-Solide",
            duration: "24h",
            radius: "3m",
            description: "Tout solide inanimé de matière non-métallique peut être refroidi à -28°C au rythme de 27 dm3/rd."
        },
        {
            UUID: "7264adaa-cdc1-4b07-9099-9479dabc76e1",
            level: 3,
            name: "Mur de froid",
            duration: "1rd/niv ([level*1]rd)",
            radius: "30m",
            description: "Crée un mur translucide de froid intense (pouvant atteindre 3m x 3m x 30cm), toute traversée inflige un critique de froid A (pas de JR)"
        },
        {
            UUID: "9000c099-b098-4ede-ad76-879de009761c",
            level: 5,
            name: "Réfrigération-Solide",
            duration: "_",
            radius: "_",
            description: "Comme [#UUID(9bad1a48-7896-4914-b66d-352d6d2880bf)], le matériau pouvant être refroidi à -100°C au rythme de (27dm3 et 50°C)/rd"
        },
        {
            UUID: "eafe1128-19da-4c71-96cf-8aaa5b262c5e",
            level: 6,
            name: "Eclair de glace (30m)",
            duration: "_",
            radius: "30m",
            description: "Un éclaire de glace jaillit de la paume du lanceur; les résultats sont déterminés dans la table des éclaire de glace"
        },
        {
            UUID: "6ba7074f-cae7-4c4d-8f6b-b28a9d7e916e",
            level: 7,
            name: "Boule de froid (6m R)",
            duration: "_",
            radius: "30m",
            description: "Une boule de froid de 30cm jaillit de la paume du lanceur, elle explose et affecte une zone de 6m R, les résultats sont déterminés dans la table des boules de froid."
        },
        {
            UUID: "062ac1c2-3343-4118-abbc-576b910b2f2e",
            level: 8,
            name: "Mur de glace",
            duration: "P",
            radius: "30m",
            description: "Crée un mur de glace pouvant attendre 3m x 3m x (60cm à la base, 30cm au sommet); il peut être traversé en le faisant fondre (100 PdeC), en le taillant (50 hommes-round) ou renversé s'il n'est pas appuyé contre un mur."
        },
        {
            UUID: "06c2a136-3f9a-463c-a086-09328046cd5d",
            level: 9,
            name: "Evocation Glaçante (27 m3)",
            duration: "_",
            radius: "_",
            description: "Comme [#UUID(a52358c9-215c-4171-95d4-72c7c84c61d2)], sauf qu'il délivre des critiques de froid"
        },
        {
            UUID: "30cd2a87-c463-4954-bffb-e6067ecfe4b9",
            level: 10,
            name: "Cercle de Froid",
            duration: "_",
            radius: "_",
            description: "Comme [#UUID(b48559a5-6682-4a7e-83bb-473bc742793c)], sauf qu'il délivre des critiques de froid et que l'aire est de 6mR"
        },
    ]
}
export default IceLaw