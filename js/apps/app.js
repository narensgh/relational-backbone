require.config({
    baseUrl: 'js/libs',
    paths: {
        collections: '../apps/collections',
        views: '../apps/views',
        baseView: '../apps/views/baseView',
        models: '../apps/models',
        libraries: '../apps/libraries',
        apps: '../apps',
        tpl: '../apps/templates',
        handlebars: 'handlebars',
        text: 'text',
    },
    shim: {
        'backbone': {
            deps: ['jquery', 'underscore'],
            exports: 'Backbone'
        },
        'underscore': {
            exports: '_'
        },
        handlebars: {
            exports: 'Handlebars'
        }
    }
});

require(['jquery', 'backbone', 'apps/router'], function($, Backbone, Router) {
    var router = new Router();
    Backbone.history.start();
});