angular.module('app').component('login', {
  controller: function(check, $http, $scope, PermissionsService, $location, $window) {


    //NOTE : login function

    this.loginData = function(login) {
      var loginInfo = {
        username: login.username,
        password: login.password
      }

      //using sweat alert
      var that = this;
      var getip = function(cb) {
        const ipAPI = 'https://api.ipify.org?format=json'

        swal.queue([{
          title: 'Public IP',
          confirmButtonText: 'Get my public IP',
          text: 'Your public IP is Requered to Login ',
          showLoaderOnConfirm: true,
          preConfirm: () => {
            return fetch(ipAPI)
              .then(response => response.json())
              .then(data1 => {
                return swal.queue([{
                  confirmButtonText: 'ok',
                  title: 'Your public IP ' + data1.ip,
                  preConfirm: () => {
                    login.username = "";
                    login.password = "";
                    loginInfo.ip = data1.ip;

                    // sent the information to the server
                    check.set(loginInfo, function(data) {
                      console.log(data);
                      if (data.data == '0' || data.data == '2') {
                        that.wrongpassword = true;
                      } else {
                        console.log('server data', data);
                        that.wrongpassword = false;
                        that.success = true;

                        // $window.currentuser=data.data;
                        PermissionsService.setPermission('home', true)
                        $window.location.href = '#!/home';
                        //$route.reload();

                      }
                    })

                  }

                }])
              })

              .catch(() => {
                swal.insertQueueStep({
                  type: 'error',
                  title: 'Unable to get your public IP'
                })
              })
          }
        }])



      }

      getip();

    }


    // NOTE: variable
    this.success = false;
    this.wrongpassword = false;


    this.changeUrl = function() {
      PermissionsService.setPermission('signup', true)
    }

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
                  <a href="#!/signup"><button class="btn btn-login float-right" ng-click="$ctrl.changeUrl()">SignUp</button></a>
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
                        <a href="#!/home"><button class="btn btn-success btn-lg buttonEnter" ng-click="$ctrl.go()">Enter</button></a>
                      </div>
                      <div class="col-md-8 banner-sec">
                      </div>
                    </div>
                  </div>
                </section>
  `
})