---
layout: rainforest
title: Mapas online
description: Uma introdução ao uso de mapas online que combinam diferentes tipos de dados em projetos relacionados a florestas tropicais, para fins como monitoramento em tempo real (mostrando os lugares onde ocorrem a maioria dos incidentes), campanha (mostrando que a cobertura florestal está sendo reduzida dramaticamente) ou análise (ganhando novas perspectivas com a sobreposição de diferentes tipos de dados no mesmo mapa). Parte do relatório <a href="https://library.theengineroom.org/rainforest-tech/">Tecnologia Rainforest</a>.
image: /media/index/online.svg
funder_name: Fundação Rainforest da Noruega
funder_logo: /images/logos/rfn.svg
funder_link: http://regnskog.no/en
published: true
navigation:
  - O que é
  - Como pode ajudar
  - Ferramentas
  - Custos
  - Riscos e desafios
  - Estudos de caso
  - Sobre
ref: rt-om
lang: pt
categories:
  - pt
---

## **Mapas online**

> ### Objetivos possíveis
>* Capturar evidência de irregularidades de empresas no uso da terra
>* Registrar e monitorar o valor ambiental das áreas de terra
>* Fornecer evidências concretas ao poder público para incentivá-los a reconhecer terras indígenas.</td>

Esta introdução faz parte de uma [Cartilha de uso da tecnologia para monitoramento e compartilhamento de informações sobre questões das florestas tropicais, direitos territoriais e dos indígenas](https://library.theengineroom.org/rainforest-tech). Foi criada como um ponto de partida para organizações e ativistas interessados em utilizar tecnologia para realizar melhor seu trabalho de proteção, e resultou de uma parceria entre a [Fundação Rainforest da Noruega](http://www.regnskog.no/en/) e [The Engine Room](https://theengineroom.org/).

Resultou de uma parceria entre a Fundação [Rainforest da Noruega](http://www.regnskog.no/en/) e [The Engine Room](https://theengineroom.org/).

*[Baixe a cartilha completa (1.6MB pdf).](http://d5i6is0eze552.cloudfront.net/documents/Publikasjoner/Andre-rapporter/Rainforest-tech-primer.pdf?mtime=20160704134642)* ou leia abaixo online.

### **O que é**

* Uma forma poderosa, visualmente envolvente de apresentar as informações que você coletou sobre o seu principal problema (tais como através de mapeamento participativo, ou coleta de dados móveis). Os mapas podem ser: *estáticos*, como imagens e ilustrações; *animados*, por exemplo, mostrando uma mudança ao longo do tempo; ou *interativos*, em que os usuários podem fazer zoom in ou out, clicar em áreas do mapa para ver mais informações, ou fornecer suas próprias informações (*crowdsourcing*)

* Mapas podem ser criados do zero e carregados na Internet, ou podem ser adicionadas informações a mapas online existentes como [OpenStreetMap](http://www.openstreetmap.org/), [Google Maps](https://www.google.com/maps/) ou [Crowdmap](https://crowdmap.com/).

### **Como pode ajudar**

Mapas online podem ser usados para **monitoramento em tempo real** (mostrando os lugares onde ocorrem a maioria dos incidentes), **campanha** (mostrando que a cobertura florestal está sendo reduzida dramaticamente) ou **análise** (ganhando novas perspectivas com a sobreposição de diferentes tipos de dados no mesmo mapa).

### **Ferramentas**

Os mapas para campanha nem sempre precisam ser interativos. Alguns mapas funcionam melhor como um infográfico – uma imagem estática que claramente apresenta explicações e código de cores. Primeiro, escolha a sua plataforma de mapas online: Quase sempre é mais fácil usar mapas interativos online existentes, que já incluem camadas de informações como estradas e imagens de satélite. Entre os mapas comerciais estão Google, [Bing](http://www.bing.com/maps/) ou [MapQuest](http://www.mapquest.com/). A plataforma grátis [OpenStreetMap](https://www.openstreetmap.org/) contém informações de voluntários, e é normalmente menos precisa em áreas rurais remotas.

> ### Entendendo coordenadas e polígonos
> Se você estiver coletando dados através de ferramentas móveis, drones, ou mapeamento participativo, é importante dominar o básico de mapeamento. Qualquer objeto em um mapa tem coordenadas que marcam a sua localização exata em uma grade de **latitude** (norte-sul) e **longitude** (Leste-Oeste). Saber a latitude e a longitude de um objeto lhe dá a sua **posição** (coordenadas geográficas). Para encontrar o tamanho de um objeto, você precisa juntar os pontos em torno de seu perímetro em um **formato poligonal**.


**Então, crie suas próprias camadas em cima:** Há muitas formas de adicionar informações desde marcadores básicos até ‘heat maps’ (que mostram quando um determinado tipo de incidente está concentrado em uma área específica). Alguns sites fornecem dados criados para serem adicionados a mapas das florestas tropicais. (A [InfoAmazonia](http://infoamazonia.org/datasets/) oferece mapas da região amazônica sobre desflorestamento e incêndios florestais. [Sarawak Geoportal](http://www.bmfmaps.ch/) tem informações semelhantes sobre Bornéu Malásia). [MapBox Studio](https://www.mapbox.com/mapbox-studio), o tema JEO do dpress e [CartoDB](http://cartodb.com/) (Entretanto, isso requer que você carregue seus mapas nos servidores da MapBox, logo não é adequado para informações confidenciais. [Guia de instalação do JEO em inglês e português](http://geojournalism.org/2014/06/portugues-jeo-primeiros-passos/)) oferecem softwares poderosos, fáceis de usar para criação de mapas interativos. Criar suas próprias camadas interativas normalmente envolve ferramentas de programação chamadas bibliotecas Javascript ([Leaflet.js](http://leafletjs.com/) e [OpenLayers](http://www.openlayers.org/) são as mais comuns).

### **Custos**

O custo de design e criação de mapas interativos online depende de o quanto as ferramentas são fáceis de usar, e quais aptidões de programação são necessárias. Se você não é programador, as ferramentas mais fáceis são CartoDB e MapBox - mas terá que pagar uma tarifa por qualquer mapa mais complicado (embora ambos venham com uma opção grátis com funcionalidade limitada). Bibliotecas como Leaflet.js com OpenStreetMaps são gratuitas, mas requerem um programador hábil. Mapas produzidos por um fornecedor comercial são quase sempre grátis no início, mas podem se tornar caros se forem muito utilizados. (Google Maps é grátis até 25.000 carregamentos de mapa diários (um número muito alto), mas custa caro depois disso.)

### **Riscos e desafios**

Empresas armazenam informações sobre quando, onde e como você carrega mapas em uma plataforma de mapeamento comercial, o que significa que mapas públicos em plataformas comerciais podem marcar a localização de pessoas que carregaram as informações colocando-as em risco. Enquanto isso, é crucial evitar erros: as informações apresentadas no lugar errado poderiam frustrar o propósito da campanha.

### Estudos de caso

#### Impacto de mapas animados para mostrar a perda de cobertura florestal

Open Development Cambodia trabalha para coletar e fornecer informações quantitativas sobre as terras, economia e questões ambientais do Cambodia. Eles usaram as informações de mudança de cobertura florestal ao longo de um período de dez anos para criar um vídeo com lapso de tempo mostrando a perda de cobertura florestal.

**Como isso ajudou?**

- O vídeo foi rápido e fácil de fazer porque a ODC já tinha todas as informações preparadas e carregadas em seus mapas interativos.
- O vídeo com lapso de tempo foi uma ferramenta eficaz de defesa porque mostrou claramente a extensão do desflorestamento no Camboja. Foi visto mais de dois milhões de vezes.

#### Recursos de mapeamento e comunidades na Amazônia

RAISG (Amazonian Network of Georeferenced Socio-Environmental Information) é um projeto de muitos anos que visa conscientizar e defender os direitos dos indígenas e questões ambientais, e tem coletado informações sobre áreas protegidas, terras indígenas, bacias hidrográficas, e exploração ilegal de madeira.

**Como isso ajudou?**
- A RAISG apresentou todas as informações coletadas através de mapas interativos online, assim como mapas estáticos para download com infográficos, e relatórios.
- Os mapas da RAISG são uma ferramenta poderosa para defesa com base em evidências devido à sua sólida metodologia. Suas organizações parceiras puderam confiar nas informações coletadas ao fazer lobby junto aos governos.

***

### **Sobre**
Este site foi criado pela [Fundação Rainforest da Noruega](www.regnskog.no/en/) e [The Engine Room](//theengineroom.org) como uma introdução ao uso da tecnologia para monitoramento e compartilhamento de informações sobre questões das florestas tropicais, direito à terra e direitos dos indígenas. Baixe a cartilha completa aqui.

Comentários ou perguntas? Entre em contato [post@theengineroom.org](mailto:post@theengineroom.org) ou [rainforest@rainforest.no](rainforest@rainforest.no).

A Fundação Rainforest da Noruega (RFN) é uma das organizações líderes mundiais de proteção das florestas tropicais com base em direitos. Sua missão é apoiar as iniciativas dos povos indígenas e populações tradicionais das florestas tropicais do mundo de proteção ao seu meio ambiente e garantia de seus direitos, auxiliando-os a:

- Garantir e controlar os recursos naturais necessários para seu bem-estar em longo prazo e a gerenciar esses recursos de formas que não prejudiquem o meio ambiente, violem sua cultura ou comprometam seu futuro.

- E desenvolver meios para proteger seus direitos individuais e coletivos, e obter, modelar e controlar serviços básicos do Estado.

A RFN colabora de perto com mais de 70 organizações ambientais, de direitos humanos e indígenas, locais e nacionais, em 11 países na região Amazônica, África Central, Sudeste da Ásia, e Oceania.

#### **Contribuidores**
The [Engine Room](https://www.theengineroom.org) é uma organização internacional que ajuda ativistas, instituições que promovem mudança social e agentes de mudança a tirar o máximo proveito de dados e tecnologia para aumentar seu impacto. The Engine Room fornece apoio direto a projetos de organizações de mudança social; reúne comunidades para sincronizar as ideias emergentes e conseguir profissionais; além de documentar e publicar descobertas para ajudar qualquer pessoa do setor a tomar melhores decisões sobre o uso de dados e tecnologia.

[Tom Walker](https://www.theengineroom.org/our_team/tom-walker) e [Tin Geber](https://www.theengineroom.org/our_team/tin-geber/) pesquisaram e redigiram a história principal, e [Ruth Miller](http://ruthmiller.net/) liderou o trabalho de design e criação visual. Foram inestimáveis a contribuição e o apoio à edição de Vemund Olsen e Christopher Wilson. O código-fonte do site está disponível em [Github](https://github.com/the-engine-room/library/).

[Voltar para o início da Biblioteca](/pt/rainforest-tech)
