angular.module('app').component('monitorscreen', {
  controller: function (retriveuser,deleteip) {

//NOTE : get the current users
this.getcurrent=function(){
  that=this
  retriveuser.set(function(data){
    console.log(data)
    that.users=data.data
  })
}

this.getcurrent();

//NOTE : delete the session
    this.deleteBtn = (user) => {
      that=this
        deleteip.set(user,function(data){
          if(data.data==1){
              swal("Deleted!", "the user has been Deleted!", "success");
              var deletedPost = that.users.indexOf(user);
              that.users.splice(deletedPost, 1);
          }
        })

    }

    // the users information from users table
    this.users = [];

  },

  bindings: {},
  template: `
  <header></header>
  <div class="container">
  <div class="row justify-content-center">
  <div class="col-9 col-md-10 col-lg-9">
    <form class="card card-sm">
      <div class="card-body row no-gutters align-items-center">
        <div class="col-auto">
          <i class="fa fa-search h4 text-body"></i>
        </div>
        <!--end of col-->
        <div class="col">
          <input class="form-control form-control-lg form-control-borderless" type="search" placeholder="Search for user" ng-model="search">
        </div>
        <!--end of col-->
        <div class="col-auto">
          <button class="btn btn-lg btn-success" type="submit">Search</button>
        </div>
        <!--end of col-->
      </div>
    </form>
  </div>
  <!--end of col-->
  </div>
    <table class="table">
      <table class="table table-hover table-dark">
        <thead>
          <tr class="bg-success">
            <th scope="col">#ID</th>
            <th scope="col" >username</th>
            <th scope="col">SID</th>
            <th scope="col">IP</th>
            <th scope="col">Delete user</th>
          </tr>
        </thead>
          <tbody ng-repeat="(key, user) in $ctrl.users | orderBy:'id' | filter:search track by $index">
            <tr>
              <th scope="row"> {{user.userid}}</th>
              <td>{{user.username}}</td>
              <td>{{user.sid}}</td>
              <td>{{user.ip}}</td>
              <td><p align="center"><button type="button" class="btn btn-success fa fa-trash userprofileBtn" ng-click="$ctrl.deleteBtn(user)"></button><p></td>
            </tr>
          </tbody>
          </div>
      </table>
    </table>
  </div>
`

})
