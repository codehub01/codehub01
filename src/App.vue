<template>
  <div id="app">
    <app-header></app-header>
    <router-view></router-view>
    <app-footer></app-footer>
  </div>
</template>

<script>
import header from "./components/header.vue";
import home from "./components/home.vue";
import aboutMe from "./components/about-me.vue";
import works from "./components/works.vue";
import contact from "./components/contact.vue";
import footer from "./components/footer.vue";


export default {
  name: "App",
  components: {
    'app-header': header,
    'app-home': home,
    'app-about': aboutMe,
    'app-works': works,
    'app-contact': contact,
    'app-footer': footer
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
html,
body {
  width: 100%;
  height: 100%;
  font-family: "Roboto",Tahoma,Verdana,sans-serif!important;
  font-size: 18px !important;
  background-color: #09172b;
  color: white;
}
*:focus {
  box-shadow: none;
}
textarea {
  resize: none;
}
.btn.focus, .btn:focus{
  box-shadow: none !important;
}
</style>
