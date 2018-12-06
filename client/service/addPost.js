angular.module('app').service('addpost', function($http, $window) {
  this.set = function(data, cb) {

    $http({
      method: 'POST',
      url: 'https://jood.herokuapp.com/user/addpost',
      contentType: "application/json",
      data: JSON.stringify(data)
    }).then(function successCallback(response) {
      cb(response)
    }, function errorCallback(response) {
      cb(response)
    });
  }
})
