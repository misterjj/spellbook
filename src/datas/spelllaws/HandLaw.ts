import SpellLaw from "../../interfaces/SpellLaw"

const HandLaw: SpellLaw = {
    UUID: "a177499e-7c95-43ae-b7e2-eac28a9f5cec",
    name: "Main essentielle",
    fontAwesomeIcon: "hand-sparkles",
    backgroundColor: [204, 105, 39],
    textColorClass: "light",
    spells: [
        {
            UUID: "38ea89f3-f5d7-4780-aa94-dc76c4c357d3",
            level: 1,
            name: "Vibrations (0.5 kg)",
            duration: "1rd/niv ([level*1]rd)",
            radius: "30m",
            description: "Un objet de 500g se met à vibrer rapidement; d'il est fragile, il peut se casser (faire un JR). Si l'objet est tenu par une créature, celle-ci doit réussir un JR ou est victime d'une maladresse (chanque round)."
        },
        {
            UUID: "8c59363c-8a07-4701-8931-2a45f2e74a71",
            level: 2,
            name: "Pression (0.5 kg)",
            duration: "1mn/niv ([level*1]mn)",
            radius: "30m",
            description: "Exerce une pression de 500g sur une personne ou un objet. L'objet ne peut pas être déplacé avec la pression et celle-ci ne peut être dirigée que dans une seule direction."
        },
        {
            UUID: "1caf47ff-51c2-4dea-a86a-2464a8fa2d57",
            level: 3,
            name: "Télékinésie (0.5 kg)",
            duration: "1mn/niv ([level*1]mn)",
            radius: "30m",
            description: "Peut déplacer un objet de 500g de 30cm/s sans accélération. Les être vivants ou les objets en contact avec un être vivant ont droit à un JR normale basé sur la créature vivante. Si le lanceur stoppe sa concentration avant la fin de la durée, l'objet restera immobile, comme sous l'influence de Pression."
        },
        {
            UUID: "56e077f2-ef81-4553-9984-81ae86a8b38a",
            level: 4,
            name: "Vibrations (2.5 kg)",
            duration: "_",
            radius: "_",
            description: "Comme [#UUID(38ea89f3-f5d7-4780-aa94-dc76c4c357d3)], le poids limite étant de 2.5Kg"
        },
        {
            UUID: "05c999c4-ba20-4497-ad34-f5bd47211a5f",
            level: 5,
            name: "Pression (2.5 kg)",
            duration: "_",
            radius: "_",
            description: "Comme [#UUID(8c59363c-8a07-4701-8931-2a45f2e74a71)], le poids limite étant de 2.5Kg"
        },
        {
            UUID: "a557fea3-7088-41b4-9135-27593e3fb71a",
            level: 6,
            name: "Télékinésie (2.5 kg)",
            duration: "_",
            radius: "_",
            description: "Comme [#UUID(1caf47ff-51c2-4dea-a86a-2464a8fa2d57)], le poids limite étant de 2.5Kg"
        },
        {
            UUID: "2366e4e1-6472-4d53-ba5a-bd5f5d6efd7f",
            level: 7,
            name: "Vibrations (12.5 kg)",
            duration: "_",
            radius: "_",
            description: "Comme [#UUID(38ea89f3-f5d7-4780-aa94-dc76c4c357d3)], le poids limite étant de 12.5Kg"
        },
        {
            UUID: "18389c28-afb4-4684-89a0-8f4159705a23",
            level: 8,
            name: "Pression (12.5 kg)",
            duration: "_",
            radius: "_",
            description: "Comme [#UUID(8c59363c-8a07-4701-8931-2a45f2e74a71)], le poids limite étant de 12.5Kg"
        },
        {
            UUID: "20d8c990-01e0-4e4b-87f0-e6412e000591",
            level: 9,
            name: "Vibrations (25 kg)",
            duration: "_",
            radius: "_",
            description: "Comme [#UUID(38ea89f3-f5d7-4780-aa94-dc76c4c357d3)], le poids limite étant de 25Kg"
        },
    ]
}
export default HandLaw