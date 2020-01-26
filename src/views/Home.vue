<template>
  <div class="home">
    <v-container>
      <h1 class="display-3">Full name</h1>
      <fullname />
    </v-container>
  </div>
</template>

<script lang="ts">
import { createComponent } from "@vue/composition-api";
import Fullname from "@/components/Fullname.vue";

export default createComponent({
  name: "home",
  components: {
    Fullname
  },
  setup() {}
});
</script>
