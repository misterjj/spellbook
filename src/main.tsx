import * as React from 'react'
import { render } from 'react-dom'
import 'bootstrap/js/dist/tab';

import App from "./App"
import CharacterStore from "./store/characterStore";
import OpenEssence from "./datas/spelllists/OpenEssence";
import CloseEssence from "./datas/spelllists/CloseEssence";
import BaseMagician from "./datas/spelllists/BaseMagician";

const character = new CharacterStore()
character.setSpellList([
    BaseMagician,
    OpenEssence,
    CloseEssence
])

render(
    <App character={character}/>,
    document.getElementById('app')
)