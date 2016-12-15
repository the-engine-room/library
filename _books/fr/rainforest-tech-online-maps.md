---
layout: rainforest
title: Cartes en ligne
description: Introduction à l’utilisation de cartes en ligne combinant différents types de données pour des projets liés à la forêt tropicale, afin d’effectuer une surveillance en temps réel (en montrant les endroits où se produisent le plus grand nombre d’incidents), de mener des campagnes (ex. en montrant les endroits les plus affectés par la réduction du couvert forestier), ou d’analyser (approfondir ses connaissances en superposant plusieurs types de données sur une carte) . <p> Extrait du rapport sur <a href="/rainforest-tech">la Technologie pour les Forêts Tropicales</a> .</p>
image: /media/index/online.svg
funder_name: Rainforest Foundation Norway
funder_logo: /images/logos/rfn.svg
funder_link: //www.regnskog.no/en
published: true
navigation:
  - Que sont les cartes en ligne ?
  - Quelle en est l’utilité ?
  - Outils
  - Coûts
  - Risques et difficultés
  - Études de cas
  - À propos
ref: rt-om
lang: fr
categories:
  - fr
---

## Cartes en ligne

> ### Objectifs potentiels
> * Obtenir des preuves visuelles de l’utilisation illégale des terres par les entreprises
> * Enregistrer et surveiller la valeur environnementale des zones territoriales  
> * Fournir aux gouvernements des preuves concrètes pour les inciter à reconnaître les terres autochtones

