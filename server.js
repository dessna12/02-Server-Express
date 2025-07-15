const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
app.use(express.json());

// Charger les fichiers de données
const films = require('./data/films.json');
const projections = require('./data/projections.json');
const realisateurs = require('./data/realisateurs.json');

// app.use(express.static("public"));

// Route d'accueil
app.get('/', (req, res) => {
  //TODO : RENVOYER UN MESSAGE 🎬 Bienvenue au CineClub API !

});

// GET /films — tous les films
    //TODO : Renvoyer le json films


// GET /realisateurs
    //TODO : Renvoyer le json realisateurs


// GET /films/:id — détail d'un film
  // TODO : récupérer l'id et renvoyer le json du film correspondant
  // HINT : parseInt() permet de transformer le paramètre en int
  // HINT : la fonction .find(f => f.id === filmId) permet de renvoyer le résultat de la recherche selon condition 
  // BONUS : faire une condition qui renvoie un statut 404 avec le message('Film non trouvé') si l'object est vide 


//DELETE /film/:id - Supression d'un film
    //TODO : supression d'un film selon son id
    //HINT : 1. Parser le paramètre id
    //HINT : 2. Utiliser la méthode .splice(index, howMany) pour supprimer d'un array
    //HINT : par exemple film.splice(0,1) retire le premier élément de l'array films[]
    //HINT : 3. Utiliser la méthode fs.writeFileSync(dataPath, JSON.stringify(films)); pour enregistrer le résultat
    //HINT : 4. Renvoyer un status code 204('No content') et un res.end()
    //BONUS : vérifier que le film existe bien avant de le supprimer


// POST /film - Ajout d'un film 
newFilm = {
    "id": 6,
    "titre": "Le Parfum de la Dame en Noir",
    "annee_sortie": 2005,
    "duree_minutes": 115,
    "note_critique": 7.4,
    "pays_origine": "France",
    "id_realisateur": 3
}
    // TODO : Ajouter un nouveau film 
    // HINT : 1. Récupérer le body
    // HINT : 2. Récupérer tous les films et ajouter new Film avec films.push(nouveauFilm);
    // HINT : 3. Utiliser la méthode fs.writeFileSync(dataPath, JSON.stringify(films)); pour enregistrer le résultat
    // HINT : 4. Renvoyer un status code 201 ('Nouvelle ressouce créée) avec un message et éventuellement l'ojet créé 
    // Bonus : vérifier que le body n'est pas vide et renvoie une erreur 400 si c'est le cas. 
    // Bonus : renvoyer un code 500 s'il y a une erreur pendant l'enregistrement


// PATCH /films/:id - Modification d'un titre de film 
const titre = 
{
    "titre": "Nouveau Titre du Film"
};
    // TODO : Modifier le titre d'un film
    // HINT : 1. Récupérer le body
    // HINT : 2. Modifier le film en question en accédant à la propriété .titre : films[index].titre
    // HINT : 3. Utiliser la méthode fs.writeFileSync(dataPath, JSON.stringify(films)); pour enregistrer le résultat
    // HINT : 4. Renvoyer un status code 201 ('Nouvelle ressouce créée) avec un message et éventuellement l'ojet créé 
    // Bonus : vérifier que le body n'est pas vide et renvoie une erreur 400 si c'est le cas. 
    // Bonus : renvoyer un code 500 s'il y a une erreur pendant l'enregistrement


    // TODO BONUS : Faire les méthodes POST, PUT, DELETE pour les réalisateurs et projections



const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🎥 Serveur CineClub démarré sur http://localhost:${PORT}`);
});
