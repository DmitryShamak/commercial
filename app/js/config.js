module.exports = function($stateProvider, $urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode(true);

    jQuery.ajaxSetup({cache: true});
    var templates = {
        page: require("../templates/page.temp")
    };

    var contents = {
        home: require("./content/home.js")
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
            url: "/",
            template: templates.page,
            data: {
                pageTitle: 'Contact'
            },
            controller: "PageCtrl"
        })
        .state('job', {
            url: "/",
            template: templates.page,
            data: {
                pageTitle: 'Job'
            },
            controller: "PageCtrl"
        })
        .state('about', {
            url: "/",
            template: templates.page,
            data: {
                pageTitle: 'About'
            },
            controller: "PageCtrl"
        });
};