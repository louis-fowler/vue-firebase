<template>
  <div>
    <div id="firebaseui-auth-container"></div>
    <div id="loader">Loading...</div>
  </div>
</template>

<script>
import { ui, uiConfig } from "../auth/fireauth";
export default {
  name: "SignIn",
  mounted() {
    ui.start("#firebaseui-auth-container", uiConfig);
  }
};
</script>
