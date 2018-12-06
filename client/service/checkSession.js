angular.module('app').service('checksession', function($http, $window) {
this.set=function(cb){

  $http({
    method: 'GET',
    url: 'http://127.0.0.1:4000/user/checkSession'
  }).then(function successCallback(response) {
    cb(response)
    }, function errorCallback(response) {
      cb(response)
    });


}

})
