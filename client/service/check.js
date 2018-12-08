
angular.module('app').service('check', function($http, $window) {
  this.set = function(data, cb) {

    $http({
      method: 'POST',
      url: 'http://127.0.0.1:4000/user/login',
      contentType: "application/json",
      data: JSON.stringify(data)
    }).then(function successCallback(response) {
      cb(response)
    }, function errorCallback(response) {
      cb(response)
    });
  }
})