Cette introduction est issue du [*Guide introductif à l’utilisation de la technologie pour suivre l’évolution et partager des informations sur la forêt tropicale et les droits des peuples forestiers.*](/fr/rainforest-tech) Il fournit un point de départ aux organisations et activistes désireux d’intégrer des technologies en appui à leurs actions de plaidoyer, et est le fruit d’un partenariat entre la [Rainforest Foundation Norway](http://www.regnskog.no/en/) et [The Engine Room](https://theengineroom.org/).

![Rainforest Foundation Norway](/images/logos/rfn-dark.svg) ![The Engine Room](/images/logos/engineroom-dark.png)

Téléchargez le guide introductif complet (1,6 MB pdf), ou consultez le en ligne ci-dessous.

### Que sont les cartes en ligne ?
* Elles représentent une manière efficace et visuellement attrayante de présenter les informations recueillies sur le sujet de vos travaux (par exemple à travers la cartographie participative ou la collecte mobile de données). Ces cartes peuvent être **statiques**, sous forme d’images ou d’illustrations ; **animées, **pour montrer un changement au cours du temps ; ou **interactives**, permettant aux utilisateurs de zoomer ou dézoomer, de cliquer sur des endroits de la carte pour obtenir plus d’informations, ou d’entrer leurs propres informations (production participative aussi appelée « *crowdsourcing »*).
* Les cartes peuvent être créées de A à Z et mises en ligne sur internet, ou les informations peuvent être ajoutées à des cartes en ligne existantes comme OpenStreetMap, Google Maps ou Crowdmap (http://www.openstreetmap.org/; https://www.google.com/maps/; https://crowdmap.com/).

### Quelle en est l’utilité ?
Les cartes en ligne peuvent servir à la **surveillance en temps réel **(en indiquant à quels endroits les incidents sont les plus fréquents), aux** campagnes **(en démontrant la réduction spectaculaire du couvert forestier) ou à **l’analyse **(pour une meilleure appréhension de la situation par la superposition de différents types de données sur une même carte).

### Outils
Les cartes élaborées pour les campagnes n’ont pas toujours besoin d’être interactives. Certaines cartes conviennent mieux à l’infographie – une image statique accompagnée d’un texte explicatif et d’un code de couleurs. **Choisissez tout d’abord votre plateforme en ligne :** Il est souvent plus aisé d’utiliser des cartes interactives disponibles en ligne qui comprennent déjà certains éléments comme les routes et les images satellite. Vous trouverez les cartes commerciales sur Google, Bing ou MapQuest (http://www.bing.com/maps/; http://www.mapquest.com/). La plateforme OpenStreetMap contient des informations fournies par des bénévoles, mais ses cartes sont généralement moins précises en dehors des zones urbaines.

> ### Comprendre les coordonnées et les polygones
> Afin de pouvoir collecter des données à l’aide d’outils mobiles, de drones ou de cartes participatives, il est important de maîtriser les notions fondamentales de la cartographie. Chaque élément sur une carte a des coordonnées qui le situent sur la grille des **latitudes** (nord-sud) et des **longitudes** (est-ouest). Connaître la latitude et la longitude d’un élément permet de connaître sa position (appelée **point**). Pour définir la taille d’un élément, il faut relier des points autour de son périmètre pour obtenir une **forme polygonale**.

**Ajoutez ensuite des couches à la carte :** il existe différentes manières d’ajouter des informations, des simples marqueurs aux « cartes thermiques » (qui montrent la concentration d’un type d’incident dans une zone spécifique, à l’aide de couleurs). Certains sites fournissent des données destinées à être intégrées dans des cartes des forêts tropicales (InfoAmazonia fournit des cartes de l’Amazonie sur la déforestation et les incendies de forêts : http://infoamazonia.org/datasets/. Le géoportail Sarawak fournit des informations similaires pour l’île malaisienne de Bornéo http://www.bmfmaps.ch/). MapBox Studio,  le thème JEO sous Wordpress et CartoDB (http://cartodb.com/;  https://www.mapbox.com/mapbox-studio. Cependant, ils impliquent de télécharger les cartes sur des serveurs MapBox, ce qui n’est pas adéquat pour des informations sensibles. Guide d’installation de JEO en anglais et portugais : http://geojournalism.org/2014/06/portugues-jeo-primeiros-passos/) fournissent des logiciels simples et puissants pour la création de cartes interactives. Créér vos propres couches interactives nécessite des outils de programmation appelés bibliothèques Javascript (dont les plus communs sont Leaflet.js et OpenLayers).

### Coûts
Le coût de l’élaboration et de la création d’une carte interactive en ligne dépend de la facilité d’utilisation des outils et des compétences de programmation nécessaires. Si vous n’êtes pas programmateur, les outils les plus simples sont CartoDB et MapBox – mais il vous faudra payer pour obtenir une carte plus complexe (tous deux ont une version gratuite avec des fonctionnalités limitées). L’utilisation de bibliothèques comme Leaflet.js avec OpenStreetMaps est gratuite, mais exige des compétences de programmation élevées. Les cartes produites par les founisseurs commerciaux sont souvent gratuites au début, mais coûtent cher si leur distribution est importante (Google Maps est gratuit jusqu’à 25 000 transferts de cartes par jour (un nombre très élevé), mais est coûteux au-delà).

### Risques et difficultés
Sur les plateformes commerciales, la date, le lieu et le type de téléchargement des cartes est enregistré. Ainsi, les cartes publiques disponibles sur les plateformes commerciales laissent apparaître la localisation des individus qui ont téléchargé des informations sur le site et les mettent en danger. En même temps, il est essentiel d‘éviter les erreurs : des informations présentées au mauvais endroit vont à l’encontre des objectifs d’une campagne.

### Études de cas

#### L’impact des cartes animées pour la visualisation de la réduction du couvert forestier.
Open Development Cambodge collecte et fournit des informations quantitatives sur des questions liées à la terre, l’économie et l’environnement au Cambodge. L’organisation a utilisé des informations relatives aux changements dans le couvert forestier sur une période de dix ans pour créer une vidéo en accéléré montrant sa dégradation.

**Quels résultats ?**

* La vidéo a été facile et rapide à réaliser car ODC avait préparé et transféré toutes ses informations sur ses cartes interactives.  
* La vidéo en accéléré a servi d’outil de plaidoyer efficace car elle mettait en évidence l’étendue des pertes forestières au Cambodge. Elle a été consultée plus de 2 000 fois (http://www.opendevelopmentcambodia.net/briefings/forest-cover/).

#### Cartographie des ressources et des communautés en Amazonie.
RAISG (réseau d’informations socio-environnementales géoréférencées d’Amazonie) est un projet sur plusieurs années qui vise à sensibiliser et défendre les droits des peuples autochtones et l’environnement. Il a recueilli des informations relatives aux aires protégées, aux terres autochtones, aux bassins hydrographiques et aux coupes illégales.

**Quels résultats ?**

* RAISG présente toutes ses informations sour forme de cartes interactives (http://raisg.socioambiental.org/mapa-online/index.html), de cartes statiques accompagnées d’infographies (http://raisg.socioambiental.org/amazonia-2012-areas-protegidas-e-territorios-indigenas#english) pouvant être téléchargées et de rapports.
* Les cartes du RAISG constituent un puissant outil de plaidoyer fondé sur les preuves car elles s’appuient sur une méthodologie robuste. Les organisations partenaires du réseau peuvent s’en servir pour faire pression sur les gouvernements (http://raisg.socioambiental.org/system/files/Amazonia%20under%20pressure16_05_2013.pdf).  

## À propos

Ce site a été créé par la [Rainforest Foundation Norway](http://regnskog.no/en/) et [The Engine Room](https://theengineroom.org/) comme introduction à l’utilisation de la technologie pour suivre l’évolution et partager des informations sur la forêt tropicale, le droit à la terre et les droits des peuples forestiers. Téléchargez le guide introductif complet ici.

Des commentaires ou des questions ? Écrivez à [post@theengineroom.org](mailto:post@theengineroom.org) ou à [rainforest@rainforest.no](mailto:rainforest@rainforest.no).

Rainforest Foundation Norway (RFN) est une organisation phare au niveau mondial dans protection des forêts tropicales basée sur les droits. Elle a pour mission de soutenir les peuples autochtones et les communautés traditionnelles vivant dans les forêts tropicales à travers le monde dans la protection de leur environnement, et d’assurer le respect de leurs droits en les aidant à:

* Sécuriser et contrôler les ressources naturelles nécessaires à leur bien-être à long terme, et gérer ces ressources d’une manière qui ne nuise pas à leur environnement, ne porte pas atteinte à leur culture et ne compromette pas leur avenir;

* Développer les moyens de protéger leurs droits individuels et collectifs et obtenir, adapter et contrôler les services de base fournis par l’état.

RFN collabore étroitement avec plus de 70 organisations locales et nationales œuvrant à la protection de l’environnement, des droits des peuples autochtones et des droits de l’homme dans 11 pays d’Amazonie, d’Afrique Centrale, d’Asie du Sud-Est et d’Océanie.

#### Auteurs

[The Engine Room](https://www.theengineroom.org) est une organisation internationale qui aide les activistes, les organisations de promotion du changement social et les acteurs du changement à tirer parti des données et de la technologie pour accroître leur influence. The Engine Room offre un soutien direct aux projets des organisations de promotion du changement social; fédère les communautés afin de coordonner les idées émergentes et d’identifier des spécialistes ; et publie des recommandations étayées pour aider tous les membres du secteur à prendre les décisions adéquates pour l’utilisation des données et de la technologie.

[Tom Walker](https://www.theengineroom.org/our_team/tom-walker/) et [Tin Geber](https://www.theengineroom.org/our_team/tin-geber/) ont effectué les recherches et rédigé les éléments principaux de l’ouvrage, et Ruth Miller a réalisé la mise en page et la conception graphique du document. Les contributions et les corrections apportées par Vemund Olsen et Christopher Wilson ont été d’un soutien inestimable. Le code source du site est disponible sur [Github](https://github.com/the-engine-room/library/).<hr>

Retour à [La Technologie pour les Forêts Tropicales.](/fr/rainforest-tech)
