import { https } from "firebase-functions";
import gqlServer from "./src/server";
//const cors = require("cors");

// The Firebase Admin SDK to access the Firebase Realtime Database.
const admin = require("firebase-admin");
admin.initializeApp();

const server = gqlServer();

//app.use(cors({ origin: true }));

// Test Function
// app.get("*", (request, response) => {
//   response.send("hello from express on firebase with CORS");
// });

const api = https.onRequest(server);

export { api };
