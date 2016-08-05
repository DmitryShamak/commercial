module.exports = function($stateProvider, $urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode(true);

    jQuery.ajaxSetup({cache: true});
    var templates = {
        page: require("../templates/page.temp")
    };

    var contents = {
        home: require("./content/home.js"),

        about: require("./content/about.js"),
        contact: require("./content/contact.js")
    };

    $stateProvider
        .state('landing', {
            url: "/",
            template: templates.page,
            data: {
                pageTitle: 'Home',
                content: contents.home
            },
            controller: "PageCtrl"
        })
        .state('contact', {
            url: "/contact",
            template: templates.page,
            data: {
                pageTitle: 'Contact',
                content: contents.contact
            },
            controller: "PageCtrl"
        })
        .state('services', {
            url: "/services",
            template: templates.page,
            data: {
                pageTitle: 'Job'
            },
            controller: "PageCtrl"
        })
        .state('about', {
            url: "/about",
            template: templates.page,
            data: {
                pageTitle: 'About',
                content: contents.about
            },
            controller: "PageCtrl"
        });
};