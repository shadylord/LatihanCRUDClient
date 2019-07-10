<template>
  <div class="row justify-content-center">
    <div class="col-12 col-sm-6 col-md-8">
      <form v-on:submit.prevent>
        <div class="form-group">
          <label for="name">Name</label>
          <input
            type="text"
            class="form-control"
            id="name"
            placeholder="Enter your name"
            v-model="user.name"
          />

          <!-- error handler untuk name -->
          <div v-if="submitted">
            <small
              id="errorName"
              class="form-text text-danger"
              v-if="!$v.user.name.required"
            >Name is required!</small>

            <small
              id="errorName"
              class="form-text text-danger"
              v-if="!$v.user.name.minLength"
            >Name must be at least 5 characters!</small>
          </div>
        </div>

        <div class="form-group">
          <label for="password">Password</label>
          <input
            type="password"
            class="form-control"
            id="password"
            placeholder="Enter your password"
            v-model="user.password"
          />

          <!-- error handler untuk password -->
          <div v-if="submitted">
            <small
              id="errorPassword"
              class="form-text text-danger"
              v-if="!$v.user.password.required"
            >Password is required!</small>

            <small
              id="errorPassword"
              class="form-text text-danger"
              v-if="!$v.user.password.minLength"
            >Password must be at least 6 characters!</small>
          </div>
        </div>

        <div class="form-group">
          <label for="email">Email</label>
          <input
            type="email"
            class="form-control"
            id="email"
            placeholder="Enter your email"
            v-model="user.email"
          />

          <!-- error handler untuk email -->
          <div v-if="submitted">
            <small
              id="errorEmail"
              class="form-text text-danger"
              v-if="!$v.user.email.required"
            >Email is required!</small>

            <small
              id="errorEmail"
              class="form-text text-danger"
              v-if="!$v.user.email.email"
            >Email is invalid!</small>
          </div>
        </div>

        <button type="submit" class="btn btn-primary float-right" v-on:click="updateUser">Update</button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";

import { required, email, minLength } from "vuelidate/lib/validators";

export default {
  data() {
    return {
      user: {
        name: "",
        password: "",
        email: ""
      },
      submitted: false
    };
  },
  mounted() {
    axios
      .get(
        `https://shady-latihan-crud-server.herokuapp.com/users/${this.$route.params.id}`
      )
      .then(user => {
        this.user = user.data;
      })
      .catch(error => console.log(error));
  },
  validations: {
    user: {
      name: {
        required,
        minLength: minLength(5)
      },
      password: {
        required,
        minLength: minLength(6)
      },
      email: {
        required,
        email
      }
    }
  },
  methods: {
    updateUser() {
      this.submitted = true;

      this.$v.$touch();

      if (this.$v.$invalid) {
        return;
      }

      axios
        .patch(
          `https://shady-latihan-crud-server.herokuapp.com/users/update/${this.user.id}`,
          {
            ...this.user
          }
        )
        .then(response => {
          this.$router.push("/users");
        })
        .catch(error => console.log(error));
    }
  }
};
</script>

<style scoped>
</style>
