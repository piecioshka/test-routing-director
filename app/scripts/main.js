(function (root) {
    'use strict';

    var director = require('director');

    var routes = {
        '/home': function () {
            console.log('Hello world!');
        },
        '/about': function () {
            console.log('Foo bar baz.');
        }
    };

    // ----------------

    var config = {
        on: function () {
            console.log.apply(console, arguments);
        }
    };

    var router = new director.Router(routes);
    router.configure(config);
    router.init();

}(this));
