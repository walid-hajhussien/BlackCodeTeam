angular.module('app').service('checksession', function($http, $window) {
this.set=function(cb){

  $http({
    method: 'GET',
    url: 'https://jood.herokuapp.com/user/checkSession'
  }).then(function successCallback(response) {
    cb(response)
    }, function errorCallback(response) {
      cb(response)
    });


}

})
