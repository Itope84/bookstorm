<template>
  <div>
    <top-nav></top-nav>
    <div class="container body">
      <div class>
        <div class="row text-left">
          <div class="col-md-4 col-lg-3 py-5 mt-5 sidebar">
            <div class="mb-2 sidebar-link d-flex align-items-center">
              <a href class="d-flex align-items-center">
                <span class="avatar mr-2">
                  <img :src="user.avatar || 'http://bookstorm.local/images/icons8-writer-male-50.png'" alt />
                </span>
                <div>
                  <h4 class="mb-0 h6 text-capitalize">{{user.name}}</h4>
                  <span class="small">{{user.points}} points</span>
                </div>
              </a>
            </div>
            <div class="px-3 py-2 mt-3">
              <a href class="d-flex">
                  <i class="fas fa-download"></i>
                <span class="ml-3">My Collection</span>
              </a>
            </div>
            <div class="px-3 sidebar-link py-2 mt-2">
              <a href class="d-flex align-items-center">
                  <i class="fas fa-bell"></i>
                <span class="mx-3">Notifications </span>
                <span class="badge badge-primary">3</span> 
              </a>
            </div>
            <div class="px-3 sidebar-link py-2 mt-2">
                <a href class="d-flex align-items-center">
                  <i class="fas fa-book"></i>
                <span class="mx-3">My Courses </span>
              </a>
            </div>
            <div class="px-3 sidebar-link py-2 mt-2">
                <a href class="d-flex align-items-center">
                  <i class="fas fa-book"></i>
                <span class="mx-3">Recommended</span>
              </a>
            </div>
          </div>
          <div class="col-md-8 col-lg-9">
            <slot></slot>
          </div>
        </div>
      </div>
    </div>
    <main-footer></main-footer>
  </div>
</template>

<script>
import TopNav from "../components/TopNav";
import MainFooter from "../components/MainFooter";
export default {
  components: {
    TopNav,
    MainFooter
  },

  data () {
      return {
          user: {}
      }
  },

  mounted () {
      axios.get('profile').then(response => {
          this.user = response.data.data
      }).catch(error => {
          if(error.response.status === 401) {
              localStorage.removeItem('token')
              this.$router.push('/login')
          }
      })
  }
};
</script>

<style lang="scss" scoped>
.sidebar {
//   font-size: 14px;
}
</style>
