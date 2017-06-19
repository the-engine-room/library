---
layout: page
title: Investigative Web Research
description: This resource aims to be a practical and straightforward guide to investigative web research (IWR). The guide functions as a toolkit, pointing readers to the right resources while at the same time providing the necessary context for readers to assess the various tools.
image: /media/index/investigative-web.png
funder_logo:
funder_link:
funder_name:
published: true
navigation:
  - Introduction
  - Context
  - Tools and techniques
  - Pros and Cons
  - Challenges
  - Implementation
  - Resources
  - Acknowledgements
ref: investigative-web-research
lang: en
categories:
  - en
---

# Investigative web research

## Introduction

(Last updated: June 2017).

This is a practical, straightforward introduction to investigative web research (IWR). 

It is designed for researchers, activists, journalists and social good actors who are collecting online information about persons, entities or events for investigative research. If you are tracking corporate ownership and corruption, web page activity, or mapping political influence, this guide is for you. 

The guide is a toolkit that points you to the resources while giving the context you need to assess the tools. To start with, all you will need is a computer with an internet connection - you can then progressively learn how to find and use many more tools and resources.

The key areas of focus are:

* How to document and store web pages
* How to acquire information on who owns websites
* How to extract structured information from web pages
* Key investigative databases
* Advanced search

## Context

The internet can be an effective and efficient tool for investigative research. However, web research can also turn up information that is messy, inaccurate, outdated or incomplete. IWR tools can help to mitigate against some of these risks. IWR tools can be used, for example, to discover otherwise hidden information, collect and store large amounts of data or refine search engine results.

Of course, many of these tools and techniques come with their own caveats and dangers, and none completely remove the need for best practices such as source verification, responsible data collection and capacity building.

## Tools and techniques

