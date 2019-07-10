<template>
  <tr>
    <th scope="row">{{ userId + 1 }}</th>
    <td>{{ user.name }}</td>
    <td>{{ user.email }}</td>
    <td>
      <button type="button" class="btn btn-warning" v-on:click="updateUser">Edit</button>
    </td>
    <td>
      <button type="button" class="btn btn-danger" v-on:click="deleteUser">Delete</button>
    </td>
  </tr>
</template>

<script>
import axios from "axios";

export default {
  props: ["user", "userId"],
  methods: {
    updateUser() {
      this.$router.push(`/users/update/${this.user.id}`);
    },
    deleteUser() {
      axios
        .delete(`http://localhost:3000/users/delete/${this.user.id}`)
        .then(response => {
          this.$router.go();
        })
        .catch(error => console.log(error));
    }
  }
};
</script>

