<template>
    <div class="navbar-wrapper">
        <nav class="navbar shadow-sm navbar-expand-lg bg-primary fixed-top bg-transparent">
        <div class="container">
          <router-link class="navbar-brand text-white" to="/">Bookstorm</router-link>
          <button
            class="navbar-toggler text-white"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="fas fa-bars"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="mt-0 navbar-nav mr-auto mx-md-auto">
              <li class="nav-item active">
                <router-link to="/feeds" class="nav-link">
                  Feeds
                  <span class="sr-only">(current)</span>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/materials">Materials</router-link>
              </li>
              
              <li class="nav-item">
                <router-link class="nav-link" to="/peer-assist">Peer Assist</router-link>
              </li>
              

              <li class="nav-item">
                <a class="nav-link" href="#" tabindex="-1" aria-disabled="true">About</a>
              </li>
            </ul>
            <div class="my-2 my-lg-0" v-if="!loggedIn">
              <router-link to="/login" class="btn flat-btn-accent btn-rounded text-white px-4 mr-2">Login</router-link>
              <router-link to="/signup" class="btn btn-white btn-rounded px-4 shadow-lg">Sign Up</router-link>
            </div>

            <div class="my-2 my-lg-0" v-else>
              
              <router-link to="/signup" class="btn mr-2 btn-white btn-rounded px-4 shadow-lg">My Profile</router-link>
              <button @click="logout" class="btn flat-btn-accent btn-rounded text-white px-4">Logout</button>
            </div>
          </div>
        </div>
      </nav>
    </div>
</template>

<script>
export default {
    computed: {
        loggedIn () {
            return !!localStorage.getItem('token')
        }
    },
    methods: {
        logout () {
            localStorage.removeItem('token')
            window.location.reload()
        }
    }
}
</script>
