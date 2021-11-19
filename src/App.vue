<template>
  <div id="app">
    <NavBar />
    <ToDoListContainer />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import ToDoListContainer from "./components/ToDoListContainer.vue";

export default {
  name: "App",
  components: {
    NavBar,
    ToDoListContainer,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
