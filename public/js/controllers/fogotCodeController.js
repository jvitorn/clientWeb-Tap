angular.module('tapapp').controller('FogotCodeController', function ($scope, $http, $location) {

    $scope.enviar = (usuario) => {
        console.log(usuario)
        $http.post('http://jdc.profrodolfo.com.br/backend/user/confirm-account', usuario)
            .then(results => {
                if (results.data.status == 'success') {
                    $location.path('/fogot');
                }
                else if (results.data.status == 'error') {
                    Swal.fire('Favor Verifique seus dados e tente novamente')
                }
            })
            .catch(error => console.log(error))
    }
});