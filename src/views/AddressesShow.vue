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

    <router-link to="/addresses">Back to all cities</router-link>
  </div>
</template>

<style></style>
