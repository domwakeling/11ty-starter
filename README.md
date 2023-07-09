# 11ty Starter

A simple starter for 11ty (with a 400 Lighthouse score) - navbar, menu, responsive layout
tools and simple color scheme, using WebC, Nunjucks and Markdown.

The `a11ycolor` package is included to test color combinations and ensure sufficient contrast
(target 4.5 generally accepted to rate AA for fonts below 18 points). This is not used within the
11ty package proper, but a testing package is included in `utils/colors.js` which can be run using
`node utils/colors.js`.