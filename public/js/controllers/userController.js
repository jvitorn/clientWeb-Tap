angular.module('tapapp').controller('UserController', function ($scope, $http, $location, recursoLogin) {

    recursoLogin.verify;

    function fabricarModulo(parametro) {
        let objeto = [
            { nome: 'Finanças', status: parametro, icon: 'fas fa-chart-line', description: 'Veja as ações da bolsa de valores, cotação das principais moedas do brasil e outros' },
            { nome: 'Noticias', status: parametro, icon: 'fas fa-newspaper', description: 'confira as principais noticias do brasil em um click' },
            { nome: 'Tarefas', status: parametro, icon: 'fas fa-list-ul', description: 'Veja as tarefas organizadas no seu dia a dia' },
            { nome: 'Tempo', status: parametro, icon: 'fas fa-stopwatch', description: 'Confira a previsão do tempo local' },
        ]
        return objeto
    }

    function showPosition(position) {
        const latitude = position.coords.latitude
        const longitude = position.coords.longitude



        L.mapquest.key = 'lYrP4vF3Uk5zgTiGGuEzQGwGIVDGuy24';

        var map = L.mapquest.map('map', {
            center: [latitude, longitude],
            layers: L.mapquest.tileLayer('map'),
            zoom: 12
        });

        map.addControl(L.mapquest.control());
    }
    $scope.geo = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);

        }
    }

    $scope.modulos = fabricarModulo(true);

});

