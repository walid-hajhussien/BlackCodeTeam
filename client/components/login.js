angular.module('app').component('login', {
  controller: function (check, $http, $scope) {



    this.loginData = function (login) {
      var loginInfo = {
        username: login.username,
        password: login.password
      }

      login.username = "";
      login.password = "";
      var that = this;

      check.set(loginInfo, function (data) {
        console.log(data);
        if (data.data == '0' || data.data == '2') {
          that.wrongpassword = true;
        } else {
          that.wrongpassword = false;
          that.success = true;
        }
      })



    }

    // NOTE: variable
    this.success = false;
    this.wrongpassword = false;

  },
  bindings: {},
  template: `
    <section class="login-block" ng-show="!$ctrl.success">
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
                    </br></br></br>
                    <p style="color :red;font-family:Comic Sans MS" ng-show="$ctrl.wrongpassword">Wrong UserName or Password  </p>
                </div>
                <div class="col-md-8 banner-sec">
                </div>
              </div>
            </div>
          </section>


          <section class="login-block" ng-show="$ctrl.success">
            <div class="containerLogin">
              <div class="row">
                <div class="col-md-4 login-sec">
                  <h2 class="text-center" style="color:green">Login Successfull</h2>
                        <button class="btn btn-success btn-lg buttonEnter">Enter</button>
                      </div>
                      <div class="col-md-8 banner-sec">
                      </div>
                    </div>
                  </div>
                </section>
  `
})