import SpellLaw from "./SpellLaw";

export default interface SpellList {
    UUID: string,
    name: string,
    spellLaws: SpellLaw[]
}