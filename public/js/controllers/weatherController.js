angular.module('tapapp').controller('WeatherController', function ($scope, $http, recursoLogin) {

    recursoLogin.verify;

    $scope.enviar = (usuario) => {
        console.log(usuario)
    }

    $http.get('https://api.hgbrasil.com/weather?woeid=456259&format=json-cors&key=163b38fc')
        .then(results => {
            console.log(results)
            $scope.tempo = results.data;
        })
        .catch(error => console.log(error))
});