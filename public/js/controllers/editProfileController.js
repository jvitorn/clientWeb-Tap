angular.module('tapapp').controller('EditProfileController', function ($scope, recursoLogin, $http) {

    recursoLogin.verify;

    $scope.userName = localStorage.getItem('userName')
    $scope.userEmail = localStorage.getItem('email')

    $scope.enviar = (edit) => {
        const userEdit = edit;
        //arrumar data
        const data = userEdit.dt_birth;
        const dia = data.substr(0, 2);
        const mes = data.substr(2, 2);
        const ano = data.substr(4, 4);
        const dataFormatada = ano + "-" + mes + "-" + dia;
        userEdit.dt_birth = dataFormatada;

        //arrumar altura
        const altura = userEdit.height
        const result = altura.substr(0, 1) + ',' + altura.substr(1, 2);

        userEdit.height = result

        //arrumar peso

        const peso = userEdit.weight
        if (peso.substr(0, 1) == 0) {
            const weight0 = peso.substr(1, 2) + ',' + peso.substr(3, 1);
            userEdit.weight = weight0;
        } else {
            const weigt1 = peso.substr(0, 2) + ',' + peso.substr(3, 1);
            userEdit.weight = weigt1;
        }

        console.log(userEdit)

        // $http.put('http://jdc.profrodolfo.com.br/backend/user', {
        //     headers: { 'Authorization': 'Bearer ' + recursoLogin.token }
        // }, userEdit)

    }

}).config(function ($httpProvider) {
    $httpProvider.defaults.useXDomain = true;
    $httpProvider.defaults.headers.common["Accept"] = "application/json";
    $httpProvider.defaults.headers.common["Content-Type"] = "application/json";
    $httpProvider.defaults.headers.common["Access-Control-Allow-Methods"] = "POST, GET, OPTIONS, DELETE";
    $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';

});