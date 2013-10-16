var jam = {
    "packages": [
        {
            "name": "backbone",
            "location": "scripts/vendor/backbone",
            "main": "backbone.js"
        },
        {
            "name": "jquery",
            "location": "scripts/vendor/jquery",
            "main": "dist/jquery.js"
        },
        {
            "name": "ristretto",
            "location": "scripts/vendor/ristretto",
            "main": "ristretto.js"
        },
        {
            "name": "underscore",
            "location": "scripts/vendor/underscore",
            "main": "underscore.js"
        }
    ],
    "version": "0.2.17",
    "shim": {
        "backbone": {
            "deps": [
                "underscore",
                "jquery"
            ],
            "exports": "Backbone"
        },
        "underscore": {
            "exports": "_"
        }
    }
};

if (typeof require !== "undefined" && require.config) {
    require.config({
    "packages": [
        {
            "name": "backbone",
            "location": "scripts/vendor/backbone",
            "main": "backbone.js"
        },
        {
            "name": "jquery",
            "location": "scripts/vendor/jquery",
            "main": "dist/jquery.js"
        },
        {
            "name": "ristretto",
            "location": "scripts/vendor/ristretto",
            "main": "ristretto.js"
        },
        {
            "name": "underscore",
            "location": "scripts/vendor/underscore",
            "main": "underscore.js"
        }
    ],
    "shim": {
        "backbone": {
            "deps": [
                "underscore",
                "jquery"
            ],
            "exports": "Backbone"
        },
        "underscore": {
            "exports": "_"
        }
    }
});
}
else {
    var require = {
    "packages": [
        {
            "name": "backbone",
            "location": "scripts/vendor/backbone",
            "main": "backbone.js"
        },
        {
            "name": "jquery",
            "location": "scripts/vendor/jquery",
            "main": "dist/jquery.js"
        },
        {
            "name": "ristretto",
            "location": "scripts/vendor/ristretto",
            "main": "ristretto.js"
        },
        {
            "name": "underscore",
            "location": "scripts/vendor/underscore",
            "main": "underscore.js"
        }
    ],
    "shim": {
        "backbone": {
            "deps": [
                "underscore",
                "jquery"
            ],
            "exports": "Backbone"
        },
        "underscore": {
            "exports": "_"
        }
    }
};
}

if (typeof exports !== "undefined" && typeof module !== "undefined") {
    module.exports = jam;
}