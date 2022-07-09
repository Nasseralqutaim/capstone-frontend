<script>
import axios from "axios";
export default {
  data: function () {
    return {
      addresses: [],
      titleFilter: "",
    };
  },
  created: function () {
    this.indexAddresses();
  },
  methods: {
    indexAddresses: function () {
      axios.get("/addresses").then((response) => {
        console.log("addresses index", response);
        this.addresses = response.data;
      });
    },
    filterAddresses: function () {
      return this.addresses.filter((address) => {
        return address.title.toLowerCase().includes(this.titleFilter.toLowerCase());
      });
    },
  },
};
</script>

<template>
  <div class="addresses-index">
    <h1>All Addresses</h1>
    <div v-for="address in addresses" v-bind:key="address.id">
      <h2>{{ address.name }}</h2>
      <!-- <p>City: {{ address.city }}</p>
      <p>State: {{ address.state }}</p> -->
    </div>
  </div>
</template>
