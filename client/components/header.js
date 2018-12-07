angular.module('app').component('header', {

  controller: function($window,deletesession,PermissionsService) {
    // NOTE: veriable



    // NOTE: function :



    // for remove session
    this.removesession = function() {
      deletesession.set(function(data) {
        if (data.data == '1') {

          Swal.queue([{
            type: 'error',
            title: 'logged out',
            text: 'You have been successfully logged out!',
            preConfirm: () => {
              $window.location.href = '#!/mainpage';
            }

          }])

        }
      })


    }

// to give permission to the required page
this.givepermission=function(page){
    PermissionsService.setPermission(page, true)
    $window.location.href = '#!/'+page;
}



  },

  bindings: {},


  template: `

  <ul id="ul2">
    <li class="li2" ng-click="$ctrl.givepermission('home')"><a class="active" href="">Home</a></li>
    <li class="li2" ng-click="$ctrl.givepermission('userprofile')"><a href="">Profile</a></li>
    <li class="li2" ng-click="$ctrl.givepermission('aboutus')"><a href="">About</a></li>
    <li class="li2" ng-click="$ctrl.givepermission('contact')"><a href="">Contact</a></li>
    <li id="logout" class="li2" ng-click="$ctrl.removesession()"><a href="">logout</a></li>
  </ul>

`

})
