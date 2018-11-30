angular.module('app').component('signup', {
  controller:function(){

    this.signup=function(input){
        var newInput ={
        firstName : input.firstName,
        lastName : input.lastName,
        username : input.username,
        username : input.phoneNumber,
        username : input.email,
        password : input.password,
        available : true
      }
      console.log("our new input" , newInput)

    }
  },

  bindings: {},
  template : `
  <div class="panel"
     <h2>Sign Up Page</h2>
     <p>Please enter your Information</p>
  </div>
  <div class="login-form">
  <div class="main-div">
    <form id="Login" ng-submit = "$ctrl.signup(newMember)">
    <div class="form-group">
      <input class="form-control type="text" placeholder="enter your First name" ng-model="newMember.firstName"/></br>
      <input class="form-control type="text" placeholder="enter your Last name" ng-model="newMember.lastName"/></br>
      <input class="form-control type="text" placeholder="enter your User name" ng-model="newMember.userName"/></br>
      <input class="form-control type="number" placeholder="enter your Phone number" ng-model="newMember.phoneNumber"/></br>
      <input class="form-control" id="inputEmail" type="email" placeholder="enter your  Email" ng-model="newMember.email"/></br>
      <input class="form-control" id="inputPassword" type="password" placeholder="enter your Password" ng-model="newMember.password"/></br>
      <input class="btn btn-primary" ng-click="submit = true" type="submit" value="Sign Up"/>
      </div>
      </form>
    <p ng-show="submit">Registered Successfully</p>
  </div>
  </div>
`
})
