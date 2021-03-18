import SpellLaw from "../../interfaces/SpellLaw"

const DetectionLaw: SpellLaw = {
    UUID: "84c77975-5054-4ad8-9c21-25d3d7f84215",
    name: "Lois des detections",
    fontAwesomeIcon: "wifi",
    backgroundColor: [153, 15, 129],
    textColorClass: "light",
    spells: [
        {
            UUID: "aae52c56-5bda-460f-904c-f40f8a47ce86",
            level: 1,
            name: "Détection d'Essence c",
            duration: "1mn/niv ([level*1]mn) (C)",
            radius: "30m",
            description: "Détecte tout sort ou object actif du Royaume de l'Essence; le lanceur peut se concentrer sur une zone de 1.5m R à chaque round."
        },
        {
            UUID: "f531af0d-cbfa-4f09-89a3-0d6101e74b91",
            level: 2,
            name: "Détection du Mentalisme c",
            duration: "_",
            radius: "_",
            description: "Comme [#UUID(aae52c56-5bda-460f-904c-f40f8a47ce86)], mais pour le royaume de Mentaliste"
        },
        {
            UUID: "a2f130d4-765a-4ac0-8ea2-f29092751c5b",
            level: 3,
            name: "Détection du Théurgie c",
            duration: "_",
            radius: "_",
            description: "Comme [#UUID(aae52c56-5bda-460f-904c-f40f8a47ce86)], mais pour le royaume de Théurgique"
        },
        {
            UUID: "32b3251c-0126-4f24-a271-0f5ba31c04b8",
            level: 5,
            name: "Détection de l'invisible c",
            duration: "_",
            radius: "_",
            description: "Comme [#UUID(aae52c56-5bda-460f-904c-f40f8a47ce86)], mais détecte les chose invisibles; toutes les attaques contre ce qui a été ainsi détecté se dont à -50"
        },
        {
            UUID: "3b7ba39b-1d70-4231-ac79-4fa375b8b17e",
            level: 6,
            name: "Détection des piège c",
            duration: "_",
            radius: "_",
            description: "Comme [#UUID(aae52c56-5bda-460f-904c-f40f8a47ce86)], mais donne 75% de chances de détecter un piège (peut être modifié par certains pièges)."
        },
        {
            UUID: "a121404a-7b5f-47c2-9b4d-ffa26460f47c",
            level: 7,
            name: "Détection du mal c",
            duration: "_",
            radius: "_",
            description: "Comme [#UUID(aae52c56-5bda-460f-904c-f40f8a47ce86)], mais détecte si un être est maléfique ou un objet créé par maléfice ou utilisé longtemps par une personne très maléfique"
        },
        {
            UUID: "970c92c2-15e9-48c9-8852-6d2adf6d4e82",
            level: 8,
            name: "Localisation c",
            duration: "1mn/niv ([level*1]mn) (C)",
            radius: "30m",
            description: "Donne la direction et la distance de tout objet spécifique ou lieu bien connu du lanceur ou dont il a eu une description détaillé."
        },
        {
            UUID: "ea161009-e207-496f-9942-94de03dde4da",
            level: 10,
            name: "Perception d'enchantement c",
            duration: "_",
            radius: "_",
            description: "Comme [#UUID(aae52c56-5bda-460f-904c-f40f8a47ce86)], mais donnera une estimation de la puissance de la personne (niv) de l'objet ou du sort examiné."
        },
    ]
}
export default DetectionLaw