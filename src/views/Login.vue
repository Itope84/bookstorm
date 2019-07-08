<template>
  <div>
    <top-nav></top-nav>
    <div class="d-flex justify-content-center container">
      <div class="col-md-9 py-5 my-5">
        <div class="bg-white text-left row shadow-lg auth-box">
          <div class="col-md-6 mx-0 py-5 px-5 mb-0">
            <div class="component">
              <!---->
              <h5 class="text-secondary text-left mb-0">LOGIN</h5>

              <hr align="left" class="smallhr border-primary mt-2" />

              <form method="POST" action="#" @submit.prevent="login">
                <div class="form-group title mt-5">
                  <label for="email">Email</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    v-model="email"
                    placeholder="awesome@student.com"
                    required="required"
                    autofocus="autofocus"
                    class="form-control material-input"
                  />
                </div>
                <div class="form-group title">
                  <label for="password">Password</label>
                  <input
                    id="password"
                    type="password"
                    name="password"
                    v-model="password"
                    placeholder="******"
                    required="required"
                    class="form-control material-input"
                  />
                </div>
                <div class="title align-items-center form-group mt-5 mb-0">
                  <div class>
                    <button
                      type="submit"
                      class="py-2 btn btn-primary shadow-lg btn-rounded btn-block"
                    >Login</button>
                  </div>
                </div>
              </form>

              <h5 class="text-right mt-5 h6">
                New Here?
                <a href="#">Create an Account</a>
              </h5>
              <p class="mt-3 text-right">
                <a href="/password/reset" class="mt-2 d-block">Forgot Password? Click here to reset</a>
              </p>
            </div>
          </div>
          <div
            class="col-md-6 mx-0 mb-0 d-none d-md-flex flex-column py-5 px-4 bg-primary text-white"
          >
            <h1 class="h5 mb-0">Academic excellence via student collaboration</h1>
            <hr align="left" class="smallhr thickhr" />
            <div class="feature-img-container mx-auto my-4">
              <img src="@/assets/img/group-4.svg" alt class="img-fluid" />
            </div>
            <h6 class="text-center my-3">
              <a href class="btn btn-primary btn-rounded px-4 header-font">
                Get Started
                <i class="fas fa-angle-right ml-1"></i>
              </a>
            </h6>
          </div>
        </div>
      </div>
    </div>
    <main-footer></main-footer>
  </div>
</template>

<script>
import TopNav from "../components/TopNav";
import MainFooter from "../components/MainFooter"
export default {
  components: {
    TopNav,
    MainFooter
  },

  data () {
      return {
          email: null,
          password: null
      }
  },

  methods: {
      login () {
          axios.post('/login', {email: this.email, password: this.password}).then(response => {
          this.$notify({
            group: "alert",
            title: "Done!",
            text:
              response.data.message || "Logged in successfully!",
            type: "success"
          });
          localStorage.setItem('token', response.data.token)
          window.axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`
          this.$router.push('/feeds')
        })
        .catch(error => {
          if (error.response) {
            
            this.$notify({
              group: "alert",
              title: '<i class="fas fa-exclamation-triangle"></i> Error',
              text: error.response.data.error || "Sorry, those credentials don't match",
              type: "error"
            });
          } else {
            this.$notify({
              group: "alert",
              title: '<i class="fas fa-exclamation-triangle"></i> Error',
              text: `Please check your internet connection
                        `,
              type: "error"
            });
          }
        })
        .finally(() => {
          this.loading = false;
        });
      }
  },
  beforeMount () {
      if(localStorage.getItem('token')) {
          this.$router.push('/feeds')
      }
  }
};
</script>
