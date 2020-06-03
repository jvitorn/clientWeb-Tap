angular.module('tapapp').controller('LoginController', function ($scope, $http) {
    console.log('entrou no controller login');

    $scope.enviar = (usuario) => {
        console.log(usuario)
    }
});