angular.module('tapapp').controller('CalendarController', function ($scope, $http, $location) {
    const d = new Date()

    $scope.date = new Date()

    $scope.dateMonth = {}
    //capturando todos os meses do ano
    for (let contador = 0; contador <= 11; contador++) {
        $scope.dateMonth[contador] = d.setMonth(contador)

    }
    $scope.dateWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']




    const getDaysInMonth = (month, year) => {
        return new Date(year, month, 0).getDate();
    };
    console.log(getDaysInMonth(1, 2020));
    console.log(getDaysInMonth(2, 2020));
    console.log(getDaysInMonth(6, 2020));
    console.log(getDaysInMonth(12, 2020));
});