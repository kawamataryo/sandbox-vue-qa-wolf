<template>
  <div>
    <v-row>
      <v-col cols="12" md="4">
        <v-text-field
          v-model="state.firstname"
          :counter="10"
          label="First name"
        />
      </v-col>
      <v-col cols="12" md="4">
        <v-text-field
          v-model="state.lastname"
          :counter="10"
          label="Last name"
        />
      </v-col>
      <v-col cols="12" md="4">
        <v-text-field v-model="fullname" readonly label="Full name" />
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { computed, createComponent, reactive } from "@vue/composition-api";

export default createComponent({
  setup() {
    const state = reactive({
      firstname: "",
      lastname: ""
    });

    const fullname = computed(() => {
      if (!state.firstname && !state.lastname) {
        return "";
      }
      return `${state.firstname} ${state.lastname}`;
    });

    return {
      state,
      fullname
    };
  }
});
</script>
