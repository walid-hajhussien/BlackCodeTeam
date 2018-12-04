angular.module('app').component('header', {

  controller: function() {

  },

  bindings: {},


  template: `

  <ul id="ul2">
    <li class="li2"><a class="active" href="#!/home">Home</a></li>
    <li class="li2"><a href="">Profile</a></li>
    <li class="li2"><a href="#!/aboutus">About</a></li>
    <li class="li2"><a href="#!/contact">Contact</a></li>
    <li id="logout" class="li2" ng-click=""><a href="#!/login">logout</a></li>
  </ul>

`

})
