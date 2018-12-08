angular.module('app').component('mainpage', {

  controller: function() {

    this.mainpage = function() {

    }


  },

  bindings: {},

  template: `
  <div class="mainpage">
  <h3 id="quote">You must be the change you wish to see in the world</h3>
  <button type="submit" class="btn btn-default loginsubmit"><i class="fa fa-paper-plane" aria-hidden="true"></i> Login</button>
  <button type="submit" class="btn btn-default signupsubmit"><i class="fa fa-paper-plane" aria-hidden="true"></i> Sign Up</button>

  </div>

`
})