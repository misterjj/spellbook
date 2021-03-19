import SpellLaw from "../../interfaces/SpellLaw"

const AlterationLaw: SpellLaw = {
    UUID: "154ba69f-4073-4e3f-8b39-6a2536569fa6",
    name: "Lois de l'invisibilité",
    fontAwesomeIcon: "exchange-alt",
    backgroundColor: [145, 25, 255],
    textColorClass: "light",
    spells: [
        {
            UUID: "f5c7e8de-b440-441d-a961-fd3dfb05f6e4",
            level: 1,
            name: "Auto-diminution",
            duration: "1mn/niv ([level*1]mn)",
            radius: "S",
            description: "Le lanceur peut se réduire jusqu'à 1/2 de sa masse normal (dans la plupart des cas en hauteur); il n'y a pas de diminution de force."
        },
        {
            UUID: "d50c1dc0-37b9-43e1-8b80-882552404b79",
            level: 2,
            name: "Auto-agrandissement",
            duration: "_",
            radius: "_",
            description: "Comme [#UUID(f5c7e8de-b440-441d-a961-fd3dfb05f6e4)], mais le lanceur peut se grandir de 1/2; il n'y a pas d'augmentation de la force"
        },
        {
            UUID: "2d0904a3-32fa-49da-96f1-f4e1bcba03b7",
            level: 3,
            name: "Science du changement",
            duration: "_",
            radius: "30m",
            description: "Le lanceur peut analyser le forme d'un autre être pour une utilisation ultérieure de Changement supreme"
        },
        {
            UUID: "65d1373e-2fa3-4eb1-a214-e24843204f31",
            level: 5,
            name: "Changement d'espèce",
            duration: "10mn/niv ([level*10]mn)",
            radius: "30m",
            description: "Le lanceur peut altérer la forme de la cible pour celle de toute race humanoïde souhaité."
        },
    ]
}
export default AlterationLaw