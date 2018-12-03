angular.module('app').component('userprofile', {


  controller: function () {
    this.posts = [{
      image: 'it is photo',
      description: 'it is a good item',
      condition: 'good',
      availablity: '5 days',
      category: 'books',
      username: 'ghadeer',
      contactInfo: 04754564654,
      status: true
    }, {
      image: 'it is photo',
      description: 'it is a good item',
      condition: 'good',
      availablity: '6 days',
      category: 'books',
      username: 'ghadeer',
      contactInfo: 04754564654,
      status: true
    }];

    var that = this;

    this.status = function () {
      var btnName = '';
    }


  },
  bindings: {},
  template: `<div>
    <h1>UserProfile</h1>
    <input type="text" placeholder="Search" ng-model="seach">
    <ul>
      <li ng-repeat="post in $ctrl.posts | filter:search">
        <h3>{{post.image}} <br> - {{post.description}} <br> - {{post.condition}} - <br>{{post.availablity}} - <br>{{post.category}} - <br>{{post.username}} <br> - {{post.contactInfo}} <br> -
          {{post.status}} </h3>
        <button name="activate" ng-click="">here</button>
      </li>
    </ul>
  </div>`
})