<template>
    <div class="py-3 px-4" :class="{'border-bottom': !unbordered}">
        <div class="d-flex align-items-center mb-3">
            <span class="avatar">
                <img src="http://bookstorm.local/images/icons8-writer-male-50.png" alt="">
            </span>
            <span class="h6 mb-0 ml-2">{{question.user.name}}</span>
            <span class="mx-2">&bull;</span>
            <span class="text-muted">{{question.created_at}}</span>
        </div>
        <div class="">
            <a href="#"><h3 class="h6">{{question.title}}</h3></a>
            <p class="text-muted text-truncate">{{question.body}}</p>
        </div>
        <div class="d-flex align-items-center">
            <a href="#"><span class="mr-3"><i class="far fa-comment"></i> 12 answers</span></a>
            <a href="#"><span class="mr-4"><i class="fas fa-share"></i> Share</span></a>
            <span class="">
                <a href="" class="btn btn-secondary btn-sm rounded-0">View Details</a>
            </span>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        unbordered: {
            type: Boolean,
            default: false
        },
        question: {
            type: Object,
            required: true
        }
    }
}
</script>
