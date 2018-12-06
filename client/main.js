var app = angular.module('app', ['ngRoute'])

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
    .otherwise({
      redirectTo: '/login'
    })

}])

//NOTE : the below will be run after run the app
app.run(['$rootScope', '$location', 'PermissionsService','checksession', function($rootScope, $location, PermissionsService,checksession) {

  $rootScope.$on("$routeChangeStart", function(event, next, current) {
    if (next.template === "<login></login>") {
        checksession.set(function(data){
          if(data.data=='0'||data.data=='3'){

          }else{
            PermissionsService.setPermission('home', true)
            $location.path('/home');
          }
        })

    } else if (next.template === "<home></home>") {
      if (!PermissionsService.getPermission('home')) {
        $location.path('/');
      }
      PermissionsService.setPermission('home', false);

    }else if (next.template === "<aboutus></aboutus>") {
      if (!PermissionsService.getPermission('aboutus')) {
        $location.path('/');
      }
      PermissionsService.setPermission('aboutus', false);

    }else if (next.template === "<contact></contact>") {
      if (!PermissionsService.getPermission('contact')) {
        $location.path('/');
      }
      PermissionsService.setPermission('contact', false);
    }
  });


}])
