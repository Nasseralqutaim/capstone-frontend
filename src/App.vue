<script>
export default {
  data: function () {
    return {
      isLoggedIn: false,
    };
  },
  watch: {
    $route: function () {
      console.log("Route has changed!");
      this.isLoggedIn = localStorage.jwt;
    },
  },
};
</script>

<template>
  <!-- ======= Header ======= -->
  <header id="header" class="fixed-top">
    <div class="container d-flex align-items-center justify-content-between">
      <h1 class="logo"><a href="index.html">Connect to the past</a></h1>
      <!-- Uncomment below if you prefer to use an image logo -->
      <!-- <a href="index.html" class="logo"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>-->

      <nav id="navbar" class="navbar">
        <ul>
          <li><a class="nav-link scrollto active" href="/hero">Home</a></li>
          <li><a class="nav-link scrollto" href="/about">About</a></li>
          <li><a class="nav-link scrollto" href="/singup">Singup</a></li>
          <li><a class="nav-link scrollto o" href="/login">login</a></li>
          <li><a class="nav-link scrollto" href="/addresses">Find a city</a></li>
          <li><a class="nav-link scrollto" href="historical events">Historical events</a></li>
          <li class="dropdown">
            <a href="#">
              <span>More Features</span>
              <i class="bi bi-chevron-down"></i>
            </a>
            <ul>
              <li><a href="#">Drop Down 1</a></li>
              <li class="dropdown">
                <a href="#">
                  <span>Deep Drop Down</span>
                  <i class="bi bi-chevron-right"></i>
                </a>
                <ul>
                  <li><a href="#">Deep Drop Down 1</a></li>
                  <li><a href="#">Deep Drop Down 2</a></li>
                  <li><a href="#">Deep Drop Down 3</a></li>
                  <li><a href="#">Deep Drop Down 4</a></li>
                  <li><a href="#">Deep Drop Down 5</a></li>
                </ul>
              </li>
              <li><a href="#">Drop Down 2</a></li>
              <li><a href="#">Drop Down 3</a></li>
              <li><a href="#">Drop Down 4</a></li>
            </ul>
          </li>
        </ul>
        <i class="bi bi-list mobile-nav-toggle"></i>
      </nav>
      <!-- .navbar -->
    </div>
  </header>
  <!-- End Header -->
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <nav>
    <!-- <router-link to="/">Home</router-link>
    |
    <router-link to="/about">Add Historical events</router-link>
    |
    <router-link v-if="!isLoggedIn" to="/signup">Signup</router-link>
    |
    <router-link v-if="!isLoggedIn" to="/login">Login</router-link>
    |
    <router-link v-if="isLoggedIn" to="/logout">Logout</router-link>
    |
    <router-link to="/addresses">All cities</router-link> -->
  </nav>

  <router-view />

  <!-- ======= Footer ======= -->
  <footer id="footer">
    <div class="footer-top">
      <div class="container">
        <div class="row">
          <div class="col-lg-3 col-md-6 footer-contact"></div>

          <div class="col-lg-4 col-md-6 footer-newsletter">
            <h4>This project is yet to have more uniqe features</h4>
            <p>Add your email below to access the recent ones!</p>
            <form action="" method="post">
              <input type="email" name="email" />
              <input type="submit" value="Subscribe" />
            </form>
          </div>
        </div>
      </div>
    </div>

    <div class="container d-md-flex py-4">
      <div class="me-md-auto text-center text-md-start">
        <div class="copyright">
          &copy; Copyright
          <strong><span>OnePage</span></strong>
          . All Rights Reserved
        </div>
        <div class="credits">
          <!-- All the links in the footer should remain intact. -->
          <!-- You can delete the links only if you purchased the pro version. -->
          <!-- Licensing information: https://bootstrapmade.com/license/ -->
          <!-- Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/onepage-multipurpose-bootstrap-template/ -->
          Designed by
          <a href="https://bootstrapmade.com/">BootstrapMade</a>
        </div>
      </div>
      <div class="social-links text-center text-md-right pt-3 pt-md-0">
        <a href="#" class="twitter"><i class="bx bxl-twitter"></i></a>
        <a href="#" class="facebook"><i class="bx bxl-facebook"></i></a>
        <a href="#" class="instagram"><i class="bx bxl-instagram"></i></a>
        <a href="#" class="google-plus"><i class="bx bxl-skype"></i></a>
        <a href="#" class="linkedin"><i class="bx bxl-linkedin"></i></a>
      </div>
    </div>
  </footer>
  <!-- End Footer -->

  <div id="preloader"></div>
  <a href="#" class="back-to-top d-flex align-items-center justify-content-center">
    <i class="bi bi-arrow-up-short"></i>
  </a>

  <!-- gallery in About page -->
  <SimpleGallery galleryID="my-test-gallery" :images="images" />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 5px;
  border: 5px;
  margin: 5;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #2c3e50;
}
</style>
