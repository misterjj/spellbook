import SpellLaw from "../../interfaces/SpellLaw"

const MindLaw: SpellLaw = {
    UUID: "71d429fc-4dde-4f9a-8f31-e3045c197980",
    name: "Maitrise des esprits",
    fontAwesomeIcon: "brain",
    backgroundColor: [100, 100, 100],
    textColorClass: "light",
    spells: [
        {
            UUID: "a717dfc0-0255-468b-9b79-6300324e980b",
            level: 1,
            name: "Sommeil V",
            duration: "_",
            radius: "30m ",
            description: "Les cibles tombent dans un sommeil naturel; le nombre total de niveaux pouvant être affecté est 5 (5 de niv 1; 1 de niv 4 et 1 de niv 1, etc.). Toutes cibles doivent être dans le champ de vison du lanceur. Celui-ci devrait déterminer les priorités de cible, c-à-d quelle est la 1ère cible potentielle, la 2eme, etc."
        },
        {
            UUID: "7dfe7399-68c1-4e76-ac64-22bbaf479d56",
            level: 2,
            name: "Charme",
            duration: "1 h/niv ([level*1]h)",
            radius: "30m",
            description: "La cible humanoïde croit que le lanceur est un bon ami."
        },
        {
            UUID: "328063e1-629d-4424-9f2e-eafaa26de6d1",
            level: 3,
            name: "Sommeil VI",
            duration: "_",
            radius: "_",
            description: "Comme [#UUID(a717dfc0-0255-468b-9b79-6300324e980b)], en affectant un total de 7 niveaux."
        },
    ]
}
export default MindLaw