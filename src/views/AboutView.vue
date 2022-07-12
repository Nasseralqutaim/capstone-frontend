<!-- <script>
/* global mapboxgl */

export default {
  data: function () {
    return {};
  },
  mounted: function () {
    mapboxgl.accessToken = process.env.VUE_APP_MAPBOX_API_KEY;
    const map = new mapboxgl.Map({
      container: "map", // container ID
      style: "mapbox://styles/mapbox/streets-v11", // style URL
      center: [-87.6298, 41.8781], // starting position [lng, lat]
      zoom: 8, // starting zoom
    });
    // Create a default Marker and add it to the map.
    const marker1 = new mapboxgl.Marker().setLngLat([-87.6298, 41.8781]).addTo(map);

    // Create a default Marker, colored black, rotated 45 degrees.
    const marker2 = new mapboxgl.Marker({ color: "black", rotation: 45 }).setLngLat([-87.6298, 41.8781]).addTo(map);
    console.log(map, marker1, marker2);
  },
  methods: {},
};
</script>

<template>
  <div class="about">
    <h1>this is an about page</h1>
    <div id="map"></div>
  </div>
</template>

<style>
body {
  margin-left: 2000000;
  margin-right: 2000000;
  padding: 2000000;
}
#map {
  position: absolute;
  top: 5;
  bottom: 0;
  width: 100%;
  height: 65%;
}
</style> -->
