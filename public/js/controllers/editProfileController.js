angular.module('tapapp').controller('EditProfileController', function ($scope, recursoLogin, $http) {

    recursoLogin.verify;

    $scope.userName = localStorage.getItem('userName')
    $scope.userEmail = localStorage.getItem('email')

    $scope.enviar = (edit) => {
        const userEdit = edit;
        //arrumar data
        const date = new Date(userEdit.dt_birth)

        const dd = date.getDate();
        const mm = date.getMonth() + 1;
        const yy = date.getFullYear();
        console.log(userEdit)



        //userEdit.dt_birth = yy + '-' + mm + "-" + dd;
        userEdit.dt_birth = 3
        //arrumar altura
        const altura = toString(userEdit.height);
        const result = altura.substr(0, 1) + ',' + altura.substr(1, 2);

        userEdit.height = result

        //arrumar peso

        const peso = userEdit.weight
        if (peso.substr(0, 1) == 0) {
            const weight = peso.substr(1, 2) + ',' + peso.substr(3, 1);
            userEdit.weight = weight;
        }


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