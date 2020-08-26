<template>
  <div class="container about">
    <div class="row">
      <div class="col-md-5">
        <div class="img">
          <img src="../assets/img2.jpg" class="img-fluid rounded-circle" alt="">
        </div>
      </div>
      <div class="col-md-6 aside mt-5 mt-md-0 mt-lg-5 offset-1">
        <p>I'm a Frontend web developer based in Nigeria, working with different web technologies to achieve awesome results while following best practices applicable. I'm capable of learning and working with new technologies swiftly.</p>
        <p>Most of my time is spent on learning new technologies in the web to build awesome stuffs.</p>
        <p>Outside being a techy, I hangout with few friends and try not to be an introvert in reality while being social on social media, 😊.</p>
   
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'about',
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.about{
  margin-top: 50px;
  margin-bottom: 50px;
}
.aside p{
  width: 80%;
  font-size: 18px;
  font-weight: 500;
}
@media (max-width:767px ){
  .aside .p{
  width: 100%;
}
}

</style>
