angular.module('tapapp').run(function ($rootScope, $http, $document, $compile) {

    $rootScope.api = 'http://localhost:3332/';


    $rootScope.notfluid = true;
    $rootScope.login = true;
});