angular.module('app').service('deletesession', function($http, $window) {
this.set=function(cb){

  $http({
    method: 'GET',
    url: 'https://jood.herokuapp.com/user/deletesession'
  }).then(function successCallback(response) {
    cb(response)
    }, function errorCallback(response) {
      cb(response)
    });


}

})
