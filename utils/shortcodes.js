const MarkdownIt = require("markdown-it")({
    html: true,
    breaks: false
});

const normalRow = (content) => {
    const markup = `
        <div class="container">
            <div class="row">
                ${MarkdownIt.render(content)}
            </div>
        </div>`

    // markup engine needs all newline => spaces => tags removed
    return markup.replace(/\n\s*</g, '<');
}

const bannerContainer = (content) => {
    const markup = `
        <div class="container banner">
            <div class="row">
                ${MarkdownIt.render(content)}
            </div>
        </div>`

    // markup engine needs all newline => spaces => tags removed
    return markup.replace(/\n\s*</g, '<');
}

const bannerRow = (content) => {
    const markup = `
        <div class="banner">
            <div class="container">
                <div class="row">
                    ${MarkdownIt.render(content)}
                </div>
            </div>
        </div>`

    // markup engine needs all newline => spaces => tags removed
    return markup.replace(/\n\s*</g, '<');
}

const contrastBannerContainer = (content) => {
    const markup = `
        <div class="container banner-contrast">
            <div class="row">
                ${MarkdownIt.render(content)}
            </div>
        </div>`

    // markup engine needs all newline => spaces => tags removed
    return markup.replace(/\n\s*</g, '<');
}

const contrastBannerRow = (content) => {
    const markup = `
        <div class="banner-contrast">
            <div class="container">
                <div class="row">
                    ${MarkdownIt.render(content)}
                </div>
            </div>
        </div>`

    // markup engine needs all newline => spaces => tags removed
    return markup.replace(/\n\s*</g, '<');
}

module.exports = {
    bannerContainer,
    bannerRow,
    contrastBannerContainer,
    contrastBannerRow,
    normalRow
}