<template>
  <main-layout>
    <div class="py-5 mt-5 text-left">
      <div class="d-flex">
        <div class="mr-auto">
          <h1 class="h5">Peer Assistance</h1>
          <p class="small">You might find these useful</p>
        </div>

        <div>
          <a href class="btn btn-primary rounded-0 btn-sm" @click.prevent="launchAsk">
            <i class="fas fa-plus-circle"></i> Ask New Question
          </a>
        </div>
      </div>
      <div class="card rounded-0">
        <question-item v-for="question in questions" :key="question.id" :question="question"></question-item>
        <!-- <div class="text-center py-2">
          <a href>View All</a>
        </div> -->
      </div>
    </div>
  </main-layout>
</template>
<script>
import MainLayout from "./MainLayout";
// import VuePaginator from 'vue-paginator'
import MaterialItem from "../components/MaterialItem";
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
      meta: {},
      current_page: 1
    };
  },

  methods: {
    fetchQuestions(page = 1) {
      axios
        .get("/questions", {
          params: {
            page
          }
        })
        .then(response => {
          this.questions = response.data.data;
          this.meta = response.data.meta;
        });
    },

    launchAsk() {
        this.$modal.show('question-form')
    }
  },

  mounted () {
      this.fetchQuestions()
  }
};
</script>
