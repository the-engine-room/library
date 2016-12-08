---
layout: rainforest
title: Online Maps
description: An introduction to using online maps that combine different types of data in rainforest-related projects, for purposes including real-time monitoring (showing the places where most incidents happen), campaigning (such as showing where forest cover is being dramatically reduced) or analysis (gaining new insights by overlaying different types of data on the same map).<p>Part of the <a href="/rainforest-tech">Rainforest Technology</a> report.</p>
image: /media/index/online.svg
funder_name: Rainforest Foundation Norway
funder_logo: /images/logos/rfn.svg
funder_link: //www.regnskog.no/en
published: true
navigation:
  - What is it
  - How it can help
  - Tools
  - Cost
  - Risks and challenges
  - Case studies
  - About
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

This introduction to online mapping is part of a [Primer for using technology to monitor and share information on rainforest issues, land rights and indigenous rights](/rainforest-tech). It is designed as a starting point for organisations and activists interested in adding technology to improve their advocacy work, and is the product of a partnership between [Rainforest Foundation Norway](http://www.regnskog.no/en/) and [The Engine Room](https://theengineroom.org).

![Rainforest Foundation Norway](/images/logos/rfn-dark.svg) ![The Engine Room](/images/logos/engineroom-dark.png)

### Que sont les cartes en ligne ? 
* Elles représentent une manière efficace et visuellement attrayante de présenter les informations recueillies sur le sujet de vos travaux (par exemple à travers la cartographie participative ou la collecte mobile de données). Ces cartes peuvent être **statiques**, sous forme d’images ou d’illustrations ; **animées, **pour montrer un changement au cours du temps ; ou **interactives**, permettant aux utilisateurs de zoomer ou dézoomer, de cliquer sur des endroits de la carte pour obtenir plus d’informations, ou d’entrer leurs propres informations (production participative aussi appelée « *crowdsourcing »*).
* Les cartes peuvent être créées de A à Z et mises en ligne sur internet, ou les informations peuvent être ajoutées à des cartes en ligne existantes comme OpenStreetMap, Google Maps ou Crowdmap (http://www.openstreetmap.org/; https://www.google.com/maps/; https://crowdmap.com/).

### Quelle en est l’utilité
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

### Cas d’étude :

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

## About

This site was created by __[Rainforest Foundation Norway](www.regnskog.no/en/)__ and __[The Engine Room](//theengineroom.org)__  as an introduction to using technology to monitor and share information on rainforest issues, land rights and indigenous rights. [*Download the whole primer here.*](media/rainforest/Rainforest-tech-primer.pdf)
  
Rainforest Foundation Norway (RFN) is one of the world's leading organisations in the field of rights-based rainforest protection. Its mission is to support indigenous peoples and traditional populations of the world's rainforests in their efforts to protect their environment and fulfil their rights by assisting them in:

- Securing and controlling the natural resources necessary for their long-term well-being and managing these resources in ways which do not harm their environment, violate their culture or compromise their future;
- and developing the means to protect their individual and collective rights and to obtain, shape, and control basic services from the state.

RFN collaborates closely with more than 70 local and national environmental, indigenous and human rights organisations in 11 countries in the Amazon region, Central Africa, Southeast Asia, and Oceania.
  
#### Contributors
  
The Engine Room is an international organisation that helps activists, social change organisations, and change agents make the most of data and technology to increase their impact. The Engine Room provides direct, project-level support for social change organisations; brings together communities to coordinate emerging ideas and collect practitioners; and documents and publishes findings to help anyone in the sector make better decisions about using data and technology.

[Tom Walker](https://www.theengineroom.org/our_team/tom-walker/) and [Tin Geber](https://www.theengineroom.org/our_team/tin-geber/) researched and wrote the main narrative, while [Ruth Miller](http://ruthmiller.net/) led work on the design and visuals creation. Vemund Olsen and Christopher Wilson provided invaluable input and editing support. The site sourcecode is available on [Github](https://github.com/the-engine-room/library/). Comments or questions? Contact [post@theengineroom.org](mailto:post@theengineroom.org) or [rainforest@rainforest.no](rainforest@rainforest.no).

<hr>

[Return to the Primer on Technology for Forest Peoples' Rights.](/rainforest-tech)
