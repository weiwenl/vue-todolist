<template>
  <div id="app">
    <ToDoListContainer />
  </div>
</template>

<script>
import ToDoListContainer from "@/components/ToDoListContainer.vue";
export default {
  name: "App",
  components: {
    ToDoListContainer,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
