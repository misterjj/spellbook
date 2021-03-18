import SpellLaw from "../../interfaces/SpellLaw"

const EarthLaw: SpellLaw = {
    UUID: "91c58da8-3e68-4760-b324-57f8d78c612d",
    name: "Voie de la terre",
    fontAwesomeIcon: "globe-europe",
    backgroundColor: [135, 69, 26],
    textColorClass: "light",
    spells: [
        {
            UUID: "ecc4cc73-c71f-4194-b949-2bcd70dc58ec",
            level: 1,
            name: "Corde enchantée",
            duration: "C",
            radius: "3m/niv ([level*3]m)",
            description: "Si le lanceur tient une extrémité d'une corde, il peut le faire se déplacer dans toutes direction de toute sa longueur et se fixer par un noeud (elle ne peut pas attaquer ou se fixer sur un être vivant)."
        },
        {
            UUID: "0b1800e9-3b8d-406b-93f1-5c770eabdad3",
            level: 2,
            name: "Labbourage",
            duration: "P",
            radius: "30m",
            description: "Donne à 2.7m3 de terre la consistance du sol labouré."
        },
        {
            UUID: "0c25b683-e19e-460b-b246-fd1feaa52d41",
            level: 4,
            name: "Mur de terre",
            duration: "1mn/niv ([level*1]mn)",
            radius: "30m",
            description: "Crée un mur de terre tassée pouvant atteindre 3m x 3m x (90cm à la basse, 30 cm au sommet); il peut être creusé (10 hommes-round au sommet)."
        },
        {
            UUID: "01a82504-9b60-49eb-86e3-9b0b5be3c77e",
            level: 5,
            name: "Extension de fissure",
            duration: "-",
            radius: "30m",
            description: "Toute fissure ou fente existant dans une matière pouvant atteindre 3m x 3m x 3m de section s'étendra jusqu'à cette limite"
        },
        {
            UUID: "80a9b29f-4002-4de5-abab-22bf09da7f2e",
            level: 7,
            name: "Mur de pierre",
            duration: "-",
            radius: "-",
            description: "Comme [#UUID(0c25b683-e19e-460b-b246-fd1feaa52d41)] mais c'est un mur de pierre pouvant atteindre 3m x 3m x 30cm; il peut être creusé en 200 hommes-round (trou de 30cm R)"
        },
        {
            UUID: "239d2eab-c634-43b9-b515-ced4503b82da",
            level: 9,
            name: "Pierre en Terre",
            duration: "P",
            radius: "30m",
            description: "Transforme 2.7m3 de pierre en terre tassée; la transformation est progressive et dure 3rd."
        },
        {
            UUID: "f23d3ca1-3ef4-4f9c-8606-e366bb4c7f35",
            level: 10,
            name: "Mur de terre Suprême",
            duration: "_",
            radius: "_",
            description: "Comme [#UUID(0c25b683-e19e-460b-b246-fd1feaa52d41)], la durée étant permanente"
        },
    ]
}
export default EarthLaw