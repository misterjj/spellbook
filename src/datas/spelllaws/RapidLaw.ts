import SpellLaw from "../../interfaces/SpellLaw"

const RapidLaw: SpellLaw = {
    UUID: "1e7dc8d6-61d3-48b7-89fd-331f68c6949f",
    name: "Lois de la célérité",
    fontAwesomeIcon: "fast-forward",
    backgroundColor: [109, 138, 43],
    textColorClass: "light",
    spells: [
        {
            UUID: "52cdaef8-fb94-48ea-945a-9eeccc8965cb",
            level: 1,
            name: "Course I",
            duration: "10mn/niv ([level*10]mn)",
            radius: "3m",
            description: "La cible peut courir (2 x l'allure de marche) sans se fatiguer (sans dépenser de point de fatigue), mais le sort est annulé dès qu'elle s'arrête ou entreprend une nouvelle action."
        },
        {
            UUID: "8fb79980-cef0-4d71-a2b5-29f07a2677eb",
            level: 2,
            name: "Vitesse I",
            duration: "1 rd",
            radius: "3m",
            description: "La cible peut agir au double de la vitesse normale, mais doit immédiatement après passer un nombre de rounds à demi-vitesse (50% de son activité normale) égal au nombre de rounds accélérés."
        }
    ]
}
export default RapidLaw