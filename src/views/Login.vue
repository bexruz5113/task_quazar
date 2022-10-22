<template>
  <div class="bgImage">
    <v-container>
      <v-row>
        <v-col cols="12" md="5" sm="8" class="mx-auto mt-16 pt-16 px-5">
          <v-card color="basil" class="pa-8">
            <v-tabs
              v-model="tab"
              background-color="transparent"
              color="basil"
              grow
            >
              <v-tab v-for="item in items" :key="item">
                {{ item }}
              </v-tab>
            </v-tabs>

            <v-tabs-items v-model="tab">
              <v-tab-item>
                <v-form @submit.prevent="login()">
                  <v-container>
                    <v-row>
                      <v-col cols="12">
                        <v-text-field
                          v-model="form.email"
                          label="Email"
                          required
                          color="gray darken-2"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12">
                        <v-text-field
                          v-model="form.password"
                          label="Password"
                          color="gray darken-2"
                          required
                        ></v-text-field>
                      </v-col>
                    </v-row>
                  </v-container>

                  <div
                    class="d-flex justify-space-between align-center py-3 px-1"
                  >
                    <div class="d-flex align-center">
                      <input
                        type="checkbox"
                        class="mr-2"
                        id="vehicle1"
                        name="vehicle1"
                        value="Bike"
                        color
                      />
                      <label for="vehicle1" class="pb-0"
                        ><small>Remember</small></label
                      >
                    </div>
                    <router-link to="#" class="black--text text-caption"
                      >Password recovery</router-link
                    >
                  </div>
                  <div class="text-left pb-4">
                    <v-btn
                      depressed
                      color="success"
                      class="rounded py-2 px-3 white--text"
                      type="submit"
                    >
                      Enter
                    </v-btn>
                    <v-snackbar v-model="snackbar" color="success " right top>
                      {{ text }}

                      <template v-slot:action="{ attrs }">
                        <v-btn
                          color="gray"
                          text
                          v-bind="attrs"
                          @click="snackbar = false"
                        >
                          x
                        </v-btn>
                      </template>
                    </v-snackbar>
                  </div>
                </v-form>
              </v-tab-item>

              <v-tab-item>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui
                necessitatibus facere
              </v-tab-item>
            </v-tabs-items>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import users from "@/mockData/users";

import { mapActions } from "vuex";
export default {
  data() {
    return {
      snackbar: false,
      text: `Successful`,
      users,
      tab: null,
      items: ["Login", "Registration"],
      form: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    ...mapActions("user", ["fetchUser"]),
    login() {
      setTimeout(() => {
        const isUserExist = this.users.find(
          (user) =>
            user.email === this.form.email &&
            user.password === this.form.password
        );
        if (isUserExist) {
          localStorage.setItem("user", true);
          this.fetchUser(this.form);
          this.$router.push("/");
        } else {
          alert("Email or password is wrong.");
        }
      }, 1000);

      this.snackbar = true;
    },
  },
};
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.bgImage {
  background-image: url("../assets/loginImage.jpg");
  width: 100%;
  height: 100%;
  background-attachment: fixed;
  background-position: center center;
  position: relative;
}
.bglogo {
  position: absolute;
  top: 0;
  left: 15px;
}
.basil {
  background-color: white;
}
.basil--text {
  color: #3db166 !important;
}
.tabs-shadow {
  box-shadow: 0 0 7px 0 rgba(10, 10, 10, 0.56);
}
</style>
