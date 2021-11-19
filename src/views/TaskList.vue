<template>
  <div>
    <h2>My Tasks</h2>
    <h4>Let's be productive today.</h4>
    <TaskCard v-for="task in tasks" :key="task.id" :task="task" />
  </div>
</template>

<script>
import TaskCard from "@/components/TaskCard.vue";
import axios from "axios";
export default {
  components: {
    TaskCard,
  },
  data() {
    return {
      tasks: [],
    };
  },
  created() {
    axios
      .get("http://localhost:3000/tasks")
      .then((response) => {
        console.log(response);
        this.tasks = response.data;
      })
      .catch((error) => {
        console.log("There was an error:", error.response);
      });
  },
};
</script>

<style></style>
