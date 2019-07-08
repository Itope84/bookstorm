<template>
    <div class="navbar-wrapper">
        <nav class="navbar navbar-expand-lg bg-primary fixed-top bg-transparent">
        <div class="container">
          <a class="navbar-brand text-white" href="#">Navbar</a>
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
                <a class="nav-link" href="#">
                  Home
                  <span class="sr-only">(current)</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Materials</a>
              </li>
              
              <li class="nav-item">
                <a class="nav-link" href="#">Peer Assist</a>
              </li>
              

              <li class="nav-item">
                <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
              </li>
            </ul>
            <form class="form-inline my-2 my-lg-0">
              <router-link to="/login" href="#" class="btn flat-btn-accent btn-rounded text-white px-4 mr-2">Login</router-link>
              <a href class="btn btn-white btn-rounded px-4 shadow-lg">Sign Up</a>
            </form>
          </div>
        </div>
      </nav>
    </div>
</template>
