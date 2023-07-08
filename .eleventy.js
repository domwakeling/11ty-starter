const pluginWebc = require("@11ty/eleventy-plugin-webc");
const { EleventyRenderPlugin } = require("@11ty/eleventy");
const { eleventyImagePlugin } = require("@11ty/eleventy-img");
const sass = require("sass");
const path = require("path");

const {
    bannerContainer,
    bannerRow,
    contrastBannerContainer,
    contrastBannerRow,
    normalRow
} = require('./utils/shortcodes.js');

module.exports = function(eleventyConfig) {

    // enable WebC, components in _components folder
    eleventyConfig.addPlugin(pluginWebc, {
        components: [
            "src/_components/**/*.webc",
            "npm:@11ty/eleventy-img/*.webc",
        ]
    });

    // enable the render plugin
    eleventyConfig.addPlugin(EleventyRenderPlugin);

    // Image plugin
    eleventyConfig.addPlugin(eleventyImagePlugin, {
        // Set global default options
        formats: ["webp", "png"],
        urlPath: "/images/",

        // Notably `outputDir` is resolved automatically
        // to the project output directory

        defaultAttributes: {
            loading: "lazy",
            decoding: "async"
        }
    });

    // Recognize Sass as a "template languages"
    eleventyConfig.addTemplateFormats("scss");

    // Compile Sass
    eleventyConfig.addExtension("scss", {
        outputFileExtension: "css",
        compile: async function (inputContent, inputPath) {
            // Skip files like _fileName.scss
            let parsed = path.parse(inputPath);
            if (parsed.name.startsWith("_")) {
                return;
            }

            // Run file content through Sass
            let result = sass.compileString(inputContent, {
                loadPaths: [parsed.dir || "."],
                sourceMap: false, // or true, your choice!
            });

            // Allow included files from @use or @import to
            // trigger rebuilds when using --incremental
            this.addDependencies(inputPath, result.loadedUrls);

            return async () => {
                return result.css;
            };
        },
    });

    // shortcodes
    eleventyConfig.addPairedShortcode("normalRow", normalRow);
    eleventyConfig.addPairedShortcode("bannerContainer", bannerContainer);
    eleventyConfig.addPairedShortcode("bannerRow", bannerRow);
    eleventyConfig.addPairedShortcode("contrastBannerContainer", contrastBannerContainer);
    eleventyConfig.addPairedShortcode("contrastBannerRow", contrastBannerRow);

    // copy from src/_includes/favicons to the root
    eleventyConfig.addPassthroughCopy({ "src/_includes/favicons": "." });

    // because we're making a function we need to return the "normal" exports object
    return {
        markdownTemplateEngine: "njk",
        dir: {
            input: "src",
            output: "_site"
        }
    };

}