# 🎬 TP CineClub - Compléter une API Express

Bienvenue dans ce TP où vous allez manipuler une API simple en Node.js avec Express, basée sur une base de données de cinéma.

---

## Contexte

Vous disposez d’un serveur Express minimal avec des données en JSON statiques représentant des films, réalisateurs et projections.

Votre tâche est de compléter le fichier `server.js` en remplissant les routes marquées par des `TODO` pour :

- envoyer des données JSON,
- gérer les paramètres d’URL,
- modifier, ajouter et supprimer des données,
- gérer les statuts HTTP et les erreurs.

---

## Instructions générales

- Le dossier `data/` contient les fichiers JSON avec les données.
- Le fichier principal est `server.js` : complétez les routes indiquées.
- Le serveur écoute sur le port 3000.
- Utilisez `fs.writeFileSync` pour sauvegarder les modifications dans les fichiers JSON.
- N’oubliez pas de gérer les erreurs et de renvoyer des codes HTTP adaptés (200, 201, 204, 400, 404, 500…).

---

## Étapes à réaliser

### 1. Route d’accueil `/`

- Renvoi un message simple du type :  
  `🎬 Bienvenue au CineClub API !`

---

### 2. GET `/films`

- Renvoyer le JSON complet de tous les films.

---

### 3. GET `/realisateurs`

- Renvoyer le JSON complet des réalisateurs.

---

### 4. GET `/films/:id`

- Récupérer l’id passé dans l’URL.
- Chercher le film correspondant dans la liste.
- Renvoyer le film en JSON.
- Si aucun film n’est trouvé, renvoyer un status 404 et un message `Film non trouvé`.

---

### 5. DELETE `/film/:id`

- Récupérer l’id passé en paramètre.
- Vérifier si le film existe.
- Supprimer le film de la liste avec `splice`.
- Sauvegarder le fichier JSON.
- Renvoyer un status 204 (No Content).
- En cas d’erreur ou si le film n’existe pas, gérer avec un message et un code HTTP adapté.

---

### 6. POST `/film`

- Récupérer le body de la requête (nouveau film).
- Vérifier que le body n’est pas vide (sinon renvoyer 400).
- Ajouter le film dans la liste.
- Sauvegarder dans le fichier JSON.
- Renvoyer un status 201 avec un message et l’objet créé.
- En cas d’erreur lors de la sauvegarde, renvoyer 500.

---

### 7. PATCH `/films/:id`

- Récupérer l’id et le body.
- Modifier uniquement le titre du film.
- Sauvegarder les changements.
- Renvoyer un status 201 avec message et l’objet modifié.
- Vérifier que le body n’est pas vide.
- Gérer les erreurs.

---

### Bonus

- Implémenter les méthodes POST, PUT, DELETE pour les réalisateurs et projections.

---

## Conseils et astuces

- Pour convertir l’id d’un paramètre URL en nombre :  
  ```js
  const id = parseInt(req.params.id);
  ```
- Pour chercher un élément dans un tableau :
    ```js
  const film = films.find(f => f.id === id);
  ```
- Pour supprimer un élément :  
  ```js
    films.splice(index, 1);
  ```
- Pour sauvegarder un fichier JSON :  
  ```js
    fs.writeFileSync(pathToFile, JSON.stringify(films));
  ```

## Démarrage du serveur

Lancez votre serveur avec la commande :

```bash 
node server.js
```

Bon courage, amusez-vous bien avec votre API CineClub ! 🎥🍿


