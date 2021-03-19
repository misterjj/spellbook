import SpellList from "../../interfaces/SpellList";
import RapidLaw from "../spelllaws/RapidLaw";
import InvisibilityLaw from "../spelllaws/InvisibilityLaw";
import AlterationLaw from "../spelllaws/AlterationLaw";
import ControlLaw from "../spelllaws/ControlLaw";
import MindLaw from "../spelllaws/MindLaw";
import MovementLaw from "../spelllaws/MovementLaw";
import EnhancementLaw from "../spelllaws/EnhancementLaw";
import DissipationLaw from "../spelllaws/DissipationLaw";

const CloseEssence: SpellList = {
    UUID: "a9a98d22-6cea-43ee-9b04-2774160c1fd8",
    name: "Réservées de l'essence",
    spellLaws : [
        RapidLaw,
        InvisibilityLaw,
        AlterationLaw,
        ControlLaw,
        MindLaw,
        MovementLaw,
        EnhancementLaw,
        DissipationLaw,
    ]
}

export default CloseEssence