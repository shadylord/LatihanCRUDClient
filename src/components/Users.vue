<template>
  <div class="row">
    <div class="col" v-if="users.length > 0">
      <table class="table table-hover">
        <thead>
          <tr class="table-primary">
            <th scope="col">No</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          <User
            v-for="(user, index) in users"
            :key="user.id"
            v-bind:user="user"
            v-bind:userId="index"
          ></User>
        </tbody>
      </table>
    </div>

    <div class="col" v-else>
      <p>There is no user yet, please create one.</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";

import User from "./User.vue";

export default {
  data() {
    return {
      users: []
    };
  },
  components: {
    User
  },
  mounted() {
    axios
      .get("http://localhost:3000/users")
      .then(response => (this.users = response.data))
      .catch(error => console.log(error));
  }
};
</script>

<style scoped>
</style>
