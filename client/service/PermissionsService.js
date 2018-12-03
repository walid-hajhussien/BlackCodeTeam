angular.module('app').service('PermissionsService', function() {

  var permissions = {
    signup: false
  };

  this.setPermission = function(permission, value) {
    permissions[permission] = value;
  }

  this.getPermission = function(permission) {
    return permissions[permission] || false;
  }



})
