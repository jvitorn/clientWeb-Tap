angular.module('tapapp').controller('EditProfileController', function ($scope, recursoLogin) {

    recursoLogin.verify;

    $scope.userName = localStorage.getItem('userName')
    $scope.userEmail = localStorage.getItem('email')

});