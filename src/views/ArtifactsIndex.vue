<script>
import axios from "axios";
/* global mapboxgl */

export default {
  data: function () {
    return {
      artifacts: [],
    };
  },
  created: function () {
    this.indexArtifacts();
  },
  methods: {
    indexArtifacts: function () {
      axios.get("/artifacts.json").then((response) => {
        console.log("artifacts index", response);
        this.artifacts = response.data;
      });
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
  },
};
</script>

<template>
  <div class="artifacts-index">
    <h1>All artifacts</h1>
    <div v-for="artifact in artifacts" v-bind:key="artifact.id"></div>
    <router-link v-bind:to="`/photos/${photo.id}`">More details</router-link>
  </div>
</template>
