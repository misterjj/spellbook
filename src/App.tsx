import * as React from 'react'
import CharacterStore from "./store/characterStore";
import "../node_modules/@fortawesome/fontawesome-free/js/all";
// @ts-ignore
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import SpellComponent, {SpellCardDisplay} from "./components/SpellComponent";
import SpellCard from "./interfaces/SpellCard";
import SpellLaw from "./interfaces/SpellLaw";

// @ts-ignore
import characterImg from '../assets/images/character.png'

interface AppProps {
    character: CharacterStore
}

interface AppState {
    flatSpellList: SpellCard[]
    learnedSpellUUIDS: string[]
    spellLaws: SpellLaw[],
    selectedSpellLawUUID?: string,
    spellCardDisplay: SpellCardDisplay,
    level: number,
    spellFocus?: string
    showMoreLevel: boolean
}

export default class App extends React.PureComponent<AppProps, AppState> {

    constructor(props: AppProps) {
        super(props)

        let flatSpellList: SpellCard[] = []
        let spellLaws: SpellLaw[] = []

        for (let spellList of props.character.getSpellList()) {
            for (let spellLaw of spellList.spellLaws) {
                spellLaws.push({
                    ...spellLaw,
                    spells: []
                })
                for (let spell of spellLaw.spells) {
                    flatSpellList.push({
                        ...spell,
                        backgroundColor: spellLaw.backgroundColor,
                        textColorClass: spellLaw.textColorClass,
                        fontAwesomeIcon: spellLaw.fontAwesomeIcon,
                        spellLawUUID: spellLaw.UUID
                    })
                }
            }
        }

        this.state = {
            flatSpellList,
            spellLaws,
            level: props.character.getLevel(),
            learnedSpellUUIDS: props.character.getLearnedSpellUUIDS(),
            showMoreLevel: false,
            spellCardDisplay: "full"
        }

        // On souscrit aux changements du store
        this.props.character.onChange((store) => {
            this.setState({
                learnedSpellUUIDS: store.getLearnedSpellUUIDS(),
                level: store.getLevel()
            })
        })
    }

