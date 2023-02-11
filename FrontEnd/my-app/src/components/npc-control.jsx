import React from 'react';
import "../assets/css/npc-formulary.css"
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function NPCControl() {
    let { id } = useParams();
    const navigate = useNavigate()
    const userId = localStorage.getItem('userId')
    const [data, setData] = useState({});
    const [authorName, setAuthorName] = useState('')
    const [isLoading, setIsLoading] = useState(true); // Ajoutez cette ligne pour gérer l'état de chargement

    useEffect(() => {
        fetch(`http://localhost:3000/api/npc/${id}`)
            .then(response => response.json())
            .then(data => {
                setData(data);
                fetch(`http://localhost:3000/api/auth/${data.author}`)
                    .then(response => response.json())
                    .then(data => {
                        console.log(data.pseudo)
                        setAuthorName(data.pseudo)
                        setIsLoading(false);
                    })
                    .catch(error => {
                        console.log(error);
                    });
            })
            .catch(error => {
                console.log(error);
            });
    }, [id]);

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
                    navigate('/index');
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

    function modifyNPC() {
        const NPCToModify = localStorage.setItem('npc-to-modify', JSON.stringify(data))
        console.log(NPCToModify)
        alert("Vous allez être redigiré vers la page de modification")
        navigate('/modifyNPC');
    }

    if (isLoading) {
        return <div>Chargement...</div>
    } else {
        if (userId !== data.author) {
            return <div><h3 className='npc-author'>Ce NPJ appartient à <Link to={'/User/'+data.author}>{authorName}</Link></h3></div>
        }
        return (
            <div className='submit-button-container'>
                <button className="submit-button" onClick={deleteNPC}>Supprimer</button>
                <button className="submit-button" onClick={modifyNPC}>Modifier</button>
            </div>
        )
    }
}

export default NPCControl