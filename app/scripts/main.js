(function (root) {
    'use strict';

    var director = require('director');

    var routes = {
        '/home': function () {
            console.log('route: ', this.getRoute());
        },
        '/about': function () {
            console.log('route: ', this.getRoute());
        }
    };

    // ----------------

    function getHash() {
        return location.hash.slice(2);
    }

    function setup() {
        var settings = {
            on: function () {
                console.log('on: %s', getHash());
            },
            before: function () {
                console.group(getHash());
                console.log('before');
            },
            after: function () {
                console.log('after');
                console.groupEnd(getHash());
            },
            notfound: function () {
                console.log('notfound: %s', getHash());
            }
        };

        var router = new director.Router(routes);
        router.configure(settings);
        router.init();

        // Redirect to main page.
        window.location.hash = '/home';
    }

    window.addEventListener('load', setup);

}(this));
