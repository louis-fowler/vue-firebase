const firebase = require("firebase");
import * as firebaseui from "firebaseui";
import store from "../store";

const ui = new firebaseui.auth.AuthUI(firebase.auth());

const uiConfig = {
  callbacks: {
    uiShown: function() {
      document.getElementById("loader").style.display = "none";
    }
  },
  signInFlow: "popup",
  signInSuccessUrl: "main",
  credentialHelper: firebaseui.auth.CredentialHelper.NONE,
  signInOptions: [
    {
      provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
      requireDisplayName: false
    }
  ]
};

firebase.auth().onAuthStateChanged(user => {
  store.dispatch("fetchUser", user);
});

export { ui, uiConfig };
