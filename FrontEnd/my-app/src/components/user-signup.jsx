import React from 'react';
import "../assets/css/npc-formulary.css"
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

function UserSignup() {


    const navigate = useNavigate()
    const formRef = useRef();

    function SubmitButton(e) {
        e.preventDefault();
        const formUser = new FormData(formRef.current);
        const userEntries = Object.fromEntries(formUser);
        const id = Date.now()


        const user = {
            id: id,
            pseudo: userEntries.pseudo,
            email: userEntries.email,
            password: userEntries.password
        }
        if(userEntries.validatePassword !== userEntries.password) {
            alert("Vous n'avez pas saisi le même mot de passe")
            return
        }
        
        fetch('http://localhost:3000/api/auth/signup', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(response => response.json())
            .then(response => console.log(JSON.stringify(response)))
            alert("Merci d'avoir créé un compte, vous allez être redirigé vers la page d'acceuil")
            navigate('/index');
    }

    return (
        <div className='formulary-container'>
            <form ref={formRef} className='npc-formulary' id='npc-form' onSubmit={SubmitButton}>

                <div className='input-title-container'>
                    <h2>Creer un compte:</h2>
                    <p>En créant un compte, vous pourrez creer votres propres PNJ</p>
                </div>
                <div className='input-container input-container-user'>
                    <label className='npc-label user-label'>
                        Pseudo:
                        <input type="text" name="pseudo" className='label-input' />
                    </label>

                    <label className='npc-label user-label'>
                        Mail:
                        <input type="mail" name="email" className='label-input' />
                    </label>

                    <label className='npc-label user-label'>
                        Mot de passe:
                        <input type="password" name="password" className='label-input' />
                    </label>

                    <label className='npc-label user-label'>
                        Confirmez le mot de passe:
                        <input type="password" name="validatePassword" className='label-input' />
                    </label>

                </div>

                <input type="submit" className='submit-button' value="Creer mon compte" />
            </form>
        </div>
    );
}

export default UserSignup;