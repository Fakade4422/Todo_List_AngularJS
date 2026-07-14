var app = angular.module('todoApp', []);
app.controller('addNewTaskCtrl',['$scope', function($scope) {
    $scope.tasks = []; //-- initializing the task object array, we will use to store the tasks ---///
    $scope.newTask = {};

    $scope.addTask = function() {
        $scope.tasks.push({
            id: $scope.tasks.length +1,
            title: $scope.newTask.title,
            difficulty: $scope.newTask.difficulty,
            completed: false
        });

        $scope.newTask.title = '';
        $scope.newTask.difficulty = '';
        console.log($scope.tasks);
    };

    $scope.deleteTask = function(){
        var removeTask = $scope.tasks.indexOf(this.task);
        $scope.tasks.splice(removeTask, 1);
    };

}]);