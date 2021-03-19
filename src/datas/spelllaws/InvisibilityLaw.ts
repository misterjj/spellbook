import SpellLaw from "../../interfaces/SpellLaw"

const InvisibilityLaw: SpellLaw = {
    UUID: "4db82b64-7b48-4a15-8b38-912e7dffc2fe",
    name: "Lois de l'invisibilité",
    fontAwesomeIcon: "eye-slash",
    backgroundColor: [255, 255, 255],
    textColorClass: "dark",
    spells: [
        {
            UUID: "d202875a-0cd9-45cd-bb6c-f01d04259f42",
            level: 2,
            name: "Invisible I",
            duration: "24 ou V",
            radius: "3m",
            description: "Un objet unique est rendu invisible (1 vêtement, un corps nu, etc.) pendant 24h ou jusqu'au ce que l'objet soit frappé par un coup violent (atteint par une arme, chute, etc) ou que l'objet réalise un mouvement violent (un attaque)"
        },
        {
            UUID: "5f770b37-6e73-4439-a90a-5aa4ebacaf84",
            level: 4,
            name: "Invisible I (30cm R)",
            duration: "_",
            radius: "_",
            description: "Comme [#UUID(d202875a-0cd9-45cd-bb6c-f01d04259f42)] mais tout ce qui se trouve dans les 30cm de la cible est aussi invisible, tant que cela reste dans les 30cm R"
        },
        {
            UUID: "6549079b-5009-4e66-aa7b-643e433318f7",
            level: 6,
            name: "Invisible I (30cm R max)",
            duration: "_",
            radius: "_",
            description: "Comme [#UUID(5f770b37-6e73-4439-a90a-5aa4ebacaf84)] mais le lanceur peut faire varier le rayon jusqu'à 30cm"
        },
        {
            UUID: "09c3ab1b-6cf8-42da-9837-6e89b47ea91f",
            level: 8,
            name: "Invisible I (3m R)",
            duration: "_",
            radius: "_",
            description: "Comme [#UUID(5f770b37-6e73-4439-a90a-5aa4ebacaf84)], le rayon constant étant de 3m."
        },
        {
            UUID: "fe7013ed-320d-4fc7-a0db-72bc3ddc138d",
            level: 10,
            name: "Invisible III",
            duration: "_",
            radius: "_",
            description: "Comme [#UUID(d202875a-0cd9-45cd-bb6c-f01d04259f42)], 3 object pouvant être affecté"
        },
    ]
}
export default InvisibilityLaw