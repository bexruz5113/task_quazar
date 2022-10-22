<template>
  <div class="home">
    <v-app-bar app color="primary" dark flat>
      <v-app-bar-nav-icon class="d-md-none d-block" @click="drawer = !drawer" />

      <div class="d-flex align-center">
        <router-link class="ml-sm-4 ml-2" to="/" tag="button">
          <v-toolbar-title
            class="mr-sm-8 mr-5 d-flex align-center"
            style="opacity: 0.9"
            ><v-icon large>mdi-alpha-t-circle</v-icon>ask</v-toolbar-title
          >
        </router-link>
      </div>

      <v-spacer></v-spacer>
      <v-btn icon class="mr-2">
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-menu rounded offset-y>
        <template v-slot:activator="{ attrs, on }">
          <v-btn v-bind="attrs" v-on="on" icon class="mr-2">
            <v-icon>mdi-web</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item
            class="d-flex align-center"
            v-for="(item, index) in items"
            :key="index"
            link
          >
            <v-img
              :src="require(`@/assets/${item.flag}.png`)"
              width="20"
              class="mr-1"
            ></v-img>
            <v-list-item-title
              v-text="item.state"
              class="text-caption"
            ></v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <v-btn icon class="mr-2" @click="logout">
        <v-icon>mdi-logout</v-icon>
      </v-btn>
    </v-app-bar>
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
  data: () => ({
    drawer: false,
    items: [
      { flag: "russia", state: "Russian", appear: true },
      { flag: "united-states", state: "English", appear: true },
    ],
  }),
  methods: {
    logout() {
      localStorage.removeItem("user");
      location.reload();
      this.fetchUser({});
      this.$router.push("/login");
    },
  },
};
</script>
