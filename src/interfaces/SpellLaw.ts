import Spell from "./Spell";
import { IconProp } from '../../node_modules/@fortawesome/fontawesome-svg-core/index';

export type TextColorClass = "light" | "dark"

export type BackgroundColor = [number, number, number]

export default interface SpellLaw {
    UUID: string,
    name: string,
    spells: Spell[],
    fontAwesomeIcon?: IconProp
    backgroundColor: BackgroundColor,
    textColorClass: TextColorClass
}