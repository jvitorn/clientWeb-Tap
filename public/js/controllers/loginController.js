angular.module('tapapp').controller('LoginController', function ($scope, $http, $rootScope, $cookies, recursoLogin) {

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
                    // Setting a cookie
                    $cookies.put('x-acess-token', $scope.user.token);

                    window.location = '/home'
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