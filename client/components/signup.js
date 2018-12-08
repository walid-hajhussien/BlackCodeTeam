angular.module('app').component('signup', {


  controller: function(signup, $location, $window) {


    this.signup = function(input) {
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

      signup.set(newInput, function(data) {
        if (data.data == '1') {
          Swal.queue([{
            type: 'success',
            title: 'you have successfully registered',
            preConfirm: () => {
              $window.location.href = '#!/login';
            }

          }])


          that.alreadyuser = false
        } else {
          that.alreadyuser = true
        }
      })


    }

    //NOTE : variable


    this.alreadyuser = false;
  },

  bindings: {},
  template: `
 <section class="signupform" >
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
   <a href="#!/login"><i style="color:green;cursor: pointer" class="fa  fa-backward fa-fw"></i></a>


 </div>
 </div>
 </div>
</section>

`
})
