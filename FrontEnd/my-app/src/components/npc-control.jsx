import React from 'react';
import "../assets/css/npc-formulary.css"
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


function NPCControl() {
    let { id } = useParams();
    const navigate = useNavigate()
    const userId = localStorage.getItem('userId')

    fetch(`http://localhost:3000/api/npc/${id}`)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      // Utilisez les données récupérées pour afficher les informations du NPC
      return data
    })
    .catch(error => {
      console.log(error);
    });

    function deleteNPC() {
        // Récupérez l'ID de l'utilisateur connecté dans une variable
        if (!window.confirm('Votre personnage va etre supprimé, voulez vous continuer?')) {
            return;
        }

        // Récupérez le jeton JWT dans une variable
        const token = localStorage.getItem('JWT');

        fetch(`http://localhost:3000/api/npc/delete/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({ userId }),
        })
            .then(response => response.json())
            .then(data => {
                if (data.message === "NPC supprimé !") {
                    // gérer l'affichage de succès 
                    alert("Votre PNJ a été supprimé")
                    navigate('/');
                } else {
                    // gérer l'affichage d'erreur
                    alert("Probleme de suppression")
                }
            })
            .catch(error => {
                console.log(error);
                // gérer l'affichage d'erreur
                console.log("echec de la suppression")
            });
    }
    
    console.log("url"+id)
    console.log( 'storage'+ userId)

    // if (.author !== userId) {
    //     return <div>Ce personnage appartient à:</div>
    // } else {
        return <button className="submit-button" onClick={deleteNPC}>Supprimer</button>
    // }
}

export default NPCControl