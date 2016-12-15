---
layout: rainforest
title: Mapas en línea
description: Una introducción al uso de mapas en línea que combinan diferentes tipos de datos en proyectos relacionados a bosques lluviosos a fin de incluir monitoreo en tiempo real (mostrar los lugares donde ocurre la mayoría de los incidentes), llevar a cabo campañas (por ejemplo, mostrar la ubicación de reducciones drásticas de la cubierta forestal) o realizar análisis (obtener nuevas perspectivas al superponer diferentes tipos de datos sobre el mismo mapa). <p>Parte del informe <a href="/rainforest-tech">Tecnología para bosques lluviosos</a>.</p>
image: /media/index/online.svg
funder_name: Rainforest Foundation Norway
funder_logo: /images/logos/rfn.svg
funder_link: //www.regnskog.no/en
published: true
navigation:
  - ¿En qué consiste?
  - Contribuciones posibles
  - Herramientas
  - Costos
  - Riesgos y desafíos
  - Casos de estudio
  - Acerca de este sitio
ref: rt-om
lang: es
categories:
  - es
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

***

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

[Volver a la página de inicio de la Biblioteca.](/rainforest-tech)
