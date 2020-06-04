angular.module('tapapp').controller('IndexController', function ($scope, $http) {

    function fabricarModulo(parametro) {
        let objeto = {
            modulos: [
                { nome: 'esporte', status: parametro },
                { nome: 'saude', status: parametro },
                { nome: 'tempo', status: parametro },
            ]
        }


        return objeto
    }

    $scope.modulos = fabricarModulo(false);

    $scope.ativar = (modulo) => {

        let ativo = modulo
        $scope.modulos.modulos[ativo] = true;


    }

    $scope.novoModulo = (nome, status) => {
        $scope.modulos[nome] = status;

        console.log($scope.modulos)
    }
    console.log($scope.modulos.modulos)
});