import { https } from "firebase-functions";
import createServer from "./src/server";

// The Firebase Admin SDK to access the Firebase Realtime Database.
const admin = require("firebase-admin");
admin.initializeApp();

const server = createServer();

// Test Function
// app.get("*", (request, response) => {
//   response.send("hello from express on firebase with CORS");
// });

const api = https.onRequest(server);

export { api };
