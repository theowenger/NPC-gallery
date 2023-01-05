import NPC from "../assets/database/NPC.json"
import { useParams } from "react-router-dom"
import React from "react"
import { useState, useEffect } from "react"
import axios from "axios"
import "../assets/css/collapse.css"

import vector from "../assets/img/Vector.png"
import vectorUp from "../assets/img/VectorUp.png"

async function fetchData(id) {
    const response = await axios.get(`http://localhost:3000/api/npc/${id}`);
    return response;
  }



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

    const [data, setData] = useState(null);
    const { id } = useParams();
  
    useEffect(() => {
      const fetch = async () => {
        const response = await fetchData(id);
        if (response.status === 200) {
          setData(response.data);
        }
      };
      fetch();
    }, [id]);
  
    if (!data) {
      return <div>Loading...</div>;
    }

    return (
        <div className="collapse-container">
            <Collapse name='Description Physique'  description = {data.description}/>
            <Collapse name='Background' description ={data.background}/>
        </div>
    )
}

export default NPCCollapse