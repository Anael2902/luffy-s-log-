<template>
    <nav class="navbar navbar-dark bg-danger bg-gradient fixed-top">
      <div class="container-fluid">
        <router-link class="navbar-brand" to="/map"><img src="@/assets/img/icon-nami.png" class="img-fluid" style="height: 45px"/></router-link>
        <router-link class="navbar-brand" to="/">Luffy'sLog</router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="offcanvas offcanvas-end text-bg-danger bg-gradient" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">Journal de bord</h5>
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div class="offcanvas-body">
            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li class="nav-item">
                <router-link class="nav-link active" aria-current="page" to="/">Home</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/link">Account</router-link>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Param&log
                </a>
                <ul class="dropdown-menu dropdown-menu-dark">
                  <li><router-link class="dropdown-item" to="/register">Signup</router-link></li>
                  <li><router-link class="dropdown-item" to="/login">Login</router-link></li>
                  <li>
                    <hr class="dropdown-divider">
                  </li>
                 
                  <li><router-link class="dropdown-item" to="/parameter">Parameters</router-link></li>
                </ul>
              </li>
            </ul>
            <form class="d-flex mt-3" role="search">
              <input class="form-control me-2" type="Search" placeholder="Search friend or city" aria-label="Search">
              <button class="btn btn-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </div>
    </nav>
  </template>
  

  <script setup>
   
  </script>
  
  <style scoped>
  
  </style>
  