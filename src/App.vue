<template>
  <div id="app" class="bg-light">
    <question-modal></question-modal>
    <notifications group="alert" position="bottom right"/>    
    <router-view />
  </div>
</template>
<script>
import QuestionModal from "./components/QuestionFormModal"
export default {
  components: {
    QuestionModal
  }
}
</script>


<style lang="scss">
@import "./assets/scss/variables";
@import "bootstrap-scss/bootstrap.scss";
@import "./assets/scss/custom";
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
