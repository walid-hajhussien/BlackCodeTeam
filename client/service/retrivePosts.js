angular.module('app').service('retriveposts', function($http, $window) {
this.set=function(cb){

  $http({
    method: 'GET',
    // url: 'http://127.0.0.1:5000/data'
    url: 'http://127.0.0.1:4000/user/retriveposts'
  }).then(function successCallback(response) {
    cb(response)
    }, function errorCallback(response) {
      cb(response)
    });


}

})
