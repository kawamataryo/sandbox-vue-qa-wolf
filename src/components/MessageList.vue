<template>
  <div>
    <v-row class="mb-5">
      <v-col cols="12" md="8">
        <v-text-field
          data-test="message-input"
          v-model="state.messageInput"
          name="messageInput"
        />
      </v-col>
      <v-col cols="12" md="4">
        <v-btn
          @click="addMessage"
          data-test="message-add-button"
          color="primary"
          block
          >add message</v-btn
        >
      </v-col>
    </v-row>
    <v-card
      v-for="(m, i) in state.messages"
      :key="i"
      class="mb-3"
      color="grey lighten-3"
      :data-test="`message-card-${i + 1}`"
    >
      <v-card-text> {{ m }}</v-card-text>
    </v-card>
  </div>
</template>

<script lang="ts">
import { createComponent, reactive } from "@vue/composition-api";

type State = {
  messageInput: string;
  messages: string[];
};

export default createComponent({
  setup() {
    const state = reactive<State>({
      messageInput: "",
      messages: []
    });

    const addMessage = () => {
      if (!state.messageInput) {
        return;
      }
      state.messages = [...state.messages, state.messageInput];
      state.messageInput = "";
    };

    return {
      state,
      addMessage
    };
  }
});
</script>
