import SpellList from "../../interfaces/SpellList";
import WallLaw from "../spelllaws/WallLaw";
import PerceptionLaw from "../spelllaws/PerceptionLaw";
import HandLaw from "../spelllaws/HandLaw";
import RunesLaw from "../spelllaws/RunesLaw";
import DetectionLaw from "../spelllaws/DetectionLaw";
import LockLaw from "../spelllaws/LockLaw";
import PhysicLaw from "../spelllaws/PhysicLaw";
import ShieldLaw from "../spelllaws/ShieldLaw";

const OpenEssence: SpellList = {
    UUID: "f226ee95-6b45-46a6-ac50-d652c8b0cb42",
    name: "libre de l'essence",
    spellLaws : [
        HandLaw,
        PerceptionLaw,
        WallLaw,
        RunesLaw,
        DetectionLaw,
        LockLaw,
        PhysicLaw,
        ShieldLaw,
    ]
}

export default OpenEssence