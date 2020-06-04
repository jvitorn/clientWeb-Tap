angular.module('tapapp').controller('IndexController', function ($scope, $http) {

    function fabricarModulo(parametro) {
        let objeto = {};

        objeto.esporte = parametro;
        objeto.saude = parametro;
        objeto.tempo = parametro;

        return objeto
    }

    $scope.modulos = fabricarModulo(false);

    $scope.ativar = (modulo) => {
        let ativo = modulo
        $scope.modulos[ativo] = true;


    }



});