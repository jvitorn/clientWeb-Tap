angular.module('tapapp').run(function ($rootScope, $http, $document, $compile) {

    $rootScope.api = 'http://localhost:3332/';

    $rootScope.name = localStorage.getItem('userName');
    $rootScope.email = localStorage.getItem('email');

    $rootScope.notfluid = true;
    $rootScope.login = true;
});