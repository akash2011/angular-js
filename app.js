//My First Angular App
(function(){
var app = angular.module("MyFirstApp",[]);
app.controller("MyFirstController",function($scope){
  $scope.firstName="Ashraful";
  $scope.lastName="Kabir";
});
})();
