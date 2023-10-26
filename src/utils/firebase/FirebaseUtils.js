// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {
    collection,
    doc,
    getDoc,
    getFirestore,
    writeBatch,
    } from  "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBz3XCNguxg_XlgtcGOf34Tschy3pGomEI",
    authDomain: "presence-9cced.firebaseapp.com",
    projectId: "presence-9cced",
    storageBucket: "presence-9cced.appspot.com",
    messagingSenderId: "1083294801819",
    appId: "1:1083294801819:web:21e72b3fee1f63370f0b3e",
    measurementId: "G-PGG77M53RW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore()

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = collection(db, collectionKey);
    const batch = writeBatch(db);

    objectsToAdd.forEach((object) => {
        const docRef = doc(collectionRef, object.title.toLowerCase());
        batch.set(docRef, object);
    });

    await batch.commit();
    console.log("Done");
}

export const getProductsAndDocuments = async () => {
    const docRef = doc(db, "products", "productsArray");
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
    console.log("Document data:", docSnap.data().products);
    } else {
    // docSnap.data() will be undefined in this case
    console.log("No such document!");
    }

    return docSnap.data().products;
}