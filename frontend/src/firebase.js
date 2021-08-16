import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyA2ZS4k_63JMMo2TCvdu-zJ_Q_gtpJA9CE",
    authDomain: "backlog-optimizer.firebaseapp.com",
    projectId: "backlog-optimizer",
    storageBucket: "backlog-optimizer.appspot.com",
    messagingSenderId: "118211539021",
    appId: "1:118211539021:web:c5eb0c3d8ac3144766ec04",
    measurementId: "G-CHG3L0X67T"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();
export const database = {
    weekdays: firestore.collection('weekdays'),
    courses: firestore.collection('courses'),
    formatDoc: doc => {
        return { id: doc.id, ...doc.data() }
    },
    timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
}
export const auth = firebase.auth();
export default firebase