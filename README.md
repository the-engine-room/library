# Engine Room Library

[![Build Status](https://travis-ci.org/the-engine-room/library.svg?branch=gh-pages)](https://travis-ci.org/the-engine-room/library)


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

Please commit your changes and push to the gh-pages branch. Travis CI ensures each push to gh-pages results in a recompiled version of the site is pushed to the master branch. We set up a Git hook with a simple php deploy script that will pull any new changes to our server with every push.

If you have write access to this repo, you can check if the build is successful on [Travis](https://travis-ci.org/the-engine-room/library).
