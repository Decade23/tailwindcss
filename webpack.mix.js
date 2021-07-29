let mix = require("laravel-mix")

mix.js("src/js/min.js","js")
    .sass("src/css/min.sass","css")
    //.sass("src/css/btn.sass","css")
    .setPublicPath("public")