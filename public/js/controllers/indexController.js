angular.module('tapapp').controller('IndexController', function ($scope, $http) {

    function fabricarModulo(parametro) {
        let objeto = {
            modulos: [
                { nome: 'financa', status: parametro },
                { nome: 'esporte', status: parametro },
                { nome: 'saude', status: parametro },
                { nome: 'tempo', status: parametro },
            ]
        }


        return objeto
    }

    $scope.modulos = fabricarModulo(true);

    $scope.ativar = (modulo) => {

        let ativo = modulo
        $scope.modulos.modulos[ativo] = true;


    }

    $scope.novoModulo = (nome, status) => {
        $scope.modulos[nome] = status;

        console.log($scope.modulos)
    }
    console.log($scope.modulos.modulos)



    const title = 'Bem Vindo'
        , options = {
            body: 'Bem Vindo ao Tap, Esperamos muito de você!',
            icon: 'https://raw.githubusercontent.com/jvitorn/clientWeb-Tap/master/public/img/logo-1.png'
        };
    $scope.notification = Notification.requestPermission(function () {
        new Notification(title, options);

    });


    $scope.batery = navigator.getBattery();
    $scope.batery.then((battery) => {
        console.log('A porcentagem da bateria é de aproximadamente ' + battery.level * 100 + '%');
    });
});