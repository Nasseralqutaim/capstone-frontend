<script>
import axios from "axios";
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
      axios.get("/artifacts").then((response) => {
        console.log("artifacts index", response);
        this.artifacts = response.data;
      });
    },
  },
};
</script>

<template>
  <div class="home">
    <h1>All Artifacts</h1>
    <div v-for="artifact in artifacts" v-bind:key="artifact.id"></div>
  </div>
</template>

<style></style>
