import SpellLaw from "../../interfaces/SpellLaw"

const LockLaw: SpellLaw = {
    UUID: "d1048f1b-5c1c-42d0-819c-28031f80d208",
    name: "Lois de l'ouverture",
    fontAwesomeIcon: "lock",
    backgroundColor: [130, 124, 153],
    textColorClass: "light",
    spells: [
        {
            UUID: "58b22f30-58b8-47d7-861a-48bddba88943",
            level: 1,
            name: "Serrure",
            duration: "_",
            radius: "30m",
            description: "Le lanceur peut provoquer la fermeture de toute serrure qu'il peut voir dans les 30m (la serrure est normalement fermée et peut être ouverte normalement)."
        },
        {
            UUID: "130a3817-0a94-4318-8596-8df1bd10c619",
            level: 2,
            name: "Serrure magique",
            duration: "1 min/niv ([level*1]min)",
            radius: "T",
            description: "Une porte (ou une boîte) peut être fermée \"magiquement\"; la porte peut être normalement brisée ou le sort dissipé, mais la porte ne peut pas être ouverte autrement."
        },
        {
            UUID: "b939783f-16a3-420f-b1a0-96e0486945c0",
            level: 3,
            name: "Science des serrures",
            duration: "_",
            radius: "T",
            description: "Donne au lanceur +20 au crochetage de la serrure analysé, et +10 à tout personne à qui décrit la fermeture."
        },
        {
            UUID: "bd2db8e2-d933-4695-b313-af172cee115b",
            level: 4,
            name: "Ouverture I",
            duration: "_",
            radius: "T",
            description: "Quand ce sort est lancé sur une serrure, il y a 20% de chances qu'une serrure normalement s'ouvre, et 45% de chances qu'une serrure magique s'ouvre (l'échec implique qu'il y a 10% de chances de déclencher des piège reliés). Les jets sont sans limites, et la qualité de la serrure peut modifier les jets"
        },
        {
            UUID: "b939783f-16a3-420f-b1a0-96e0486945c0",
            level: 5,
            name: "Science des piège",
            duration: "_",
            radius: "T",
            description: "Comme [#UUID(b939783f-16a3-420f-b1a0-96e0486945c0)], mais s'applique au désamorçage des pièges."
        },
        {
            UUID: "fad20908-6344-4676-89f7-d6e73df57ce9",
            level: 6,
            name: "Désarmement I",
            duration: "_",
            radius: "_",
            description: "Comme [#UUID(bd2db8e2-d933-4695-b313-af172cee115b)], mais s'applique au désamorçage des pièges."
        },
        {
            UUID: "c9b563ff-1d27-4951-a659-e1ee02eafe1d",
            level: 7,
            name: "Gauchissement",
            duration: "P",
            radius: "15m",
            description: "Provoque le gonflement d'une porte et son blocage dans l'encadrement (get de 1-100 pour la gravité de légèrement coincée à impossible d'ouvrir)."
        },
        {
            UUID: "47c96954-2b77-4f34-83c0-f748f9a7ce6e",
            level: 8,
            name: "Affaiblissement",
            duration: "P",
            radius: "15m",
            description: "Réduit la force inhérente d'une porte de 50%"
        },
        {
            UUID: "f10d1c37-bf14-4aa9-b1c5-5d03595db78f",
            level: 10,
            name: "Ouverture II",
            duration: "_",
            radius: "_",
            description: "Comme [#UUID(bd2db8e2-d933-4695-b313-af172cee115b)], les chances étant de 40%/90%"
        },
    ]
}
export default LockLaw