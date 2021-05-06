<template>
  <div class="nav-container mb-3">
    <nav class="navbar navbar-expand-md navbar-light bg-light">
      <div class="container">
        <div class="text-center hero">
    </div>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
    <img class="mb-3 app-logo" src="https://bcc-logos.s3.us-east-2.amazonaws.com/GIFS/Brookdale-in-Athletic-Format.gif" alt="Vue.js logo" width="200" height="120"/>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav mr-auto" >
            <li class="nav-item">
              <router-link to="/" class="nav-link">Home</router-link>
            </li>
          </ul>
          

          
          

          <ul class="navbar-nav " v-if="$auth.isAuthenticated">
            <li class="nav-item">
              <router-link to="/Courses" class="nav-link">Courses</router-link>
            </li>
          </ul>

          <ul class="navbar-nav " v-if="$auth.isAuthenticated">
            <li class="nav-item">
              <router-link to="/Extra" class="nav-link">Extra Curriculars</router-link>
            </li>
          </ul>



          <ul class="navbar-nav " v-if="$auth.isAuthenticated">
            <li class="nav-item">
               <input class="form-control" type="text" placeholder="Search" aria-label="Search..."/>
            </li>
          </ul>

          

          <ul class="navbar-nav d-none d-md-block">
            <li v-if="!$auth.isAuthenticated && !$auth.loading" class="nav-item">
              <button
                id="qsLoginBtn"
                class="btn btn-primary btn-margin"
                @click.prevent="login"
              >Login</button>
            </li>

            <li class="nav-item dropdown" v-if="$auth.isAuthenticated">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="profileDropDown"
                data-toggle="dropdown"
              >
                <img
                  :src="$auth.user.picture"
                  alt="User's profile picture"
                  class="nav-user-profile rounded-circle"
                  width="50"
                />
              </a>
              <div class="dropdown-menu dropdown-menu-right">
                <div class="dropdown-header">{{ $auth.user.name }}</div>
                <router-link to="/profile" class="dropdown-item dropdown-profile">
                  <font-awesome-icon class="mr-3" icon="user" />Profile
                </router-link>
                 <router-link to="/MyCourses" class="dropdown-item dropdown-profile">
                  <font-awesome-icon class="mr-3" icon="" />MyCourses
                </router-link>
                <a id="qsLogoutBtn" href="#" class="dropdown-item" @click.prevent="logout">
                  <font-awesome-icon class="mr-3" icon="power-off" />Log out
                </a>
              </div>
            </li>
          </ul>

          <ul class="navbar-nav d-md-none" v-if="!$auth.isAuthenticated && !$auth.loading">
            <button id="qsLoginBtn" class="btn btn-primary btn-block" @click="login">Log in</button>
          </ul>

          <ul
            id="mobileAuthNavBar"
            class="navbar-nav d-md-none d-flex"
            v-if="$auth.isAuthenticated"
          >
            <li class="nav-item">
              <span class="user-info">
                <img
                  :src="$auth.user.picture"
                  alt="User's profile picture"
                  class="nav-user-profile d-inline-block rounded-circle mr-3"
                  width="50"
                />
                <h6 class="d-inline-block">{{ $auth.user.name }}</h6>
              </span>
            </li>
            <li>
              <font-awesome-icon icon="user" class="mr-3" />
              <router-link to="/profile">Profile</router-link>
            </li>

            <li>
              <font-awesome-icon icon="power-off" class="mr-3" />
              <a id="qsLogoutBtn" href="#" class @click.prevent="logout">Log out</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  methods: {
    login() {
      this.$auth.loginWithRedirect();
    },
    logout() {
      this.$auth.logout();
      this.$router.push({ path: "/" });
    }
  }
};
</script>

<style>
#mobileAuthNavBar {
  min-height: 125px;
  justify-content: space-between;
}
</style>
