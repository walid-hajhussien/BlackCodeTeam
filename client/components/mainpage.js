angular.module('app').component('mainpage', {

  controller: function() {

    this.mainpage = function() {

    }


  },

  bindings: {},

  template: `
  <div class="mainpage">
  <h3 id="quote">You must be the change you wish to see in the world</h3>
  <a href="#!/login"><button type="submit" class="btn btn-default loginsubmit"><i class="fa fa-paper-plane" aria-hidden="true"></i> Login</button></a>
  <a href="#!/signup"><button type="submit" class="btn btn-default signupsubmit"><i class="fa fa-paper-plane" aria-hidden="true"></i> Sign Up</button>

  </div>

`
})