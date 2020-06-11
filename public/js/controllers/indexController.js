angular.module('tapapp').controller('IndexController', function ($scope, $http) {
    const API_NEWS = '55aa6a3f763e41daa2e0655535306099';

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
    // $scope.notification = Notification.requestPermission(function () {
    //     new Notification(title, options);

    // });


    $scope.batery = navigator.getBattery();
    $scope.batery.then((battery) => {
        console.log('A porcentagem da bateria é de aproximadamente ' + battery.level * 100 + '%');
        console.log("Battery charging? " + (battery.charging ? "Yes" : "No"))
    });



    $http.get('http://newsapi.org/v2/top-headlines?country=br&category=business&apiKey=' + API_NEWS)
        .then(results => {
            $scope.news = results.data
            console.log($scope.news)
        }
        )
});