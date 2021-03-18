import SpellList from "../../interfaces/SpellList";
import EarthLaw from "../spelllaws/EarthLaw";
import FireLaw from "../spelllaws/FireLaw";
import IceLaw from "../spelllaws/IceLaw";
import LightLaw from "../spelllaws/LightLaw";
import WaterLaw from "../spelllaws/WaterLaw";
import WindLaw from "../spelllaws/WindLaw";

const BaseMagician: SpellList = {
    UUID: "c67fdc2f-d328-47c7-b3ba-3eadbde4c989",
    name: "Base de magicien",
    spellLaws : [
        EarthLaw,
        FireLaw,
        IceLaw,
        LightLaw,
        WaterLaw,
        WindLaw,
    ]
}

export default BaseMagician