<script>
import axios from "axios";

export default {
  data: function () {
    return {
      address: {},
    };
  },
  created: function () {
    this.showAddress();
  },
  // mounted: function () {
  //   mapboxgl.accessToken = process.env.VUE_APP_MAPBOX_API_KEY;
  //   const map = new mapboxgl.Map({
  //     container: "map", // container ID
  //     style: "mapbox://styles/mapbox/streets-v11", // style URL
  //     center: [-87.6298, 41.8781], // starting position [lng, lat]
  //     zoom: 8, // starting zoom
  //   });
  //   // Create a default Marker and add it to the map.
  //   const marker1 = new mapboxgl.Marker().setLngLat([-87.6298, 41.8781]).addTo(map);

  //   // Create a default Marker, colored black, rotated 45 degrees.
  //   const marker2 = new mapboxgl.Marker({ color: "black", rotation: 45 }).setLngLat([-87.6298, 41.8781]).addTo(map);
  //   console.log(map, marker1, marker2);
  // },

  methods: {
    showAddress: function () {
      axios.get("/addresses/" + this.$route.params.id + ".json").then((response) => {
        console.log("Show address", response.data);
        this.address = response.data;
        // document.getElementById("osm").contentWindow.location.reload();
        const name = this.address.state;
        const nameCapitalized = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
        document.getElementById(
          "osm"
        ).src = `https://osm4wiki.toolforge.org/cgi-bin/wiki/wiki-osm.pl?project=en&article=List_of_National_Historic_Landmarks_in_${nameCapitalized}`;
      });
    },
  },
};
</script>

<template>
  <div class="addresses-show">
    <h2>{{ address.city }}</h2>
    <p>City: {{ address.city }}</p>
    <p>State: {{ address.state }}</p>
    <br />
    <a v-bind:href="`https://www.getyourguide.com/s/?q=${address.city},%20${address.state}`">
      Things to do in {{ address.city }}
    </a>
    <br />

    <iframe id="osm" width="100%" height="500" frameborder="0"></iframe>

    <p>Signficent Historical Events: {{ address.historical_event }}</p>
    <router-link to="/addresses">Back to all Addresses</router-link>
  </div>
</template>

<style></style>
