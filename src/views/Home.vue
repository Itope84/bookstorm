<template>
  <div>
    <header class="main-header py-4">
      <nav class="navbar navbar-expand-lg bg-transparent">
        <div class="container">
          <router-link class="navbar-brand text-white" to="/">Bookstorm</router-link>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
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
                <a class="nav-link" href="#">Materials</a>
              </li>

              <li class="nav-item">
                <router-link class="nav-link" to="/peer-assist">Peer Assist</router-link>
              </li>

              <li class="nav-item">
                <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
              </li>
            </ul>
            <div class="my-2 my-lg-0" v-if="!loggedIn">
              <router-link
                to="/login"
                class="btn flat-btn-accent btn-rounded text-white px-4 mr-2"
              >Login</router-link>
              <router-link to="/signup" class="btn btn-white btn-rounded px-4 shadow-lg">Sign Up</router-link>
            </div>

            <div class="my-2 my-lg-0" v-else>
              <router-link
                to="#"
                class="btn mr-2 btn-white btn-rounded px-4 shadow-lg"
              >My Profile</router-link>
              <button to="/login" class="btn flat-btn-accent btn-rounded text-white px-4">Logout</button>
            </div>
          </div>
        </div>
      </nav>

      <div class="header-container position-relative" style="padding: 150px 0; overflow-x: hidden;">
        <div class="container">
          <div class="header-context text-left">
            <span class="small">Online Education</span>
            <h1 class="h3">Live. Learn. Share!</h1>
            <p class="header-description">
              Get instant access to hundreds of textbooks, course notes, (solved)
              assignments and lots of other resources that makes schooling easier on you. All you gotta do is
              help someone else
            </p>
            <div class="d-flex mt-4">
              <a href class="btn btn-accent btn-rounded px-4 shadow-lg">Get started</a>
              <!-- <input type="text" class="form-control header-search rounded-sm" placeholder="Search materials by name or course">
              <button class="btn btn-warning text-white ml-2"><i class="fas fa-search"></i></button>-->
            </div>
            <!-- <p class="text-center my-2">Or</p>
                <div class="text-center">
                  <a href="" class="btn-rounded shadow-md btn btn-outline-primary">Get started</a>
            </div>-->
          </div>
        </div>

        <div
          class="position-absolute d-md-block"
          style="right: -10px; top: 0; width: 45%; max-width: 500px; display: none;"
        >
          <img src="@/assets/img/./Img.svg" alt class="img-fluid" />
        </div>
      </div>
    </header>

    <main class="body py-5 container px-md-5">
      <section class="text-center py-4 d-flex flex-column align-items-center">
        <h5 class="text-uppercase mb-0 text-primary">What's this about?</h5>
        <h3 class="h4 my-3 font-weight-bold">Getting through school together</h3>
        <p style="max-width: 500px;" class="text-muted small">
          We believe that schooling is easier when students
          stick together. Our mission is to foster academic excellence via collaboration
        </p>
      </section>

      <div class="features row justify-content-center">
        <div class="col-md-4 d-flex justify-content-center">
          <div class="feature-card rounded-sm py-4 px-4">
            <div class="d-flex flex-column">
              <div
                class="mx-auto splash position-relative d-flex justify-content-center align-items-center"
                style="width: 120px"
              >
                <img src="@/assets/img/./splash-bg.svg" alt class="img-auto" />
                <div
                  class="position-absolute d-flex justify-content-center align-items-center"
                  style="top: 0; left: 0; right: 0; bottom: 0;"
                >
                  <span class="h1">
                    <i class="fas fa-school"></i>
                  </span>
                </div>
              </div>

              <div class="mt-auto text-center">
                <p class="title mb-3">Access to a large pool of learning material</p>
                <p
                  class="small"
                >You're no longer limited to your school. You can now compare notes with students of similar courses across different schools</p>
              </div>
              <!-- <span class="h1 text-secondary"><i class="fas fa-book-open"></i></span> -->
            </div>
          </div>
        </div>

        <div class="col-md-4 d-flex justify-content-center">
          <div class="feature-card rounded-sm py-4 px-4">
            <div class="d-flex flex-column">
              <div
                class="mx-auto splash position-relative d-flex justify-content-center align-items-center"
                style="width: 120px"
              >
                <img src="@/assets/img/./splash-bg.svg" alt class="img-auto" />
                <div
                  class="position-absolute d-flex justify-content-center align-items-center"
                  style="top: 0; left: 0; right: 0; bottom: 0;"
                >
                  <span class="h1">
                    <i class="fas fa-school"></i>
                  </span>
                </div>
              </div>

              <div class="mt-auto text-center">
                <p class="title mb-3">Less pointless googling</p>
                <p
                  class="small"
                >So, you have an impossible homework to which you can't find solutions online? Let your peers help you out!</p>
              </div>
              <!-- <span class="h1 text-secondary"><i class="fas fa-book-open"></i></span> -->
            </div>
          </div>
        </div>

        <div class="col-md-4 d-flex justify-content-center">
          <div class="feature-card rounded-sm py-4 px-4">
            <div class="d-flex flex-column">
              <div
                class="mx-auto splash position-relative d-flex justify-content-center align-items-center"
                style="width: 120px"
              >
                <img src="@/assets/img/./splash-bg.svg" alt class="img-auto" />
                <div
                  class="position-absolute d-flex justify-content-center align-items-center"
                  style="top: 0; left: 0; right: 0; bottom: 0;"
                >
                  <span class="h1">
                    <i class="fas fa-school"></i>
                  </span>
                </div>
              </div>

              <div class="mt-auto text-center">
                <p class="title mb-3">Smart Recommendations</p>
                <p
                  class="small"
                >You get notified whenever a new material is released that might be important to you!</p>
              </div>
              <!-- <span class="h1 text-secondary"><i class="fas fa-book-open"></i></span> -->
            </div>
          </div>
        </div>
      </div>

      <section class="text-center mt-5 py-4 d-flex flex-column align-items-center">
        <h3 class="h4 my-3 font-weight-bold">Recent Uploads</h3>
        <p style="max-width: 500px;" class="small text-muted">
          Here's a peek into some of the latest materials uploaded on our platform.
        </p>
      </section>

      <section class="recent-uploads">
        <div class="row">
          <div class="col-sm-6 col-md-4 mb-4 d-flex justify-content-center">
            <div class="upload-item rounded-sm shadow-sm">
              <div class="upload-preview">
                <img src="@/assets/img/preview.png" class="img-fluid" alt />
              </div>
              <div class="upload-body px-3 py-3">
                <div class="d-flex text-muted px-2 py-2">
                  <span class="small mr-auto">by Santiago</span>
                  <span class="small text-warning">OAU</span>
                </div>
                <h5 class="title h6 font-weight-bolder my-3 text-capitalize">
                  any the European Paintings:
                  From Leonardo to
                </h5>
                <p class="small fade-overflow text-muted">
                  Lorem ipsum dolor sit amet consectetur,
                  adipisicing elit. At, natus. Dolor ipsam quaerat enim reprehenderit quasi, obcaecati
                  tempora earum quibusdam suscipit possimus numquam eligendi. Qui, animi. Eius veritatis
                  minima similique?
                </p>
                <p class="text-center mt-3 small">
                  <a href class="btn btn-outline-secondary btn-sm px-3 btn-rounded">View/Download</a>
                </p>
              </div>
            </div>
          </div>

          <div class="col-sm-6 col-md-4 mb-4 d-flex justify-content-center">
            <div class="upload-item rounded-sm shadow-sm">
              <div class="upload-preview">
                <img src="@/assets/img/preview.png" class="img-fluid" alt />
              </div>
              <div class="upload-body px-3 py-3">
                <div class="d-flex text-muted px-2 py-2">
                  <span class="small mr-auto">by Santiago</span>
                  <span class="small text-warning">OAU</span>
                </div>
                <h5 class="title h6 font-weight-bolder my-3 text-capitalize">
                  any the European Paintings:
                  From Leonardo to
                </h5>
                <p class="small fade-overflow text-muted">
                  Lorem ipsum dolor sit amet consectetur,
                  adipisicing elit. At, natus.
                  Dolor ipsam quaerat enim reprehenderit quasi, obcaecati tempora earum quibusdam suscipit
                  possimus numquam
                  eligendi. Qui, animi. Eius veritatis minima similique?
                </p>
                <p class="text-center mt-3 small">
                  <a href class="btn btn-outline-secondary btn-sm px-3 btn-rounded">View/Download</a>
                </p>
              </div>
            </div>
          </div>

          <div class="col-sm-6 col-md-4 mb-4 d-flex justify-content-center">
            <div class="upload-item rounded-sm shadow-sm">
              <div class="upload-preview">
                <img src="@/assets/img/preview.png" class="img-fluid" alt />
              </div>
              <div class="upload-body px-3 py-3">
                <div class="d-flex text-muted px-2 py-2">
                  <span class="small mr-auto">by Santiago</span>
                  <span class="small text-warning">OAU</span>
                </div>
                <h5 class="title h6 font-weight-bolder my-3 text-capitalize">
                  any the European Paintings:
                  From Leonardo to
                </h5>
                <p class="small fade-overflow text-muted">
                  Lorem ipsum dolor sit amet consectetur,
                  adipisicing elit. At, natus.
                  Dolor ipsam quaerat enim reprehenderit quasi, obcaecati tempora earum quibusdam suscipit
                  possimus numquam
                  eligendi. Qui, animi. Eius veritatis minima similique?
                </p>
                <p class="text-center mt-3 small">
                  <a href class="btn btn-outline-secondary btn-sm px-3 btn-rounded">View/Download</a>
                </p>
              </div>
            </div>
          </div>

          <div class="col-sm-6 col-md-4 mb-4 d-flex justify-content-center">
            <div class="upload-item rounded-sm shadow-sm">
              <div class="upload-preview">
                <img src="@/assets/img/preview.png" class="img-fluid" alt />
              </div>
              <div class="upload-body px-3 py-3">
                <div class="d-flex text-muted px-2 py-2">
                  <span class="small mr-auto">by Santiago</span>
                  <span class="small text-warning">OAU</span>
                </div>
                <h5 class="title h6 font-weight-bolder my-3 text-capitalize">
                  any the European Paintings:
                  From Leonardo to
                </h5>
                <p class="small fade-overflow text-muted">
                  Lorem ipsum dolor sit amet consectetur,
                  adipisicing elit. At, natus.
                  Dolor ipsam quaerat enim reprehenderit quasi, obcaecati tempora earum quibusdam suscipit
                  possimus numquam
                  eligendi. Qui, animi. Eius veritatis minima similique?
                </p>
                <p class="text-center mt-3 small">
                  <a href class="btn btn-outline-secondary btn-sm px-3 btn-rounded">View/Download</a>
                </p>
              </div>
            </div>
          </div>

          <div class="col-sm-6 col-md-4 mb-4 d-flex justify-content-center">
            <div class="upload-item rounded-sm shadow-sm">
              <div class="upload-preview">
                <img src="@/assets/img/preview.png" class="img-fluid" alt />
              </div>
              <div class="upload-body px-3 py-3">
                <div class="d-flex text-muted px-2 py-2">
                  <span class="small mr-auto">by Santiago</span>
                  <span class="small text-warning">OAU</span>
                </div>
                <h5 class="title h6 font-weight-bolder my-3 text-capitalize">
                  any the European Paintings:
                  From Leonardo to
                </h5>
                <p class="small fade-overflow text-muted">
                  Lorem ipsum dolor sit amet consectetur,
                  adipisicing elit. At, natus.
                  Dolor ipsam quaerat enim reprehenderit quasi, obcaecati tempora earum quibusdam suscipit
                  possimus numquam
                  eligendi. Qui, animi. Eius veritatis minima similique?
                </p>
                <p class="text-center mt-3 small">
                  <a href class="btn btn-outline-secondary btn-sm px-3 btn-rounded">View/Download</a>
                </p>
              </div>
            </div>
          </div>

          <div class="col-sm-6 col-md-4 mb-4 d-flex justify-content-center">
            <div class="upload-item rounded-sm shadow-sm">
              <div class="upload-preview">
                <img src="@/assets/img/preview.png" class="img-fluid" alt />
              </div>
              <div class="upload-body px-3 py-3">
                <div class="d-flex text-muted px-2 py-2">
                  <span class="small mr-auto">by Santiago</span>
                  <span class="small text-warning">OAU</span>
                </div>
                <h5 class="title h6 font-weight-bolder my-3 text-capitalize">
                  any the European Paintings:
                  From Leonardo to
                </h5>
                <p class="small fade-overflow text-muted">
                  Lorem ipsum dolor sit amet consectetur,
                  adipisicing elit. At, natus.
                  Dolor ipsam quaerat enim reprehenderit quasi, obcaecati tempora earum quibusdam suscipit
                  possimus numquam
                  eligendi. Qui, animi. Eius veritatis minima similique?
                </p>
                <p class="text-center mt-3 small">
                  <a href class="btn btn-outline-secondary btn-sm px-3 btn-rounded">View/Download</a>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="my-4">
          <div class="text-center">
            <a href class="btn-rounded px-4 btn btn-primary shadow-lg">View All Materials</a>
          </div>
        </div>
      </section>

      <section class="py-5">
        <div class="row align-items-center py-4">
          <div class="col-md-6 d-md-block" style="display: none">
            <img src="@/assets/img/./group-3.svg" class="img-fluid" alt />
          </div>
          <div class="col-md-6" style="max-width: 400px;">
            <h3 class="h4 mb-4 font-weight-bold">
              Get the limitless learning with
              more possibilities
            </h3>
            <p class="mb-4 text-muted small">
              You need to be sure there isn't anything embarrassing hidden
              in the middle of text. All the Lorem Ipsum generators on the
              Internet tend to repeat.
            </p>
            <a href class="btn btn-rounded px-4 btn-primary shadow-lg">TRY IT NOW</a>
          </div>
        </div>
      </section>

      <section class="py-3">
        <div class="row align-items-center py-4">
          <div class="col-md-6 ml-auto" style="max-width: 400px;">
            <h3 class="h4 mb-4 font-weight-bold">
              Get the limitless learning with
              more possibilities
            </h3>
            <p class="mb-4 text-muted small">
              You need to be sure there isn't anything embarrassing hidden
              in the middle of text. All the Lorem Ipsum generators on the
              Internet tend to repeat.
            </p>
            <a href class="btn btn-rounded px-4 btn-primary shadow-lg">TRY IT NOW</a>
          </div>

          <div class="col-md-6 d-md-block" style="display: none">
            <img src="@/assets/img/./group-4.svg" class="img-fluid" alt />
          </div>
        </div>
      </section>
    </main>

    <section class="py-5 bg-primary text-white">
      <div class="container">
        <div class="d-flex justify-content-center flex-columns">
          <div class="py-4 faq d-flex flex-column">
            <h2 class="text-center font-weight-bolder">Important Faq</h2>
            <p style="max-width: 500px;" class="mx-auto small text-center mb-5">
              You need to be sure there isn't anything embarrassing hidden in the
              middle of
              text. All the Lorem Ipsum generators on the Internet tend
            </p>

            <div class="px-4 py-4 faq-item rounded-sm bg-accent-faded">
              <p
                class="title"
              >Contrary to popular belief, Lorem Ipsum is not simply random text. It has roo</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <main-footer class="mt-0"></main-footer>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import MainFooter from "../components/MainFooter";
export default {
  name: "home",
  computed: {
    loggedIn() {
      return !!localStorage.getItem("token");
    }
  },
  components: {
    MainFooter
  }
};
</script>
