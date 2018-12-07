angular.module('app').component('monitorscreen', {
  controller: function (retriveuser) {



    this.sweetalertClick = function (user) {
      swal("Deleted!", "the user has been Deleted!", "success");
    }

    this.deleteBtn = (user) => {

      this.sweetalertClick();
      var deletedPost = this.users.indexOf(user);
      this.users.splice(deletedPost, 1);


    }

    // the users information from users table
    this.users = [{
      id: 1,
      ip: '12.545.87.98',
      sid: 'fdsfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdf',
      userid: 1,
      username: 'ozil'
    }, {
      id: 2,
      ip: '12,545,87,98',
      sid: 'jhkjhkjhkj',
      userid: 1,
      username: 'ahmad'
    }]

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
              <th scope="row"> {{user.id}}</th>
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