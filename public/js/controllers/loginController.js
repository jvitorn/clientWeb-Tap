angular.module('tapapp').controller('LoginController', function ($scope, $http) {
    console.log('entrou no controller login');

    $scope.enviar = (usuario) => {

        $http.post('http://jdc.profrodolfo.com.br/backend/auth/login', usuario)
            .then(results => {
                console.log(results.data)
            })
            .catch(error => console.log(error))
    }
});