<template>
  <div class="map-wrap">
    <!-- <a href="https://www.maptiler.com" class="watermark"><img
        src="https://api.maptiler.com/resources/logo.svg" alt="MapTiler logo"/></a> -->
    <div class="map" ref="mapContainer"></div>
  </div>
</template>

<script>
import { Map, NavigationControl, Marker } from '@maptiler/sdk';
import { shallowRef, onMounted, onUnmounted, markRaw } from 'vue';
import '@maptiler/sdk/dist/maptiler-sdk.css';

export default {
  name: "Map",
  setup() {
    const mapContainer = shallowRef(null);
    const map = shallowRef(null);

    onMounted(() => {
      const apiKey = "23h4mgdAZct3G9ggDDGt";

      const initialState = { lng: 139.753, lat: 35.6844, zoom: 14 };

      map.value = markRaw(new Map({
        container: mapContainer.value,
        style: `https://api.maptiler.com/maps/streets-v2/style.json?key=${apiKey}`,
        center: [initialState.lng, initialState.lat],
        zoom: initialState.zoom,
      }));
      map.value.addControl(new NavigationControl(), 'top-right');

      const marker = new Marker({ color: "#FF0000" })
        .setLngLat([139.7525, 35.6846])
        .addTo(map.value);
    });

    onUnmounted(() => {
      map.value?.remove();
    });

    return {
      map, mapContainer
    };
  }
};
</script>

<style scoped>
.map-wrap {
  position: relative;
  width: 100%;
  height: calc(100vh - 77px); /* calculate height of the screen minus the heading */
}

.map {
  position: absolute;
  width: 100%;
  height: 100%;
}

.watermark {
  position: absolute;
  left: 10px;
  bottom: 10px;
  z-index: 999;
}
</style>
