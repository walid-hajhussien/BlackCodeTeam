angular.module('app').component('signup', {
  controller:function(){

    this.signup=function(newMember){
      {
        firstName : $ctrl.newMember.firstName,
        lastName : $ctrl.newMember.lastName,
        username : $ctrl.newMember.username,
        username : $ctrl.newMember.phoneNumber,
        username : $ctrl.newMember.email,
        password : $ctrl.newMember.password,
        available : true
      }
      console.log("hiii",newMember)

    }
  },
  bindings: {},
  template : `
  <div>
    <form ng-submit = "singup()">
      <input type="text" placeholder="enter your First name" ng-model="newMember.firstName"/></br>
        <h3>{{newMember.firstName}}</h3>
      <input type="text" placeholder="enter your Last name" ng-model="newMember.lastName"/></br>
      <input type="text" placeholder="enter your User name" ng-model="newMember.userName"/></br>
      <input type="number" placeholder="enter your Phone number" ng-model="newMember.phoneNumber"/></br>
      <input type="email" placeholder="enter your  Email" ng-model="newMember.email"/></br>
      <input type="password" placeholder="enter your Password" ng-model="newMember.password"/></br>
      <h3>{{newMember.firstName}}</h3>
      <input type="submit" value="Register"/>
    </form>
    <ul>
      <li ng-repeat ='user in usersInfo'><h3>{{$ctrl.user.firstName}}</h3></li>
    </ul>

  </div>


`
})
