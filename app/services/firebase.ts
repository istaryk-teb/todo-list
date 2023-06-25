// Your web app's Firebase configuration
import { FirebaseApp } from '@firebase/app';
import { Firestore } from '@firebase/firestore/lite';
import { initializeApp } from 'firebase/app';

import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyDBnWUXaM1FsBEKbuAL1BKeFkF1R6dxc_4",
  authDomain: "todo-list-92603.firebaseapp.com",
  projectId: "todo-list-92603",
  storageBucket: "todo-list-92603.appspot.com",
  messagingSenderId: "427945689598",
  appId: "1:427945689598:web:ffa4b1393c52edd49740af"
};

// Initialize Firebase
export const fbApp: FirebaseApp = initializeApp(firebaseConfig);
export const firestore: Firestore = getFirestore(fbApp);
