import React from 'react';
import "../assets/css/npc-formulary.css"
import { useRef } from 'react';

function NPCFormulary() {


    const formRef = useRef();

    function SubmitButton(e) {
        e.preventDefault();
        const formData = new FormData(formRef.current);
        const data = Object.fromEntries(formData);
        const id = Date.now()
        const stats = ['for', 'dex', 'vig', 'cha', 'int', 'sag'];
        const statsObjects = {};
        stats.forEach(stat => { statsObjects[stat] = data[stat] });

        const transformedData = {
            id: id,
            name: data.lastName,
            age: data.age,
            sexe: data.sex,
            taille: data.height,
            poids: data.weight,
            univers: data.universe,
            race: data.race,
            picture: data.picture,
            background: data.background,
            description: data.description,
            author: data.author,
            statistiques: statsObjects
        };
        console.log(transformedData)
        fetch('http://localhost:3000/api/npc', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(transformedData)
        })
            .then(response => response.json())
            .then(response => console.log(JSON.stringify(response)))
    }

    return (
        <div className='formulary-container'>
            <form ref={formRef} className='npc-formulary' id='npc-form' onSubmit={SubmitButton}>

                <div className='input-title-container'>
                    <h2>Les caracteristiques:</h2>
                    <p>definissez les caracteristiques de votre pnj</p>
                </div>
                <div className='input-container input-carac-container'>
                    <label className='npc-label'>
                        Nom:
                        <input type="text" name="lastName" className='label-input' />
                    </label>


                    <label className='npc-label'>
                        Univers:
                        <select name="universe" className='label-input'>
                            <option value="fantasy">Fantastique</option>
                            <option value="sci-fi">Science Fiction</option>
                            <option value="horror">Horreur</option>
                            <option value="contemporain">Contemporain</option>
                            <option value="other">Autre</option>
                        </select>
                    </label>


                    <label className='npc-label'>
                        Sexe:
                        <select name="sex" className='label-input input-little' >
                            <option value="male">Homme</option>
                            <option value="female">Femme</option>
                            <option value="no-sex">Asexué</option>
                            <option value="other">Autre</option>
                        </select>
                    </label>


                    <label className='npc-label'>
                        Race:
                        <input type="text" name="race" className='label-input'/>
                    </label>


                    <label className='npc-label'>
                        Age (en année):
                        <input type="number" name="age" min={0} max={999} className='label-input input-little' />
                    </label>

                    <label className='npc-label'>
                        Poids (en kilo):
                        <input type="number" name="weight" min={0} max={999} className='label-input  input-little' />
                    </label>

                    <label className='npc-label'>
                        Taille(en centimetre):
                        <input type="number" name="height" min={0} max={999} className='label-input  input-little' />
                    </label>

                    <label className='npc-label'>
                        Image (copier le lien):
                        <input type="text" name="picture" className='label-input' />
                    </label>
                </div>

                <div className='input-title-container'>
                    <h2>Les statistiques:</h2>
                    <p>definissez les statistiques de votre pnj</p>
                </div>
                <div className='input-container input-stat-container'>

                    <label className="npc-label">
                        Force:
                        <input
                            type="number" name="for" min={0} max={10} className="label-input input-little" />
                    </label>
                    <label className="npc-label">
                        Dexterité:
                        <input
                            type="number" name="dex" min={0} max={10} className="label-input input-little" />
                    </label>
                    <label className="npc-label">
                        Vigueur:
                        <input
                            type="number" name="vig" min={0} max={10} className="label-input input-little" />
                    </label>
                    <label className="npc-label">
                        Intelligence:
                        <input
                            type="number" name="int" min={0} max={10} className="label-input input-little" />
                    </label>
                    <label className="npc-label">
                        Sagesse:
                        <input
                            type="number" name="sag" min={0} max={10} className="label-input input-little" />
                    </label>
                    <label className="npc-label">
                        Charisme:
                        <input
                            type="number" name="cha" min={0} max={10} className="label-input input-little" />
                    </label>

                </div>

                <div className='input-title-container'>
                    <h2>La description:</h2>
                    <p>Decrivez votre pnj et racontez nous son histoire</p>
                </div>
                <div className='input-container input-background-container'>

                    <label className='npc-label npc-label-background'>
                        Description physique:
                        <textarea name="description" className='label-input  input-tall' />
                    </label>


                    <label className='npc-label npc-label-background'>
                        Historique:
                        <textarea name="background" className='label-input input-tall' />
                    </label>
                </div>

                <input type="submit" className='submit-button' value="Creer mon PNJ" />
            </form>
        </div>
    );
}

export default NPCFormulary;