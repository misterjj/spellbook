import * as React from 'react'
import "../../node_modules/@fortawesome/fontawesome-free/js/all";
// @ts-ignore
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import SpellCard from "../interfaces/SpellCard";

const reactStringReplace = require('react-string-replace')

export type SpellCardDisplay = "full" | "light"

interface SpellComponentProps {
    spell: SpellCard,
    isBig?: boolean,
    isOpacity?: boolean
    getSpellName: (UUID: string) => string,
    onClick?: (UUID?: string) => void
    learn?: (UUID: string) => void,
    forget?: (UUID: string) => void,
    isLearned?: (UUID: string) => boolean,
    spellCardDisplay?: SpellCardDisplay
}

interface SpellComponentState {
}

export default class SpellComponent extends React.PureComponent<SpellComponentProps, SpellComponentState> {

    constructor(props: SpellComponentProps) {
        super(props)
    }

    render() {
        return <div
            onClick={this.props.isBig ? () => {
            } : () => this.props.onClick(this.props.spell.UUID)}
            className={"spell-item mt-4 p-3 position-relative text-" + this.props.spell.textColorClass
            + (this.props.isBig ? " big" : "") + (this.props.spellCardDisplay !== undefined ? " " + this.props.spellCardDisplay : "") + (this.props.isOpacity ? " opacity-50" : "")}
            style={
                {
                    background: "rgba(" + this.props.spell.backgroundColor[0] + ", " + this.props.spell.backgroundColor[1] + ", " + this.props.spell.backgroundColor[2] + ", 1)"
                }
            }>
            <strong className="text-center d-block title"><FontAwesomeIcon
                icon={this.props.spell.fontAwesomeIcon}/> {this.props.spell.name}</strong>
            <hr/>
            <p className="position-relative">
                {reactStringReplace(this.props.spell.description, /\[\#UUID\(([^\)]+)\)\]/, (match: any, i: any) => {
                    return <strong className="link"
                                   key={this.props.spell.UUID + match}
                                   onClick={(e: React.MouseEvent) => {
                                       e.stopPropagation()
                                       this.props.onClick(match)
                                   }
                                   }>{this.props.getSpellName(match)}</strong>
                })}
                <span className="blur w-100 position-absolute bottom-0 start-0"
                      style={
                          {
                              background: "linear-gradient(0deg, rgba(" + this.props.spell.backgroundColor[0] + ", " + this.props.spell.backgroundColor[1] + ", " + this.props.spell.backgroundColor[2] + ",1) 0%, rgba(0,0,0,0) 100%)"
                          }
                      }/>
            </p>
            <span className="position-absolute bottom-0 start-0 p-2 duration">D: {this.props.spell.duration}</span>
            <span className="position-absolute bottom-0 end-0 p-2 radius">PO: {this.props.spell.radius}</span>
            <div className="position-absolute top-0 start-0 translate-middle">
                <FontAwesomeIcon icon="star" className="position-absolute top-0 start-0 translate-middle level"
                                 size={this.props.isBig ? "3x" : "2x"}/>
                <strong
                    className="position-absolute top-0 start-0 translate-middle text-dark">{this.props.spell.level}</strong>
            </div>
            {this.props.isBig &&
            <div className="position-absolute top-0 end-0 p-3">
                    <span className={"btn btn-" + this.props.spell.textColorClass}
                          onClick={() => {
                              this.props.isLearned(this.props.spell.UUID)
                                  ? this.props.forget(this.props.spell.UUID)
                                  : this.props.learn(this.props.spell.UUID)
                          }}
                    >
                        {this.props.isLearned(this.props.spell.UUID) ? 'Oublier' : 'Apprendre'}
                    </span>
            </div>
            }
        </div>
    }
}