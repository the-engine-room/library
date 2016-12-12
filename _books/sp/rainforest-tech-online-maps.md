---
layout: rainforest
<<<<<<< HEAD
title: Mapas en línea
description: Una introducción al uso de mapas en línea que combinan diferentes tipos de datos en proyectos relacionados a bosques lluviosos a fin de incluir monitoreo en tiempo real (mostrar los lugares donde ocurre la mayoría de los incidentes), llevar a cabo campañas (por ejemplo, mostrar la ubicación de reducciones drásticas de la cubierta forestal) o realizar análisis (obtener nuevas perspectivas al superponer diferentes tipos de datos sobre el mismo mapa). Parte del <p>informe <a href="/rainforest-tech">Tecnología para bosques lluviosos</a>.</p>
image: /media/index/audio.svg
=======
title: Online Maps
description: An introduction to using online maps that combine different types of data in rainforest-related projects, for purposes including real-time monitoring (showing the places where most incidents happen), campaigning (such as showing where forest cover is being dramatically reduced) or analysis (gaining new insights by overlaying different types of data on the same map).<p>Part of the <a href="/rainforest-tech">Rainforest Technology</a> report.</p>
image: /media/index/online.svg
>>>>>>> origin/multilang
funder_name: Rainforest Foundation Norway
funder_logo: /images/logos/rfn.svg
funder_link: //www.regnskog.no/en
published: true
navigation:
<<<<<<< HEAD
  - ¿En qué consiste?
  - Contribuciones posibles
  - Herramientas
  - Costos
  - Riesgos y desafíos
  - Casos de estudio
  - Acerca de este sitio
ref: rt-om
lang: sp
categories:
  - sp
---

## **Mapas en línea**

> ### Objetivos posibles
> * Registrar pruebas de infracciones cometidas por las compañías en su uso de la tierra
> * Grabar y monitorear el valor ambiental de extensiones de terreno
> * Presentar pruebas concretas a los gobiernos para lograr que reconozcan las tierras indígenas

