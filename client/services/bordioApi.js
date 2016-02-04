var api = angular.module('bordioApiFactory', []);
api.factory('bordioApi', ['$http', function($http){

  var baseUrl = 'http://www.behance.net/v2/projects?';
  var token = 'client_id=NIddlnGhxe8Zwve1ls5QjxBN4rHFCYzK';
  var sort = '&sort=featured_date&time=week';
  var bordioInterface = {};


  bordioInterface.getFeatured = function(){
    return $http.jsonp('http://www.behance.net/v2/projects?client_id=NIddlnGhxe8Zwve1ls5QjxBN4rHFCYzK&sort=featured_date&time=week&callback=JSON_CALLBACK');
  }

  bordioInterface.getDribbble = function(){
    return $http.jsonp('https://api.dribbble.com/v1/user?access_token=bf4fc74b1a77b1fa15e78f778a7040b88bee4d3b53fa96cd00c62a8dcba42688&callback=JSON_CALLBACK');
  }

  bordioInterface.getDribbbleShots = function(){
    return $http.jsonp('https://api.dribbble.com/v1/shots?timeframe=week&access_token=bf4fc74b1a77b1fa15e78f778a7040b88bee4d3b53fa96cd00c62a8dcba42688&page=1&per_page=21&callback=JSON_CALLBACK');
  }

  bordioInterface.getDribbbleGifs = function(){
    return $http.jsonp('https://api.dribbble.com/v1/shots?timeframe=week&list=animated&access_token=bf4fc74b1a77b1fa15e78f778a7040b88bee4d3b53fa96cd00c62a8dcba42688&page=1&per_page=21&callback=JSON_CALLBACK');
  }


  return bordioInterface;
}]);
