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
            const weigt1 = peso.substr(0, 3) + ',' + peso.substr(3, 1);
            userEdit.weight = weigt1;
        }


    }

    const editProfile = {
        dt_birth: "2000-05-30",
        height: "1,85",
        name: "joao vitor",
        weight: "105,5"
    }
    console.log(editProfile)
    $http.put('http://jdc.profrodolfo.com.br/backend/user', editProfile)
        .then(results => console.log(results))
});