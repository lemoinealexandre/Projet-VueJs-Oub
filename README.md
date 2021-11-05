# VueJS-mini-TP

## Résumé:
Le but de ce projet est de proposer une application web permettant aux utilisateurs de chercher et créer des restaurants enregistrer dans une base de donnée.
Il se base sur les TP 1, 2 et 3 en cours de Javascript et HTML 5 de Monsieur Buffa.
Le serveur modifié est basé sur le serveur dans le lien suivant: http://miageprojet2.unice.fr/@api/deki/files/3049/=serveurV2.zip;
La base de donnée est basé sur la BDD de teste utilisé pour les TP précédent: https://raw.githubusercontent.com/mongodb/docs-assets/primer-dataset/primer-dataset.json;

[Video de présentation](https://youtu.be/lLbuPMI6gDE)

## Client

### Technologie
- Javascript
- Framework VueJS
- VueRouter
- VueX

### NPM Package:
- [Vuetify](https://vuetifyjs.com): Librairie UI pour VueJS;
- [Vue Leaflet](https://vue2-leaflet.netlify.app): Librairie de création de carte et manipulation de carte (la carte d'OpenStreetMap a était utiisé);

### API:
- [Lorem Picsum](https://picsum.photos): est une API permettant d'obtenir des images de manière aléatoire.

## Serveur

### Technologie
- Javascript
- NodeJS

### NPM Package:
- [nominatim-geocoder](https://www.npmjs.com/package/nominatim-geocoder): Librairie permettant d'utiliser l'[API Nominatim](https://nominatim.org) qui permet de d'obtenir des informations au tour des coordonnées et adresse.
- [mongodb](https://www.npmjs.com/package/mongodb): Pilote permettant que communiquer et d'échanger avec une base de donnée MongoDB.


## Lancer l'application web

Afin de tester en local, l'application web, il est nécessaire d'avoir [MongoDB](https://www.mongodb.com/fr-fr) et [NodeJS](https://nodejs.org).
La base de donnée utlisé est celle de basse c'est a dire dans le lien à coté: 

Pour tous installer :
Si vous avez installer tous ce qui faut

```
cd serveur
npm install

cd ../client
npm install
```

Pour lancer le serveur:
```
cd serveur
node serverCrudWithMongo.js
```

Pour Lancer le client:
```
cd client
npm run serve
```

## Accueil
- L'acceuil et le menu possède 1 barre de recherche chacun. Dans le chargement de la page, on y voit la première barre qui se situe au milieu de l'écran. Ensuite, lorsque l’on descend la page, celle-ci disparaît pour laisser place à la deuxième barre de recherche dans le menu. 
En cherchant un mot dans la barre de recherche, celle-ci nous ramène automatiquement sur la page « restaurants ». Cela permet de trouver le ou les restaurants souhaités.


- Dans l’accueil nous trouvons également des fonctionnalités telles que des images de restaurants, les noms ainsi que les types de cuisines. Les restaurants défilent de manière aléatoire. Lorsqu’on en sélectionne un, cela nous ramène automatiquement sur la fiche détaillée de ce restaurant.

## Gestion des Restaurants
- La page "Gestion des Restaurants" permet d'obtenir l’un des restaurants. Chaque restaurant aura une image générée de manière aléatoire, ainsi que le nom, le type de cuisine et le score moyen du restaurant.

- En cliquant sur le restaurant, vous serez redirigé vers la page "Restaurant Détails" qui affiche les détails du restaurant comme le nom, la cuisine, la position sur une carte, etc...


## Restaurant Détails

- Cette page permet d'obtenir les détails d'un restaurant. Les informations du restaurant sont chargées à partir de l'id restaurant qui est inséré dans le lien.

- La page possède une carte créée à partir de la librairie [Vue Leaflet](https://vue2-leaflet.netlify.app/), elle affiche directement la position du restaurant via un marqueur défini par les coordonnées enregistrées dans la base de données.

## Ajout Restaurant
- Dans la page « ajouter », on y trouve un formulaire demandant des informations précises sur le restaurant auprès du restaurateur. Cela permettra l'enregistrement de celui-ci sur le site. Dans le formulaire on y retrouve: le nom, la cuisine, la ville et l'adresse. Lorsque l'utilisateur clique sur « valider », la page fait appel au serveur pour enregistrer le restaurant dans la base de données. 
Lors de l'ajout du restaurant, le serveur fait appel à l'[API Nomination](https://nominatim.org) qui récupère alors l'adresse du restaurant et retourne la position GPS du restaurant.


## Autour de vous
- La page affiche en plein écran une « map » qui se concentre automatiquement sur la position de l'utilisateur. Sur cette carte, nous avons décidé d’afficher 1000 restaurants car en afficher d’avantages prendrait trop de temps de chargement. Il est possible de cliquer sur tous les points de localisation représentant les restaurants afin d’être redirigé sur la fiche détail du restaurant. Nous avons utilisé la librairie [Vue Leaflet](https://vue2-leaflet.netlify.app) 
