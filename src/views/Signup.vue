<template>
  <div>
    <top-nav></top-nav>
    <div class="d-flex justify-content-center container">
      <div class="col-lg-10 py-5 my-5">
        <div class="bg-white text-left row shadow-lg auth-box">
          <div
            class="col-md-6 mx-0 mb-0 d-none d-md-flex flex-column py-5 px-4 bg-primary text-white"
          >
            <h1 class="h5 mb-0">Academic excellence via student collaboration</h1>
            <hr align="left" class="smallhr white" />
            <div class="feature-img-container mx-auto my-4">
              <img src="@/assets/img/group-4.svg" alt class="img-fluid" />
            </div>
            <h6 class="text-center my-3">
              <a href class="btn text-white disabled btn-rounded px-4 header-font">
                Get Started
                <i class="fas fa-angle-right ml-1"></i>
              </a>
            </h6>
          </div>

          <div class="col-md-6 mx-0 py-5 px-5 mb-0">
            <div class="component">
              <!---->
              <h5 class="text-secondary text-left mb-0">SIGNUP TO USE BOOKSTORM</h5>

              <hr align="left" class="smallhr border-primary mt-2" />

              <form method="POST" @submit.prevent="register">
                <div class="form-group header-font mt-5">
                  <label for>Name</label>
                  <input
                    type="text"
                    class="form-control material-input"
                    required="required"
                    autofocus="autofocus"
                    v-model="user.name"
                    placeholder="John Doe"
                  />
                </div>
                <div class="form-group title">
                  <label for="email">Email</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    v-model="user.email"
                    placeholder="awesome@student.com"
                    required="required"
                    class="form-control material-input"
                  />
                </div>

                <div class="form-group title">
                  <label for="password">Password</label>
                  <input
                    v-model="user.password"
                    type="password"
                    name="password"
                    placeholder="******"
                    required="required"
                    class="form-control material-input"
                  />
                </div>

                <div class="form-group title">
                  <label for="password">Confirm Password</label>
                  <input
                    type="password"
                    name="password_confirmation"
                    v-model="user.password_confirmation"
                    placeholder="******"
                    required="required"
                    class="form-control material-input"
                  />
                </div>

                <div class="form-group header-font mt-5">
                  <label for>Where do you School</label>
                  <select
                    name
                    id
                    class="form-control custom-select material-input"
                    v-model="user.school_id"
                  >
                    <option value>Select One</option>
                    <option
                      v-for="school in schools"
                      :key="school.id"
                      :value="school.id"
                    >{{school.name}}</option>
                  </select>
                </div>

                <div class="form-group header-font mt-5">
                  <label for>What's your course of study?</label>
                  <select
                    name
                    id
                    class="form-control custom-select material-input"
                    v-model="user.study_program_id"
                  >
                    <option value>Select One</option>
                    <option
                      v-for="program in programs"
                      :key="program.id"
                      :value="program.id"
                    >{{program.name}}</option>
                  </select>
                  <span class="small form-text">Please select the closes approximation you can find</span>
                </div>

                <div class="form-group header-font mt-5">
                  <label for>What level are you?</label>
                  <select
                    name
                    id
                    class="form-control custom-select material-input"
                    v-model="user.level"
                  >
                    <option value>Select One</option>
                    <option v-for="i in 6" :key="i" :value="i * 100">{{i * 100}} level</option>
                  </select>
                </div>

                <div class="title align-items-center form-group mt-5 mb-0">
                  <div class>
                    <button
                      type="submit"
                      :disabled="loading"
                      class="py-2 btn btn-primary shadow-lg btn-rounded btn-block"
                    >
                      <i class="fas fa-spin fa-spinner" v-if="loading"></i> Let's Go
                    </button>
                  </div>
                </div>
              </form>

              <h5 class="text-right mt-5 h6">
                Already have an account?
                <router-link to="/login">Sign in instead</router-link>
              </h5>
              <p class="mt-3 text-right">
                <!-- <a href="#" class="mt-2 d-block">Forgot Password? Click here to reset</a> -->
              </p>
            </div>
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

  data() {
    return {
      user: {
        name: null,
        email: null,
        password: null,
        school_id: "",
        study_program_id: "",
        level: ""
      },
      schools: [],
      programs: [],
      loading: false
    };
  },
  methods: {
    fetchData() {
      axios.get("/signup-data").then(response => {
        this.schools = response.data.schools;
        this.programs = response.data.programs;
      });
    },

    register() {
      this.loading = true;
      axios
        .post("/register", this.user)
        .then(response => {
          this.$notify({
            group: "alert",
            title: "Done!",
            text:
              response.data.message || "You have been successfully registered",
            type: "success"
          });
          localStorage.setItem('token', response.data.token)
          window.axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`
          this.$router.push('/feeds')
        })
        .catch(error => {
          if (error.response) {
            let text = "";
            for (let message in error.response.data.errors) {
              text += `<li>${error.response.data.errors[message]}</li>`;
            }
            this.$notify({
              group: "alert",
              title: '<i class="fas fa-exclamation-triangle"></i> Error',
              text: `
                        <ul v-if="error.response.data.errors">
                           ${text}
                        </ul>
                        `,
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

  mounted() {
    this.fetchData();
  }
};
</script>
