// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyArG6mDci5tl-GmuI52Xuso7vX_SGDKN0M',
	authDomain: 'vue-stripe-project.firebaseapp.com',
	databaseURL: 'https://vue-stripe-project-default-rtdb.firebaseio.com',
	projectId: 'vue-stripe-project',
	storageBucket: 'vue-stripe-project.appspot.com',
	messagingSenderId: '398329683483',
	appId: '1:398329683483:web:ba14cd4a56da11478fa2be',
	measurementId: 'G-7LGDK24YPB',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);

import { getFirestore } from 'firebase/firestore';
export const db = getFirestore(firebaseApp);
