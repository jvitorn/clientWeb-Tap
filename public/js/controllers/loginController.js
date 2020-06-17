angular.module('tapapp').controller('LoginController', function ($scope, $http, $rootScope, $location, $cookies, recursoLogin) {

    recursoLogin.verify;

    $rootScope.login = false;

    $scope.enviar = (usuario) => {
        console.log(usuario)
        $http.post('http://jdc.profrodolfo.com.br/backend/auth/login', usuario)
            .then(results => {
                $scope.user = results.data
                console.log($scope.user)
                if ($scope.user.status == 'error') {
                    Swal.fire($scope.user.msg)

                    $scope.msg = $scope.user.msg
                } else {
                    recursoLogin.token
                    $cookies.put('x-acess-token', $scope.user.token)
                    $location.path('home')

                }
            })
            .catch(error => console.log(error))
    }
}).config(function ($httpProvider) {
    $httpProvider.defaults.useXDomain = true;
    $httpProvider.defaults.headers.common["Accept"] = "application/json";
    $httpProvider.defaults.headers.common["Content-Type"] = "application/json";
    $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

});