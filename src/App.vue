<template>
  <v-app>
    <v-content>
      <v-container>
        <div class="text-center mb-5">
          <router-link to="/">Home</router-link> |
          <router-link to="/about">About</router-link>
        </div>
        <router-view />
      </v-container>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "App",
  data: () => ({
    //
  })
});
</script>

<style>
@font-face {
  font-family: "Yu Gothic";
  src: local("Yu Gothic Medium");
  font-weight: 100;
}
@font-face {
  font-family: "Yu Gothic";
  src: local("Yu Gothic Medium");
  font-weight: 200;
}
@font-face {
  font-family: "Yu Gothic";
  src: local("Yu Gothic Medium");
  font-weight: 300;
}
@font-face {
  font-family: "Yu Gothic";
  src: local("Yu Gothic Medium");
  font-weight: 400;
}
@font-face {
  font-family: "Yu Gothic";
  src: local("Yu Gothic Bold");
  font-weight: bold;
}
@font-face {
  font-family: "Helvetica Neue";
  src: local("Helvetica Neue Regular");
  font-weight: 100;
}
@font-face {
  font-family: "Helvetica Neue";
  src: local("Helvetica Neue Regular");
  font-weight: 200;
}

body .v-application {
  font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", "Yu Gothic",
    YuGothic, Verdana, Meiryo, "M+ 1p", sans-serif;
}
@media all and (-ms-high-contrast: none) {
  body .v-application {
    font-family: Verdana, Meiryo, sans-serif;
  }
}
@media all and (-ms-high-contrast: active) {
  body .v-application {
    font-family: Verdana, Meiryo, sans-serif;
  }
}
</style>
