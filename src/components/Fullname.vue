<template>
  <div>
    <v-row>
      <v-col cols="12" md="4">
        <v-text-field
          v-model="state.firstname"
          label="First name"
        />
      </v-col>
      <v-col cols="12" md="4">
        <v-text-field
          v-model="state.lastname"
          label="Last name"
        />
      </v-col>
      <v-col cols="12" md="4">
        <p class="mb-1 body-2">Full name</p>
        <p class="font-weight-bold">{{ fullname }}</p>
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
