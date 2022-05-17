import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyA2bbn1AQqdQjECzrYYr4axqnyNybdBYp4',
  authDomain: 'amazing-modem-350116.firebaseapp.com',
  projectId: 'amazing-modem-350116',
  storageBucket: 'amazing-modem-350116.appspot.com',
  messagingSenderId: '288004928324',
  appId: '1:288004928324:web:39fe23e755d2293eeadd11',
};

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

export default firebase;
