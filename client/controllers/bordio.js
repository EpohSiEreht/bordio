var ctrl = angular.module('bordioController', []);

ctrl.controller('bordio', ['$scope', 'bordioApi', function($scope, bordioApi){

  $scope.shots = [];
  $scope.gifs = [];

  // $scope.getAll = function(){
  //   bordioApi.getFeatured().then(function(response){
  //     console.log(response.data);
  //     $scope.bordios.push(response.data.projects);
  //     console.log($scope.bordios);
  //   });
  // }
  $scope.getDribbleShotsThisWeek = function(){
    bordioApi.getDribbbleShots().then(function(response){
      console.log(response.data);
      var dribbble = response.data.data;
      $scope.shots = dribbble;
      console.log($scope.shots);
    })
  }

  $scope.getDribbleGifsThisWeek = function(){
    bordioApi.getDribbbleGifs().then(function(response){
      console.log(response.data);
      var dribbble = response.data.data;
      $scope.gifs = dribbble;
    })
  }

  $scope.getDribbleShotsThisWeek();

}]);
