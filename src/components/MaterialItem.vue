<template>
  <div class="py-3 px-2">
    <div class="upload-item shadow-sm rounded-sm">
      <div class="upload-preview">
        <img src="@/assets/img/preview.png" class="img-fluid" alt />
      </div>
      <div class="upload-body px-3 py-3">
        <div class="d-flex text-muted px-2 py-2">
          <span class="small mr-auto">{{material.type}}</span>
        </div>
        <h5 class="title h6 font-weight-bolder my-3 text-capitalize">
          {{material.title}}
        </h5>

        <p class="text-center mt-3 small">
          <a href class="btn btn-outline-secondary btn-sm px-3 btn-rounded">View/Download</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    props: {
        material: {
            type: Boolean,
            required: true
        }
    }
}
</script>
