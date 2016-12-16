---
layout: rainforest
title: Satellite Imagery
description: Introduction à l’utilisation d’images satellite dans les projets liés à la forêt tropicale afin d’analyser les changements intervenus dans une zone au fil du temps, ou établir des preuves de déforestation, de tendances telles que l’augmentation des activités commerciales, ou de montrer les effets visibles de la dégradation forestière . <p>Extrait du rapport sur <a href="/rainforest-tech">la Technologie pour les Forêts Tropicales</a> .</p>
image: /media/index/satellite.svg
funder_name: Rainforest Foundation Norway
funder_logo: /images/logos/rfn.svg
funder_link: //www.regnskog.no/en
published: true
navigation:
  - Qu’est-ce que l’imagerie satellite ?
  - Quelle en est l’utilité ?
  - Outils
  - Coût
  - Risques et difficultés
  - Cas d’études
  - Ressources complémentaires
  - À propos
ref: rt-si
lang: fr
categories:
  - fr
---

## Imagerie satellite

> ### Objectifs potentiels
> * Rassembler des informations témoignant de la déforestation ou de la dégradation forestière
> * Consigner des preuves d’utilisations illégales des terres par les entreprises   
> * Enregistrer et surveiller la valeur environnementale des terres ou des zones forestières.

Cette introduction est issue du [*Guide introductif à l’utilisation de la technologie pour suivre l’évolution et partager des informations sur la forêt tropicale et les droits des peuples forestiers.*](/fr/rainforest-tech) Il fournit un point de départ aux organisations et activistes désireux d’intégrer des technologies en appui à leurs actions de plaidoyer, et est le fruit d’un partenariat entre la *[Rainforest Foundation Norway]*(http://www.regnskog.no/en/) et *[The Engine Room]*(https://theengineroom.org/).

![Rainforest Foundation Norway](/images/logos/rfn-dark.svg) ![The Engine Room](/images/logos/engineroom-dark.png)

Téléchargez le guide introductif complet (1,6 MB pdf), ou consultez le en ligne ci-dessous.

## Qu’est-ce que l’imagerie satellite ?

* Les satellites en orbite autour de la Terre prennent des photographies de la surface de la planète depuis l’espace, notamment des forêts et des territoires des communautés.  
* Ces photographies peuvent être utilisées pour déterminer les changements qui se sont produits dans une zone forestière sur une certaines période, ou combinées avec d’autres formes d’information dont d’autres types de cartes.

## Quelle en est l’utilité ?
Par le passé, seules les grandes institutions, les gouvernements et les grandes entreprises pouvaient s’offrir des images satellite. Cette technologie est à présent largement accessible et gratuite (ou très bon marché). Comparer des images d’une même zone prises régulièrement peut servir à établir des preuves de déforestation, de tendances comme la croissance des activités commerciales ou d’impacts visibles de la destruction des forêts comme la monoculture (qui suit un schéma de plantation reconnaissable du ciel).

## Outils
Il existe des outils open-source gratuits de très bonne qualité pour analyser les images satellite : **QGIS** est le logiciel SIG le plus utilisé ( http://www.qgis.org/en/docs/index.html). Ses utilisateurs ajoutent, éditent, manipulent et présentent des données SIG. QGIS a des fonctionnalités moins avancées qu’ArcGIS (voir Applications Mobiles ci-dessus), est plus long à maîtriser et moins stable – mais il est gratuit et dispose d’une communauté active de volontaires offrant un soutien technique. Il faut maîtriser des langages de programmation tels que Python pour pouvoir effectuer des processus d’analyse plus complexes.

**Global Forest Watch (GFW)** est l’outil le plus complet d’analyse d’images satellite des couverts forestiers mondiaux (http://www.globalforestwatch.org/
). GFW collecte des images satellite de ses partenaires et les propose en téléchargement gratuit, et librement réutilisables. Il analyse automatiquement la perte forestière, contient des systèmes d’alertes aux incendies et signale tout changement dans une zone sélectionnée.

##   Coût
Les images satellite peuvent être gratuites (http://earthexplorer.usgs.gov/ ou l’outil Collect Earth d’OpenForis, qui analyse des données de Google Earth http://www.openforis.org/tools/collect-earth.html), ou vendues entre $10 et $50 par kilomètre carré pour les achats commerciaux (En général par un revendeur http://www.aaas.org/page/high-resolution-satellite-imagery-ordering-and-analysis-handbook#VI). Outre leur prix d’achat, les images satellite nécessitent beaucoup de travail et un investissement considérable en temps (pour analyser des milliers d’images à haute résolution), en ressources (des ordinateurs rapides) et en compétences (experts SIG). Global Forest Watch tente de pallier ces inconvénients, mais manque de souplesse et ne fournit pas d’images de haute qualité à même de montrer des changements de manière détaillée (voir **résolution**, ci-dessous).

### Risques et difficultés
L’inconvénient principal de l’imagerie satellite réside dans la **résolution** des images, actuellement trop basse pour montrer des changements dans le détail. Global Forest Watch fournit des images à une échelle de 50 mètres par pixel, ce qui n’est pas très précis (il produit également des images à 30 mètres par pixel, mais une fois par an seulement, ce qui n’est parfois pas assez rapide pour pouvoir les utiliser comme preuve de déforestation).

Ceci nous amène à un deuxième problème : **la mise à jour**. Les images sont généralement mises à jour mensuellement, et parfois annuellement ( Cette situation pourrait changer : des entreprises comme Planet Labs (www.planet.com) évoquent des images quotidiennes à l’avenir, alors que Libra fournit des données Landsat toutes les deux semaines (http://libra.developmentseed.org). Le projet MAAP vise à produire des mises à jour hebdomadaires pour l’Amazonie andine. (http://maaproject.org/about-maap/)). Ce délai permet les analyses historiques mais n’est pas pratique pour la surveillance en temps réel (toutefois, les photographies aériennes indépendantes IY Aerial Photography, page X, peut fournir des images plus à jour).

### Études de cas

#### Combiner les données satellite avec d’autres sources d’information.

L’organisation indonésienne de protection de la forêt tropicale Warsi a combiné des données cartographiques prises par satellite, obtenues du Landsat Thematic Mapper (Landsat TM) et Advanced Land Observation Satellite (ALOS), à d’autres sources d’information pour retracer la répartition du peuple Orang Rimba et leur utilisation des ressources naturelles.

**Quelle en a été l’utilisation ?**

* Warsi a pu combiner les données satellite à des données GPS et à des cartes numériques réalisées à partir de cartes papier sur les concessions de ressources naturelles.
* L’imagerie satellite a été relativement coûteuse. Il arrivait que des nuages dissimulent des zones essentielles de l’image, et toute une série d’images devaient donc être analysée pour se faire une bonne idée de la situation.
* Le parc national Bukit Duabelas offre à présent des droits d’usages aux Orang Rimba et protège officiellement la zone, mais la déforestation continue de poser problème.

#### Utilisation de données satellite pour fournir des preuves d’abattage illégal d’arbres.

En janvier 2015, l’analyse réalisée par Greenomics-Indonesia de deux images Landsat de la NASA (voir la section sur la cartographie satellite ci-dessous) de l’île de Pulau Pedang, au large de Sumatra, a identifié de vastes zones de forêts de tourbières ayant été déboisées.

**Quelle en a été l’utilité ?**

* Greenomics a utilisé l’information pour attaquer l’entreprise de papier Asia Pacific Resources International Holdings Limited (APRIL), qui a s’est publiquement engagée à mettre fin à toute nouvelle plantation d’ici janvier 2014.  
* Greenomics a fait le choix de transmettre ces informations aux médias en anglais, et a rédigé une déclaration accompagnée d’images à l’appui de ses arguments. En mars 2015, APRIL a admis que des fautes avaient été commises et a renvoyé un entrepreneur et un responsable des plantations (http://www.greenomics.org/docs/Greenomics_Press-Release_SFMP_Violation-(LowRes).pdf).

### Ressources complémentaires

* **Global Forest Watch** est un système de surveillance et d’alerte sur les forêts en ligne et interactif, qui contient des images satellite et d’autres informations : [www.globalforestwatch.org](http://www.globalforestwatch.org)
* **CLASlite** est conçu pour fournir une cartographie et un système de surveillance des forêts mis à jour chaque semaine grâce à des images satellites à haute résolution : [http://claslite.carnegiescience.edu/en/index.html](http://claslite.carnegiescience.edu/en/index.html) (anglais et espagnol).
* Le projet de technologies géospatiales de  **AAAS** contient des cas d’études détaillés sur la collecte, la catégorisation et l’analyse d’images satellites pour constituer des preuves de violations des droits de l’Homme : http://www.aaas.org/case-studies

### À propos

Ce site a été créé par la [Rainforest Foundation Norway](http://regnskog.no/en/) et [The Engine Room](https://theengineroom.org/) comme introduction à l’utilisation de la technologie pour suivre l’évolution et partager des informations sur la forêt tropicale, le droit à la terre et les droits des peuples forestiers. Téléchargez le guide introductif complet ici.

Des commentaires ou des questions ? Écrivez à [post@theengineroom.org](mailto:post@theengineroom.org) ou à [rainforest@rainforest.no](mailto:rainforest@rainforest.no).

Rainforest Foundation Norway (RFN) est une organisation phare au niveau mondial dans protection des forêts tropicales basée sur les droits. Elle a pour mission de soutenir les peuples autochtones et les communautés traditionnelles vivant dans les forêts tropicales à travers le monde dans la protection de leur environnement, et d’assurer le respect de leurs droits en les aidant à:

* Sécuriser et contrôler les ressources naturelles nécessaires à leur bien-être à long terme, et gérer ces ressources d’une manière qui ne nuise pas à leur environnement, ne porte pas atteinte à leur culture et ne compromette pas leur avenir;

* Développer les moyens de protéger leurs droits individuels et collectifs et obtenir, adapter et contrôler les services de base fournis par l’état.

RFN collabore étroitement avec plus de 70 organisations locales et nationales œuvrant à la protection de l’environnement, des droits des peuples autochtones et des droits de l’homme dans 11 pays d’Amazonie, d’Afrique Centrale, d’Asie du Sud-Est et d’Océanie.

#### Auteurs

The Engine Room est une organisation internationale qui aide les activistes, les organisations de promotion du changement social et les acteurs du changement à tirer parti des données et de la technologie pour accroître leur influence. The Engine Room offre un soutien direct aux projets des organisations de promotion du changement social; fédère les communautés afin de coordonner les idées émergentes et d’identifier des spécialistes ; et publie des recommandations étayées pour aider tous les membres du secteur à prendre les décisions adéquates pour l’utilisation des données et de la technologie.

[Tom Walker](https://www.theengineroom.org/our_team/tom-walker/) et [Tin Geber](https://www.theengineroom.org/our_team/tin-geber/) ont effectué les recherches et rédigé les éléments principaux de l’ouvrage, et Ruth Miller a réalisé la mise en page et la conception graphique du document. Les contributions et les corrections apportées par Vemund Olsen et Christopher Wilson ont été d’un soutien inestimable. Le code source du site est disponible sur [Github](https://github.com/the-engine-room/library/).

<hr>

Retour à [La Technologie pour les Forêts Tropicales.](/rainforest-tech)
