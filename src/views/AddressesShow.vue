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
      axios.get("/address/" + this.$route.params.id + ".json").then((response) => {
        console.log("Show address", response.data);
        this.address = response.data;
      });
    },
    destroyAddress: function (address) {
      axios.delete("/address/" + address.id + ".json").then((response) => {
        console.log("success", response.data);
        this.$router.push("/address");
      });
    },
  },
};
</script>

<template>
  <div class="home">
    <h2>Title: {{ address.title }}</h2>
    <!-- <p>City: {{ address.city }}</p>
    <p>State: {{ address.state }}</p> -->

    <div v-if="address.owner">
      <a v-bind:href="`/addresses/${address.id}/edit`">Edit address</a>
    </div>
    <div v-if="address.owner">
      <button v-on:click="destroyAddress(address)">Destroy address</button>
    </div>
    <div>
      <a href="/addresses">Back to all address</a>
    </div>
  </div>
</template>

<style></style>
