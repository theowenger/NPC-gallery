import { Link } from 'react-router-dom'
import React from 'react';
import "../assets/css/landing.css"
import vector from "../assets/img/Vector.png"
import vectorUp from "../assets/img/VectorUp.png"
import npcBanner from "../assets/img/npc-banner.png"

function Landing() {

    class Collapse extends React.Component {


        constructor(props) {
            super(props);
            this.state = {
                textVisible: false,
                reverseButton: false,
            }
        }

        toggleText1 = () => {
            this.setState(state =>
            ({
                text1Visible: !state.text1Visible,
                reverseButton: !state.reverseButton
            }));
        }


        render() {
            return <nav className="landing-card">
                <button className="landing-button" onClick={this.toggleText1}>
                    <h2>{this.props.name}</h2>
                    <img className="landing-img" src={this.state.reverseButton ? `${vectorUp}` : `${vector}`} alt="icon"></img>
                </button>
                <h3 className="landing-txt" style={{ display: this.state.text1Visible ? 'block' : 'none' }}>{this.props.description}</h3>
            </nav>
        }
    }

    return (
        <>
            <div className="landing-container">
                    <h1>Bienvenue sur NPC Factory !</h1>
            <div className='landing-img'>
                    <img src={npcBanner} alt='npc-banner' className='npc-banner'></img>
                </div>

                <div className='landing-description'>
                    <Collapse name="C'est quoi?" description="Ce site est une gallerie de NPC (ou personnage non jouables) créé par des joueurs
                        et pour des joueurs de jeu de roles. Il recense des centaines de personnages
                        que vous pourrez utiliser pour vos parties de JDR."/>
                    <Collapse name="Comment ca marche?" description="En accedant au site, vous pourrez visiter l'intégralité des creations des autres utilisateurs.
                        Si vous désirez vous aussi creer de somptueux NPC, vous devrez creer un compte et vous connecter."/>
                    <Collapse name="Creer un compte?" description="En effet, pour creer un NPC il vous faudra un compte. Avec celui ci vos NPC vous appartiendrons.
                        Vous aurez ainsi la possibilité de les modifier ou de les supprimer. Chez NPC factory
                        nous nous engageons à ne pas vous envoyer de mail intrusifs et nous ne revendons pas vos
                        precieuses données personnelles aux illuminati reptiliens."/>
                    <Collapse name="C'est gratuit?" description="NPC Factory est une petite usine à NPC qui tourne avec un seul ouvrier.
                        Il vit dans un local en sous sol et se nourri de l'imaginaire des utilisateurs
                        et de lignes de code. Tout ceci étant gratuit, vous n'aurez pas à debourser un centime !"/>
                    <Collapse name="Qu'est ce qu'on attend?" description="On attend plus que vous ! Alors joignez vous à cette aventure et aidez nous à faire
                        grandir notre usine à NPC avec des creations toujours plus originales !"/>

                    <Link to="/index"><h2 className='landing-link'>Acceder à NPC Factory</h2></Link>
                </div>

            </div>
        </>
    )
}

export default Landing