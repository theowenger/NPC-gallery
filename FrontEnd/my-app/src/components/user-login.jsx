import React from 'react';
import "../assets/css/npc-formulary.css"
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function UserLogin() {
  const navigate = useNavigate();
  const formRef = useRef();
  
  function handleSubmit(e) {
    e.preventDefault();
    
    const formUser = new FormData(formRef.current);
    const userEntries = Object.fromEntries(formUser);

       // Récupérez le jeton JWT dans une variable
       const token = localStorage.getItem('JWT');
    
    fetch('http://localhost:3000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(userEntries),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        console.log(response.json)
        throw new Error(response.statusText);
      })
      .then((data) => {
        // Connexion réussie, stocke le jeton JWT dans le stockage local et redirige l'utilisateur vers la page d'accueil
        localStorage.setItem('JWT', data.token);
        localStorage.setItem('userId', data.userId)
        alert("Connexion reussie, vous allez etre redirigé vers la page d'acceuil");
        navigate('/index');
        window.location.reload();
      })
      .catch((error) => {
        // Connexion échouée, affiche un message d'erreur
        alert(error);
      });
  }

  return (
    <div className='formulary-container'>
      <form ref={formRef} className='npc-formulary' id='npc-form' onSubmit={handleSubmit}>
        <div className='input-title-container'>
          <h2>Se connecter</h2>
          <p>Connectez vous en remplissant le formulaire</p>
          <p>
            Si vous n'avez pas créé de compte, cliquez <Link to="/signup">içi</Link>
          </p>
        </div>
        <div className='input-container input-container-user'>
          <label className='npc-label user-label'>
            Mail:
            <input type="mail" name="email" className='label-input' />
          </label>

          <label className='npc-label user-label'>
            Mot de passe:
            <input type="password" name="password" className='label-input' />
          </label>
        </div>

        <input type="submit" className='submit-button' value="Se connecter" />
      </form>
    </div>
  );
}

export default UserLogin;