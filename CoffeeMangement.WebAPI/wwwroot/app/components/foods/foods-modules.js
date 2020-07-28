/// <reference path="../../../assets/angular/angular.min.js" />
/// <reference path="../../../assets/angular/angular-ui-router.js" />
(function () {
    angular.module("CoffeeManage.foods", ["commonRouter"]).config(config);
    config.$inject = ['$stateProvider', '$urlRouterProvider'];
    function config($stateProvider, $urlRouterProvider) {
        $stateProvider.state('food', {
            url: '/food',
            templateUrl: "/components/foods/foodListView.html",
            controller: "foodListController"
        });
    }
})();