La presente introducción es parte de una [Guía para el uso de la tecnología en el monitoreo e intercambio de información sobre asuntos relacionados a los bosques lluviosos](https://library.theengineroom.org/rainforest-tech/), los derechos territoriales y los derechos de los pueblos indígenas. Está diseñada como punto de partida para organizaciones y activistas interesados en incorporar la tecnología en la mejora de sus esfuerzos de defensa; es producto de una colaboración entre la [Fundación Rainforest Noruega](http://www.regnskog.no/en/) y [The Engine Room](https://theengineroom.org).

_Descargar [la guía completa](http://d5i6is0eze552.cloudfront.net/documents/Publikasjoner/Andre-rapporter/Rainforest-tech-primer.pdf?mtime=20160704134642) (1.6MB pdf) o leerla en línea (a continuación)._

![Rainforest Foundation Norway](/images/logos/rfn-dark.svg) ![The Engine Room](/images/logos/engineroom-dark.png)

### **¿En qué consiste?**

* Es una potente forma visual de presentar información recogida sobre el tema de fondo (por ejemplo, mediante mapeo participativo recolección de datos móvil). Los mapas pueden ser: **estáticos**, como imágenes e ilustraciones; **animados**, por ejemplo para demostrar un cambio durante cierto período; o **interactivos**, donde los usuarios pueden acercar o alejar una imagen, hacer clic en ciertas áreas del mapa para visualizar más información o proporcionar su propia información (*crowdsourcing*).

* Se puede crear mapas partiendo de cero y cargarlos al internet o se puede agregar información a mapas en línea existentes ([OpenStreetMap](http://www.openstreetmap.org/), [Google Maps](https://www.google.com/maps/) o [Crowdmap](https://crowdmap.com/)).

### **Contribuciones posibles**

Se puede utilizar los mapas en línea para **monitoreo en tiempo real** (mostrando lugares donde ocurre la mayoría de los incidentes), **campañas** (mostrar reducciones drásticas de la cubierta forestal) o **análisis** (adquirir nuevas perspectivas al superponer distintos tipos de datos en el mismo mapa).

### **Herramientas**

Los mapas para campañas no siempre necesitan ser interactivos. Algunos mapas funcionan mejor a manera de infográficos, o imágenes estáticas que presentan de manera clara explicaciones de texto y leyendas a color. **Primero, seleccionar la plataforma de mapa en línea:** a veces es más fácil utilizar mapas interactivos existentes en línea que contienen capas de información como carreteras e imágenes satelitales. Los mapas comerciales incluyen Google, [Bing](http://www.bing.com/maps/) y [MapQuest](http://www.mapquest.com/). La plataforma gratis OpenStreetMap contiene información cargada por voluntarios y por lo general es menos precisa en áreas remotas no urbanas.

> ### Comprender coordinadas y polígonos
> Es importante comprender los fundamentos cartográficos al recoger datos utilizando herramientas móviles, drones o mapeo participativo. Todo objeto en un mapa posee coordinadas que señalan su ubicación en un sistema de **latitud** (norte-sur) y **longitud** (este-oeste). Conocer la latitud y longitud de un objeto nos da la **posición** (conocida como datos de punto). Para determinar el tamaño de un objeto, es necesario unir puntos de su perímetro en una **forma poligonal**.

**A continuación, crear sus propias capas:** Existen muchas maneras de agregar información, desde señales básicas hasta mapas de indicadores de riesgo ("heat maps", que muestran un determinado tipo de incidente concentrado en un área en particular). Algunos sitios proporcionan datos diseñados para ser agregados a mapas forestales. [InfoAmazonia](http://infoamazonia.org/datasets/) ofrece mapas de la región amazónica sobre la deforestación e incendios forestales. El Geoportal [Sarawak](http://www.bmfmaps.ch/) contiene información similar sobre el Borneo malasio. [MapBox Studio](https://www.mapbox.com/mapbox-studio), el tema JEO de Wordpress y [CartoDB](http://cartodb.com/) ofrecen software potente y fácil de usar para la creación de mapas interactivos. No obstante, esto requiere cargar sus mapas a servidores de MapBox y por tanto no se recomienda para casos con información sensible ([guía](http://geojournalism.org/2014/06/portugues-jeo-primeiros-passos/) para instalar JEO en inglés y portugués). Crear sus propias capas interactivas implica generalmente el uso de herramientas llamadas bibliotecas Javascript (Leaflet.js y OpenLayers siendo las más comunes).

### **Costos**

El costo de diseñar y crear mapas interactivos en línea dependerá de la facilidad de uso de las herramientas y de las habilidades de programación necesarias. Si no cuenta con un programador, las herramientas más fáciles son CartoDB y MapBox, pero es necesario pagar una cuota para producir mapas más complejos (los dos ofrecen una opción gratuita con funcionalidad limitada). El uso de bibliotecas como Leaflet.js con OpenStreetMaps es gratuito pero requiere un programador capacitado. Los mapas producidos por proveedores comerciales son gratuitos al principio pero ampliar su uso puede resultar costoso. Google Maps es gratuita hasta una carga máxima de 25.000 mapas al día (un número muy alto) pero a partir de allí resulta costoso.

### **Riesgos y desafíos**

Las compañías almacenan información sobre cuándo, dónde y cómo los usuarios cargan mapas en una plataforma comercial de mapeado; por tanto, los mapas públicos de dichas plataformas pueden señalar la ubicación de los individuos que cargan la información, poniéndolos a riesgo. Por otra parte, es esencial evitar cometer errores, ya que una información presentada en el lugar incorrecto es contraproducente para la campaña.

### **Casos de estudio**

#### Impacto de mapas animados para mostrar pérdida de cubierta forestal

[Open Development Camboya](https://cambodia.opendevelopmentmekong.net/) trabaja para reunir y proporcionar información cuantitativa sobre asuntos territoriales, económicos y ambientales en Camboya. Utilizaron información sobre cambios en la cubierta forestal durante un período de diez años para crear un video en lapso de tiempo para mostrar la deforestación.

**Contribución**

* El video fue fácil y rápido de cargar por que ODC ya tenía toda la información preparada y cargada en sus mapas interactivos.
* El video en lapso de tiempo fue una herramienta efectiva de acción por mostrar claramente la magnitud de deforestación en Camboya. Ha sido visualizado más de 2.000 veces.


#### Mapeo de recursos y comunidades en el Amazonas
[RAISG](https://raisg.socioambiental.org) (Red Amazónica de Información Socioambiental Georeferenciada) es un proyecto plurianual que busca dar a conocer y defender los derechos de los pueblos indígenas asuntos medioambientales; recopila información sobre áreas protegidas, tierras indígenas, cuencas hidrográficas y talas ilegales.

**Contribución**

* La RAISG presenta toda la información recopilada en [mapas interactivos en línea](http://raisg.socioambiental.org/mapa-online/index.html), así como en mapas estáticos descargables con [infográficos](http://raisg.socioambiental.org/amazonia-2012-areas-protegidas-e-territorios-indigenas#english) e [informes](http://raisg.socioambiental.org/system/files/Amazonia%20under%20pressure16_05_2013.pdf).
* Gracias a su metodología, los mapas de la RAISG son una herramienta sólida para acción basada en pruebas concretas. Al ejercer presión ante los gobiernos, las organizaciones asociadas son capaces de confiar en la información de la RAISG.

### **Acerca de este sitio**
Este sitio fue creado por la [Fundación Rainforest Noruega](www.regnskog.no/en/) y [The Engine Room](https://theengineroom.org) a manera de introducción al uso de la tecnología en el monitoreo e intercambio de información sobre asuntos relacionados a los bosques lluviosos, los derechos territoriales y los derechos indígenas. Bajar [la guía completa aquí](http://d5i6is0eze552.cloudfront.net/documents/Publikasjoner/Andre-rapporter/Rainforest-tech-primer.pdf?mtime=20160704134642).

La Fundación Rainforest Noruega (RFN) es una de las organizaciones líderes en el campo de la protección de bosques lluviosos basada en los derechos humanos. Su misión es brindar apoyo a los pueblos indígenas y a las poblaciones tradicionales de los bosques lluviosos del mundo en sus esfuerzos de protección medioambiental y lograr el pleno uso de sus derechos brindándoles asistencia en:

* Asegurar y controlar los recursos naturales necesarios para su bienestar a 	largo plazo y manejar dichos recursos evitando causar daños a su medioambiente, violar su cultura y afectar su futuro; y
* Desarrollar medios para proteger sus derechos individuales y colectivos y obtener, 	formar y controlar los servicios básicos que proporciona el estado.

La RFN colabora de cerca con más de 70 organizaciones medioambientales, indígenas y de derechos humanos a nivel local y nacional en más de 11 países en la región amazónica, África Central, sudeste de Asia y Oceanía.

#### Colaboradores
The Engine Room es una organización internacional que brinda apoyo a activistas, organizaciones que obran en pos del cambio social y agentes de cambio para sacar el máximo provecho a los datos y a la tecnología para aumentar su impacto. The Engine Room brinda apoyo directo a nivel de proyecto para organizaciones que obran en pos del cambio social; junta comunidades para coordinar ideas emergentes y reunir profesionales; y documenta y publica sus resultados para ayudar a cualquier persona en el sector a tomar mejores decisiones en el uso de los datos y la tecnología.


[Tom Walker](https://www.theengineroom.org/our_team/tom-walker/) y [Tin Geber](https://www.theengineroom.org/our_team/tin-geber/) realizaron la investigación y redactaron la narrativa principal; [Ruth Miller](http://ruthmiller.net/) dirigió las tareas de diseño y creación visual. Vemund Olsen y Christopher Wilson proporcionaron inestimables aportes en edició­n. María José Giménez se encargó de la traducción al español. El código de soporte se encuentra disponible en [Github](https://github.com/the-engine-room/library/).

Para todo comentario o pregunta, comunicarse con [The Engine Room](mailto:post@theengineroom.org) o la [Fundación Rainforest Noruega](mailto:rainforest@rainforest.no).
=======
  - What is it
  - How it can help
  - Tools
  - Cost
  - Risks and challenges
  - Case studies
  - About
ref: rt-om
lang: en
categories:
  - en
---

## Online maps

> ### Possible Objectives
> * Capturing evidence of companies’ wrongdoing in how they use land 
> * Recording and monitoring the environmental value of areas of land 
> * Providing concrete evidence to governments to encourage them to recognise indigenous lands

This introduction to online mapping is part of a [Primer for using technology to monitor and share information on rainforest issues, land rights and indigenous rights](/rainforest-tech). It is designed as a starting point for organisations and activists interested in adding technology to improve their advocacy work, and is the product of a partnership between [Rainforest Foundation Norway](http://www.regnskog.no/en/) and [The Engine Room](https://theengineroom.org).

![Rainforest Foundation Norway](/images/logos/rfn-dark.svg) ![The Engine Room](/images/logos/engineroom-dark.png)

### What is it
* A powerful, visually engaging way to present the information you have collected about your focus issue (such as through participatory mapping, or mobile data collection). Maps can be: **static**, like images and illustrations; **animated**, for example showing a change over time; or **interactive**, where users can zoom in or out, click on areas of the map to see more information, or provide their own information (crowdsourcing)
* Maps can be created from scratch and uploaded on the internet, or information can be added to existing online maps like [OpenStreetMap](http://www.openstreetmap.org/), [Google Maps](https://www.google.com/maps/) or [Crowdmap](https://crowdmap.com/).

### How it can help
Online maps can be used for **real-time monitoring** (showing the places where most incidents happen), **campaigning** (showing that forest cover is being dramatically reduced) or **analysis** (gaining new insights by overlaying different types of data on the same map).

### Tools
Maps for campaigning don’t always need to be interactive. Some maps work best as an infographic – a static image that clearly presents text explanations and color coding. **First, choose your online map platform:** It is often easiest to use existing online interactive maps, which already include information layers such as roads and satellite images. Commercial maps include Google, [Bing](http://www.bing.com/maps) or [MapQuest](http://www.mapquest.com/). The free OpenStreetMap platform contains information from volunteers, and is usually less precise in remote non-urban areas. 

> ### Understanding coordinates and polygons
> If you are collecting data through mobile tools, drones, or participatory mapping, it’s important to master mapping basics. Any object on a map has coordinates that pinpoint its location on a grid of **latitude** (north-south) and **longitude** (east-west). Knowing an object’s lat-long coordinates gives you its **position** (known as point-based information). To find an object’s size, you need to join points around its perimeter into a single **polygonal shape**.

**Then, create your own layers on top:** There are many different ways to add information from basic markers to ‘heat maps’ (which show when a type of incident is concentrated in a particular area). Some sites provide data designed to be added into rainforest maps. [InfoAmazonia](http://infoamazonia.org/datasets) offers maps of the Amazon region on deforestation and forest fires. [Sarawak Geoportal](http://www.bmfmaps.ch/) has similar information on Malaysian Borneo. [MapBox Studio](http://cartodb.com/), the JEO Wordpress theme and CartoDB offer powerful, easy-to-use software for creating interactive maps. However, this requires you to upload your maps to MapBox servers, so it’s unsuitable for dealing with sensitive information (a [guide](http://geojournalism.org/2014/06/portugues-jeo-primeiros-passos/) to installing JEO in English and Portuguese). Creating your own interactive layers usually involves programming tools called Javascript libraries (Leaflet.js and OpenLayers are the most common).

### Costs
The cost of designing and creating online interactive maps depends how easy the tools are to use, and what programming skills are needed. If you are not a programmer, the easiest tools are CartoDB and MapBox - but you will need to pay a fee any more complicated maps (although both come with a free option that has limited functionality). Digital Democracy's [MapFilter](https://github.com/digidem/mapfilter) tool is a tool for presenting interactive, filter-able maps and reports, currently in the prototype stage, that is designed for use in remote areas. Google Maps is free for up to 25,000 daily map loads (a very high number), but expensive beyond that. Using libraries such as Leaflet.js with OpenStreetMaps is free, but requires a skilled programmer. Maps produced by a commercial provider are often free at the outset, but can become expensive if used widely. 

### Risks and challenges
Companies store information about when, where and how you load maps on a commercial mapping platform, meaning that public maps on commercial platforms can pinpoint the location of individuals who uploaded information, putting them at risk. Avoiding errors is crucial: information presented in the wrong spot could defeat the purpose of the campaign. 

### Case studies

#### Impact of animated maps to show forest cover loss
[Open Development Cambodia](https://cambodia.opendevelopmentmekong.net/) works to collect and provide quantitative information on Cambodia’s land, economic and environmental issues. They used the forest cover change information over a period of ten years to create a time-lapse video showing forest cover loss.

**How did it help?**

* The video was quick and easy to make because ODC already had all the information prepared and uploaded on their interactive maps. 
* The [time-lapse video](http://www.opendevelopmentcambodia.net/briefings/forest-cover/) was an effective advocacy tool because it clearly showed the extent of forest loss in Cambodia. It has been viewed more than two thousand times.

#### Mapping resources and communities in the Amazon
[RAISG (Amazonian Network of Georeferenced Socio-Environmental Information)](https://raisg.socioambiental.org) is a multi-year project that aims to raise awareness and advocate for indigenous rights and environmental issues, and has collected information on protected areas, indigenous lands, water basins, and illegal logging.

**How did it help?**

* RAISG presents all the collected information through [online interactive maps](http://raisg.socioambiental.org/mapa-online/index.html), as well as downloadable static maps with [infographics](http://raisg.socioambiental.org/amazonia-2012-areas-protegidas-e-territorios-indigenas#english), and [reports](http://raisg.socioambiental.org/system/files/Amazonia%20under%20pressure16_05_2013.pdf). Their information is also used by other organisations such as [InfoAmazonia](http://www.infoamazonia.org/).
* RAISG maps are a useful tool for evidence-based advocacy because of their strong methodology. Its partner organisations are able to rely on the collected information when lobbying governments.  

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
>>>>>>> origin/multilang
