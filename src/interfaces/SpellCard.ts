import Spell from "./Spell";
import {BackgroundColor, TextColorClass} from "./SpellLaw";
// @ts-ignore
import {IconProp} from "@fortawesome/fontawesome-svg-core";

export default interface SpellCard extends Spell {
    textColorClass: TextColorClass
    backgroundColor: BackgroundColor
    fontAwesomeIcon?: IconProp
    spellLawUUID : String
}