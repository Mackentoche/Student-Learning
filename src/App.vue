<template>
  <div id="app" class="d-flex flex-column h-100">
    <nav-bar />
    <div class="container flex-grow-1">
      <error />
      <div class="mt-5">
        <router-view />
      </div>

    </div>
    <footer class="bg-light text-center p-3">
      <div class="text-center hero">
    <img class="mb-3 app-logo" src="https://www.logolynx.com/images/logolynx/3b/3bdecaf929b2bc6bf4526e20d1097f2f.jpeg" alt="Vue.js logo" width="120" /></div>
      <p>
        Stundent+, a place for inclusive learning 
      </p>
      <div class="row" bacm>
  <div class="col-sm"><h6 style=" font-family: 'Courier New', monospace">About</h6><p> Student+ is designed to be the one stop to all inclusive learning. We offer help with numeorus courses and materials. Please take a look at what we offer, we hope you've found what you look for</p> </div>
  <div class="col-sm"><h6 style=" font-family: 'Courier New', monospace">Categories</h6></div>
  <div class="col-sm"><h6>Quick Links</h6> <li>About us</li>
                                            <li>About me </li>
                                            <li>Donate</li> </div>
</div>
    </footer>
  </div>
</template>

<script>
import NavBar from "./components/NavBar";
import Error from "./components/Error";

export default {
  components: {
    NavBar,
    Error
  }
};
</script>
