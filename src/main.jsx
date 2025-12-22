import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { store } from "./redux/store.jsx";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBACzR2fpINPyutoUKIduIUAdxbD382ykA",
  authDomain: "calvary-bible-church-firebase.firebaseapp.com",
  databaseURL: "https://calvary-bible-church-firebase-default-rtdb.firebaseio.com",
  projectId: "calvary-bible-church-firebase",
  storageBucket: "calvary-bible-church-firebase.firebasestorage.app",
  messagingSenderId: "496141282542",
  appId: "1:496141282542:web:dff4942fd634962d4057ff",
  measurementId: "G-N2YWYXZRN1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <StrictMode>
      <App />
    </StrictMode>
   </Provider>
);
