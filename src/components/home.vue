<template>
  <div class="container home">
    <div class="row">
      <div class="col-md-5">
        <div class="img">
          <img src="../assets/img2.jpg" class="img-fluid rounded-circle" width="640px" alt="">
        </div>
      </div>
      <div class="col-md-6 aside mt-5 mt-md-0 mt-lg-5 offset-1">
        <p>Hello there,</p>
        <p class="stack">I'm Wahab Habib, a Frontend developer based in Nigeria.</p>
        <router-link to="/about"><button class="btn btn-default px-5 py-2 my-3 about-me-btn text-white">About Me <i class="ml-2 fa fa-long-arrow-right"></i></button></router-link>
        <p>Find me on:</p>
        <a href="https://www.facebook.com/habib.wahab.16" class="p-2"><i class="fa fa-facebook fa-2x"></i></a>
        <a href="https://twitter.com/code_Hub01" class="p-2"><i class="fa fa-twitter fa-2x"></i></a>
        <a href="https://github.com/codehub01" class="p-2"><i class="fa fa-github fa-2x"></i></a>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home{
  margin-top: 50px;
  margin-bottom: 50px;
}
.aside p{
  font-size: 22px;
  font-weight: 500;
}
.aside .stack{
  width: 80%;
}
.aside a{
  color: white;
}
.about-me-btn{
      background-color: #1f4c8b;
}
@media (max-width:767px ){
  .aside .stack{
  width: 100%;
}
}


</style>
