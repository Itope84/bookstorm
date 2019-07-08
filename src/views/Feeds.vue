<template>
  <main-layout>
    <div class="py-5 mt-5 text-left">
      <div class="d-flex">
        <div class="mr-auto">
          <h1 class="h5">Recently Asked Questions</h1>
          <p class="small">You might find these useful</p>
        </div>

        <div>
          <a href class="btn btn-primary rounded-0 btn-sm">
            <i class="fas fa-plus-circle"></i> Ask New Question
          </a>
        </div>
      </div>
      <div class="card rounded-0">
        <question-item></question-item>
        <question-item></question-item>
        <question-item></question-item>
        <question-item></question-item>
        <div class="text-center py-2">
          <a href>View All</a>
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
          <a href class="btn btn-primary rounded-0 btn-sm">
            <i class="fas fa-plus-circle"></i> New Upload
          </a>
        </div>
      </div>
      <carousel :pagination-enabled="false" :per-page-custom="[[1024, 3]]">
        <slide>
          <material-item></material-item>
        </slide>

        <slide>
          <material-item></material-item>
        </slide>

        <slide>
          <material-item></material-item>
        </slide>

        <slide>
          <material-item></material-item>
        </slide>

        <slide>
          <material-item></material-item>
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
  }
};
</script>
