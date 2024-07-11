<template>
    <div id="map" style="width: 600px; height: 400px;"></div>
  </template>
  
  <script>
  export default {
    name: 'MapView',
    data() {
      return {
        map: null, // Stocker l'instance de la carte
      };
    },
    mounted() {
      // Charger le script Leaflet dynamiquement
      const script = document.createElement('script');
      script.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";
      script.integrity = "sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo=";
      script.crossOrigin = "";
      script.onload = () => {
        // Initialiser la carte une fois le script chargé
        this.initializeMap();
      };
      document.head.appendChild(script);
    },
    methods: {
      initializeMap() {
        // Vérifier si L (Leaflet) est chargé
        if (typeof L !== 'undefined') {
          this.map = L.map('map').setView([51.505, -0.09], 13);
  
          L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
          }).addTo(this.map);
        } else {
          console.error('Leaflet n\'est pas chargé.');
        }
      },
    },
    beforeDestroy() {
      // Vérifier si la carte existe et la détruire
      if (this.map) {
        this.map.remove();
      }
    },
  };
  </script>
  
  <style>
  #map {
    width: 100%;
    height: 100vh;
  }
  </style>
  