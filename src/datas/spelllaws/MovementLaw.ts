import SpellLaw from "../../interfaces/SpellLaw"

const MovementLaw: SpellLaw = {
    UUID: "8923052f-b309-4445-9327-361d1816d3c9",
    name: "Liaisons supérieure",
    fontAwesomeIcon: "running",
    backgroundColor: [173, 255, 72],
    textColorClass: "dark",
    spells: [
        {
            UUID: "c0c94c2c-c4f0-4365-9ca1-2bfb1965698d",
            level: 1,
            name: "Bond *",
            duration: "1rd",
            radius: "30m",
            description: "Permet à la cible de faire un bond latéral de 15m ou vertical de 6m pendant le round où le sort a été lancé."
        },
        {
            UUID: "2f26314a-283b-435b-ac21-6cdf327dbd56",
            level: 2,
            name: "Atterrissage *",
            duration: "jusqu'à l'atterrissage",
            radius: "30m",
            description: "Permet à la cible d'atterrir sans dommage après une de 6 m/niv ([level*6]m) du lanceur, et de soustraire cette distance de la gravité de toute chute plus longue."
        },
        {
            UUID: "9d19ff96-279a-4d96-99e8-0dcb63dd0fd8",
            level: 3,
            name: "Transposition (30m)",
            duration: "_",
            radius: "3m",
            description: "Le lanceur téléporte la cible en un point distant de 30m maximum, mais il ne doit pas u avoir de barrière s'interposant entre la cible est le point. Une barrière est tout ce qui ne peut pas être traversé physiquement"
        },
        {
            UUID: "b7f4d63a-283e-44db-a8b6-35da6614ff42",
            level: 4,
            name: "Lévitation",
            duration: "1mn/niv ([level*1]mn)",
            radius: "3m",
            description: "La cible peut se déplacer verticalement, vers le haut comme vers le bas, de 3 m/rd; les déplacement horizontaux ne sont possibles que par les moyens normaux."
        },
        {
            UUID: "a8b2bf58-1e94-4d32-ae67-a26ef94398bb",
            level: 5,
            name: "Vol (22.5m/rd)",
            duration: "_",
            radius: "_",
            description: "Comme [#UUID(b7f4d63a-283e-44db-a8b6-35da6614ff42)] mais la cible peut voler à la vitesse de 22.5m/rd (8km/h)."
        },
    ]
}
export default MovementLaw