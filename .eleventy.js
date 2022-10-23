const markdownIt = require('markdown-it');
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = function (eleventyConfig) {
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
                baseURL: '/',
                relativeBaseURL: './',
            }
        ))
        .use(require('markdown-it-highlightjs'), { inline: true })
        .use(require('markdown-it-attrs'))

    eleventyConfig.setLibrary('md', md);

    eleventyConfig.addPassthroughCopy('_assets');
    eleventyConfig.setUseGitIgnore(false);
    eleventyConfig.addWatchTarget("./_assets");
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
            layouts: "_layouts",
            includes: "_includes",
            data: "_data"
        },
        passthroughFileCopy: true,
        markdownTemplateEngine: "njk",
        htmlTemplateEngine: "njk",
        dataTemplateEngine: "njk",
    }
}
