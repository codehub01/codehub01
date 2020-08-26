<template>
  <div class="container contact">
    <div class="row mt-5 mb-3">
      <div class="col-md-5">
        <div class>
          <h4 class="mb-3">I live online</h4>
          <p class="text-white">
            I'm usually somewhere on the internet. You can find me oversharing on
            <a
              href="https://twitter.com/code_Hub01"
            >twitter</a>, exploring
            <a href="https://www.facebook.com/habib.wahab.16">facebook</a> contents, posting exciting projects on
            <a href="https://github.com/codehub01">github</a>, or occasionally looking for new stuffs to learn.
          </p>
          
          <p
            class="mt-5 text-white"
          >Have a project you would like me to work on, please fill and submit the form below. You should get a response from me within 3 hours.</p>
        </div> 
      </div>

      <div class="col-12 offset-md-1 col-md-6">
        <div class="row">
          <div v-if="loader" class="col-12 d-flex justify-content-center align-items-center position-absolute w-100 h-100 loader " style="z-index:10; background-color:rgb(9, 23, 43); opacity:0.5;">
            <div class="sk-chase">
              <div class="sk-chase-dot"></div>
              <div class="sk-chase-dot"></div>
              <div class="sk-chase-dot"></div>
              <div class="sk-chase-dot"></div>
              <div class="sk-chase-dot"></div>
              <div class="sk-chase-dot"></div>
            </div>
          </div>
          <div class="col-12 col-md-10 mt-4 offset-md-1">
            <div class="h4 text-white text-center mb-4 d-md-none">Send me an email</div>
            <div class="alert alert-success display_alert" role="alert" style="display: none;">
              <small>Email sent. I'll get back to you shortly.</small>
            </div>

            <form id="contact_form" method="POST" v-on:submit.prevent="handleFormSubmit">
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  name="full_name"
                  placeholder="Full name"
                  required
                />
              </div>
              <div class="form-group mt-5">
                <input
                  type="email"
                  class="form-control"
                  name="user_email"
                  placeholder="Email address"
                  required
                />
              </div>
              <div class="form-group mt-5">
                <input
                  type="tel"
                  class="form-control"
                  name="phone"
                  placeholder="Phone"
                  required
                />
              </div>
              <div class="form-group mt-5">
                <textarea
                  class="form-control"
                  rows="4"
                  name="message"
                  placeholder="Message"
                  required
                ></textarea>
              </div>
              <button type="submit"  class="btn btn-default btn_send w-100 mt-2 text-white">Send</button>
            </form>
             
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import emailjs from "emailjs-com";
export default {
  data(){
      return{
        loader: false
      }
    },
  methods: {
    handleFormSubmit: function(e){
      this.loader = true
      e.preventDefault();
      emailjs.sendForm("gmail", "template_I9TVCcd4", e.target, "user_malZEJsd7ijKbv4lMYiRA")
        .then(
          (result) => {
            if (result){
              document.getElementById("contact_form").reset();
            document.querySelector(".display_alert").style.display = "block";
            this.loader = false 
            setTimeout(() => {
              document.querySelector(".display_alert").style.display = "none";
            }, 2500);
            }
            
          },
          (error) => {
            alert("An error occured, Please try again", error.text);
          }
        );
    },
  },
};
  
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.form-control {
  background-color: rgb(9, 23, 43);
  border-left: none;
  border-right: none;
  border-top: none;
  border-radius: 0px !important;
  font-size: 16px;
}
.sk-chase {
  width: 40px;
  height: 40px;
  position: relative;
  animation: sk-chase 2.5s infinite linear both;
}

.sk-chase-dot {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0; 
  animation: sk-chase-dot 2.0s infinite ease-in-out both; 
}

.sk-chase-dot:before {
  content: '';
  display: block;
  width: 25%;
  height: 25%;
  background-color: #fff;
  border-radius: 100%;
  animation: sk-chase-dot-before 2.0s infinite ease-in-out both; 
}

.sk-chase-dot:nth-child(1) { animation-delay: -1.1s; }
.sk-chase-dot:nth-child(2) { animation-delay: -1.0s; }
.sk-chase-dot:nth-child(3) { animation-delay: -0.9s; }
.sk-chase-dot:nth-child(4) { animation-delay: -0.8s; }
.sk-chase-dot:nth-child(5) { animation-delay: -0.7s; }
.sk-chase-dot:nth-child(6) { animation-delay: -0.6s; }
.sk-chase-dot:nth-child(1):before { animation-delay: -1.1s; }
.sk-chase-dot:nth-child(2):before { animation-delay: -1.0s; }
.sk-chase-dot:nth-child(3):before { animation-delay: -0.9s; }
.sk-chase-dot:nth-child(4):before { animation-delay: -0.8s; }
.sk-chase-dot:nth-child(5):before { animation-delay: -0.7s; }
.sk-chase-dot:nth-child(6):before { animation-delay: -0.6s; }

@keyframes sk-chase {
  100% { transform: rotate(360deg); } 
}

@keyframes sk-chase-dot {
  80%, 100% { transform: rotate(360deg); } 
}

@keyframes sk-chase-dot-before {
  50% {
    transform: scale(0.4); 
  } 100%, 0% {
    transform: scale(1.0); 
  } 
}
</style>