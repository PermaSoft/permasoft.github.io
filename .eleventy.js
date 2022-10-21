const markdownIt = require('markdown-it');

module.exports = function(eleventyConfig) {
    
/*     const markdownItOptions = {
        html: true,
        xhtmlOut: true,
        linkify: true
    };

 */
/*     const md = markdownIt(markdownItOptions)
    .use(require('markdown-it-footnote'))
    .use(require('markdown-it-obsidian'))
    .use(require('markdown-it-highlightjs'), { inline: true })
    .use(require('markdown-it-attrs'))
 */
/*     .use(function(md) {
        // Recognize Mediawiki links ([[text]])
        md.linkify.add("[[", {
            validate: /^\s?([^\[\]\|\n\r]+)(\|[^\[\]\|\n\r]+)?\s?\]\]/,
            normalize: match => {
                const parts = match.raw.slice(2,-2).split("|");
                parts[0] = parts[0].replace(/.(md|markdown)\s?$/i, "");
                match.text = (parts[1] || parts[0]).trim();
                match.url = `/notes/${parts[0].trim()}/`;
            }
        })
    })
 */    
/*     eleventyConfig.addFilter("markdownify", string => {
        return md.render(string)
    })
 */
    eleventyConfig.amendLibrary('md', md => md
        .enable("html")
        .enable("xhtmlOut")
        .enable("linkify")
        .use(require('markdown-it-footnote'))
        .use(require('markdown-it-obsidian'))
        .use(require('markdown-it-highlightjs'), { inline: true })
        .use(require('markdown-it-attrs'))
    );
    
    eleventyConfig.addCollection("notes", function (collection) {
        return collection.getFilteredByGlob(["notes/**/*.md", "index.md"]);
    });
    
    eleventyConfig.addPassthroughCopy('assets');
    eleventyConfig.setUseGitIgnore(false);

    return {
        dir: {
            input: "root",
            output: "_site",
            layouts: "layouts",
            includes: "includes",
            data: "_data"
        },
        passthroughFileCopy: true
    }
}
