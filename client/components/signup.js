angular.module('app').component('signup', {

  controller: function (signup) {

    this.signup = function (input) {
      var newInput = {
        firstName: input.firstName,
        lastName: input.lastName,
        phoneNumber: input.phoneNumber,
        email: input.email,
        username: input.userName,
        password: input.password,
        available: true
      }
      input.firstName = "";
      input.lastName = "";
      input.phoneNumber = "";
      input.email = "";
      input.username = "";
      input.password = "";
      that = this

      signup.set(newInput, function (data) {
        if (data.data == '1') {
          that.success = true
          that.alreadyuser = false
        } else {
          that.alreadyuser = true
        }
      })


    }

    //NOTE : variable

    this.success = false;
    this.alreadyuser = false;
  },

  bindings: {},
  template: `
 <section class="signupform" ng-show="!$ctrl.success">
 <div class="container">
 <div class="signup-form">
 <div class="main-div">
   <form ng-submit = "$ctrl.signup(newMember)">
   <div class="form-group">
     <input class="form-control type="text" placeholder="First name please...." ng-model="newMember.firstName"/></br>
     <input class="form-control type="text" placeholder="Last name please...." ng-model="newMember.lastName"/></br>
     <input class="form-control type="number" placeholder="Phone number...." ng-model="newMember.phoneNumber"/></br>
     <input class="form-control" id="inputEmail" type="email" placeholder="Email ..." ng-model="newMember.email"/></br>
     <input class="form-control type="text" placeholder="User name...." ng-model="newMember.userName"/></br>
     <input class="form-control" id="inputPassword" type="password" placeholder="Password...." ng-model="newMember.password"/></br>
     <input class="btn btn-primary" ng-click="submit = true" type="submit" value="Sign Up"/>
     </div>
     </form>
   <p ng-show="$ctrl.alreadyuser">the user already Exist </p>
 </div>
 </div>
 </div>
</section>


<section class="login-block" ng-show="$ctrl.success">
  <div class="containerLogin">
    <div class="row">
      <div class="col-md-4 login-sec">
        <h2 class="text-center" style="color:green">Registered Successfull</h2>
              <button class="btn btn-success btn-lg buttonEnter">Enter</button>
            </div>
            <div class="col-md-8 banner-sec">
            </div>
          </div>
        </div>
      </section>

`
})