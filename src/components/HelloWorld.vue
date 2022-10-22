<template>
  <v-container>
    <v-row>
      <v-col
        cols="12"
        sm="6"
        md="4"
        v-for="(getInfo, index) in project"
        :key="index"
      >
        <v-card class="mx-auto my-12">
          <template slot="progress">
            <v-progress-linear
              color="deep-purple"
              height="10"
              indeterminate
            ></v-progress-linear>
          </template>

          <v-img height="250" :src="getInfo.thumbnail"></v-img>

          <v-card-title>{{ getInfo.title }}</v-card-title>

          <v-card-text>
            <v-row align="center" class="mx-0">
              <v-rating
                :value="getInfo.rating"
                color="amber"
                dense
                half-increments
                readonly
                size="14"
              ></v-rating>

              <div class="grey--text ms-4">{{ getInfo.rating }}</div>
            </v-row>
            <div class="my-3">Price: {{ getInfo.price }}$</div>
            <!-- <div class="my-3 text-subtitle-1">
              {{ getInfo.discountPercentage }}
            </div> -->

            <div>
              {{ getInfo.description }}
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data: () => ({}),
  created() {
    this.getProject();
  },
  computed: {
    ...mapGetters("project", ["project"]),
  },
  methods: {
    ...mapActions("project", ["getProject"]),
  },
};
</script>