This section summarizes some of the most helpful and widely-used tools and techniques for IWR. It is by no means comprehensive. For more information and guidance see the [School of Data Handbook](http://schoolofdata.org/handbook/), the [Data Journalism Handbook](http://datajournalismhandbook.org/1.0/en/index.html) and the [Verification Handbook for Investigative Reporting](http://verificationhandbook.com/book2/chapter1.php). Justin Nordine’s [OSINT Framework](http://osintframework.com/) lists and categorizes all the free (or almost free) tools available. [Friedrich Lindenberg](http://pudo.org/material/investigative-tools/) and [Paul Myers](http://researchclinic.net/index.htm) also provide helpful links and explainers on IWR.

### Documenting and storing web pages

If in the course of your research you find important information on a web page, it is important to make a copy of that information to protect it from being lost or changed. Online resources often get lost due to website updates (where website owners don’t take care to properly redirect old URLs); sometimes organisations will change or remove sensitive information without notice if it is attracting unwanted attention; or the page may change due to simple tweaks of its content and structure. Storing a history of changes of a web page also lets researchers show intent for obfuscation or deflection, or to avoid detection of sensitive information.

If you want to store a web page offline, the simplest thing to do would be to save a copy of the page on your hard drive (usually by right-clicking a web page and selecting "Save as"). However, the page will be saved in HTML format, which makes it difficult to read or use offline.

Another option would be to save the page as a PDF file, or take a screen capture. This will be easier to read and share offline. However, it also means that any interactive elements of the page or links to other pages will be lost. Furthermore, for the reasons listed above, pages frequently change or disappear and an offline copy may therefore quickly become outdated.

There are some of the tools that instead let you store copies of pages online, or access large archives of old versions of web pages.

* [**Internet Archive: Wayback Machine**](https://archive.org/web/). The Internet Archive uses web crawlers to continually scan and save web pages, and archives them. Their Wayback Machine tool allows you to enter the URL of a page and view the past copies of that web page, even if it no longer exists. There are several similar [web archives](http://www.netpreserve.org/web-archiving/tools-and-software) that you can also try. **Cost: free (non profit)**

* [**Archive.is**](https://archive.is/). Archive.is allows you to permanently archive a web page online. You simply enter the URL and Archive.is saves a copy of the page in its current form (rather than as a PDF or HTML file) and provides a permalink to the copy. **Cost: free (privately funded)**

* [**Wget**](https://www.labnol.org/software/wget-command-examples/28750/). For those comfortable with using command line programs, the Wget utility can download web pages, files and images recursively - this means you can use Wget to download an entire website with all the pages and files it links to. [Chelsea Manning](https://www.wired.com/2011/12/cables-scripts-manning/), for example, used Wget to download the files passed on to Wikileaks. **Cost: free (open source)**

* [**Hunchly**](https://www.hunch.ly/) is an advanced, yet easy to use tracker of IWR. It runs inside Google Chrome, tracks, analyses, and stores pages automatically in the course of an investigation. All data is stored on your computer, which means that even if Hunchly shuts down, your data is still accessible. Hunchly comes highly recommended by some of the most famous IWR experts, such as [Elliot Higgins](https://www.bellingcat.com/). Since all data is stored on your computer, it is important to keep that in mind if you’re at risk of having your computer seized. **Cost: 130USD (closed source)**

* [**Versionista**](https://versionista.com/). Versionista allows you to track and be notified of any changes to a website. **Cost: free**

### Acquiring information on who owns websites

The person or company that you are investigating is likely to have, or be linked to, a website. You may want to check if that person or company are in fact the owner of the website, or if it is owned by someone or something completely different. This can give you an idea of, for example, the credibility of the website.

Every time someone wants to reserve a domain name (e.g. www.example.com), they are required to register their details with an Internet Corporation for Assigned Names and Numbers (ICANN)-approved registrar. The registrar will create a [WHOIS](https://whois.icann.org/en/about-whois) record of the owner’s information, including name, address, email and phone number. Services such as [domaintools.com](http://whois.domaintools.com/dom.com) allow you to look up the WHOIS data of a website. Many also allow you to search for all the websites registered under a particular name, email or IP address.

<table>
  <tr>
    <td>WHOIS service</td>
    <td>WHOIS history</td>
    <td>Reverse name search</td>
    <td>Reverse email search</td>
    <td>Reverse IP search</td>
  </tr>
  <tr>
    <td>Domaintools.com</td>
    <td>2000</td>
    <td>No</td>
    <td>Yes</td>
    <td>Yes</td>
  </tr>
  <tr>
    <td>Domainbigdata.com</td>
    <td>2014</td>
    <td>Yes</td>
    <td>Yes</td>
    <td>Yes</td>
  </tr>
  <tr>
    <td>Domainiq.com</td>
    <td>2009</td>
    <td>Yes</td>
    <td>Yes</td>
    <td>Yes</td>
  </tr>
  <tr>
    <td>Whoisology.com</td>
    <td>2012</td>
    <td>Yes</td>
    <td>Yes</td>
    <td>No</td>
  </tr>
</table>


*Source: [netbootcamp](http://netbootcamp.org/whoishistory/)*

All the above services are free to use, and offer monthly subscriptions ranging from 30USD to 200USD for advanced options. The subscriptions will let you conduct a higher number of searches, but in general are not necessary unless you need to research hundreds of websites per day.

However, some owners will register anonymously so as to hide their information. In this case, you can use a service like [spyonweb.com](http://spyonweb.com/) to see if there are other websites registered with the same IP address, or any that use the same Google Analytics or Adsense codes. Some of those other websites may have the owner’s WHOIS data.

### Extracting structured information from web pages

Simply downloading a particular file or using copy and paste is often sufficient to extract information from a web page.

However, sometimes the data will not be available for download, difficult to find, or in an unhelpful format. Sometimes you will want to capture huge amounts of information, for which a manual copy and paste process would take too long. In those cases, there are ways to "scrape" data from web pages and PDFs more efficiently and in a structured, machine-readable format (i.e. a format that is easily processed by a computer, such as CSV).

* **APIs.** An application-programming interface (API) is a way for different software programs to interact. Web APIs provide a set of controls that can be used to extract data from a website - sort of like shortcuts to a website’s database. This is handy if that data would otherwise be tedious or difficult to find. Whether you can use an API will depend on whether there is an API available for that website. [This School of Data piece](http://schoolofdata.org/2013/11/18/web-apis-for-non-programmers/) summarizes how web APIs work and where to find them. Some examples of relevant APIs are [OpenCorporates](https://api.opencorporates.com/), [World Bank](https://datahelpdesk.worldbank.org/knowledgebase/topics/125589-developer-information), as well as a number of open governmental APIs like the US’ [data.gov](https://www.data.gov/developers/apis), or UK’s [data.gov.uk](http://v).

* **Scraping.** Every website is written using HTML code. A web scraper is a small piece of code or software (a "bot") that reads the HTML code and extracts data from it. Web scrapers can extract information automatically from numerous web pages, much faster than any person could. If you decide scraping data is the best way forward for your project, you can consult the Data Advisor for support in creating the scraping script, or to put you in touch with a developer who can support you.
    * A good place to start is [Google Chrome’s Scraper extension](http://schoolofdata.org/handbook/recipes/scraper-extension-for-chrome/) and [Google Spreadsheets](http://schoolofdata.org/handbook/recipes/liberating-html-tables/).
    * For more complex data, or scraping across multiple web pages, you can use [Import.io](https://www.import.io/).
    * If you are regularly scraping large amounts of complex data, it is worth learning the basic coding needed to write your own scrapers. The tutorials by [Bradley Boehmke](http://bradleyboehmke.github.io/2015/12/scraping-html-text.html), [Will Larson](http://lethain.com/an-introduction-to-compassionate-screenscraping/) and [Nael Shiab](http://naelshiab.com/members-parliament-web-scraping/) are a good starting point.


* **Extracting data from PDFs.** Although harder than scraping a website, there are also ways to scrape PDFs. [Adobe Acrobat](https://acrobat.adobe.com/uk/en/acrobat.html) does a very good job of extracting data from PDFs and can convert the PDF to Word, Excel or Powerpoint format (but isn’t free). Some of the alternatives are [Tabula](http://tabula.technology/), [PDFTables](https://pdftables.com/) or [Cometdocs](https://www.cometdocs.com/). [Abbyy Fine Reader](https://www.abbyy.com/en-us/) is particularly good at OCR (Optical Character Recognition).

The data you gather from web scraping may be messy or inconsistent. You can reorganize and restructure it using "data cleaning" tools like [OpenRefine](http://openrefine.org/) and [Data Wrangler](http://vis.stanford.edu/wrangler/).

### Key investigative databases

It is always worth checking whether the data you need has already been collected in an online database. If it has, you won’t have to spend time creating a web scraper and cleaning the data yourself.

OCCRP’s [The Investigative Dashboard](https://investigativedashboard.org/) has a searchable archive of business registries and official gazettes of popular offshore banking countries, and [a list of over 800 databases](https://investigativedashboard.org/databases/) grouped by country and type. The Investigative Dashboard is the evolution of data.occrp.org. Public databases are also listed by [Awesome Public Datasets](https://github.com/caesar0301/awesome-public-datasets), [DataHub](https://datahub.io/) and the [OSINT Framework](http://osintframework.com/).

Some key investigative databases include:

* [OpenCorporates](https://opencorporates.com/) and the [Offshore Leaks Database](https://offshoreleaks.icij.org/), for information on companies.
* The [Wikileaks](https://wikileaks.org/) cables, for diplomatic and government correspondence.
* [LittleSis](https://littlesis.org/) and [OpenInterests](http://openinterests.eu/), for tracking political and financial influence .
* [OpenOil’s](http://repository.openoil.net/wiki/Main_Page), [Aleph](https://aleph.openoil.net/), and [NRGI](http://www.resourcegovernance.org/topics/data-tools), for the extractives industry, lets you search a wealth of information about licenses, ownership, financial statements, and transactions within the global extractive licences ecosystem.
* [World Bank](http://data.worldbank.org/) and [International Aid Transparency Initiative](https://www.iatiregistry.org/), for development and aid data.
* [Global Open Data Index](http://index.okfn.org/dataset/) and [OpenSpending](https://openspending.org/datasets), for government spending and procurement.

### Advanced searching

For most researchers, the starting point is a simple internet search. Using advanced search techniques can make your searching more efficient and the results more refined and relevant.

The vast majority of internet searches are done using [Google](https://www.google.com/), but other search engines have features that can be useful depending on what you’re looking for ([this article](https://www.lifewire.com/best-search-engines-2483352) compares some of the most popular ones). [DuckDuckGo](https://duckduckgo.com/), for example, does not track or personalize your searches and results. Metasearch engines such as [iZito](http://www.izito.com/) combine the results of multiple search engines, casting a much wider search net.

[Google’s advanced search](https://www.google.com/advanced_search) allows you to specify a time period, search for a specific phrase, or only show results from a particular website, among other things. DuckDuckGo also allows you to "fine-tune" your search results using its [advanced search syntax](https://duck.co/help/results/syntax).

[Google Alerts](https://www.lifewire.com/google-alerts-3481816) can notify you via email every time a particular person or topic is mentioned online.

[TinEye](https://www.tineye.com/) is a search engine that allows you to do a reverse image search. Unlike other search engines with a similar feature, TinEye uses image identification technology rather than keywords, metadata or watermarks.

## Pros and cons

### Documenting and storing old web pages

#### Pros

* **Preservation.** Stuff on the internet frequently and continually gets deleted or moved, and websites can die with their hosts. Keeping copies of web pages offline can be messy, and they can be deleted or lost. Documenting and storing the copies online is usually a more reliable way to preserve a record of the web page.
* **Easy to do.** The tools available for copying and archiving old web pages do most of the work for you; no coding experience is needed for most of them.

#### Cons

* **Outdated pages**. Copies of web pages can become outdated and not an accurate representation of the current web page. It’s important to compare any archived copies with the current web page.
* **Error.** Archiving is not a perfect process, so it is never a certainty that the page is an accurate copy. The media type used for storing web pages also changes over time; this means that transferring data to new storage media or new formats inevitably means some information will be lost or corrupted.
* **Limited capabilities of crawlers**. Sites like the Wayback Machine, as well as Google, utilize computer programs called *crawlers* that automatically and regularly scan the web for new or changed content. Not every page will be archived - it is inevitable that some pages will slip through the cracks. A web crawler can also be blocked from copying or scraping a page if "robots.txt" is included in the HTML code and requests that the website not be scraped. What crawlers can capture is essentially a snapshot of the site; dynamic features like Java functions, flash players or search facilities will not work.
* **Difficult to use.** Although boasting an impressive archive, the Wayback Machine itself can be an unwieldy and difficult to use tool.

### Acquiring information on who owns websites

#### Pros

* **Finding out the true owner.** The actual registrant of a website may be someone completely different to the contact listed on the website.
* **Connecting the dots.** Services like spyonweb.com can be used to discover if multiple websites are run by one person or entity.

#### Cons

* **Incorrect or missing information.** When registering a domain name, the registrant can choose to anonymize or hide their information by using a privacy and proxy service.
* **Varying registration requirements.** The amount of information required to have been registered will depend on the type of domain and the registrar. For example .au addresses require less information than .com, .net or .org.

### Extracting structured information from web pages

#### Pros

* **Fast and automated.** Scrapers - whether software or custom code - can gather data much faster than any person could.
* **Virtually any website can be scraped.**
* **Data can be extracted from multiple sources.** Scrapers can extract information from multiple tables on a website, and the more complex ones can scrape from multiple websites simultaneously.
* **Encourages a better understanding of the underlying data.** Figuring out how and what to scrape will require a good understanding of how the data is structured, which will help when later analyzing or presenting that data.
* **Machine-readable formats are good for computers.** Scraping data will provide you with a structure that is ready to be fed into spreadsheets or databases for further analysis.

#### Cons

* **Coding**. Those who are regularly scraping will need to invest time and energy to learn the basic coding necessary for creating scrapers.
* **Messy or incomplete data.** The data you end up with may be messy or incomplete, which will take time to clean up.
* **It won’t always work.** Scraping may not be possible. Badly formatted HTML code, authentication systems such as CAPTCHA codes or paywalls, blocking of bulk access by the server administrators and low resolution PDFs are just some of the potential obstacles.
* **Machine-readable formats are less good for humans**. If the data is formatted to be easily read by a computer, it may not be very readable or clear to an untrained human eye.

### Advanced searching

#### Pros

* **It is usually more efficient and effective than basic search methods.**
* **More dynamic.** Advanced searching allows you to go beyond simple text searches by, for example, doing reverse image searches.

#### Cons

* **Privacy.** Google is the most popular search engine, and has some of the best advanced searching features. However, Google constantly tracks your searches and location, and tries to personalize the search results ([this article](http://www.wired.co.uk/article/google-history-search-tracking-data-how-to-delete) lists some of the ways to prevent this).

## Challenges

### Additional capacity

Some of these tools and techniques are easy to use and low-cost. However, with many of them - particularly for scraping and archiving - collecting the information is just one part of the process; learning how to use the tool, setting it up, maintaining and updating it, cleaning the data and storing the information securely may require a significant investment in additional time, money, resources or expertise.

### Reliable and verifiable information

As with any research or journalistic process, ensuring that the information you obtain from IWR is reliable and verifiable is crucial. Ultimately, tools and software are created by people, and can reflect the mistakes and bias of those people. Are you sure that the code or software you are using is extracting accurate and complete data? Are the databases and web pages you are relying on accurate and credible?

### Private and sensitive information

Just because data can be found or scraped online, does not automatically make it public or ‘fair game’; sometimes institutions (particularly government ones) deliberately conceal data on their websites because it contains personal information and would violate privacy laws. Whether collecting data yourself or using a bot, you have a responsibility to do so responsibly and safely, and to [consider the ethical issues](http://gijn.org/2015/08/12/on-the-ethics-of-web-scraping-and-data-journalism/) arising from accessing and publishing sensitive or personal data (the legal issues are discussed below).

Furthermore, in order to avoid being tracked or to gain information, it is not uncommon for investigative web researchers to hide their identity by, for example, creating a fake social media profile or rerouting their IP address with a [VPN tool](http://www.androidauthority.com/what-is-a-vpn-682490/). This is, in many ways, similar to undercover journalism and carries many of the same considerations: when is it inappropriate to hide your identity? What kind of online private communities (e.g. private Facebook groups) are acceptable to infiltrate?

### Legal issues

In addition to ethical considerations, there are legal ones. Information found online may be protected by intellectual property or privacy laws, and to download it or publish it may expose you to legal action. A key difference between hacking and web scraping is respect for legitimate legal barriers. These risks are summed up well by the [Data Journalism Handbook](http://datajournalismhandbook.org/1.0/en/getting_data_3.html):

> *"[S]ome countries recognize database rights, which may limit your right to re-use information that has been published online... depending on your jurisdiction, you may have special rights as a journalist. Scraping freely available Government data should be fine, but you may wish to double check before you publish. Commercial organizations — and certain NGOs — react with less tolerance and may try to claim that you’re ‘sabotaging’ their systems. Other information may infringe the privacy of individuals and thereby violate data privacy laws or professional ethics."*

## Implementation

### Building Capacity

* For those intending to do extensive scraping, it is worth noting that there is a high learning curve in self-developing scraping scripts and programs.   

* If the information is sensitive, additional expertise or digital security training will be necessary to ensure it is stored safely and responsibly, and to minimize the chances of being surveilled or attacked online.

### Verification and source-checking

* It is vital that the information you gather is verified and from trustworthy sources. The [Verification Handbook](http://verificationhandbook.com/book2/chapter5.php), [Bellingcat guides](https://www.bellingcat.com/resources/how-tos/2014/07/09/a-beginners-guide-to-geolocation/) and [First Draft News](http://firstdraftnews.com/downloads/firstdraft-vvg-photo-ALL.png) provide useful suggestions on verification.

* Others should also be able to verify your information and data. If you created a piece of code for scraping, it is [best practice to publish it](http://gijn.org/2015/08/12/on-the-ethics-of-web-scraping-and-data-journalism/) for transparency purposes and for others to check it or suggest improvements.

### Responsible data collection

Collecting, using and publishing data can have very serious consequences if not done safely and responsibly. See the [Responsible Data Community](https://responsibledata.io/) for more in-depth discussion of these issues, and in particular this article on [the responsible data concerns of open source intelligence](https://responsibledata.io/responsible-data-open-source-intelligence/).

**Is it legal?**

* As discussed in the *Challenges* section, there are numerous legal issues that may arise from IWR, and it is important to respect these legal barriers. To avoid any trouble, researchers should read the user terms and conditions and check whether there is a robots.txt file in the website’s code (which determines what cannot be scraped).


**Is it ethical?**
* If using a bot to scrape, [consider identifying yourself in the code](http://gijn.org/2015/08/12/on-the-ethics-of-web-scraping-and-data-journalism/). This will help reassure a web administrator concerned by the activity of the bot. There may be instances where this is unrealistic because, for example, identifying yourself would cause the targeted institution to delete or alter the data.
* Think carefully about the limits of concealing your identity or infiltrating private networks. The ethical guidelines for undercover reporting is a useful starting point. For example, the [Society of Professional Journalists Code of Ethics](http://blogs.spjnetwork.org/ethicscode/?p=133) states that journalists should "[a]void undercover or other surreptitious methods of gathering information unless traditional, open methods will not yield information vital to the public."
* Evaluate any possible harm that may be caused by your research methods and the data that you publish, and the ways to mitigate that. Consider the vulnerability of your sources (both those you request information from and those unaware that you have used their data) and individuals to whom the information relates. This is particularly important if dealing with personal or sensitive information.
* Lastly, you should respect the web infrastructure. This includes leaving several seconds between your scraping requests, and not overloading servers.

## Resources

* 100 tools for investigative journalists:
    * [75 tools for investigative journalists](https://medium.com/@Journalism2ls/75-tools-for-investigative-journalists-7df8b151db35#.1dmugzhwu)
    * [Journalism Tools](http://journalismtools.io/)
* [Verification handbook for investigative reporting](http://verificationhandbook.com/book2/chapter1.php)
* [Data Journalism Handbook](http://datajournalismhandbook.org/)
* [Research clinic](http://researchclinic.net/links.html#Searching)
* [GIJN’s guide on web scraping](http://gijn.org/2015/08/11/web-scraping-a-journalists-guide/)
* [OSINT Framework](http://osintframework.com/)
* [Pudo](http://pudo.org/material/investigative-tools/)[’s investigative tools](http://pudo.org/material/investigative-tools/)
* [School of ](http://schoolofdata.org/handbook/)[Da](http://schoolofdata.org/handbook/)[ta](http://schoolofdata.org/handbook/)[ Handbook](http://schoolofdata.org/handbook/)
* [An introduction to c](http://lethain.com/an-introduction-to-compassionate-screenscraping/)[ompassionate scraping](http://lethain.com/an-introduction-to-compassionate-screenscraping/)
* [Wayback Machine paper](https://blogs.city.ac.uk/ludiprice/files/2015/03/Internet-Archiving-The-Wayback-Machine-v0rykw.pdf)


## About
This site was created by The Engine Room to introduce the ins and outs of investigative web research. Comments or questions? Contact [post@theengineroom.org](mailto:post@theengineroom.org).

### Contributors
[The Engine Room](https://theengineroom.org) is an international organisation that helps activists, organisations, and other social change agents make the most of data and technology to increase their impact.

[Tom Parker](https://twitter.com/TomParker254) researched and wrote the content, while [Tin Geber](https://tin.fyi/about/) designed and managed the project. 

The site source code is available on [Github](https://github.com/the-engine-room/library).
