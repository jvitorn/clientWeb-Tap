angular.module('tapapp', ['ngRoute', 'ui.mask'])
    .config(function ($routeProvider, $locationProvider) {
        //habilidando modo de html
        $locationProvider.html5Mode(true);
        //rotas do angularJs        
        $routeProvider.when('/home', {
            //pagina que sera carregada
            templateUrl: 'partials/home.html',
            //controller da pagina 
            controller: 'IndexController'
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
        });
        $routeProvider.when('/main', {
            //pagina que sera carregada
            templateUrl: 'partials/main.html',
            //controller da pagina 
            controller: 'MainController'
        });
        $routeProvider.when('/weather', {
            //pagina que sera carregada
            templateUrl: 'partials/weather.html',
            //controller da pagina 
            controller: 'WeatherController'
        });
        $routeProvider.when('/fogot', {
            //pagina que sera carregada
            templateUrl: 'partials/confirmation.html',
            //controller da pagina 
            controller: 'FogotCodeController'
        });
        //obrigando o usuario a ser redirecionado para '/'
        $routeProvider.otherwise({ redirectTo: '/home' });
    });