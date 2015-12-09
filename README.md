# Engine Room Library

## Editing the Microtasking Page 

The editable text in this page is stored available here: [/_posts/2015-12-07-microtasking.md](/_posts/2015-12-07-microtasking.md)
Note that the section names (Definition, Examples, etc.) cannot change or the menu will cease to work.
For help formatting Markdown, check the GitHub [Markdown Basics](https://help.github.com/articles/markdown-basics/)

## Creating a New Page

Create a markdown (.md) file in the `_posts` directory with a filename matching `YYYY-MM-DD-title.md`. 
Add the required jekyll front-matter lines at the beginning of each page.

``` markdown
---
    layout: page
    title: PAGE TITLE
---

page content
```

## Running the Library Locally

In the command line, run:
`jekyll serve --watch --baseurl ''`
Open a web browser to http://localhost:4000/page_name to see your content.

## Deploying Updates

Commit your changes, push to the gh-pages branch, and it will be live on GitHub Pages.
