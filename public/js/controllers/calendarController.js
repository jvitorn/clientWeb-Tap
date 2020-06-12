angular.module('tapapp').controller('CalendarController', function ($scope, $http, $location, recursoLogin) {

    recursoLogin.verify;

    const d = new Date()

    $scope.date = new Date()

    $scope.dateMonth = {}
    //capturando todos os meses do ano
    for (let contador = 0; contador <= 11; contador++) {
        $scope.dateMonth[contador] = d.setMonth(contador)

    }
    $scope.dateWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']



    // dias 
    $scope.dateDay = {}

    const getDaysInMonth = (month, year) => {
        return new Date(year, month, 0).getDate();
    };


    const diasDoMes = getDaysInMonth(d.getMonth(), d.getFullYear());

    for (let contador = 1; contador <= diasDoMes; contador++) {
        $scope.dateDay[contador] = contador

    }


});