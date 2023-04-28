### INSTALLATION 


### `npm install`


### `npm start`

 J'ai réalisé différents appels front. J'ai utilisé axios pour gagner du temps et j'ai configuré l'URL de base avec la ligne suivante :

### axios.defaults.baseURL = http://localhost:8000

J'ai mis en place une barre de recherche, mais celle-ci ne fonctionne pas avec la requête suivante :

### fetch(http://localhost:8000/api/jobs/search?position=${position}&location=${location}&contract=${contract})

Ensuite, j'ai réalisé un appel pour récupérer les données d'une seule offre en accédant à la page dédiée avec :

### /api/jobs/${id}

J'ai également implémenté la fonctionnalité de suppression, qui permet de supprimer une offre via son ID dans la page d'administration :

### /api/jobs/${cardId}

Enfin, j'ai créé une fonction PostJob qui permet d'insérer des données dans la base de données via un formulaire dans la partie administration avec l'URL suivante :

### '/api/jobs/create/'

Au cas ou par exemple un lien complet d'appel du back : 

### http://localhost:8000/api/jobs/

Sur ma version du front-end, il y a un header dans la page d'accueil qui contient le logo, qui est également un lien de retour configuré pour que lorsqu'il y a un « * » après le "/", il vous renvoie à la page d'accueil.

Dans ce même header, il y a un bouton pour activer le mode sombre, qui ne fonctionne pas actuellement.

Il y a également un bouton "admin" que je suis très fier d'avoir créé, qui donne accès à la partie administration, y compris à la création de nouvelles offres d'emploi via un formulaire et à la suppression d'offres existantes.

Ensuite, il y a une barre de recherche qui malheureusement ne fonctionne pas.

Les offres d'emploi sont ensuite affichées sous forme de cartes avec leur région et d'autres informations pertinentes.

Il y a également un bouton "load more" en bas de la page qui permet de charger 12 offres supplémentaires à chaque clic.

Dans la page dédiée à chaque offre, vous avez accès à toutes les informations relatives à l'offre elle-même, ainsi qu'à un bouton "apply".
