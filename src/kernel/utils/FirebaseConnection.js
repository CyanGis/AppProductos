import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
    apiKey: "AIzaSyBC-h57BAkT7kO7UhtcYFje8aNO7a_giqk",
  authDomain: "productos-fde5f.firebaseapp.com",
  projectId: "productos-fde5f",
  storageBucket: "productos-fde5f.firebasestorage.app",
  messagingSenderId: "91615256699",
  appId: "1:91615256699:web:4045ff4fc94ee4ea8a42de"
};

const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
const db = getFirestore(app);
const storage = getStorage(app);
export { app, auth, db, storage };