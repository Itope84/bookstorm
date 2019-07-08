<template>
  <main-layout>
    <div class="py-5 mt-5 text-left">
      <div class="d-flex">
        <div class="mr-auto">
          <h1 class="h5">Recently Asked Questions</h1>
          <p class="small">You might find these useful</p>
        </div>

        <div>
          <a href class="btn btn-primary rounded-0 btn-sm" @click.prevent="$modal.show('question-form')">
            <i class="fas fa-plus-circle"></i> Ask New Question
          </a>
        </div>
      </div>
      <div class="card rounded-0">
        <question-item v-for="question in questions" :key="question.id" :question="question"></question-item>
        <div class="text-center py-2">
          <router-link to="/peer-assist" href>View All</router-link>
        </div>
      </div>

      <div class="d-flex mt-5">
        <div class="mr-auto">
          <h1 class="h5">Recommended Materials</h1>
          <p
            class="small"
          >These have been recommened for you based on your courses. Please add all courses to make this more precise</p>
        </div>

        <div>
          <a href="#" class="btn btn-primary rounded-0 btn-sm">
            <i class="fas fa-plus-circle"></i> New Upload
          </a>
        </div>
      </div>
      <carousel :pagination-enabled="false" :per-page-custom="[[1024, 3]]">
        <slide v-for="material in materials" :key="material.id">
          <material-item :material="material"></material-item>
        </slide>

      </carousel>
    </div>
  </main-layout>
</template>
<script>
import MainLayout from "./MainLayout";
import MaterialItem from "../components/MaterialItem"
import QuestionItem from "../components/QuestionItem";
export default {
  components: {
    MainLayout,
    QuestionItem,
    MaterialItem
  },

  data() {
    return {
      questions: [],
      materials: []
    };
  },

  mounted () {
      axios.get('/materials', {
          params: {
              perpage: 5
          }
      }).then(response => {
          this.materials = response.data.data
      })

      axios.get('/questions', {
          params: {
              perpage: 5
          }
      }).then(response => {
          this.questions = response.data.data
      })
  }
};
</script>
