angular.module('app').component('userprofile', {


  controller: function () {

    this.colorX = 'green'
    this.activatBtn = function (post) {

      console.log(post);
      post.status = !post.status;
      if (post.status) {
        post.btnName = 'deactivat';
        post.colorX = 'green';
      } else {
        post.btnName = 'activate';
        post.colorX = 'red';
      }
    }



    this.category = {
      0: 'furniture',
      1: 'electronic',
      2: 'forkids',
      3: 'give a hand',
      4: 'clothes',
      5: 'food',
      6: 'book'
    }

    this.color = {
      0: '#FFD700',
      1: '#2E8B57',
      2: '#CCCC00',
      3: '#DC143C',
      4: '#FFB6C1',
      5: '#800000',
      6: '#800080'
    }

    this.image = {
      0: 'image/furniture-logo.jpg',
      1: 'image/electronics.jpg',
      2: 'image/forkids.jpg',
      3: 'image/give a hand.jpg',
      4: 'image/somthing to wear.jpg',
      5: 'image/somthing to eat.png',
      6: 'image/reading for everyone.jpg'
    }

    this.posts = [{
      image: 0,
      color: 0,
      category: 0,
      title: 'Book Avilabe live alone',
      description: 'Similarly, create split button dropdowns with virtually',
      username: 'Ahmed',
      phone: '0781501502',
      condition: 'good',
      availablity: 3,
      contactInfo: 04754564654,
      btnName: 'deactivat',
      status: true,
      date: '17/11/2018'
    }, {
      image: 6,
      color: 6,
      category: 6,
      title: 'alone',
      description: 'Similarly, create split button dropdowns with virtually',
      username: 'Ahmed',
      phone: '0781501502',
      condition: 'good',
      availablity: 3,
      btnName: 'deactivat',
      status: true,
      date: '14/9/2018'
    }, {
      image: 1,
      color: 1,
      category: 1,
      title: 'fork',
      description: 'Similarly, create split button dropdowns with virtually',
      username: 'Ahmed',
      phone: '0781501502',
      condition: 'good',
      availablity: 3,
      btnName: 'deactivat',
      status: true,
      date: '15/10/2018'
    }, {
      image: 5,
      color: 5,
      category: 5,
      title: 'fork',
      description: 'Similarly, create split button dropdowns with virtually',
      username: 'Ahmed',
      phone: '0781501502',
      condition: 'good',
      availablity: 3,
      btnName: 'deactivat',
      status: true,
      date: '16/11/2018'
    }];

    this.deleteBtn = (post) => {
      console.log(this.posts);

      var deletedPost = this.posts.indexOf(post);
      this.posts.splice(deletedPost, 1);

    }

  },
  bindings: {},
  template: `
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
      <div class="col-xs-20 col-sm-offset-20 col-sm-10" >
        <ul>
          <li ng-repeat="post in $ctrl.posts | orderBy:'-date' | filter:search">
            <div class="post" style="border: 5px solid {{$ctrl.color[post.color]}}">
              <div class="post-img-content">
                <p align="center"><img ng-src={{$ctrl.image[post.image]}} class="img-responsive" /></p>
              </div>
              <div class="content">
                <div>
                  <p>{{post.description}}  <span style ="float:right">{{post.date}}</span> </p>

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
                            <td>{{$ctrl.category[post.category]}}</td>
                            <td>{{post.username}}</td>
                          </tr>
                        </tbody>
                        <thead>
                          <tr>
                            <th scope="col">phone</th>
                            <th scope="col">condition</th>
                            <th scope="col">availablity</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>{{post.phone}}</td>
                            <td>{{post.condition}}</td>
                            <td>{{post.availablity}} day </td>
                          </tr>
                        </tbody>
                        <thead>
                          <tr>
                            <th scope="col">{{post.btnName}}</th>
                            <th scope="col">Delete</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                            <button type="button" class="btn btn-info fa fa-check userprofileBtn" ng-click="$ctrl.activatBtn(post)" ng-show="!post.status"><i class="glyphicon glyphicon-ok"></i></button>
                            <button type="button" class="btn btn-warning fa fa-remove userprofileBtn" ng-click="$ctrl.activatBtn(post)" ng-show="post.status"><i class="glyphicon glyphicon-remove"></i></button>
                            <button type="button" class="btn btn-danger fa fa-trash userprofileBtn" ng-click="$ctrl.deleteBtn(post)"><i class="fas fa-trash-alt"></i></button>
                            </td>
                            <td></td>
                          </tr>
                        </tbody>
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