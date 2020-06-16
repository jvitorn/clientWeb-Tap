angular.module('tapapp').run(function ($rootScope, $http, $document, $compile) {

    $rootScope.api = 'http://localhost:3332/';

    $rootScope.name = localStorage.getItem('userName');
    $rootScope.email = localStorage.getItem('email');

    $rootScope.notfluid = true;
    $rootScope.login = true;
}).config(function ($httpProvider) {
    $httpProvider.defaults.useXDomain = true;
    $httpProvider.defaults.headers.common["Accept"] = "application/json";
    $httpProvider.defaults.headers.common["Content-Type"] = "application/json";
    $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';

});;