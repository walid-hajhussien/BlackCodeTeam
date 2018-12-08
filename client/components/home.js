angular.module('app').component('home', {

  controller: function($window, addpost, retriveposts, checksession) {
    // controller function :
    this.user;

    //get current user function
    this.getuser = function() {
      that = this

      checksession.set(function(data) {
        if (data.data != '0') {
          that.user = data.data
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

    // NOTE: sweetalert show button
    this.sweetalert = async function(post) {
      console.log(post);
      const {
        value: text
      } = await swal({
        input: 'textarea',
        imageUrl: this.image[post.image],
        imageWidth: 400,
        imageHeight: 200,
        title: post.title,
        html: `<div style="border:10px inset ${this.color[post.color]};padding:20px;">
            ${post.description}
        </div>
        <details>
        <summary>Donator Details</summary>
        <h4>Name : ${post.name}</h4>
        <h4>Phone : ${post.phone}</h4>
        <h4>Email : ${post.email}</h4>
        </details>

  `,
        inputPlaceholder: 'Type your responce here...',
        showCancelButton: true
      })

      if (text) {
        swal('Your response has been send')

      }

    }
    // NOTE: variable
    this.showaddbutton = false
    this.posts = []


    //this.user=$window.currentuser

    this.getposts = function() {
      that = this
      retriveposts.set(function(data) {
        console.log(data.data[0]);
        that.posts = data.data.slice()
        that.mainposts = that.posts.slice()
        console.log(that.posts);
      })
    }

    this.getposts();







    this.mainposts = this.posts.slice();
    // NOTE:the below function for category filter
    this.changecategory = function(value) {
      if (value) {
        this.mainposts = this.posts.slice()
        var array = [];
        for (var i = 0; i < this.mainposts.length; i++) {
          if (this.category[this.mainposts[i].category] == value.name) {
            array.push(this.mainposts[i])
          }
        }
        this.mainposts = array.slice()

      } else {
        this.mainposts = this.posts.slice()
      }
    }
    //new Date().toLocaleDateString()
    this.add = function(post) {

      var defualt = this.category[post.category.name]
      var postData = {
        image: defualt,
        color: defualt,
        category: defualt,
        title: post.title,
        description: post.text,
        name: this.user[0].firstname,
        phone: this.user[0].phone,
        Email: this.user[0].email,
        condition: post.condition,
        availablity: post.availablity,
        date: new Date().toLocaleDateString(),
        status: 1,
        userid: this.user[0].id,
        btnName: 'deactivate'

      }
      post.text = "";
      post.title = "";
      post.category = null;
      post.condition = null;
      post.availablity = ""
      console.log(postData);
      this.mainposts.push(postData)
      this.posts.push(postData)
      that = this
      addpost.set(postData, function(result) {
        if (result.data == '1') {
          swal("Thanks ", "Your message has been posted", "success")
          that.showaddbutton = !that.showaddbutton
          that.getposts();
        }
      })
    }

    this.lists = [{
        name: 'furniture'
      },
      {
        name: 'electronic'
      }, {
        name: 'forkids'
      },
      {
        name: 'give a hand'
      }, {
        name: 'clothes'
      },
      {
        name: 'food'
      }, {
        name: 'book'
      }
    ]

    this.conditionlist = [{
      name: 'New'
    }, {
      name: 'Used'
    }]

    this.category = {
      0: 'furniture',
      1: 'electronic',
      2: 'forkids',
      3: 'give a hand',
      4: 'clothes',
      5: 'food',
      6: 'book',
      furniture: 0,
      electronic: 1,
      forkids: 2,
      'give a hand': 3,
      clothes: 4,
      food: 5,
      book: 6
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

    this.color = {
      0: '#FFD700',
      1: '#2E8B57',
      2: '#CCCC00',
      3: '#DC143C',
      4: '#FFB6C1',
      5: '#800000',
      6: '#800080'
    }
  },

  bindings: {},


  template: `
<header></header>

<div class="container">
  <div class="input-group">
    <input type="text" ng-model="search" class="form-control" placeholder="Search for...">
    <span class="input-group-btn">
      <button class="btn btn-search" type="button"><i class="fa fa-search fa-fw"></i> Search</button>
    </span>
    <span class="input-group-btn" >
    <select class="btn btn-secondary dropdown-toggle select"
  ng-options="value.name for value in $ctrl.lists"
  ng-model="value" ng-change="$ctrl.changecategory(value)">
  <option value="">All category</option>
  </select>
    </span>

    <span class="bounce input-group-btn" >
    <button class="btn btn-search addbutton" ng-click="$ctrl.showaddbutton=!$ctrl.showaddbutton"><i style="color:white" class="fa fa-plus fa-fw"></i></button>
      </span>
  </div>
</div><br><br>

<div class="container homeform" ng-show="$ctrl.showaddbutton">
<form ng-submit="$ctrl.add(post)" >
 <div class="form-group" class="homeformelement">
  <input type="text" class="form-control homeforminput"  placeholder="Title...." ng-model="post.title" ng-maxlength="9"></br>
  <input type="number" class="form-control homeforminput"  placeholder="Availablity in days...." ng-model="post.availablity"></br>

  <span class="input-group-btn" >
  <select class="btn btn-secondary dropdown-toggle selectaddpost"
ng-options="value.name for value in $ctrl.lists"
ng-model="post.category" required style="background:white;color:black">
<option value="">select category... </option>
</select>
</span>
</br></br>
<span class="input-group-btn" >
<select class="btn btn-secondary dropdown-toggle selectaddpost"
ng-options="value.name for value in $ctrl.conditionlist"
ng-model="post.condition" required style="background:white;color:black">
<option value="">Condition </option>
</select>
</span>


 </div></br>
   <textarea ng-model="post.text" class="hometextarea" placeholder="Description..."></textarea></br>
   <button  type="submit" class="homeaddbutton" ><i style="color:white" class="fa fa-plus fa-fw"></i></button>
</form>
</div>
</br>




<div class="allPost">
<span  ng-repeat="(key ,post) in $ctrl.mainposts  | filter:search |orderBy:'-date'">
  <div ng-click="$ctrl.sweetalert(post)"  class="card homediv" style="width: 18rem; display: inline-block;">
  <img class="card-img-top imagePost" ng-src="{{$ctrl.image[post.image]}}" alt="Card image cap">
  <div class="card-body ">
  <h3 style="color:white;background:{{$ctrl.color[post.color]}};text-align:center;">{{$ctrl.category[post.category]}}</h3>
    <h5 class="card-title PostTitle" style="text-align:center">{{post.title}}</h5>
    <p class="card-text divPostDescription" style="color:black;background:{{$ctrl.color[post.color]}}">{{post.description}}</p>


    <p style="font-size:10px; font-style: italic; ">{{post.date}}</p>
  </div>
</div>
<p ng-if="($index+1)%3==0"></p>
</span>
</div>










<!-- Footer -->
<footer class="page-footer font-small special-color-dark pt-4 ">

    <!-- Footer Elements -->
    <div class="container">

      <!-- Social buttons -->
      <ul class="list-unstyled list-inline text-center">
        <li class="list-inline-item">
          <a class="btn-floating btn-fb mx-1">
            <i class="fa fa-facebook"> </i>
          </a>
        </li>
        <li class="list-inline-item">
          <a class="btn-floating btn-tw mx-1">
            <i class="fa fa-twitter"> </i>
          </a>
        </li>
        <li class="list-inline-item">
          <a class="btn-floating btn-gplus mx-1">
            <i class="fa fa-google-plus"> </i>
          </a>
        </li>
        <li class="list-inline-item">
          <a class="btn-floating btn-li mx-1">
            <i class="fa fa-linkedin"> </i>
          </a>

      </ul>
      <!-- Social buttons -->

    </div>
    <!-- Footer Elements -->

    <!-- Copyright -->
    <div class="footer-copyright text-center py-3 Copyright" style="color:white">© 2018 Copyright:
      <a href="#"> BlackCodeTeam.com</a>
    </div>
    <!-- Copyright -->

  </footer>
  <!-- Footer -->

`

})