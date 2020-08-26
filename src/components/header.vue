<template>
  <div class="cntainer header">
    <nav class="navbar navbar-expand-md ">
      <button class="navbar-toggler navbar-dark" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav mx-md-auto">
          <li class="nav-item active">
            <router-link to="/" class="nav-link">Home</router-link>
          </li>
          <li class="nav-item ">
            <router-link to="/about" class="nav-link">About</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/works" class="nav-link">Works</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/contact" class="nav-link">Let's talk</router-link>
          </li>
        </ul>
      </div>
  </nav>
  </div>
</template>

<script>
export default {
  name: 'header',
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header nav{
  margin-top: 15px;
}
.header .nav-item{
  margin-left: 12px;
  margin-right: 12px;
  
}
.header .nav-link{
  color: white;
  font-weight: bold;
}
@media  (max-width:767px) {
  .navbar-toggler{
    color: white !important;
  }
}

</style>
