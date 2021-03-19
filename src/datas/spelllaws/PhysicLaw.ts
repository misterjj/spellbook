import SpellLaw from "../../interfaces/SpellLaw"

const PhysicLaw: SpellLaw = {
    UUID: "b650a10a-05e1-4d32-b646-38b7b8224027",
    name: "Surpuissance physique",
    fontAwesomeIcon: "user",
    backgroundColor: [255, 118, 150],
    textColorClass: "light",
    spells: [
        {
            UUID: "d7f6158f-357e-443f-b111-58f6b8467b65",
            level: 1,
            name: "Masse Volumique *",
            duration: "_",
            radius: "30m",
            description: "Le lanceur peut déterminer exactement la masse et/ou le poids de 1 objet"
        },
        {
            UUID: "14ffb99f-c3a6-4653-bc52-a38a33b2f90d",
            level: 2,
            name: "Surpuissance Auditive",
            duration: "10min/niv ([level*10]min)",
            radius: "3m",
            description: "La cible gagne une audition double de la normale (+50 en perception n'impliquant que l'ouïe, +25 en perception impliquant l'ouïe et d'autres sens)."
        },
        {
            UUID: "d77208ec-1eeb-495e-b9c0-972e462295e6",
            level: 3,
            name: "Equilibre *",
            duration: "V",
            radius: "3m",
            description: "Ajoute +50 à tous les jets concernant un manoeuvre lente (ex. marcher sur une poutre de 7.5cm de large)."
        },
    ]
}
export default PhysicLaw