const firebase = require("firebase");
import * as firebaseui from "firebaseui";

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

export { ui, uiConfig };
