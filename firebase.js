import firebase from "firebase";

const firebaseConfig = {
	apiKey: "AIzaSyCpxarw9bNSYtJw6_e0Y73Gtz-4T-yxfNI",
	authDomain: "whatsapp-2-d73cf.firebaseapp.com",
	databaseURL: "https://whatsapp-2-d73cf-default-rtdb.firebaseio.com",
	projectId: "whatsapp-2-d73cf",
	storageBucket: "whatsapp-2-d73cf.appspot.com",
	messagingSenderId: "232986951399",
	appId: "1:232986951399:web:954a3c63921db552022c42",
};

const app = !firebase.apps.length
	? firebase.initializeApp(firebaseConfig)
	: firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
