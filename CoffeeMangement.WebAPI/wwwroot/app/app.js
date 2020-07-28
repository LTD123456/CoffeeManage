
(function () {
    var routerApp = angular.module('routerApp', ['ui.router']);
    routerApp.config(function($routeProvider, $locationProvider){
        $routeProvider.caseInsensitiveMatch = true;

        $routeProvider.when('home', {
            url: '/home',
            templateUrl: "/components/homes/homeView.html",
            controller: "homeController"
        });
    });
})();