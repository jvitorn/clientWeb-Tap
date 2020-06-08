angular.module('tapapp').controller('CalendarController', function ($scope, $http, $location, $filter) {
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
    $scope.test = {}
    //api de feriados 
    $http.get('http://api.calendario.com.br/?json=true&ano=' + d.getFullYear() + '&estado=SP&cidade=ITANHAEM&token=am9hb2V1bm8yMDExQGdtYWlsLmNvbSZoYXNoPTI0NTcxNjc4Nw')
        .then(results => {
            const resultados = results.data.length - 1;
            $scope.dateApi = results.data;


            for (let contador = 0; contador <= resultados; contador++) {
                //conversor de string para data
                const datas = $scope.dateApi[contador]['date'];
                const parts = $scope.dateApi[contador]['date'].split('/');

                $scope.dateApi[contador].date = new Date(parts[2], parts[1] - 1, parts[0])



            }

            for (let contador = 0; contador <= resultados; contador++) {
                console.log($scope.dateApi[contador].date)

            }


        })

});