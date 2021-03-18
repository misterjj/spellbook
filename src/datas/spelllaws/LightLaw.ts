import SpellLaw from "../../interfaces/SpellLaw"

const lightLaw: SpellLaw = {
    UUID: "27e80d78-3350-4aaf-affe-f497abb18c61",
    name: "Loie de la lumière",
    fontAwesomeIcon: "bolt",
    backgroundColor: [240, 237, 208],
    textColorClass: "dark",
    spells: [
        {
            UUID: "0b0cc457-5f01-46f7-a709-205300f28af4",
            level: 1,
            name: "Projection lumineuse",
            duration: "10mn/niv ([level*10]mn)",
            radius: "7.5m",
            description: "Un rayon de lumière (comparable à une lampe-torche) jaillit de la paume du lanceur. la porté effective est de 15m"
        },
        {
            UUID: "92cb90bd-d144-4675-bd09-ee8f178b79ee",
            level: 2,
            name: "Eclair choquant (30m)",
            duration: "_",
            radius: "30m",
            description: "Un éclaire de lumière intense et \"chargé\" jaillit de lau maume du lanceur; les résultats sont déterminés dans la table des éclairs choquantes"
        },
        {
            UUID: "7b5d8fb2-6b8a-4708-a3e8-c0240a4d44bb",
            level: 3,
            name: "Lumière (3m R)",
            duration: "10mn/niv ([level*10]mn)",
            radius: "T",
            description: "Eclaire une zone de 3m R autour du point touché. Si ce point est une être ou une objet mobile, la zone se déplacera avec lui."
        },
        {
            UUID: "09919e6b-62ff-42b9-ba23-09f49d493fff",
            level: 4,
            name: "Ombrage",
            duration: "10mn/niv ([level*10]mn)",
            radius: "30m R",
            description: "Toutes les ombres dans le rayon d'effet s'approfondissent, aidant ainsi la dissimulation de +25"
        },
        {
            UUID: "3c12a5fc-327e-4dad-bcaf-a75ec9dd30eb",
            level: 5,
            name: "Lumière soudaine",
            duration: "_",
            radius: "30m",
            description: "Crée une sphère de 3m R de lumière intense; tous ceux qui sont englobés sont étourdis pendant 1 rd/5 d'échec"
        },
        {
            UUID: "775cb310-157d-4937-b724-45a2fe612480",
            level: 6,
            name: "Obscurité (3m R)",
            duration: "_",
            radius: "_",
            description: "Comme [#UUID(7b5d8fb2-6b8a-4708-a3e8-c0240a4d44bb)], mais la zone est comme une nuit obscure"
        },
        {
            UUID: "542c33c3-c0eb-45cb-a36b-87ec186f3e82",
            level: 7,
            name: "Lumière (15m R)",
            duration: "_",
            radius: "_",
            description: "Comme [#UUID(7b5d8fb2-6b8a-4708-a3e8-c0240a4d44bb)], le rayon pouvant atteindre 15m (il peut être modifié après une concentration de 1rd)"
        },
        {
            UUID: "",
            level: 8,
            name: "Eclair choquant (90m)",
            duration: "_",
            radius: "_",
            description: "Comme [#UUID(92cb90bd-d144-4675-bd09-ee8f178b79ee)], la portée étant de 90m"
        },
        {
            UUID: "174429ec-9f7f-49b7-90eb-8283212e6e25",
            level: 9,
            name: "Obscurité (15m R)",
            duration: "_",
            radius: "_",
            description: "Comme [#UUID(775cb310-157d-4937-b724-45a2fe612480)], le rayon pouvant atteindre 15m (il peut être modifié après une concentration de 1rd)"
        },
        {
            UUID: "69b9a045-4f04-4d91-81b4-3c37141c60c3",
            level: 9,
            name: "Eclair foudroyant (30m)",
            duration: "_",
            radius: "_",
            description: "Comme [#UUID(92cb90bd-d144-4675-bd09-ee8f178b79ee)], mais c'est une eclair foudroyant qui est lancé et les résultats sont déterminés sur la table des eclairs foudroyant."
        },
    ]
}
export default lightLaw