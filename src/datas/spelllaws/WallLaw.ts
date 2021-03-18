import SpellLaw from "../../interfaces/SpellLaw"

const WallLaw: SpellLaw = {
    UUID: "600afa5b-125d-43d2-a867-4a0fa5ad24b5",
    name: "Barrage",
    fontAwesomeIcon: "shield-alt",
    backgroundColor: [230, 213, 69],
    textColorClass: "dark",
    spells: [
        {
            UUID: "35408c31-3160-4e4b-a3ce-6d127c6b48d5",
            level: 1,
            name: "Protection I",
            duration: "1mn/niv ([level*1]mn)",
            radius: "3m",
            description: "Soustrait 5 à tous les JAE dirigées contre l'être protégé et ajoute 5 à ses JR contre les sors"
        },
        {
            UUID: "9d069141-fd40-4fb6-94c8-0b68182d48cf",
            level: 3,
            name: "Protection I (3m R)",
            duration: "_",
            radius: "_",
            description: "Comme [#UUID(35408c31-3160-4e4b-a3ce-6d127c6b48d5)], mais tous les êtres à moins de 3m de la cible en bénéficient."
        },
        {
            UUID: "52add195-504e-442d-bc86-bc8fa890c39f",
            level: 5,
            name: "Protection II",
            duration: "_",
            radius: "_",
            description: "Comme [#UUID(35408c31-3160-4e4b-a3ce-6d127c6b48d5)], mais avec un bonus de 10"
        },
        {
            UUID: "ffd250a6-986c-444d-857a-e6a4f3e7c4f3",
            level: 7,
            name: "Protection II (3m R)",
            duration: "_",
            radius: "_",
            description: "Comme [#UUID(52add195-504e-442d-bc86-bc8fa890c39f)], mais tous les êtres à moins de 3m de la cible en bénéficient."
        },
        {
            UUID: "983164fa-21a8-4190-af30-b4aef89cb376",
            level: 8,
            name: "Bouclier Essentiel c",
            duration: "C",
            radius: "S",
            description: "Crée un bouclier miroitant devant le lanceur : il soustrait 10 à tous les jets d'attaques Essentielles frontales dirigées sur le lanceur (Basiques et élémentales). Si le lanceur n'entreprend pas d'autre action durant un round, il peut parer une attaque par sort. La parade consiste à soustraire, au jet d'attaque effectué contre lui, tous les bonus dont le lanceur disposerait pour son attaque basique."
        },
        {
            UUID: "aad1503c-82af-47d0-a150-ce0b273fee64",
            level: 10,
            name: "Bouclier Mentaliste c",
            duration: "_",
            radius: "_",
            description: "Comme [#UUID(983164fa-21a8-4190-af30-b4aef89cb376)], mais il n'est efficace que contre les sorts mentalistes."
        },
    ]
}
export default WallLaw