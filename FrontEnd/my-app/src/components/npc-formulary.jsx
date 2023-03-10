import React from 'react';
import "../assets/css/npc-formulary.css"
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function NPCFormulary() {

    const navigate = useNavigate()
    const formRef = useRef();
    
    function SubmitButton(e) {
        const userId = localStorage.getItem('userId')
        e.preventDefault();
        const formData = new FormData(formRef.current);
        const data = Object.fromEntries(formData);
        const id = Date.now()
        const date = (new Date().getTime());
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
            picture: data.picture || 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Question_mark_alternate.svg/1200px-Question_mark_alternate.svg.png',
            background: data.background,
            objectif: data.objectif,
            job: data.job,
            quote: data.quote,
            fightComportement: data.fightComportement,
            equipement: data.equipement,
            pnjLink: data.pnjLink,
            description: data.description,
            creationDate: date,
            statistiques: statsObjects
        };
        const token = localStorage.getItem('JWT');
        fetch('http://localhost:3000/api/npc', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(transformedData)
        })
            .then(response => response.json())
            .then(response => console.log(JSON.stringify(response)))
            alert('Votre PNJ a ??t?? cr????, retour ?? l\'acceuil')
            navigate('/index');
    }
    const token = localStorage.getItem('JWT');
    if (!token) {
        // Si aucun jeton n'est pr??sent, cela signifie que l'utilisateur n'est pas connect??
        return (
            <div className='no-account-container'>
            <h2>Pour creer vos PNJ, vous devez disposer d'un compte et ??tre connect??.</h2>
            <p>
                Vous n'??tes pas connect??? cliquez <Link to="/login">i??i</Link>
            </p>
            <p>
              Vous n'avez pas cr???? de compte? cliquez <Link to="/signup">i??i</Link>
            </p>
          </div>
        )
    } else {
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
                            <input type="text" name="lastName" className='label-input' required />
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
                                <option value="no-sex">Asexu??</option>
                                <option value="other">Autre</option>
                            </select>
                        </label>


                        <label className='npc-label'>
                            Race:
                            <input type="text" name="race" className='label-input' required/>
                        </label>


                        <label className='npc-label'>
                            Age (en ann??e):
                            <input type="number" name="age" min={0} max={999} className='label-input input-little' required/>
                        </label>

                        <label className='npc-label'>
                            Poids (en kilo):
                            <input type="number" name="weight" min={0} max={999} className='label-input  input-little' required/>
                        </label>

                        <label className='npc-label'>
                            Taille(en centimetre):
                            <input type="number" name="height" min={0} max={999} className='label-input  input-little' required />
                        </label>

                        <label className='npc-label'>
                            Image (copier le lien):
                            <input type="text" name="picture" className='label-input' />
                        </label>
                    </div>

                    <div className='input-title-container'>
                        <h2>Les statistiques:</h2>
                        <p>definissez les statistiques de votre pnj (de 0 ?? 10)</p>
                    </div>
                    <div className='input-container input-stat-container'>

                        <label className="npc-label">
                            Force:
                            <input
                                type="number" name="for" min={0} max={10} className="label-input input-little" required />
                        </label>
                        <label className="npc-label">
                            Dexterit??:
                            <input
                                type="number" name="dex" min={0} max={10} className="label-input input-little" required />
                        </label>
                        <label className="npc-label">
                            Vigueur:
                            <input
                                type="number" name="vig" min={0} max={10} className="label-input input-little" required />
                        </label>
                        <label className="npc-label">
                            Intelligence:
                            <input
                                type="number" name="int" min={0} max={10} className="label-input input-little" required />
                        </label>
                        <label className="npc-label">
                            Sagesse:
                            <input
                                type="number" name="sag" min={0} max={10} className="label-input input-little" required />
                        </label>
                        <label className="npc-label">
                            Charisme:
                            <input
                                type="number" name="cha" min={0} max={10} className="label-input input-little" required />
                        </label>

                    </div>

                    <div className='input-title-container'>
                        <h2>La description:</h2>
                        <p>Decrivez votre pnj et racontez nous son histoire</p>
                    </div>
                    <div className='input-container input-background-container'>

                        <label className='npc-label npc-label-background'>
                            Description physique:
                            <textarea name="description" className='label-input  input-tall' required/>
                        </label>


                        <label className='npc-label npc-label-background'>
                            Historique:
                            <textarea name="background" className='label-input input-tall' required/>
                        </label>
                    </div>

                    <div className='input-title-container'>
                        <h2>Informations Complementaires:</h2>
                        <p>Rajoutez de la consistance ?? votre creation:</p>

                        <label className='npc-label npc-label-background'>
                            Objectif:
                            <textarea name="objectif" className='label-input input-tall'/>
                        </label>
                        <label className='npc-label npc-label-background'>
                            Profession:
                            <textarea name="job" className='label-input input-tall'/>
                        </label>
                        <label className='npc-label npc-label-background'>
                            Citations:
                            <textarea name="quote" className='label-input input-tall'/>
                        </label>
                        <label className='npc-label npc-label-background'>
                            comportement en combat:
                            <textarea name="fightComportement" className='label-input input-tall'/>
                        </label>
                        <label className='npc-label npc-label-background'>
                            equipements:
                            <textarea name="equipement" className='label-input input-tall'/>
                        </label>
                        <label className='npc-label npc-label-background'>
                            Liens avec d'autres PNJ:
                            <textarea name="pnjLink" className='label-input input-tall'/>
                        </label>
                    </div>

                    <input type="submit" className='submit-button' value="Creer mon PNJ" />
                </form>
            </div>
        );
    }
}

export default NPCFormulary;