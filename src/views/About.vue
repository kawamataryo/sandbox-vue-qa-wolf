<template>
  <div class="about">
    <v-container>
      <h1 class="display-3 mb-5">Message lists</h1>
    </v-container>
    <message-list />
  </div>
</template>

<script lang="ts">
import { createComponent } from "@vue/composition-api";
import MessageList from "@/components/MessageList.vue";

export default createComponent({
  name: "about",
  components: {
    MessageList
  },
  setup() {}
});
</script>
