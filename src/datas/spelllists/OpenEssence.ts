import SpellList from "../../interfaces/SpellList";
import WallLaw from "../spelllaws/WallLaw";
import PerceptionLaw from "../spelllaws/PerceptionLaw";
import HandLaw from "../spelllaws/HandLaw";
import RunesLaw from "../spelllaws/RunesLaw";
import DetectionLaw from "../spelllaws/DetectionLaw";
import LockLaw from "../spelllaws/LockLaw";

const OpenEssence: SpellList = {
    UUID: "a9a98d22-6cea-43ee-9b04-2774160c1fd8",
    name: "libre de l'essence",
    spellLaws : [
        HandLaw,
        PerceptionLaw,
        WallLaw,
        RunesLaw,
        DetectionLaw,
        LockLaw,
    ]
}

export default OpenEssence