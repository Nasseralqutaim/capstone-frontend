<script>
import axios from "axios";

export default {
  data: function () {
    return {
      message: "Welcome to Nasser Capstone!",
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
    <h1>{{ message }}</h1>
    user_id:
    <input type="text" v-model="newAddress_userParams.user_id" />
    address_id:
    <input type="text" v-model="newAddress_userParams.address_id" />
  </div>
</template>

<style></style>
