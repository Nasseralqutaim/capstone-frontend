<script>
import axios from "axios";

export default {
  data: function () {
    return {
      message: "Find about your city's history",
      address_users: [],
      newAddress_userParams: {},
    };
  },
  created: function () {},
  methods: {},

  createAddress_user: function () {
    axios
      .post("/address_users", this.newAddress_userParams)
      .then((response) => {
        console.log("address_users create", response);
        this.address_users.push(response.data);
        this.newAddress_userParams = {};
      })
      .catch((error) => {
        console.log("address_user error", error.response);
      });
  },
};
</script>

<template>
  <div class="home">
    <div class="section-title">
      <h2>{{ message }}</h2>
    </div>

    <div
      class="bg-image"
      style="
        background-image: url('https://images.unsplash.com/photo-1548129858-6dcdbf465715?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80');
        height: 100vh;
        margin: 3;
      "
    ></div>
  </div>
</template>

<style></style>
