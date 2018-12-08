angular.module('app').component('contact', {
  controller:function(contact){
// NOTE: to inform the client using sweet alert
           this.sweetalertClick = function(){
           swal("Thanks For Feedback!", "Your message is receved!", "success")

   }

   // NOTE: getting the feedback from the client
    this.contactMsg = function(feedback){
      var contactObj= {
        name: feedback.name,
        email: feedback.email,
        phone: feedback.phone,
        msg: feedback.msg
      }
      console.log("Thank You Mr " + feedback.name + " and your Message is " + feedback.msg + " Email: " + feedback.email + " phone: " + feedback.phone);

      feedback.name = "";
      feedback.email = "";
      feedback.phone = "";
      feedback.msg = "";
      that=this

        contact.set(contactObj,function(data){

          that.sweetalertClick();
    })

   }




 },

  bindings: {},

  template:`
  <header></header>
    <section id="contact">
      <div class="section-content">
        <h1 class="section-header">Get in <span class="content-header wow fadeIn " data-wow-delay="0.2s" data-wow-duration="2s"> Touch with us</span></h1>
        <h3> We'd Love To Hear From You </h3>
      </div>
      <div class="contact-section">
        <div class="container">
          <form ng-submit="$ctrl.contactMsg(feedback)">
            <div class="col-md-6 form-line">
              <div class="form-group">
                <label for="exampleInputUsername">Name</label>
                <input type="text" class="form-control" id="" placeholder=" Enter Name" ng-model="feedback.name">
                </div>
                <div class="form-group">
                  <label for="exampleInputEmail">Email Address</label>
                  <input type="email" class="form-control" id="exampleInputEmail" placeholder=" Enter Email" ng-model="feedback.email">
                  </div>
                  <div class="form-group">
                    <label for="telephone">Mobile No.</label>
                    <input type="tel" class="form-control" id="telephone" placeholder=" Enter Mobile No." ng-model="feedback.phone">
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <label for ="description"> Message</label>
                      <textarea  class="form-control" id="description" placeholder="Enter Your Message" ng-model="feedback.msg"></textarea>
                    </div>
                    <div>
                      <button type="submit" class="btn btn-default submit"><i class="fa fa-paper-plane" aria-hidden="true"></i> Send Message</button>
                    </div>
                  </div>
                </form>
              </div>
            </section>

  `

})
