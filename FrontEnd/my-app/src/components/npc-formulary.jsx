import React from 'react';
import "../assets/css/npc-formulary.css"

function NPCFormulary() {

    function SubmitButton (e) {
        e.preventDefault();
        console.log(e)
    }
 
    return (
        <form className='npc-formulary'>

            <label className='npc-label'>
                Nom:
                <input type="text" name="lastName" />
            </label>


            <label  className='npc-label'>
                Univers:
                <select name="universe">
                    <option value="fantasy">Fantastique</option>
                    <option value="sci-fi">Science Fiction</option>
                    <option value="horror">Horreur</option>
                    <option value="contemporain">Contemporain</option>
                    <option value="other">Autre</option>
                </select>
            </label>


            <label  className='npc-label'>
                Race:
                <input type="text" name="race" />
            </label>


            <label  className='npc-label'>
                Age (en année):
                <input type="number" name="age" min={0} max={999} />
            </label>

            <label  className='npc-label'>
                Sexe:
                <select name="sex">
                    <option value="male">Homme</option>
                    <option value="female">Femme</option>
                    <option value="other">Autre</option>
                </select>
            </label>

            <label  className='npc-label'>
                Poids (en kilo):
                <input type="number" name="weight" min={0} max={999} />
            </label>

            <label  className='npc-label'>
                Taille(en centimetre):
                <input type="number" name="height" min={0} max={999} />
            </label>


            <label  className='npc-label'>
                Description physique:
                <textarea name="description" />
            </label>


            <label  className='npc-label'>
                Historique:
                <textarea name="background" />
            </label>

            <input onClick={SubmitButton} type="submit" value="Creer mon PNJ" />
        </form>
    );
}

export default NPCFormulary;