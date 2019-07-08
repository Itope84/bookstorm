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

              <form method="POST" action="http://jobsicle.local/login">
                <input type="hidden" name="_token" value="cQFVCLqFIBEl58THMEhQPwUvl1FxPMH62pNpSdIA" />
                <div class="form-group title mt-5">
                  <label for="email">Email</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
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
  </div>
</template>

<script>
import TopNav from "../components/TopNav";
export default {
  components: {
    TopNav
  }
};
</script>
