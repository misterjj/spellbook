import SpellLaw from "../../interfaces/SpellLaw"

const DissipationLaw: SpellLaw = {
    UUID: "9288e4c7-6480-457c-94cd-90a5d06a118b",
    name: "Lois de dissipations",
    fontAwesomeIcon: "book",
    backgroundColor: [85, 92, 255],
    textColorClass: "light",
    spells: [
        {
            UUID: "48cfa199-3a0c-4eae-a784-a9b3d1246a8d",
            level: 2,
            name: "Annul.-Essence c *",
            duration: "C",
            radius: "S",
            description: "Lorsqu'un sort du royaume Essentiel est lancé contre le lanceur (de Annulation-Essence), le sort d'attaque doit réussir un JR avant que le lanceur fasse le sien. Pour le premier JR, le niveau d'attaque est celui du lanceur de Annulation-Essence, et le niveau de défense est celui du lanceur du sort d'attaque. Si je JR est réussi, le sort d'attaque intervient normalement."
        },
        {
            UUID: "bdf61b6f-7d7c-4a07-b39a-c188a017448b",
            level: 3,
            name: "Annul.-Mentalisme c *",
            duration: "C",
            radius: "S",
            description: "Comme [#UUID(48cfa199-3a0c-4eae-a784-a9b3d1246a8d)], pour les sorts de Mentaliste"
        },
        {
            UUID: "8fb4e32e-bce0-4911-888c-af0d64905072",
            level: 4,
            name: "Annul.-Théurgie c *",
            duration: "C",
            radius: "S",
            description: "Comme [#UUID(48cfa199-3a0c-4eae-a784-a9b3d1246a8d)], pour les sorts de Théurgie"
        },
        {
            UUID: "ab656cde-8210-4b41-8aad-786ee06abc7b",
            level: 5,
            name: "Dissip.-Essence (3m R) *",
            duration: "C",
            radius: "S",
            description: "Comme [#UUID(48cfa199-3a0c-4eae-a784-a9b3d1246a8d)], mais la zone de dissipation est de 3m R autour du lanceur. Si le rayon rencontre un sort déjà existant, celui-ci doit réussir un JR (modificateur +30) ou être annulé."
        },
        {
            UUID: "c467fbcf-3ec3-42be-a3f8-db0596451675",
            level: 6,
            name: "Dissip.-Mentali. (3m R) c *",
            duration: "C",
            radius: "S",
            description: "Comme [#UUID(ab656cde-8210-4b41-8aad-786ee06abc7b)], pour les sorts de Mentaliste"
        },
        {
            UUID: "b033ed6b-3465-46a8-b958-e03ab7fda5b5",
            level: 7,
            name: "Dissip.-Théurgie (3m R) c *",
            duration: "C",
            radius: "S",
            description: "Comme [#UUID(ab656cde-8210-4b41-8aad-786ee06abc7b)], pour les sorts de Théurgie"
        },
    ]
}
export default DissipationLaw