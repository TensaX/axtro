import { initializeApp } from "firebase/app";
import { getAuth, setPersistence, inMemoryPersistence } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyC1jHzVPUHqLlndZF4N_dtYMRjj71U6dSs",
  authDomain: "astro-46804.firebaseapp.com",
  projectId: "astro-46804",
  storageBucket: "astro-46804.appspot.com",
  messagingSenderId: "496633973990",
  appId: "1:496633973990:web:1fdf82d9d1b9b98ce1bf27"
};

const app = initializeApp(firebaseConfig, "CLIENT");
export const auth = getAuth(app)

setPersistence(auth, inMemoryPersistence)