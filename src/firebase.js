import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/analytics';

const firebaseConfig = {
  apiKey: 'AIzaSyB_l7Sx7ELMitlTTKxIOYihS2v2G941Yqk',
  authDomain: 'roadcam-vue.firebaseapp.com',
  projectId: 'roadcam-vue',
  storageBucket: 'roadcam-vue.appspot.com',
  messagingSenderId: '989470651282',
  appId: '1:989470651282:web:db67028e33e1220942474b',
  measurementId: 'G-09Y4CVYR5J',
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

export const db = firebase.firestore();
