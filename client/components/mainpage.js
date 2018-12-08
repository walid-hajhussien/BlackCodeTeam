angular.module('app').component('mainpage', {

  controller: function() {


    this.show = function() {
      Swal({
 customClass: 'swal-wide',
  html:`<video style="width:1000px;height:600px;" autoplay  loop id="myVideo"><source src="video/jood.mp4" type="video/mp4"></video>

  `,
  showCloseButton: false,
  showConfirmButton: false,

})
    }


  },

  bindings: {},

  template: `
  <div class="mainpage">
  <h3 ng-click="$ctrl.show()" id="quote">You must be the change you wish to see in the world</h3>
  <a href="#!/login"><button type="submit" class="btn  loginsubmit"><i class="fa fa-sign-in"></i> Login</button></a>
  <a href="#!/signup"><button type="submit" class="btn  signupsubmit"><i class="fa fa-user-plus"></i> Sign Up</button>
  </div>

`
})