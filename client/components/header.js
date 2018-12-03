angular.module('app').component('header', {

  controller: function() {

  },

  bindings: {},


  template: `

  <ul id="ul2">
    <li class="li2"><a class="active" href="#!/enter">Home</a></li>
    <li class="li2"><a href="">News</a></li>
    <li class="li2"><a href="">Contact</a></li>
    <li class="li2"><a href="#!/home">About</a></li>
    <li id="logout" class="li2" ng-click="go2()"><a href="#!/login">logout</a></li>
  </ul>

  <div class="card" style="width: 18rem; display: inline-block;">
  <img class="card-img-top" src="..." alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <p>Name</p>
    <a href="#" class="btn btn-primary">Show</a>
  </div>
</div>



<div class="card" style="width: 18rem;display: inline-block;">
<img class="card-img-top" src="..." alt="Card image cap">
<div class="card-body">
  <h5 class="card-title">Card title</h5>
  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  <p>Name</p>
  <a href="#" class="btn btn-primary">Show</a>
</div>
</div>

<div class="card" style="width: 18rem;display: inline-block;">
<img class="card-img-top" src="..." alt="Card image cap">
<div class="card-body">
  <h5 class="card-title">Card title</h5>
  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  <p>Name</p>
  <a href="#" class="btn btn-primary">Show</a>
</div>
</div>
<br>
<div class="card" style="width: 18rem;display: inline-block;">
<img class="card-img-top" src="..." alt="Card image cap">
<div class="card-body">
  <h5 class="card-title">Card title</h5>
  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  <p>Name</p>
  <a href="#" class="btn btn-primary">Show</a>
</div>
</div>




<div class="container">
  <div class="row">
    <div class="col-sm">
      One of three columns
    </div>
    <div class="col-sm">
      One of three columns
    </div>
    <div class="col-sm">
      One of three columns
    </div>
  </div>
</div>

</br>

<div class="container">
  <div class="row">
    <div class="col-sm">
      One of three columns
    </div>
    <div class="col-sm">
      One of three columns
    </div>
    <div class="col-sm">
      One of three columns
    </div>
  </div>
</div>

`

})
