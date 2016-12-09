---
layout: rainforest
title: Satellite Imagery
description: An introduction to using satellite imagery in rainforest-related projects for analysing change over time in a forest area, or generating evidence of deforestation, trends like increased commercial activity, or visible results of forest degradation.<p>Part of the <a href="/rainforest-tech">Rainforest Technology</a> report.</p>
image: /media/index/satellite.svg
funder_name: Rainforest Foundation Norway
funder_logo: /images/logos/rfn.svg
funder_link: //www.regnskog.no/en
published: true
navigation:
  - Qu’est-ce que l’imagerie satellite?
  - Quelle en est l’utilité?
  - Outils
  - Coût
  - Risques et difficultés
  - Cas d’étude
  - About
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

This introduction to satellite imagery is part of a [Primer for using technology to monitor and share information on rainforest issues, land rights and indigenous rights](/rainforest-tech). It is designed as a starting point for organisations and activists interested in adding technology to improve their advocacy work, and is the product of a partnership between [Rainforest Foundation Norway](http://www.regnskog.no/en/) and [The Engine Room](https://theengineroom.org).

![Rainforest Foundation Norway](/images/logos/rfn-dark.svg) ![The Engine Room](/images/logos/engineroom-dark.png)

## Qu’est-ce que l’imagerie satellite?

* Les satellites en orbite autour de la Terre prennent des photographies de la surface de la planète depuis l’espace, notamment des forêts et des territoires des communautés.  
* Ces photographies peuvent être utilisées pour déterminer les changements qui se sont produits dans une zone forestière sur une certaines période, ou combinées avec d’autres formes d’information dont d’autres types de cartes.

## Quelle en est l’utilité?
Par le passé, seules les grandes institutions, les gouvernements et les grandes entreprises pouvaient s’offrir des images satellite. Cette technologie est à présent largement accessible et gratuite (ou très bon marché). Comparer des images d’une même zone prises régulièrement peut servir à établir des preuves de déforestation, de tendances comme la croissance des activités commerciales ou d’impacts visibles de la destruction des forêts comme la monoculture (qui suit un schéma de plantation reconnaissable du ciel).

## Outils
Il existe des outils open-source gratuits de très bonne qualité pour analyser les images satellite : **QGIS** est le logiciel SIG le plus utilisé ( http://www.qgis.org/en/docs/index.html). Ses utilisateurs ajoutent, éditent, manipulent et présentent des données SIG. QGIS a des fonctionnalités moins avancées qu’ArcGIS (voir Applications Mobiles ci-dessus), est plus long à maîtriser et moins stable – mais il est gratuit et dispose d’une communauté active de volontaires offrant un soutien technique. Il faut maîtriser des langages de programmation tels que Python pour pouvoir effectuer des processus d’analyse plus complexes.

**Global Forest Watch (GFW)** est l’outil le plus complet d’analyse d’images satellite des couverts forestiers mondiaux (http://www.globalforestwatch.org/
). GFW collecte des images satellite de ses partenaires et les propose en téléchargement gratuit, et librement réutilisables. Il analyse automatiquement la perte forestière, contient des systèmes d’alertes aux incendies et signale tout changement dans une zone sélectionnée.

##   Coût
Les images satellite peuvent être gratuites (http://earthexplorer.usgs.gov/ ou l’outil Collect Earth d’OpenForis, qui analyse des données de Google Earth http://www.openforis.org/tools/collect-earth.html), ou vendues entre $10 et $50 par kilomètre carré pour les achats commerciaux (En général par un revendeur http://www.aaas.org/page/high-resolution-satellite-imagery-ordering-and-analysis-handbook#VI). Outre leur prix d’achat, les images satellite nécessitent beaucoup de travail et un investissement considérable en temps (pour analyser des milliers d’images à haute résolution), en ressources (des ordinateurs rapides) et en compétences (experts SIG). Global Forest Watch tente de pallier ces inconvénients, mais manque de souplesse et ne fournit pas d’images de haute qualité à même de montrer des changements de manière détaillée (voir **résolution**, ci-dessous).

### Risques et difficultés
L’inconvénient principal de l’imagerie satellite réside dans la **résolution** des images, actuellement trop basse pour montrer des changements dans le détail. Global Forest Watch fournit des images à une échelle de 50 mètres par pixel, ce qui n’est pas très précis (il produit également des images à 30 mètres par pixel, mais une fois par an seulement, ce qui n’est parfois pas assez rapide pour pouvoir les utiliser comme preuve de déforestation). Ceci nous amène à un deuxième problème : **la mise à jour**. Les images sont généralement mises à jour mensuellement, et parfois annuellement ( Cette situation pourrait changer : des entreprises comme Planet Labs (www.planet.com) évoquent des images quotidiennes à l’avenir, alors que Libra fournit des données Landsat toutes les deux semaines (http://libra.developmentseed.org). Le projet MAAP vise à produire des mises à jour hebdomadaires pour l’Amazonie andine. (http://maaproject.org/about-maap/)). Ce délai permet les analyses historiques mais n’est pas pratique pour la surveillance en temps réel (toutefois, les photographies aériennes indépendantes IY Aerial Photography, page X, peut fournir des images plus à jour).

### Cas d’étude

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

### Further resources

* [Global Forest Watch](www.globalforestwatch.org) is an interactive online forest monitoring and alert system that provides satellite and other types of information
* [MAAP (Monitoring of the Andean Amazon Project)](http://maaproject.org/about-maap/) is a project of Amazon Conservation Association and ACCA-Conservación Amazónica
* [CLASlite](http://claslite.carnegiescience.edu/en/index.html) is designed to provide weekly updated high-resolution mapping and monitoring of forests with satellite imagery. (English and Spanish)
* [AAAS’s Geospatial Technologies Project](http://www.aaas.org/case-studies) contains detailed case studies of how satellite imagery was collected, categorised and analysed to document human rights abuses

### About

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
