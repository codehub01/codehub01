<template>
  <div class="container my-5 works">
    <h3>My Works</h3>
    <span class="h6">Here are some of my recent project:</span>
    <div class="row">

      <div v-for="work in works" :key="work" class="col-md-4 mt-4">

        <div class="card card_border">
          <div class="card-body px-0">
            <div class="card-title h4 py-1 pl-1">
              <a class="text-white" :href="work.link">{{work.name}}</a>
            </div>
            <h6 class="card-subtitle mb-1 mb-md-2 text-muted pl-3">{{work.techUsed}}</h6>
            <p class="card-text p-2 p-md-3 pb-0">{{work.description}}</p>
          </div>
        </div>

      </div>

    </div>
  </div>
</template>

<script>
import Json from '../../public/works.json'
export default {
  name: "works",
  data(){
    return{
      works: Json
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card{
  background-color: #09172b;
}
.card_border{
  border-color: rgb(31, 67, 117)
}
.card-title {
    border-left: 5px solid rgb(255, 255, 255);
}
</style>
