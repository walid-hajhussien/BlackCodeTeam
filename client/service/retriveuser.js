angular.module('app').service('retriveuser', function ($http, $window) {
  this.set = function (cb) {

    $http({
      method: 'GET',
      url: 'https://jood.herokuapp.com/user/retriveuser'
    }).then(function successCallback(response) {
      cb(response)
    }, function errorCallback(response) {
      cb(response)
    });
  }
})
