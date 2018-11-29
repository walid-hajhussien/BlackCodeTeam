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
  <form ng-submit="$ctrl.loginData(login)">
    <h1>Login</h1>
    <h6>Please Type Your Username and Password :</h6><br>
    <input type="text" placeholder="Username" ng-model="login.username"/><br><br>
    <input type="password" placeholder="Password" ng-model="login.password"/><br><br>
    <input type="submit" value="Login" />
  </form>
  `
})
