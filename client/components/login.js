angular.module('app').component('login', {
  controller:function(){
    this.loginData = function(login){
      var loginInfo = {
        username: login.usernamer,
        password: login.password
      }
      console.log("Login Info Was Saved " + "Username: " + login.username + " " + "Password: " + login.password)
      login.username = "";
      login.password = "";
    }

  },
  bindings: {},
  template:`
    <section class="login-block">
      <div class="containerLogin">
        <div class="row">
          <div class="col-md-4 login-sec">
            <h2 class="text-center">Login Now</h2>
            <form class="login-form" ng-submit="$ctrl.loginData(login)">
              <div class="form-group">
                <label for="exampleInputEmail1" class="text-uppercase">Username</label>
                <input type="text" class="form-control" ng-model="login.username">
                </div>

                <div class="form-group">
                  <label for="exampleInputPassword1" class="text-uppercase">Password</label>
                  <input type="password" class="form-control" ng-model="login.password">
                  </div>
                  <div class="form-check">
                      <button type="submit" class="btn btn-login float-left">Submit</button>
                    </div>
                  </form>
                  <button class="btn btn-login float-right">SignUp</button>
                </div>
                <div class="col-md-8 banner-sec">
                </div>
              </div>
            </div>
          </section>
  `
})
