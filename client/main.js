var app = angular.module('app', ['ngRoute', 'ngAnimate'])

app.config(['$routeProvider', function($routeProvider) {
  //NOTE: the below its the route tools
  $routeProvider
    .when('/login', {
      template: '<login></login>'
    })
    .when('/signup', {
      template: '<signup></signup>'
    })
    .when('/home', {
      template: '<home></home>'
    })
    .when('/aboutus', {
      template: '<aboutus></aboutus>'
    })
    .when('/contact', {
      template: '<contact></contact>'
    })
    .when('/userprofile', {
      template: '<userprofile></userprofile>'
    })
    .when('/mainpage', {
      template: '<mainpage></mainpage>'
    })
    .when('/monitorscreen', {
      template: '<monitorscreen></monitorscreen>'
    })
    .otherwise({
      redirectTo: '/mainpage'
    })

}])

//NOTE : the below will be run after run the app
app.run(['$rootScope', '$location', 'PermissionsService', 'checksession', function($rootScope, $location, PermissionsService, checksession) {

  $rootScope.$on("$routeChangeStart", function(event, next, current) {
    if (next.template === "<login></login>") {
      checksession.set(function(data) {
        if (data.data == '0' || data.data == '3') {

        } else {
          PermissionsService.setPermission('home', true)
          $location.path('/home');
        }
      })

    } else if (next.template === "<home></home>") {
      if (!PermissionsService.getPermission('home')) {
        $location.path('/');
      }
      PermissionsService.setPermission('home', false);

    } else if (next.template === "<aboutus></aboutus>") {
      if (!PermissionsService.getPermission('aboutus')) {
        $location.path('/');
      }
      PermissionsService.setPermission('aboutus', false);

    } else if (next.template === "<contact></contact>") {
      if (!PermissionsService.getPermission('contact')) {
        $location.path('/');
      }
      PermissionsService.setPermission('contact', false);
    } else if (next.template === "<userprofile></userprofile>") {
      if (!PermissionsService.getPermission('userprofile')) {
        $location.path('/');
      }
      PermissionsService.setPermission('userprofile', false);
    } else if (next.template === "<monitorscreen></monitorscreen>") {
      if (!PermissionsService.getPermission('monitorscreen')) {
        $location.path('/');
      }
      PermissionsService.setPermission('monitorscreen', false);
    }
  });


}])
