import SpellLaw from "../../interfaces/SpellLaw"

const EnhancementLaw: SpellLaw = {
    UUID: "adc5e9c1-354d-47ee-8895-c7c8c85ae528",
    name: "Renforcement de sorts",
    fontAwesomeIcon: "magic",
    backgroundColor: [229, 255, 190],
    textColorClass: "dark",
    spells: [
        {
            UUID: "771ae0ed-eaa9-4ebb-8fa3-0b0e4b8a656d",
            level: 3,
            name: "Extension II",
            duration: "V",
            radius: "S",
            description: "Le prochain sort que le lanceur lancera dans les 3 rounds aura 2 x la durée normale; n'est pas cumulable avec les autres extensions"
        },
        {
            UUID: "873c8404-0c10-4bc3-89b9-de2d268795ab",
            level: 5,
            name: "Portée (+15m)",
            duration: "V",
            radius: "S",
            description: "Le prochain sort que le lanceur lancera dans les 3 rounds aura sa portée augmentée de 15m"
        },
        {
            UUID: "b4e67cbd-d563-4cfa-9b8d-360c8cf017ff",
            level: 7,
            name: "Extension III",
            duration: "_",
            radius: "_",
            description: "Comme [#UUID(771ae0ed-eaa9-4ebb-8fa3-0b0e4b8a656d)], la durée étant augmentée de 3 x la normale"
        },
        {
            UUID: "0b478d08-fec3-460c-abef-9e71437b9d8b",
            level: 10,
            name: "Portée (+30m)",
            duration: "_",
            radius: "_",
            description: "Comme [#UUID(873c8404-0c10-4bc3-89b9-de2d268795ab)], la portée étant augmentée de 30m"
        },
    ]
}
export default EnhancementLaw