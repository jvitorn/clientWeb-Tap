angular.module('tapapp', ['ngRoute', 'ui.mask', 'ui.materialize'])
    .config(function ($routeProvider, $locationProvider, $httpProvider) {
        // arrumando erro de cors
        $httpProvider.defaults.useXDomain = true;
        $httpProvider.defaults.headers.common["Accept"] = "application/json";
        $httpProvider.defaults.headers.common["Content-Type"] = "application/json";
        $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';

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
        $routeProvider.when('/task', {
            //pagina que sera carregada
            templateUrl: 'partials/task.html',
            //controller da pagina 
            controller: 'TaskController'
        });
        $routeProvider.when('/calendar', {
            //pagina que sera carregada
            templateUrl: 'partials/calendar.html',
            //controller da pagina 
            controller: 'CalendarController'
        });
        $routeProvider.when('/user', {
            //pagina que sera carregada
            templateUrl: 'partials/user.html',
            //controller da pagina 
            controller: 'UserController'
        });
        $routeProvider.when('/finance', {
            //pagina que sera carregada
            templateUrl: 'partials/finance.html',
            //controller da pagina 
            controller: 'FinanceController'
        });
        //obrigando o usuario a ser redirecionado para '/'
        $routeProvider.otherwise({ redirectTo: '/home' });
    });