import SpellList from "../interfaces/SpellList";
import {finished} from "stream";


declare type ChangeCallback = (store: CharacterStore) => void


export default class CharacterStore {
    private spellLists: SpellList[]
    private learnedSpellUUIDS: string[]
    private callbacks: ChangeCallback[]
    private level: number


    constructor () {
        this.spellLists = []
        this.learnedSpellUUIDS = []
        this.callbacks = []
        this.level = 1

        this.load()
    }

    // informe les écouteurs d'un changement au sein du Store
    inform () {
        this.callbacks.forEach(cb => cb(this))
    }

    // Permet d'ajouter un écouteur
    onChange (cb: ChangeCallback) {
        this.callbacks.push(cb)
    }

    private save () {
        localStorage.setItem('learnedSpellUUIDS', JSON.stringify(this.learnedSpellUUIDS));
        localStorage.setItem('level', JSON.stringify(this.level));
    }

    private load() {
        this.learnedSpellUUIDS = JSON.parse(localStorage.getItem('learnedSpellUUIDS')) ?? []
        this.level = parseInt(JSON.parse(localStorage.getItem('level')) ?? 1)
        this.inform()
    }

    getSpellList(): SpellList[]
    {
        return this.spellLists
    }

    setSpellList(spellsLists: SpellList[]): void
    {
        this.spellLists = spellsLists
        this.inform()
    }

    learnSpell(UUID: string)
    {
        this.learnedSpellUUIDS = [...this.learnedSpellUUIDS, UUID];
        this.save()
        this.inform()
    }

    forgetSpell(UUID: string)
    {
        this.learnedSpellUUIDS = this.learnedSpellUUIDS.filter(learnedUUID => learnedUUID !== UUID)
        this.save()
        this.inform()
    }

    isLearnedSpell(UUID: string) : boolean
    {
        return this.learnedSpellUUIDS.includes(UUID)
    }

    getLearnedSpellUUIDS(): string[]
    {
        return this.learnedSpellUUIDS;
    }

    getLevel(): number
    {
        return this.level
    }

    setLevel(level: number)
    {
        this.level = level
        this.save()
        this.inform()
    }
}