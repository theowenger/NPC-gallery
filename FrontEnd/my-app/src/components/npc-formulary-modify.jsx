import React from 'react';
import "../assets/css/npc-formulary.css"
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

function NPCFormularyModify() {

    const NPCModify = JSON.parse(localStorage.getItem('npc-to-modify'))
    console.log(NPCModify._id)
    const navigate = useNavigate()
    const formRef = useRef();
    
    function ModifyButton(e) {
        const userId = localStorage.getItem('userId')
        e.preventDefault();
        const formData = new FormData(formRef.current);
        const data = Object.fromEntries(formData);
        const id = NPCModify._id
        const stats = ['for', 'dex', 'vig', 'cha', 'int', 'sag'];
        const statsObjects = {};
        stats.forEach(stat => { statsObjects[stat] = data[stat] });

        const transformedData = {
            id: id,
            author: userId,
            name: data.lastName,
            age: data.age,
            sexe: data.sex,
            taille: data.height,
            poids: data.weight,
            univers: data.universe,
            race: data.race,
            picture: data.picture,
            background: data.background,
            objectif: data.objectif,
            job: data.job,
            quote: data.quote,
            fightComportement: data.fightComportement,
            equipement: data.equipement,
            pnjLink: data.pnjLink,
            description: data.description,
            statistiques: statsObjects
        };
        const token = localStorage.getItem('JWT');
        fetch(`http://localhost:3000/api/npc/modify/${id}`, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(transformedData)
        })
            .then(response => response.json())
            .then(response => console.log(JSON.stringify(response)))
            alert('Votre PNJ a été modifié, retour à l\'acceuil')
            navigate('/index');
    }

        return (
            <div className='formulary-container'>
                <form ref={formRef} className='npc-formulary' id='npc-form' onSubmit={ModifyButton}>

                    <div className='input-title-container'>
                        <h2>Les caracteristiques:</h2>
                        <p>Modifiez les caracteristiques de votre pnj</p>
                    </div>
                    <div className='input-container input-carac-container'>
                        <label className='npc-label'>
                            Nom:
                            <input type="text" name="lastName" className='label-input' defaultValue={NPCModify.name} />
                        </label>


                        <label className='npc-label'>
                            Univers:
                            <select name="universe" className='label-input' defaultValue={NPCModify.univers}>
                                <option value="fantasy">Fantastique</option>
                                <option value="sci-fi">Science Fiction</option>
                                <option value="horror">Horreur</option>
                                <option value="contemporain">Contemporain</option>
                                <option value="other">Autre</option>
                            </select>
                        </label>


                        <label className='npc-label'>
                            Sexe:
                            <select name="sex" className='label-input input-little' defaultValue={NPCModify.sexe}>
                                <option value="male">Homme</option>
                                <option value="female">Femme</option>
                                <option value="no-sex">Asexué</option>
                                <option value="other">Autre</option>
                            </select>
                        </label>


                        <label className='npc-label'>
                            Race:
                            <input type="text" name="race" className='label-input' defaultValue={NPCModify.race}/>
                        </label>


                        <label className='npc-label'>
                            Age (en année):
                            <input type="number" name="age" min={0} max={999} className='label-input input-little' defaultValue={NPCModify.age} />
                        </label>

                        <label className='npc-label'>
                            Poids (en kilo):
                            <input type="number" name="weight" min={0} max={999} className='label-input  input-little'value={NPCModify.poids} />
                        </label>

                        <label className='npc-label'>
                            Taille(en centimetre):
                            <input type="number" name="height" min={0} max={999} className='label-input  input-little' defaultValue={NPCModify.taille} />
                        </label>

                        <label className='npc-label'>
                            Image (copier le lien):
                            <input type="text" name="picture" className='label-input' defaultValue={NPCModify.picture}/>
                        </label>
                    </div>

                    <div className='input-title-container'>
                        <h2>Les statistiques:</h2>
                        <p>Modifiez les statistiques de votre pnj</p>
                    </div>
                    <div className='input-container input-stat-container'>

                        <label className="npc-label">
                            Force:
                            <input
                                type="number" name="for" min={0} max={10} className="label-input input-little" defaultValue={NPCModify.statistiques.for}/>
                        </label>
                        <label className="npc-label">
                            Dexterité:
                            <input
                                type="number" name="dex" min={0} max={10} className="label-input input-little" defaultValue={NPCModify.statistiques.dex}/>
                        </label>
                        <label className="npc-label">
                            Vigueur:
                            <input
                                type="number" name="vig" min={0} max={10} className="label-input input-little" defaultValue={NPCModify.statistiques.vig}/>
                        </label>
                        <label className="npc-label">
                            Intelligence:
                            <input
                                type="number" name="int" min={0} max={10} className="label-input input-little" defaultValue={NPCModify.statistiques.int}/>
                        </label>
                        <label className="npc-label">
                            Sagesse:
                            <input
                                type="number" name="sag" min={0} max={10} className="label-input input-little" defaultValue={NPCModify.statistiques.sag}/>
                        </label>
                        <label className="npc-label">
                            Charisme:
                            <input
                                type="number" name="cha" min={0} max={10} className="label-input input-little" defaultValue={NPCModify.statistiques.cha}/>
                        </label>

                    </div>

                    <div className='input-title-container'>
                        <h2>La description:</h2>
                        <p>Modifiez le background et l'apparence de votre PNJ:</p>
                    </div>
                    <div className='input-container input-background-container'>

                        <label className='npc-label npc-label-background'>
                            Description physique:
                            <textarea name="description" className='label-input  input-tall' defaultValue={NPCModify.description}/>
                        </label>


                        <label className='npc-label npc-label-background'>
                            Historique:
                            <textarea name="background" className='label-input input-tall' defaultValue={NPCModify.background}/>
                        </label>
                    </div>

                    <div className='input-title-container'>
                        <h2>Informations Complementaires:</h2>
                        <p>Rajoutez de la consistance à votre creation:</p>

                        <label className='npc-label npc-label-background'>
                            Objectif:
                            <textarea name="objectif" className='label-input input-tall' defaultValue={NPCModify.objectif}/>
                        </label>
                        <label className='npc-label npc-label-background'>
                            Profession:
                            <textarea name="job" className='label-input input-tall' defaultValue={NPCModify.job}/>
                        </label>
                        <label className='npc-label npc-label-background'>
                            Citations:
                            <textarea name="quote" className='label-input input-tall'/>
                        </label>
                        <label className='npc-label npc-label-background'>
                            comportement en combat:
                            <textarea name="fightComportement" className='label-input input-tall' defaultValue={NPCModify.fightComportement}/>
                        </label>
                        <label className='npc-label npc-label-background'>
                            equipements:
                            <textarea name="equipement" className='label-input input-tall' defaultValue={NPCModify.equipement}/>
                        </label>
                        <label className='npc-label npc-label-background'>
                            Liens avec d'autres PNJ:
                            <textarea name="pnjLink" className='label-input input-tall' defaultValue={NPCModify.pnjLink}/>
                        </label>
                    </div>


                    <input type="submit" className='submit-button' value="Modifier mon PNJ" />
                </form>
            </div>
        );
    }

export default NPCFormularyModify;