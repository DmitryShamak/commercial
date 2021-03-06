module.exports = function($stateProvider, $urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode(true);

    jQuery.ajaxSetup({cache: true});
    var templates = {
        admin: require("../html/admin.html"),
        page: require("../templates/page.temp")
    };

    var contents = {
        home: require("./content/home.js"),

        about: require("./content/about.js"),
        contact: require("./content/contact.js")
    };

    var language = new (require("./helpers/language.js"))();


    $urlRouterProvider.otherwise('/' + language.default + '/');

    $stateProvider
        .state('admin', {
            url: "/:language/gr-admin",
            template: templates.admin,
            data: {
                pageTitle: 'Gravis'
            },
            controller: "AdminCtrl",
            controllerAs: "admin"
        })
        .state('landing', {
            url: "/:language/",
            template: templates.page,
            data: {
                pageTitle: 'Gravis',
                content: contents.home
            },
            controller: "PageCtrl"
        })
        .state('contact', {
            url: "/:language/contact",
            template: templates.page,
            data: {
                pageTitle: 'Contact',
                content: contents.contact
            },
            controller: "PageCtrl"
        })
        .state('services', {
            url: "/:lang/services",
            template: templates.page,
            data: {
                pageTitle: 'Job'
            },
            controller: "PageCtrl"
        })
        .state('about', {
            url: "/:language/about",
            template: templates.page,
            data: {
                pageTitle: 'About',
                content: contents.about
            },
            controller: "PageCtrl"
        });
};