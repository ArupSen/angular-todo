/*
 * An angular module here is being wrapped in a closure. This is good practice.
 * Notice the 'use strict' directive
 */
(function () {
    'use strict';
    var app = angular.module('myApp', []);
    app.controller('TestController', ['$scope', function($scope) {
       $scope.todos = [
         {'title': 'First To Do Item', 'done':false}
       ];
      $scope.addTodo = function(){
        $scope.todos.push({'title': $scope.newTodo, 'done':false});
      $scope.newTodo = '';
    };
      $scope.clearCompleted = function(){
        $scope.todos = $scope.todos.filter(function(item){
          return !item.done;
        });
      };
    }]);
})();
