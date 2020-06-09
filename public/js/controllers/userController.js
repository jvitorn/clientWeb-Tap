angular.module('tapapp').controller('UserController', function ($scope, $http, $location) {
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
});