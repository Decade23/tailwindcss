let mix = require("laravel-mix")

mix.js("src/js/min.js","js")
    .sass("src/css/min.sass","css")
    .setPublicPath("public")