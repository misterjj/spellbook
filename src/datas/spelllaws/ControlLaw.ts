import SpellLaw from "../../interfaces/SpellLaw"

const ControlLaw: SpellLaw = {
    UUID: "1307a3dd-ed77-403e-9318-de4f1fcc5e9f",
    name: "Controle des sorts",
    fontAwesomeIcon: "magic",
    backgroundColor: [255, 94, 6],
    textColorClass: "light",
    spells: [
        {
            UUID: "8923052f-b309-4445-9327-361d1816d3c9",
            level: 1,
            name: "Reserve de sort",
            duration: "jusqu'au lancement d'un sort",
            radius: "S",
            description: "Le lanceur peut lancer ce sort avec tout sort qu'il veut réserver; celui-ci peut être alors lancé à tout moment, même nombre de point que le sort réservé. Aucun autre sort ne peut être lancé quand un sort est réservé"
        },
    ]
}
export default ControlLaw