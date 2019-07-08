<template>
  <main-layout>
    <div class="py-5 mt-5 text-left">
      <div class="d-flex">
        <div class="mr-auto">
          <h1 class="h5">Recent Material uploads</h1>
          <p class="small">You might find these useful</p>
        </div>

        <div>
          <a href class="btn btn-primary rounded-0 btn-sm" @click.prevent="launchUpload">
            <i class="fas fa-plus-circle"></i> Upload new Item
          </a>
        </div>
      </div>
      <div class="row">
          <div class="col-sm-6 col-lg-4" v-for="material in materials" :key="material.id">
              <material-item :material="material"></material-item>
          </div>
      </div>
    </div>
  </main-layout>
</template>
<script>
import MainLayout from "./MainLayout";
// import VuePaginator from 'vue-paginator'
import MaterialItem from "../components/MaterialItem";
export default {
  components: {
    MainLayout,
    MaterialItem
  },

  data() {
    return {
      materials: [],
      meta: {},
      current_page: 1
    };
  },

  methods: {
    fetchQuestions(page = 1) {
      axios
        .get("/materials", {
          params: {
            page
          }
        })
        .then(response => {
          this.materials = response.data.data;
          this.meta = response.data.meta;
        });
    },

    launchUpload() {
        this.$modal.show('question-form')
    }
  },

  mounted () {
      this.fetchQuestions()
  }
};
</script>
