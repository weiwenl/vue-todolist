<template>
  <b-nav justified align="center">
    <b-nav-item
      active-class="active"
      class="nav-link"
      v-for="routes in links"
      :key="routes.id"
      :to="routes.path"
    >
      {{ routes.name }}
    </b-nav-item>
  </b-nav>
</template>

<script>
export default {
  data() {
    return {
      links: [
        {
          id: 0,
          path: "/",
          name: "My Tasks",
        },
        {
          id: 1,
          path: "/create",
          name: "New Task",
        },
      ],
    };
  },
};
</script>
