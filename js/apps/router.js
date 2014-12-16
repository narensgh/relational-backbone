define(['jquery', 'backbone', 'apps/views/todoListView'],
    function($, Backbone, TodoListView) {
        var Router = Backbone.Router.extend({
            routes: {
                "": "index"
            },
            el: $('body'),
            index: function() {
                new TodoListView();
            }
        });
        return Router;
    });