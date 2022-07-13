<script>
import axios from "axios";
export default {
  data: function () {
    return {
      addresses: [],
      cityFilter: "",
    };
  },
  created: function () {
    this.indexAddresses();
  },
  methods: {
    indexAddresses: function () {
      axios.get("/addresses.json").then((response) => {
        console.log("addresses index", response);
        this.addresses = response.data;
      });
    },
    filterAddresses: function () {
      return this.addresses.filter((address) => {
        return address.city.toLowerCase().includes(this.cityFilter.toLowerCase());
      });
    },
  },
};
</script>

<template>
  <div class="addresses-index">
    <div class="section-title">
      <h2>All cities</h2>
    </div>

    <div class="mb-5">
      Find a city:
      <input v-model="cityFilter" type="text" />
    </div>
    <div v-for="address in filterAddresses()" v-bind:key="address.id" class="col">
      <p>City: {{ address.city }}</p>
      <p>State: {{ address.state }}</p>

      <router-link v-bind:to="`/addresses/${address.id}`">More details</router-link>
    </div>
  </div>
</template>

<style></style>