    render() {
        return <div className="h-100 d-flex flex-column bg-dark text-light ps-2 pe-2">
            <div className="d-flex pt-2 pb-2">
                <div className="me-2">
                    <img src={characterImg} alt=""/>
                </div>
                <div>
                    <h2>Alok Sylnala</h2>
                    <h4>Elf gris de niveau <input type="number"
                                                  value={this.state.level}
                                                  onChange={(e) => this.onChangeLevel(e)}
                                                  className="text-center"
                                                  style={{width: "50px"}}/></h4>
                </div>
            </div>
            <ul className="nav nav-tabs position-relative">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" data-bs-toggle="tab" data-bs-target="#all-spell"
                       type="button" role="tab" aria-controls="home" aria-selected="true">
                        Liste des sorts possible <span
                        onClick={() => this.setState({showMoreLevel: !this.state.showMoreLevel})}>
                            <FontAwesomeIcon
                                icon={this.state.showMoreLevel ? "eye-slash" : "eye"}
                            />
                        </span>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" aria-current="page" data-bs-toggle="tab" data-bs-target="#learned-spell"
                       type="button" role="tab" aria-controls="home" aria-selected="true">
                        Liste des sorts appris
                    </a>
                </li>
                <li className="position-absolute top-50 end-0 translate-middle-y">
                    <span>Affichage : </span>
                    <span className="btn position-relative text-light"
                          onClick={(e) => this.setState({spellCardDisplay: "full"})}>
                        <FontAwesomeIcon icon="clipboard"
                                         className="position-absolute top-50 start-50 translate-middle"/>
                    </span>
                    <span className="btn position-relative text-light"
                          onClick={(e) => this.setState({spellCardDisplay: "light"})}>
                        <FontAwesomeIcon icon="bars"
                                         className="position-absolute top-50 start-50 translate-middle"/>
                    </span>
                    <span className="ms-5">Filtres : </span>
                    {this.state.selectedSpellLawUUID !== undefined &&
                    <span className="btn position-relative p-3 ms-1 text-light"
                          onClick={(e) => this.setState({selectedSpellLawUUID: undefined})}>
                            <FontAwesomeIcon icon="times-circle"
                                             className="position-absolute top-50 start-50 translate-middle"/>
                        </span>
                    }
                    {
                        this.props.character.getSpellList().map(
                            spellList =>
                                <span key={spellList.UUID} className="position-relative ms-1 spellList" >
                                    <span className="position-absolute top-0 start-0 spellList-name">{spellList.name}</span>
                                    {spellList.spellLaws.map(
                                        spellLaw => <span
                                            key={"button-spelllaw-" + spellLaw.UUID}
                                            onClick={(e) => this.setState({selectedSpellLawUUID: spellLaw.UUID})}
                                            className={"btn position-relative p-3 ms-1 text-" + spellLaw.textColorClass}
                                            title={spellLaw.name}
                                            style={
                                                {
                                                    background: "rgba(" + spellLaw.backgroundColor[0] + ", " + spellLaw.backgroundColor[1] + ", " + spellLaw.backgroundColor[2] + ", 1)"
                                                }
                                            }>
                                            <FontAwesomeIcon icon={spellLaw.fontAwesomeIcon}
                                                             className="position-absolute top-50 start-50 translate-middle"/>
                                        </span>
                                    )}
                            </span>
                        )
                    }
                </li>
            </ul>
            <div className="tab-content flex-grow-1" id="myTabContent">
                <div className="tab-pane fade show active" id="all-spell" role="tabpanel"
                     aria-labelledby="all-spell-tab">
                    <div className="spell-list d-flex flex-wrap justify-content-around pt-2 pb-2">
                        {this.state.flatSpellList
                            .filter(
                                spell =>
                                    (
                                        this.state.selectedSpellLawUUID === undefined ||
                                        this.state.selectedSpellLawUUID === spell.spellLawUUID
                                    ) && (this.state.showMoreLevel || this.state.level >= spell.level)
                                    && !this.state.learnedSpellUUIDS.includes(spell.UUID)
                            )
                            .map(spell => ({
                                    ...spell,
                                    duration: this.replaceVariables(spell.duration),
                                    radius: this.replaceVariables(spell.radius),
                                    description: this.replaceVariables(spell.description),
                                })
                            )
                            .map(
                                spell => {
                                    return <SpellComponent
                                        key={"spell-" + spell.UUID}
                                        spell={spell}
                                        onClick={(UUID?: string) => {
                                            this.setState({spellFocus: UUID})
                                        }}
                                        getSpellName={(UUID => this.getSpellName(UUID))}
                                        isOpacity={this.state.showMoreLevel && this.state.level < spell.level}
                                        spellCardDisplay={this.state.spellCardDisplay}
                                    />
                                }
                            )}
                    </div>
                </div>
                <div className="tab-pane fade show" id="learned-spell" role="tabpanel"
                     aria-labelledby="learned-spell-tab">
                    <div className="spell-list d-flex flex-wrap justify-content-around pt-2 pb-2">
                        {this.state.flatSpellList
                            .filter(
                                spell =>
                                    (
                                        this.state.selectedSpellLawUUID === undefined ||
                                        this.state.selectedSpellLawUUID === spell.spellLawUUID
                                    )
                                    && this.state.learnedSpellUUIDS.includes(spell.UUID)
                            )
                            .map(spell => ({
                                    ...spell,
                                    duration: this.replaceVariables(spell.duration),
                                    radius: this.replaceVariables(spell.radius),
                                    description: this.replaceVariables(spell.description),
                                })
                            )
                            .map(
                                spell => {
                                    return <SpellComponent
                                        key={"spell-" + spell.UUID}
                                        spell={spell}
                                        onClick={(UUID?: string) => {
                                            this.setState({spellFocus: UUID})
                                        }}
                                        getSpellName={(UUID => this.getSpellName(UUID))}
                                        spellCardDisplay={this.state.spellCardDisplay}
                                    />
                                }
                            )}
                    </div>
                </div>
            </div>
            {this.state.spellFocus !== undefined &&
            <div className="position-absolute top-0 start-0 w-100 h-100 bg-black-90"
                 onClick={(e: React.MouseEvent<HTMLDivElement>) => {
                     if ((e.target as HTMLDivElement).classList.contains("bg-black-90")) {
                         this.setState({spellFocus: undefined})
                     }
                 }}>
                <div className="position-absolute top-50 start-50 translate-middle h-100 p-4">
                    <SpellComponent
                        spell={this.state.flatSpellList.filter(spell => spell.UUID === this.state.spellFocus)
                            .map(spell => ({
                                ...spell,
                                duration: this.replaceVariables(spell.duration),
                                radius: this.replaceVariables(spell.radius),
                                description: this.replaceVariables(spell.description),
                            }))[0]}
                        isBig={true}
                        onClick={(UUID?: string) => {
                            this.setState({spellFocus: UUID})
                        }}
                        getSpellName={(UUID => this.getSpellName(UUID))}
                        isLearned={(UUID: string) => this.props.character.isLearnedSpell(UUID)}
                        learn={(UUID: string) => this.props.character.learnSpell(UUID)}
                        forget={(UUID: string) => this.props.character.forgetSpell(UUID)}
                    />
                </div>
            </div>}
        </div>
    }

    replaceVariables(str: string): string {
        return str.replace(/\[level\*(\d+)\]/, (a, b) => {
            return (parseInt(b) * this.state.level).toString()
        })
    }

    onChangeLevel(event: React.ChangeEvent<HTMLInputElement>) {
        this.props.character.setLevel(parseInt(event.target.value))
    }

    getSpellName(UUID: string): string {
        if (undefined === this.state) {
            return ''
        }
        return this.state.flatSpellList.filter(spell => spell.UUID === UUID)[0].name
    }
}