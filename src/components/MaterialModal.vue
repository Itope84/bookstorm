<template>
  <modal
    name="question-form"
    transition="pop-out"
    :width="modalWidth"
    :click-to-close="false"
    :height="500"
    style="z-index: 10000000000"
  >
    <div class="px-3 py-3">
      <h2 class="h5">Ask a new Question</h2>
      <p
        class="small w-75"
      >Allow your mates to help you out with that difficult assignment. Simply post it and wait for someone to respond</p>
      <form action="#" @submit.prevent="ask" class="mt-3">
        <div class="form-group">
          <label for>Title</label>
          <input
            type="text"
            required
            v-model="question.title"
            class="form-control"
            placeholder="How can i solve this..."
          />
        </div>

        <div class="form-group mt-3">
          <label for>Description</label>
          <textarea
            rows="3"
            required
            v-model="question.body"
            style
            class="form-control"
            placeholder="Please describe your question in detail"
          ></textarea>
        </div>

        <div class="form-group mt-3">
          <label for>Add Tags</label>
          <input-tag v-model="question.tags" class="form-control"></input-tag>
          <span
            class="form-text small"
          >Tags help make it easier for relevant people to find your question. Use comma or tab to separate tags</span>
        </div>

        <hr />

        <div class="form-group d-flex justify-content-end">
          <button
            type="button"
            class="btn btn-danger btn-sm mr-3"
            @click="$modal.hide('question-form');"
          >Cancel</button>
          <button type="submit" class="btn btn-primary btn-sm" :disabled="loading">
            <i class="fas fa-spin fa-spinner" v-if="loading"></i> Submit
          </button>
        </div>
      </form>
    </div>
  </modal>
</template>
<script>
const MODAL_WIDTH = 656;
import InputTag from "vue-input-tag";
export default {
  components: {
    InputTag
  },
  data() {
    return {
      question: {
        title: null,
        body: null,
        tags: []
      },
      loading: false
    };
  },
  methods: {
    ask() {
      this.loading = true;
      axios
        .post("/ask", this.question)
        .then(response => {
          this.$notify({
            group: "alert",
            title: "Done!",
            text:
              response.data.message ||
              "Question asked successfully! Your peers are on it :-)",
            type: "success"
          });
        //   for now
          window.location.reload();
        })
        .finally(() => {
          this.loading = false;
        });
    }
  },
  computed: {
    modalWidth() {
      return window.innerWidth < MODAL_WIDTH ? MODAL_WIDTH / 2 : MODAL_WIDTH;
    }
  }
};
</script>
