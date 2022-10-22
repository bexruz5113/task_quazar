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
                        ><small>Eslab qolish</small></label
                      >
                    </div>
                    <router-link to="#" class="black--text text-caption"
                      >Parolni tiklash</router-link
                    >
                  </div>
                  <div class="text-left pb-4">
                    <v-btn
                      depressed
                      color="success"
                      class="rounded py-2 px-3 white--text"
                      type="submit"
                    >
                      Kirish
                    </v-btn>
                  </div>
                </v-form>
              </v-tab-item>

              <v-tab-item>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui
                necessitatibus facere atque autem optio cumque quasi accusamus
                dolore ad, in quia commodi tenetur praesentium. Ipsam amet
                voluptatem maiores illum molestiae.
                <!-- <v-form @submit.prevent="addUser()">
                  <v-container>
                    <v-row>
                      <v-col cols="12" sm="4" class="pt-5 mb-3">
                        <label class="user__image" for="imageUpload">
                          <input
                            @change="userImgUpload"
                            class="user__image--input"
                            id="imageUpload"
                            type="file"
                          />
                          <img
                            class="user__image--upload"
                            :src="imageUrl"
                            alt=""
                          />
                          <b-icon
                            icon="cloud-arrow-up"
                            variant="secondary"
                            class="mt-sm-3 mt-5"
                            font-scale="2"
                          ></b-icon>
                          <p class="text-center text-secondary">choose image</p>
                        </label>
                      </v-col>
                      <v-col cols="12" sm="8">
                        <v-row>
                          <v-col cols="12" class="px-3">
                            <div class="borderBottom">
                              <select
                                v-model="form2.role"
                                @click="studentOption()"
                                required
                                class="bg-white p-2 text-dark w-100 border-0"
                              >
                                <option
                                  value=""
                                  class="text-dark"
                                  disabled
                                  selected
                                  hidden
                                >
                                  <small class="text-dark"
                                    >Foydalanuvchi toifasini tanlang</small
                                  >
                                </option>
                                <option value="STUDENT">Talaba</option>
                                <option value="TEACHER">O'qituvchi</option>
                                <option value="MANAGER">Kafedra mudiri</option>
                                <option value="DEAN">Fakultet dekani</option>
                                <option value="RECTOR">Rektor</option>
                                <option class="hidden" value="PRORECTOR">
                                  Prorector
                                </option>
                                <option class="hidden" value="ADMIN">
                                  Admin
                                </option>
                              </select>
                            </div>
                          </v-col>
                          <v-col cols="12" class="mt-3">
                            <div class="borderBottom">
                              <input
                                class="loginInput"
                                type="text"
                                placeholder="Ism"
                                v-model="form2.first_name"
                              />
                            </div>
                          </v-col>
                          <v-col cols="12">
                            <div class="borderBottom">
                              <input
                                class="loginInput"
                                type="text"
                                placeholder="Familiya"
                                v-model="form2.last_name"
                              />
                            </div>
                          </v-col>
                          <v-col cols="12">
                            <div class="borderBottom">
                              <input
                                class="loginInput"
                                type="text"
                                placeholder="Otasining ismi"
                                v-model="form2.middle_name"
                              />
                            </div>
                          </v-col>
                        </v-row>
                      </v-col>
                      <v-col v-if="STUDENT" cols="12">
                        <v-row>
                          <v-col cols="12" sm="6">
                            <div class="borderBottom">
                              <input
                                class="loginInput"
                                type="email"
                                placeholder="E-mail"
                                required
                                v-model="form2.email"
                              />
                            </div>
                          </v-col>
                          <v-col cols="12" sm="6">
                            <div class="borderBottom">
                              <input
                                class="loginInput"
                                type="password"
                                placeholder="Password"
                                required
                                v-model="form2.password"
                              />
                            </div>
                          </v-col>
                          <v-col cols="12" sm="6">
                            <div class="borderBottom">
                              <input
                                class="loginInput"
                                type="text"
                                placeholder="Parolni qaytarish"
                                required
                                v-model="form2.repeat_password"
                              />
                            </div>
                          </v-col>
                          <v-col cols="12" sm="6">
                            <div class="borderBottom">
                              <select
                                class="bg-white p-2 text-dark w-100"
                                v-model="form2.group"
                                required
                              >
                                <option
                                  value=""
                                  class="text-dark"
                                  disabled
                                  selected
                                  hidden
                                >
                                  Guruh raqami
                                </option>
                                <option
                                  v-for="group in $store.getters.group"
                                  :key="group.id"
                                  :value="group.id"
                                >
                                  {{ group.name }}
                                </option>
                              </select>
                            </div>
                          </v-col>
                        </v-row>
                      </v-col>

                      <v-col v-if="TEACHER" cols="12">
                        <v-row>
                          <v-col cols="12" sm="6">
                            <div class="borderBottom">
                              <input
                                class="loginInput"
                                type="email"
                                placeholder="E-mail"
                                required
                                v-model="form2.email"
                              />
                            </div>
                          </v-col>
                          <v-col cols="12" sm="6">
                            <div class="borderBottom">
                              <input
                                class="loginInput"
                                type="password"
                                placeholder="Password"
                                required
                                v-model="form2.password"
                              />
                            </div>
                          </v-col>
                          <v-col cols="12" sm="6">
                            <div class="borderBottom">
                              <input
                                class="loginInput"
                                type="text"
                                placeholder="Parolni qaytarish"
                                required
                                v-model="form2.repeat_password"
                              />
                            </div>
                          </v-col>
                          <v-col cols="12" sm="6">
                            <div class="borderBottom">
                              <select
                                v-model="form2.group"
                                required
                                class="bg-white p-2 text-dark w-100"
                              >
                                <option
                                  value=""
                                  class="text-dark"
                                  disabled
                                  selected
                                  hidden
                                >
                                  Guruh raqami
                                </option>
                                <option
                                  v-for="group in $store.getters.group"
                                  :key="group.id"
                                  :value="group.id"
                                >
                                  {{ group.name }}
                                </option>
                              </select>
                            </div>
                          </v-col>
                          <v-col cols="12" sm="6">
                            <div class="borderBottom">
                              <select
                                v-model="form2.cafedra"
                                required
                                class="bg-white p-2 text-dark w-100"
                              >
                                <option
                                  value=""
                                  class="text-dark"
                                  disabled
                                  selected
                                  hidden
                                >
                                  Kafedra
                                </option>
                                <option
                                  v-for="cafedra in $store.getters.cafedra"
                                  :key="cafedra.id"
                                  :value="cafedra.id"
                                >
                                  {{ cafedra.name }}
                                </option>
                              </select>
                            </div>
                          </v-col>
                        </v-row>
                      </v-col>

                      <v-col v-if="MANAGER" cols="12">
                        <v-row>
                          <v-col cols="12" sm="6">
                            <div class="borderBottom">
                              <input
                                class="loginInput"
                                type="email"
                                placeholder="E-mail"
                                required
                              />
                            </div>
                          </v-col>
                          <v-col cols="12" sm="6">
                            <div class="borderBottom">
                              <input
                                class="loginInput"
                                type="password"
                                placeholder="Password"
                                required
                              />
                            </div>
                          </v-col>
                          <v-col cols="12" sm="6">
                            <div class="borderBottom">
                              <input
                                class="loginInput"
                                type="text"
                                placeholder="Parolni qaytarish"
                                required
                              />
                            </div>
                          </v-col>
                          <v-col cols="12" sm="6">
                            <div class="borderBottom">
                              <select
                                required
                                class="bg-white p-2 text-dark w-100"
                              >
                                <option
                                  value=""
                                  class="text-dark"
                                  disabled
                                  selected
                                  hidden
                                >
                                  <small>Guruh raqami</small>
                                </option>
                                <option>what's up bro</option>
                                <option>what's up bro</option>
                                <option>what's up bro</option>
                                <option>what's up bro</option>
                                <option>what's up bro</option>
                              </select>
                            </div>
                          </v-col>
                          <v-col cols="12" sm="6">
                            <div class="borderBottom">
                              <select
                                required
                                class="bg-white p-2 text-dark w-100"
                              >
                                <option
                                  value=""
                                  class="text-dark"
                                  disabled
                                  selected
                                  hidden
                                >
                                  <small>Kafedra</small>
                                </option>
                                <option>hello world</option>
                                <option>hello world</option>
                                <option>hello world</option>
                                <option>hello world</option>
                                <option>hello world</option>
                              </select>
                            </div>
                          </v-col>
                        </v-row>
                      </v-col>

                      <v-col v-if="DEAN" cols="12">
                        <v-row>
                          <v-col cols="12" sm="6">
                            <div class="borderBottom">
                              <input
                                class="loginInput"
                                type="email"
                                placeholder="E-mail"
                                required
                              />
                            </div>
                          </v-col>
                          <v-col cols="12" sm="6">
                            <div class="borderBottom">
                              <input
                                class="loginInput"
                                type="password"
                                placeholder="Password"
                                required
                              />
                            </div>
                          </v-col>
                          <v-col cols="12" sm="6">
                            <div class="borderBottom">
                              <input
                                class="loginInput"
                                type="text"
                                placeholder="Parolni qaytarish"
                                required
                              />
                            </div>
                          </v-col>
                          <v-col cols="12" sm="6">
                            <div class="borderBottom">
                              <select
                                required
                                class="bg-white p-2 text-dark w-100"
                              >
                                <option
                                  value=""
                                  class="text-dark"
                                  disabled
                                  selected
                                  hidden
                                >
                                  <small>Guruh raqami</small>
                                </option>
                                <option>what's up bro</option>
                                <option>what's up bro</option>
                                <option>what's up bro</option>
                                <option>what's up bro</option>
                                <option>what's up bro</option>
                              </select>
                            </div>
                          </v-col>
                        </v-row>
                      </v-col>

                      <v-col v-if="RECTOR" cols="12">
                        <v-row>
                          <v-col cols="12" sm="6">
                            <div class="borderBottom">
                              <input
                                class="loginInput"
                                type="email"
                                placeholder="E-mail"
                                required
                              />
                            </div>
                          </v-col>
                          <v-col cols="12" sm="6">
                            <div class="borderBottom">
                              <input
                                class="loginInput"
                                type="password"
                                placeholder="Password"
                                required
                              />
                            </div>
                          </v-col>
                          <v-col cols="12" sm="6">
                            <div class="borderBottom">
                              <input
                                class="loginInput"
                                type="text"
                                placeholder="Parolni qaytarish"
                                required
                              />
                            </div>
                          </v-col>
                        </v-row>
                      </v-col>

                      <v-col cols="12" class="py-3">
                        <button
                          type="submit"
                          class="bg-success border-0 py-2 px-3 rounded text-white float-left"
                        >
                          Ro`yxatdan o`tish
                        </button>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-form> -->
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
      users,
      tab: null,
      items: ["Login", "Registration"],
      form: {
        email: "bexruzbahronov2000@gmail.com",
        password: "123456",
      },
    };
  },
  methods: {
    ...mapActions("user", ["fetchUser"]),
    login() {
      const isUserExist = this.users.find(
        (user) =>
          user.email === this.form.email && user.password === this.form.password
      );
      if (isUserExist) {
        localStorage.setItem("user", true);
        this.fetchUser(this.form);
        this.$router.push("/");
      } else {
        alert("Email or password is wrong.");
      }
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
select {
  outline: none;
  border: 0;
  margin-bottom: 7px;
}
.user__image {
  position: relative;
  width: 100%;
  max-width: 200px;
  height: 150px;
  border: 0;
  .user__image--input {
    opacity: 0;
  }
  .user__image--upload {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
  }
}
.tabs-shadow {
  box-shadow: 0 0 7px 0 rgba(10, 10, 10, 0.56);
}
</style>
