angular.module('tapapp').controller('RegisterController', function ($scope, $http, $location, $rootScope, recursoLogin) {

    recursoLogin.verify;

    $rootScope.login = false;

    $scope.enviar = (usuario) => {
        console.log(usuario)
        $http.post('http://jdc.profrodolfo.com.br/backend/user', usuario)
            .then(results => {
                if (results.data.status == 'success') {
                    Swal.fire('Favor Verifique seu Email!');
                    $location.path('/fogot')
                }
            })
            .catch(error => console.log(error))
    }
}).config(function ($httpProvider) {
    $httpProvider.defaults.useXDomain = true;
    $httpProvider.defaults.headers.common["Accept"] = "application/json";
    $httpProvider.defaults.headers.common["Content-Type"] = "application/json";
    $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';

});