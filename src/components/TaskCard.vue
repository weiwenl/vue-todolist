<template>
  <div>
    <b-card>
      <b-row>
        <b-col> Completed Button </b-col>
        <b-col>
          <h4>{{ task.title }}</h4>
          <h6 class="text-secondary">{{ task.description }}</h6>
        </b-col>
      </b-row>
      <b-row>
        <b-card-text align="right">{{ task.createdDate }}</b-card-text>
      </b-row>
    </b-card>
  </div>
</template>

<script>
export default {
  props: {
    task: Object,
  },
};
</script>

<style></style>
