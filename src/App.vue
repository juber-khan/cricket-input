<template>
    <div class="container">
       <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="#">Cricket Input Tool</a>
      </nav>
        <Matches/>
    </div>
</template>

<script>
import Matches from "./components/Matches.vue";

export default {
  name: "App",
  components: {
    Matches
  }
};
</script>

<style>
</style>
