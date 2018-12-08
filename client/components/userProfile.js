angular.module('app').component('userprofile', {

  // sweet alert message
  controller: function($window,checksession, userprofile,updatestatus,deletepost) {
    //get current user function
    this.getuser = function() {
      that = this

      checksession.set(function(data) {
        if (data.data != '0') {
          that.user = data.data
          that.retrivepostsbyid()
          console.log(that.user);
        } else {
          Swal.queue([{
            type: 'error',
            title: 'Oops...',
            text: 'Your session has been End!',
            preConfirm: () => {
              $window.location.href = '#!/login';
            }

          }])

        }
      })
    }
    this.getuser();

    this.user;

    // NOTE: take the indexOf of the post you want deleted then splice it
    this.deleteBtn = (post) => {
      if (post.status) {
        swal("warning!", "You should Deactivat the Post first!", "warning");
      } else {
      var that=this
        deletepost.set(post,function(data){
          if(data.data==1){
            swal("Deleted!", "Your post is Deleted!", "success");
            var deletedPost = that.posts.indexOf(post);
            that.posts.splice(deletedPost, 1);

          }else{

          }

        })


      }
    }





    this.activatBtn = function(post) {
      console.log(post);
        post.status = (post.status==0) ? 1:0;
        that=this
          console.log('pp',post);
        updatestatus.set(post,function(data){
            console.log('status',data);
          if(data.data==1){

            if (post.status) {
              post.btnName = 'deactivat';
            } else {
              post.btnName = 'activate';
            }
          }else{

          }
        })
}


    // retriveposts

    this.retrivepostsbyid = function() {
      var userid = this.user[0]
      that = this
      userprofile.set(userid, function(data) {
        that.posts = data.data
        console.log('data', data.data);


      })
    }


    // NOTE: posts category
    this.category = {
      0: 'furniture',
      1: 'electronic',
      2: 'forkids',
      3: 'give a hand',
      4: 'clothes',
      5: 'food',
      6: 'book'
    }
    // NOTE: posts colors
    this.color = {
      0: '#FFD700',
      1: '#2E8B57',
      2: '#CCCC00',
      3: '#DC143C',
      4: '#FFB6C1',
      5: '#800000',
      6: '#800080'
    }
    // NOTE: post image
    this.image = {
      0: 'image/furniture-logo.jpg',
      1: 'image/electronics.jpg',
      2: 'image/forkids.jpg',
      3: 'image/give a hand.jpg',
      4: 'image/somthing to wear.jpg',
      5: 'image/somthing to eat.png',
      6: 'image/reading for everyone.jpg'
    }


    // NOTE: all user posts
    this.posts = [];


  },
  bindings: {},
  template: `
<header></header>
  <section class="userProfileSection">
    <div class="container">
      <div id="custom-search-input">
        <div class="input-group ">
          <input type="text" class="  search-query form-control" placeholder="Search" ng-model="search" />
          <span class="input-group-btn">
            <button class="btn btn-danger" type="button">
              <span class=" fa fa-search"></span>
            </button>
          </span>
        </div>
        <div class="row">
          <div class="col-xs-20 col-sm-offset-20 col-sm-10">

          <br>
          <div class="process">
            <div class="process-row">
              <div class="process-step">
                <button type="button" class="btn btn-info fa fa-sort" ng-click="order = 'category'"></button>
                <h6>Sort by category</h6>
              </div>
              <div class="process-step">
                <button type="button" class="btn btn-danger fa fa-sort" ng-click="order = 'availability'"></button>
                <h6>Sort by availability</h6>
              </div>
              <div class="process-step">
                <button type="button" class="btn btn-warning fa fa-calendar" ng-click="order = 'date'"></button>
                <h6>Sort by date</h6>
              </div>
            </div>
          </div>
            <ul>
              <li ng-repeat="(key ,post) in $ctrl.posts | orderBy:'-date' | filter:search | orderBy:order">
                <div class="post" style="border: 5px solid {{$ctrl.color[post.color]}}">
                  <div class="post-img-content">
                    <p align="center"><img ng-src={{$ctrl.image[post.image]}} class="img-responsive" /></p>
                  </div>
                  <div class="content">
                    <div>
                      <p style="font-weight: bold">{{post.description}} <span style="float:right;color:lawngreen;">Date :{{post.date}}</span> </p>

                      <table class="table">
                        <thead>
                          <tr>
                            <th scope="col">username</th>
                            <th scope="col">category</th>
                            <th scope="col">title</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>{{post.username}}</td>
                            <td style="color:">{{$ctrl.category[post.category]}}</td>
                            <td>{{post.title}}</td>
                          </tr>
                        </tbody>
                        <thead>
                          <tr>
                            <th scope="col">phone</th>
                            <th scope="col">condition</th>
                            <th scope="col">availability</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>{{post.phone}}</td>
                            <td>{{post.cond}}</td>
                            <td>{{post.availablity}} day </td>
                          </tr>
                        </tbody>
                        <thead><th></th></thead>
                        <thead>
                          <tr>
                            <thead>
                              <th>{{post.btnName}}</th>
                              <th> Delete </th>
                              <th> Update </th>
                            </thead>
                        <tbody>
                          <tr>
                            <td>
                              <button type="button" class="btn btn-info fa fa-check userprofileBtn" ng-click="$ctrl.activatBtn(post)" ng-show="!post.status"><i class="glyphicon glyphicon-ok"></i></button>
                              <button type="button" class="btn btn-dark fa fa-remove userprofileBtn" ng-click="$ctrl.activatBtn(post)" ng-show="post.status"><i class="glyphicon glyphicon-remove"></i></button>
                            </td>
                            <td>
                              <button type="button" class="btn btn-danger fa fa-trash userprofileBtn" ng-click="$ctrl.deleteBtn(post)"></button>
                            </td>
                            <td>
                            <button type="button" class="btn btn-primary fa fa-edit userprofileBtn"></button>
                            </td>
                          </tr>
                        </tbody>
                        </tr>
                        </thead>
                      </table>
                    </div>
                    <br>
                  </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
  </section>`
})
