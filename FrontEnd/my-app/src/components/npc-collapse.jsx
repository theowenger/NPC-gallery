import NPC from "../assets/database/NPC.json"
import { useParams } from "react-router-dom"
import React from "react"

import "../assets/css/collapse.css"

import vector from "../assets/img/Vector.png"
import vectorUp from "../assets/img/VectorUp.png"


class Collapse extends React.Component {


    constructor(props) {
        super(props);
        this.state = { textVisible: false,
                        reverseButton: false, }
    }

    toggleText1 = () => {
        this.setState(state =>
            ({ text1Visible: !state.text1Visible,
                reverseButton: !state.reverseButton  }));
    }


    render() {
        return <nav className="collapse-card">
            <button className="collapse-button" onClick={this.toggleText1}>
                <h2>{this.props.name}</h2>
                <img className="collapse-img"  src= {this.state.reverseButton ?`${vectorUp}`: `${vector}`} alt="icon"></img>
            </button>
            <h3 className="collapse-txt" style={{ display: this.state.text1Visible ? 'block' : 'none' }}>{this.props.description}</h3>
        </nav>
    }
}



function NPCCollapse() {

    const { id } = useParams()
    let uniteNPC = NPC.find(i => i.id === id)
    return (
        <div className="collapse-container">
            <Collapse name='Description Physique'  description = {uniteNPC.description}/>
            <Collapse name='Background' description ={uniteNPC.background}/>
        </div>
    )
}

export default NPCCollapse