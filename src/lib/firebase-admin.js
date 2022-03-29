import admin from "firebase-admin"
//TODO: import private key
import * as serviceAccount from "../../astro-46804-firebase-adminsdk-566k6-37cb5f0f12.json"

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

export default admin