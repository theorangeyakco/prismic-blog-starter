module.exports = [{
      plugin: require('../node_modules/@prismicio/gatsby-source-prismic-graphql/gatsby-browser.js'),
      options: {"plugins":[],"repositoryName":"vanaj-blog","path":"/preview","previews":true,"pages":[{"type":"Post","match":"/blog/:uid","path":"/blog-preview","component":"D:\\Vanaj\\Desktop\\vanaj-blog\\src\\templates\\post.js"}]},
    },{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"gatsby-starter-default","short_name":"starter","start_url":"/","background_color":"#663399","theme_color":"#663399","display":"minimal-ui","icon":"src/images/favicon.png","cache_busting_mode":"query","include_favicon":true,"legacy":true,"theme_color_in_head":true,"cacheDigest":"42b93fed6f8e355f95918d74c1ec11a0"},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]
