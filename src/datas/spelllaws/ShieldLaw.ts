import SpellLaw from "../../interfaces/SpellLaw"

const ShieldLaw: SpellLaw = {
    UUID: "d48600f8-1068-4f14-8b56-35ac557099b9",
    name: "Boucliers élémentaux",
    fontAwesomeIcon: "shield-virus",
    backgroundColor: [128, 115, 42],
    textColorClass: "light",
    spells: [
        {
            UUID: "a20172aa-bea0-4b22-a555-838ce8a8cf62",
            level: 1,
            name: "Résistance à la lumière (1 cible)",
            duration: "1min/niv ([level*1]min)",
            radius: "3m",
            description: "La cible est complètement protégée de toutes les lumières naturelles (pas les éclairs), et ajoute +10 à ses JR contre la lumière (électrique= et -10 aux attaques élémentales d'électricité contre elle."
        },
        {
            UUID: "5c2341b7-8ba6-401c-8af9-9c7ccafea67e",
            level: 2,
            name: "Résistance à la chaleur (1 cible)",
            duration: "_",
            radius: "_",
            description: "Comme [#UUID(a20172aa-bea0-4b22-a555-838ce8a8cf62)], mais protège de la chaleur naturel jusqu'à 93°C et modifie les sorts impliquant la chaleur par 10."
        },
        {
            UUID: "45ac5315-49ed-4e29-ae9f-ef0623ccfe5f",
            level: 3,
            name: "Résistance au froid (1 cible)",
            duration: "_",
            radius: "_",
            description: "Comme [#UUID(a20172aa-bea0-4b22-a555-838ce8a8cf62)], mais protège de la chaleur naturel jusqu'à -28°C et modifie les sorts impliquant le froid par 10."
        },
        {
            UUID: "09318ac7-c44e-44b1-8cd3-5064aaeadd89",
            level: 4,
            name: "Résistance à la lumière (3m R)",
            duration: "_",
            radius: "_",
            description: "Comme [#UUID(a20172aa-bea0-4b22-a555-838ce8a8cf62)], mais tous être à moins de 3m de la cible est protégé."
        },
        {
            UUID: "ecf3cb24-7bad-448a-b160-b1b861ba6ece",
            level: 5,
            name: "Résistance à la chaleur (3m R)",
            duration: "_",
            radius: "_",
            description: "Comme [#UUID(5c2341b7-8ba6-401c-8af9-9c7ccafea67e)], mais tous être à moins de 3m de la cible est protégé."
        },
        {
            UUID: "eb2aac50-537c-4899-a437-9ea596835245",
            level: 6,
            name: "Résistance au froid (3m R)",
            duration: "_",
            radius: "_",
            description: "Comme [#UUID(45ac5315-49ed-4e29-ae9f-ef0623ccfe5f)], mais tous être à moins de 3m de la cible est protégé."
        },
    ]
}
export default ShieldLaw