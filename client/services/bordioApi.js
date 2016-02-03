var api = angular.module('bordioApiFactory', []);

api.factory('bordioApi', ['$http', function($http){

  var baseUrl = 'https://api.dribbble.com/v1/shots/popular?callback=JSON_CALLBACK';
  var token = 'access_token=bf4fc74b1a77b1fa15e78f778a7040b88bee4d3b53fa96cd00c62a8dcba42688';

  var bordioInterface = {};

  bordioInterface.getShots = function(){
    return $http.get(baseUrl + token);
  }

  return bordioInterface;
}]);
