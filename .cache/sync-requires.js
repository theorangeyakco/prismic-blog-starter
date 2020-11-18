const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("D:\\Vanaj\\Desktop\\vanaj-blog\\.cache\\dev-404-page.js"))),
  "component---node-modules-prismicio-gatsby-source-prismic-graphql-components-preview-page-js": hot(preferDefault(require("D:\\Vanaj\\Desktop\\vanaj-blog\\node_modules\\@prismicio\\gatsby-source-prismic-graphql\\components\\PreviewPage.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("D:\\Vanaj\\Desktop\\vanaj-blog\\src\\pages\\404.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("D:\\Vanaj\\Desktop\\vanaj-blog\\src\\pages\\index.js"))),
  "component---src-templates-post-js": hot(preferDefault(require("D:\\Vanaj\\Desktop\\vanaj-blog\\src\\templates\\post.js")))
}

