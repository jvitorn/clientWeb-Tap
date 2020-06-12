angular.module('tapapp').controller('FinanceController', function ($scope, $http, $location, recursoLogin) {

    recursoLogin.verify;

    $http.get('https://api.hgbrasil.com/finance?format=json-cors&key=163b38fc')
        .then(results => {
            $scope.finances = results.data


            $scope.isCotation = (variation) => {
                if (Math.sign(variation) == 1) {

                    return true;

                }
                else if (Math.sign(variation) == -1) {

                    return false;
                }
            }
            $scope.isCotation2 = (variation) => {
                if (Math.sign(variation) == 1) {

                    return false;

                }
                else if (Math.sign(variation) == -1) {

                    return true;
                }
            }
        })
        .catch(error => console.error(error))


});