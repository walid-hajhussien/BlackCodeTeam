angular.module('app').service('PermissionsService', function() {

  var permissions = {
    login:false,
    signup: false,
    home:false,
    aboutus:false,
    contact:false,
    userprofile:false,
    monitorscreen:false

  };

  this.setPermission = function(permission, value) {
    permissions[permission] = value;
  }

  this.getPermission = function(permission) {
    return permissions[permission] || false;
  }



})
