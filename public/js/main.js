angular.module('tapapp', ['ngRoute', 'ui.mask'])
    .config(function ($routeProvider, $locationProvider) {
        //habilidando modo de html
        $locationProvider.html5Mode(true);
        //rotas do angularJs        
        $routeProvider.when('/home', {
            //pagina que sera carregada
            templateUrl: 'partials/home.html',
            //controller da pagina 
            controller: 'TesteController'
        });
        $routeProvider.when('/login', {
            //pagina que sera carregada
            templateUrl: 'partials/login.html',
            //controller da pagina 
            controller: 'LoginController'
        });
        $routeProvider.when('/register', {
            //pagina que sera carregada
            templateUrl: 'partials/register.html',
            //controller da pagina 
            controller: 'RegisterController'
        })
        //obrigando o usuario a ser redirecionado para '/'
        $routeProvider.otherwise({ redirectTo: '/home' });
    });