<template>
    <div class="card" style="width: 18rem;">
      <div class="form-check form-switch">
        <input type="checkbox" class="form-check-input" id="checkbox" v-model="isDarkMode" @change="toggleDarkMode">
        <label class="form-check-label" for="checkbox">Dark Mode</label>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'DarkModeToggle',
    // data() : Ajout de la propriété isDarkMode pour stocker l'état du mode sombre
    data() {
      return {
        isDarkMode: false
      };
    },
    // mounted() : Initialisation de l'état du mode sombre en vérifiant le localStorage et en appelant setDarkMode si nécessaire.
    mounted() {
      if (localStorage.getItem('theme') === 'dark') {
        this.isDarkMode = true;
        this.setDarkMode();
      }
    },
    watch: {
      isDarkMode(newVal) {
        if (newVal) {
          this.setDarkMode();
        } else {
          this.unsetDarkMode();
        }
      }
    },
    methods: {
      toggleDarkMode() {
        if (this.isDarkMode) {
          this.setDarkMode();
        } else {
          this.unsetDarkMode();
        }
      },
      setDarkMode() {
        document.body.classList.add('darkmode');
        localStorage.setItem('theme', 'dark');
      },
      unsetDarkMode() {
        document.body.classList.remove('darkmode');
        localStorage.removeItem('theme');
      }
    }
  };
  </script>
  
  <style>
  .checkbox {
    width: 300px;
    margin: 100px auto;
  }
  
  /* darkmode */
  .darkmode {
    background-color: black;
    color: white;
  }
  
  /* .darkmode.card{
    background-color: #3d3d3d;
  } */
  
  .form-check {
    margin-top: 30px;
    margin-left: 30px;
  }
  
  #checkbox {
    width: 50px;
    height: 20px;
    cursor: pointer;
  }
  </style>
  