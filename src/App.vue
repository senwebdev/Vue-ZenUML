<template>
  <div id="app">
    <seq-diagram/>
  </div>
</template>

<script>
import { SeqDiagram } from "vue-sequence";

export default {
  name: "App",
  components: {
    SeqDiagram
  }
};
</script>

<style>
.comments {
  text-align: left;
}
</style>
