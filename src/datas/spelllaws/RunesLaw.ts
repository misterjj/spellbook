import SpellLaw from "../../interfaces/SpellLaw"

const RunesLaw: SpellLaw = {
    UUID: "4791140e-be46-4af8-ac50-f8676d4a50db",
    name: "Maitrise des Runes",
    fontAwesomeIcon: "signature",
    backgroundColor: [45, 45, 45],
    textColorClass: "light",
    spells: [
        {
            UUID: "598a7601-1521-49a0-8cba-66370a9fae18",
            level: 1,
            name: "Réserve de sorts",
            duration: "_",
            radius: "_",
            description: "Comme [#UUID]"
        },
        {
            UUID: "a71960e6-aae5-40cc-8eb8-6245e39928e5",
            level: 2,
            name: "Rune I",
            duration: "jusqu'au lancement de la rune",
            radius: "T",
            description: "Ce sort inscrit une sort sur une morceau de papier spécialement préparé; la rune peut alors être utilisée pour lancer une fois le sort inscrit. Le lanceur dépense les points de pouvoir pour lancer le sort inscrit et les point de pouvoir pour lancer le sort Rune. Rune I ne peut inscrire que des sorts de 1er niveau. La Rune peut être conçue pour affecter le lecteur."
        },
        {
            UUID: "80474a9f-9279-42c1-bd4f-646a232c7e90",
            level: 6,
            name: "Rune II",
            duration: "_",
            radius: "_",
            description: "Comme [#UUID(a71960e6-aae5-40cc-8eb8-6245e39928e5)], mais le lanceur peut inscrire des sort de niveau 1-2"
        },
        {
            UUID: "59e5936f-3c52-454f-b451-8ecad4e3abb4",
            level: 8,
            name: "Rune III",
            duration: "_",
            radius: "_",
            description: "Comme [#UUID(a71960e6-aae5-40cc-8eb8-6245e39928e5)], mais le lanceur peut inscrire des sort de niveau 1-3"
        },
        {
            UUID: "8cbdc9db-7536-4081-b93e-aadef17cd12f",
            level: 10,
            name: "Rune V",
            duration: "_",
            radius: "_",
            description: "Comme [#UUID(a71960e6-aae5-40cc-8eb8-6245e39928e5)], mais le lanceur peut inscrire des sort de niveau 1-5"
        },
    ]
}
export default RunesLaw