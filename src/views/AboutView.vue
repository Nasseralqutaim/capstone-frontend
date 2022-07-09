<!-- <div id="map"></div>
<script>
/* global mapboxgl*/

export default {
  data: function () {},
  mounted: function () {
    mapboxgl.accessToken = "pk.eyJ1IjoiZHF1dCIsImEiOiJjbDVhMjFtbTAwN3c5M2xvN3hkMTV5cmNtIn0.LN65tHleknenlufqUSb9bw";
    const map = new mapboxgl.Map({
      container: "map", // container ID
      style: "mapbox://styles/mapbox/streets-v11", // style URL
      center: [-74.5, 40], // starting position [lng, lat]
      zoom: 9, // starting zoom
    });
  },
  methods: {},
};

console.log(map);
</script>

<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div id="map"></div>
  </div>
</template>

<style>
body {
  margin: 0;
  padding: 0;
}
#map {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
}
</style> -->
