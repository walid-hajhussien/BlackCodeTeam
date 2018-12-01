angular.module('app').component('signup', {
  controller: function() {

    this.signup = function(input) {
      var newInput = {
        firstName: input.firstName,
        lastName: input.lastName,
        username: input.phoneNumber,
        username: input.email,
        username: input.username,
        password: input.password,
        available: true
      }

      console.log("our new input", newInput)

    }
  },

  bindings: {},
  template: `
  <section class="signupform">
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
    <p ng-show="submit">Registered Successfully</p>
  </div>
  </div>
  </div>
 </section>
`
})