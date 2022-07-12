<script>
import axios from "axios";
export default {
  data: function () {
    return {
      artifact: {},
    };
  },
  created: function () {
    axios.get("/artifacts/" + this.$route.params.id).then((response) => {
      console.log("artifacts show", response);
      this.artifact = response.data;
    });
  },
  methods: {},
};
</script>

<template>
  <div class="artifacts-show"></div>
</template>
