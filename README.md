# Engine Room Library

# Updating Content

To add new pages, create a markdown (.md) file in the `_posts` directory with a filename matching `YYYY-MM-DD-title.md`. Add the required jekyll front-matter lines at the beginning.

``` markdown
---
    layout: page
    title: PAGE TITLE
---

page content
```

For help formatting Markdown, check the GitHub [Markdown Basics](https://help.github.com/articles/markdown-basics/)

Run `jekyll serve --watch --baseurl ''` and open a web browser to http://localhost:4000/page_name to see your content.

# Deploying Updates

Commit your changes, push to the gh-pages branch, and it will be live on GitHub Pages.
