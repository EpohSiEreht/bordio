var ctrl = angular.module('bordioController', []);

ctrl.controller('bordio', ['$scope', 'bordioApi', function($scope, bordioApi){

  $scope.shots = [];
  $scope.gifs = [];

  $scope.page = 1;
  $scope.limit = 21;

  $scope.getAll = function(){
    bordioApi.getFeatured().then(function(response){
      console.log(response.data);
      $scope.bordios.push(response.data.projects);
      console.log($scope.bordios);
    });
  }
  $scope.loadMore = function(){
    bordioApi.getDribbbleShots($scope.page, $scope.limit).then(function(response){
      console.log(response.data);
      var dribbble = response.data;
      $scope.shots = $scope.shots.concat(dribbble);
      $scope.page += 1;
      console.log(dribbble);
    })
  }

  // $scope.loadMoreGifs = function(){
  //   bordioApi.getDribbbleGifs($scope.page, $scope.limit).then(function(response){
  //     console.log(response.data);
  //     var dribbble = response.data.data;
  //     $scope.gifs = $scope.shots.concat(dribbble);
  //     $scope.page += 1;
  //   })
  // }

  $scope.loadMore();

}]);

ctrl.directive('whenScrolled', function() {
    return function(scope, elm, attr) {
        var raw = elm[0];

        elm.bind('scroll', function() {
            if (raw.scrollTop + raw.offsetHeight >= raw.scrollHeight) {
                scope.$apply(attr.whenScrolled);
            }
        });
    };
});
