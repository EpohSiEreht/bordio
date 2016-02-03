var ctrl = angular.module('bordioController', []);

ctrl.controller('bordio', ['$scope', 'bordioApi', function($scope, borderApi){

  $scope.getShots = function(){
    borderApi.getShots().then(function(response){
      console.log(response);
    });
  }

  function init(){
    $scope.getShots();
  }

  init();

}]);
