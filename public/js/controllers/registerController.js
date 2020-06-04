angular.module('tapapp').controller('RegisterController', function ($scope, $http) {
    console.log('entrou no controller register');
    $scope.enviar = (usuario) => {
        console.log(usuario)
        $http.post('http://jdc.profrodolfo.com.br/backend/user', usuario)
            .then(results => {
                console.log(results.data)
            })
            .catch(error => console.log(error))
    }
}).config(function ($httpProvider) {
    $httpProvider.defaults.useXDomain = true;
    $httpProvider.defaults.headers.common["Accept"] = "application/json";
    $httpProvider.defaults.headers.common["Content-Type"] = "application/json";
    $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';

});