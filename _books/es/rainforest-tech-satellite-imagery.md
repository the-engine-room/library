---
layout: rainforest
title: Imágenes satelitales
description: Una introducción al uso de imágenes satelitales en proyectos relacionados a bosques lluviosos para analizar cambios ocurridos en un área forestal durante un período determinado, o generar pruebas de deforestación, tendencias tales como aumentos en actividad comercial o resultados visibles de la degradación forestal. <p>Parte del informe <a href="/rainforest-tech">Tecnología para bosques lluviosos</a>.</p>
image: /media/index/satellite.svg
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
ref: rt-si
lang: es
categories:
  - es
---

## **Imágenes satelitales**

> ### Objetivos posibles
> * Recolectar pruebas de deforestación o degradación forestal
> * Registrar pruebas de infracciones cometidas por las compañías en su uso de la tierra
> * Grabar y monitorear el valor ambiental de las tierras o áreas forestales

La presente introducción es parte de una [Guía para el uso de la tecnología en el monitoreo e intercambio de información sobre asuntos relacionados a los bosques lluviosos](https://library.theengineroom.org/rainforest-tech/), los derechos territoriales y los derechos de los pueblos indígenas. Está diseñada como punto de partida para organizaciones y activistas interesados en incorporar la tecnología en la mejora de sus esfuerzos de defensa; es producto de una colaboración entre la [Fundación Rainforest Noruega](http://www.regnskog.no/en/) y [The Engine Room](https://theengineroom.org).

_Descargar [la guía completa](http://d5i6is0eze552.cloudfront.net/documents/Publikasjoner/Andre-rapporter/Rainforest-tech-primer.pdf?mtime=20160704134642) (1.6MB pdf) o leerla en línea (a continuación)._

![Rainforest Foundation Norway](/images/logos/rfn-dark.svg) ![The Engine Room](/images/logos/engineroom-dark.png)

### **¿En qué consiste?**

* Los satélites que orbitan el planeta toman fotografías de la superficie terrestre desde el espacio, entre ellas imágenes de bosques y tierras comunitarias.

* Dichas fotografías pueden servir para producir análisis de cambios ocurridos en áreas forestales durante cierto período, o combinarse con otros tipos de información tales como otros tipos de mapas.

### **Contribuciones posibles**

Las imágenes satelitales, anteriormente disponibles a costos que resultaban prohibitivos excepto para grandes instituciones, gobiernos y grandes corporaciones, son actualmente de acceso fácil y gratuito (o a muy bajo costo). Comparar imágenes de una misma área tomadas a intervalos regulares puede producir pruebas en casos de deforestación, tendencias tales como aumentos en actividad comercial y resultados visibles de la destrucción forestal (por ejemplo, monocultivos, cuyos patrones de plantación son visibles desde satélite).

### **Herramientas**

Existen herramientas de código abierto excelentes y gratuitas que permiten analizar imágenes satelitales: [**QGIS**](http://www.qgis.org/en/docs/index.html) es el software SIG más usado. QGIS permite a los usuarios agregar, editar, manipular y presentar datos SIG. Aunque posee funciones menos avanzadas que ArcGIS (ver [**Aplicaciones para teléfonos móviles**](/rainforest-tech-mobile-phones), más arriba), se tarda más tiempo en aprender y es menos estable, es gratuito y cuenta con una comunidad activa de voluntarios que ofrecen soporte técnico. Requiere conocimiento de lenguajes de programación como Python para realizar procesos analíticos más complejos.

[**Global Forest Watch**](http://www.globalforestwatch.org/) (GFW) es la herramienta más completa para el análisis de imágenes satelitales de la cubierta forestal. GFW recoge imágenes satelitales de colaboradores y facilita su descarga y reutilización. Realiza un análisis automático de pérdidas de masa forestal, ofrece sistemas de alarma en caso de incendios y envía alertas cuando se producen cambios en un área seleccionada.

### **Costos**

Las imágenes satelitales pueden ser [gratuitas](http://earthexplorer.usgs.gov/), mientras que la compra de las mismas varía entre 10 $ y 50 $ por kilómetro cuadrado, dependiendo de la [calidad de la imagen](http://www.aaas.org/page/high-resolution-satellite-imagery-ordering-and-analysis-handbook#VI). Aparte de los costos de compra, el análisis de imágenes satelitales es una tarea costosa y laboriosa que exige inversiones considerables de tiempo (analizar miles de imágenes de alta resolución), recursos (computadoras rápidas) y destrezas (expertos en SIG). Global Forest Watch contribuye a cerrar esta brecha pero carece de flexibilidad y de imágenes de alta calidad, factores indispensables para mostrar los cambios ocurridos en mayor detalle (ver **resolución**, más adelante).

### **Riesgos y desafíos**

El principal problema con las imágenes satelitales es la **resolución**; actualmente la calidad de imagen es inferior y no permite mostrar los cambios ocurrido en detalle. Global Forest Watch ofrece imágenes a 50 metros por píxel, un nivel poco preciso (también ofrece 30 metros por píxel pero solamente las produce una vez al año, frecuencia que no permite utilizar las imágenes como prueba de la deforestación.)

Con esto llegamos al segundo problema: **las actualizaciones.** En general, las imágenes se actualizan una vez al mes, a veces una vez al año. Esto podría cambiar: compañías como [Planet Labs](www.planet.com) prometen imágenes diarias en el futuro y [Libra](http://libra.developmentseed.org) provee datos Landsat cada dos semanas. El proyecto [MAAP](http://maaproject.org/about-maap/) tiene por fin producir actualizaciones semanales en la Amazonía andina por lo que pueden resultar útiles para análisis histórico pero poco prácticas para monitoreo en tiempo real (la **Fotografía aérea**, página X puede contribuir imágenes actualizadas con mayor frecuencia).

### **Casos de estudio**

#### Combinar datos satelitales con otras fuentes de información

La organización indonesia para bosques lluviosos [Warsi](http://www.warsi.org/) combinó datos de mapas satelitales obtenidos de Landsat Thematic Mapper (Landsat TM) y Advanced Land Observation Satellite (ALOS) con otras fuentes de información para documentar la distribución del Pueblo Orang Rimba y su uso de recursos naturales.

**Contribución**

* Warsi pudo combinar datos satelitales con datos GPS y mapas digitales elaborados convirtiendo mapas impresos en concesiones de recursos naturales.
* Las imágenes satelitales resultaron relativamente costosas para Warsi. A veces las nubes cubrían una parte clave de la imagen y resultaba necesario analizar una serie de imágenes para obtener una foto satisfactoria.
* Ahora el parque nacional Bukit Duabelas ofrece a los Orang Rimba derechos de uso y constituye una protección formal del área, a pesar de que la deforestación sigue siendo un grave problema.


#### Usar datos satelitales para dar pruebas de talas ilegales

En enero del 2015, un análisis realizado por [Greenomics-Indonesia](http://www.greenomics.org/) de dos imágenes NASA Landsat (ver sección Mapas satelitales más abajo) de la isla Pulau Pedang, cerca de la costa de Sumatra, identificó áreas extensas de bosque de turba que habían sido taladas.

**Contribución**

* Greenomics utilizó la información para dirigir sus esfuerzos contra la empresa papelera Asia Pacific Resources International Holdings Limited (APRIL), que había prometido dar fin al desarrollo de nuevas plantaciones para enero del 2014.
* Greenomics decidió comunicar esta información a los medios en inglés mediante una declaración con imágenes relacionadas a su reclamo. En marzo del 2015, APRIL admitió que había tomado lugar un incumplimiento y suspendió al contratista y al gerente de plantación.

### Otros recursos
* **Global Forest Watch** es un sistema interactivo de monitoreo y alertas forestales que brinda datos satelitales y otros tipos de información: [www.globalforestwatch.org](http://www.globalforestwatch.org/)

* [http://maaproject.org/about-maap/](http://maaproject.org/about-maap/)

* **CLASlite** ha sido diseñado para proporcionar mapas y monitoreo forestal de alta resolución; actualización semanal e imágenes satelitales: [http://claslite.carnegiescience.edu/en/index.html](http://claslite.carnegiescience.edu/en/index.html) (inglés y español)

* El Proyecto Geospatial Technologies de **AAAS** contiene casos de estudio detallados sobre la recolección, categorización y análisis de imágenes satelitales para documentar abusos de derechos humanos: [http://www.aaas.org/case-studies](http://www.aaas.org/case-studies)

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
