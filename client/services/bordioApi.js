var api = angular.module('bordioApiFactory', []);
api.factory('bordioApi', ['$http', function($http){

  var behanceUrl = 'http://www.behance.net/v2/projects?';
  var bSort = '&sort=featured_date&time=week';

  var dribbbleUrl = 'https://api.dribbble.com/v1/shots?';
  var dTimeWeek = '&timeframe=week';
  var dListGif = '&list=animated'
  var dToken = D_API_TOKEN;
  var dPage = dPage || 1;
  var dPerPage = dPerPage || 21;
  var dCallback = '&callback=JSON_CALLBACK'
  var bordioInterface = {};

  bordioInterface.getDribbbleShots = function(page, limit){
    var page = page || 1;
    var limit = limit || 21;
    return $http.jsonp(dribbbleUrl + dTimeWeek + dToken + '&page=' + page + '&per_page=' + limit + dCallback );
  }

  bordioInterface.getDribbbleGifs = function(page, limit){
    var page = page || 1;
    var limit = limit || 21;
    return $http.jsonp(dribbbleUrl + dTimeWeek + dListGif + dToken + "&page=" + page + "&per_page=" + limit + dCallback);
  }


  return bordioInterface;
}]);
