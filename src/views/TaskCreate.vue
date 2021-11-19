<template>
  <div>
    <h2 align="center">Create New Task</h2>
    <b-form>
      <b-form-group
        id="input-group-1"
        label="Task name:"
        label-for="input-1"
        class="mt-2 mb-3"
      >
        <b-form-input
          id="input-1"
          type="text"
          placeholder="Enter task"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-2"
        label="Task Description:"
        label-for="textarea"
        class="mt-2 mb-3"
      >
        <b-form-textarea
          id="textarea"
          v-model="text"
          placeholder="Enter description"
          rows="3"
          max-rows="6"
        ></b-form-textarea>
      </b-form-group>
      <b-button-group class="w-100">
        <b-button type="submit" variant="light">Cancel</b-button>
        <b-button type="reset" variant="success">Save</b-button>
      </b-button-group>
    </b-form>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
