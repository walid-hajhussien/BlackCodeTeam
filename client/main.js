var app = angular.module('app', ['ngRoute'])

 app.config(['$routeProvider',function($routeProvider){
   //NOTE: the below its the route tools
$routeProvider
.when('/login',{
  template :'<login></login>'
})
.when('/signup',{
  template :'<signup></signup>'
})
.when('/home',{
  template :'<home></home>'
})
.when('/aboutus',{
  template :'<aboutus></aboutus>'
})
.when('/contact',{
  template :'<contact></contact>'
})
.otherwise({
  redirectTo:'/login'
})

}])

//NOTE : the below will be run after run the app
app.run(['$rootScope', '$location', 'PermissionsService',function($rootScope, $location, PermissionsService){

  $rootScope.$on("$routeChangeStart", function(event, next, current) {
     if (next.template === "<signup></signup>") {
       if(!PermissionsService.getPermission('signup')) {
         $location.path('/');
       }
       PermissionsService.setPermission('signup', false);
     }else if(next.template === "<login></login>"){

     }
   });


}])
