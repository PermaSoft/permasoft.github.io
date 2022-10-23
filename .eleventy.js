const markdownIt = require('markdown-it');
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = function(eleventyConfig) {
    eleventyConfig.addPlugin(eleventyNavigationPlugin);
    
    const markdownItOptions = {
        html: true,
        xhtmlOut: true,
        linkify: true
    };

    const md = markdownIt(markdownItOptions)
    .use(require('markdown-it-footnote'))
    .use(require('markdown-it-obsidian')(
        {
/*            relativeBaseURL:"./root/"*/
        }
    ))
    .use(require('markdown-it-highlightjs'), { inline: true })
    .use(require('markdown-it-attrs'))

    eleventyConfig.setLibrary('md', md);
    
    eleventyConfig.addPassthroughCopy('assets');
    eleventyConfig.setUseGitIgnore(false);
    eleventyConfig.addWatchTarget("./assets");
    eleventyConfig.addWatchTarget("./root/");

    return {
        templateFormats: [
              "md",
              "njk",
              "html",
              "liquid"
        ],
        dir: {
            input: "root",
            output: "_site",
            layouts: "layouts",
            includes: "includes",
            data: "_data"
        },
        passthroughFileCopy: true,
        markdownTemplateEngine: "njk",
        htmlTemplateEngine: "njk",
        dataTemplateEngine: "njk",
    }
}
