var ctrl = angular.module('bordioController', []);

ctrl.controller('bordio', ['$scope', 'bordioApi', function($scope, bordioApi){

  $scope.bordios = [];

  // $scope.getAll = function(){
  //   bordioApi.getFeatured().then(function(response){
  //     console.log(response.data);
  //     $scope.bordios.push(response.data.projects);
  //     console.log($scope.bordios);
  //   });
  // }

  $scope.getDribbleAll = function(){
    bordioApi.getDribbble().then(function(response){
      console.log(response.data);
    })
  }

  $scope.getDribbleShots = function(){
    bordioApi.getDribbbleShots().then(function(response){
      console.log(response);
    })
  }


  $scope.getDribbleAll();
  $scope.getDribbleShots();

}]);
