/**
 * To find your Firebase config object:
 *
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
const config = {
  apiKey: "AIzaSyDrM9Kr1-1fsEOEtzUnO7Hsr2ZIyrlCTJw",
  authDomain: "learning-d3622.firebaseapp.com",
  projectId: "learning-d3622",
  storageBucket: "learning-d3622.appspot.com",
  messagingSenderId: "656237054492",
  appId: "1:656237054492:web:7f35f81a317e03af02edd9",
};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error(
      "No Firebase configuration object provided." +
        "\n" +
        "Add your web app's configuration object to firebase-config.js"
    );
  } else {
    return config;
  }
}
