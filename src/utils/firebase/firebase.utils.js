// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

import {
    collection,
    doc,
    getDoc,
    getFirestore,
    runTransaction
    } from  "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBz3XCNguxg_XlgtcGOf34Tschy3pGomEI",
    authDomain: "presence-9cced.firebaseapp.com",
    projectId: "presence-9cced",
    storageBucket: "presence-9cced.appspot.com",
    messagingSenderId: "1083294801819",
    appId: "1:1083294801819:web:21e72b3fee1f63370f0b3e",
    measurementId: "G-PGG77M53RW"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore()

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = collection(db, collectionKey);

    for (const object of objectsToAdd) {
        try {
            await runTransaction(db, async (transaction) => {
                const docRef = doc(collectionRef, object.id);
                const docSnap = await transaction.get(docRef);

                if (docSnap.exists()) {
                    // Document exists, increment the count field
                    const newCount = docSnap.data().count + object.count;
                    transaction.update(docRef, { count: newCount });
                } else {
                    // Document does not exist, create new
                    transaction.set(docRef, object);
                }
            });
        } catch (e) {
            console.error("Transaction failed: ", e);
        }
    }

    alert("Done: Collection & Documents have been added or updated");
    // const collectionRef = collection(db, collectionKey);
    // const batch = writeBatch(db);

    // objectsToAdd.forEach((object) => {
    //     const docRef = doc(collectionRef, object.id);
    //     batch.set(docRef, object);
    // });

    // await batch.commit();
    // alert("Done: Collection & Documents have been added");
}

export const getProductsAndDocuments = async () => {
    const docRef = doc(db, "products", "productsArray");
    const docSnap = await getDoc(docRef);
    return docSnap.data().products;
}

export const getGradientPurchaseData = async (currGradient) => {
    const gradientID = `${currGradient[0][0]},${currGradient[0][1]},${currGradient[0][2]} - ${currGradient[1][0]},${currGradient[1][1]},${currGradient[1][2]}`
    
    try {
        const docRef = doc(db, "purchased", gradientID);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            const count = docSnap.data().count;

            if (count !== undefined) {
                return count;
            } else {
                alert("The document does not contain a 'count' field.");
                return 0;
            }
        } else {
            return 0;
        }
    } catch (error) {
        console.error("Error fetching document:", error);
        alert("Failed to fetch the document.");
        return null;
    }
}