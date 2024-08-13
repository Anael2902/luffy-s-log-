<template>
  <div class="container-fluid p-0">
    <div class="row m-0">
      <div class="col-12 p-0">
        <div class="bg-image"
             style="background-image: url('https://wallpaper.forfun.com/fetch/1e/1eef38ca5bb584b4f0429a79b1f50201.jpeg'); 
                    height: 100vh;">

          <div class="d-flex flex-column justify-content-center align-items-center h-100 text-center text-white">
            <div>
              <button class="btn btn-secondary btn-lg">
                <router-link to="/about" class="text-white">Open our new World🌍️</router-link>
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.bg-image {
  background-size: cover; /* Couvre toute la surface du conteneur avec l'image */
  background-position: center; /* Centre l'image horizontalement et verticalement */
  width: 100vw; /* Largeur de l'image de fond égale à la largeur de la fenêtre */
}
button {
  border: none;
  background-color: transparent;
  /* rgba(37, 37, 145, 0.519); */

  cursor: pointer;
}

button .text-info {
  text-decoration: none;
}
</style>

