angular.module('tapapp').controller('WeatherController', function ($scope, $http) {
    console.log('entrou no controller login');

    $scope.enviar = (usuario) => {
        console.log(usuario)
    }

    $http.get('https://api.hgbrasil.com/weather?woeid=456259&format=json-cors')
        .then(results => {
            console.log(results)
            $scope.tempo = results.data;
        })
        .catch(error => console.log(error))
});