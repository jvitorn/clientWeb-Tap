angular.module('tapapp').controller('TaskController', function ($scope, $http, $location) {

    let tasks = []
    tasks = JSON.parse(localStorage.getItem('Tasks')) || [];

    $scope.tarefas = tasks;

    console.log($scope.tarefas)

    $scope.criarTarefa = (task) => {

        tasks.push(task);

        localStorage.setItem('Tasks', JSON.stringify(tasks));

        $scope.tarefas = tasks;

    }
    $scope.excluirTarefa = (posicao) => {

        tasks.splice(posicao, 1);


        localStorage.setItem('Tasks', JSON.stringify(tasks));

        $scope.tarefas = JSON.parse(localStorage.getItem('Tasks')) || [];



    }
});