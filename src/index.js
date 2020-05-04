import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

const firebase = require("firebase");
require("firebase/firestore");

firebase.initializeApp({
	apiKey: "AIzaSyD6pNXzY9jd9VVfKWqvKta4mbg3EQYs_ew",
	authDomain: "e1-evernote.firebaseapp.com",
	databaseURL: "https://e1-evernote.firebaseio.com",
	projectId: "e1-evernote",
	storageBucket: "e1-evernote.appspot.com",
	messagingSenderId: "700841347408",
	appId: "1:700841347408:web:bfec9314343707ac004455",
	measurementId: "G-6TE4S9EP09",
});

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById("e1-container")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
