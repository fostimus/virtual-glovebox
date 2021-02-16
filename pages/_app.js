import React from 'react'
const firebase = require('firebase');
require('firebase/auth');
// Required for side-effects
require('firebase/firestore');
// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
    apiKey: "AIzaSyBdn3aJkiL5zFqetN9_nG1Aw_y9m1oi-98",
    authDomain: "virtual-glovebox.firebaseapp.com",
    projectId: "virtual-glovebox",
    storageBucket: "virtual-glovebox.appspot.com",
    messagingSenderId: "428139105723",
    appId: "1:428139105723:web:84d388ad87152503b0889e"
});
const db = firebase.firestore();
// console.log('sanity check', db)

// creates a document with key:values
// db.collection('users').doc('user').set({
//     FirstName: 'Endia',
//     LastName: 'Williams',
//     Email: 'test@test.com',
//     driverLicense: 'E256DL195',
//     vehicle: {
//         vin: 123456789,
//         LP: 'abc1234',
//         Insurance: 123456789,
//         address: 'mixed',
//         maintenance: [{ mechanic: 'details' }, { parts: 'namesOfParts' }, {}]
//     }
// }).then(() => {
//     console.log('Document successfully written!')
// }).catch((error) => {
//     console.log('Error writing document: ', error)
// })

// reads all documents in a collection from fireStore
// db.collection('users')
//     .get()
//     .then(querySnapshot => {
//         querySnapshot.forEach(doc => {
//             console.log(doc);
//             console.log(`${doc.id} => ${Object.entries(doc.data())}`);
//         });
// });


// delete a document(the doc has to be very specific towards ID)
// db.collection('users').doc('MRNp0RmkAUrHAcIzDivQ').delete().then(() => {
//     console.log('Document successfully deleted!')
// }).catch((error) => {
//     console.log('Error removing document: ', error)
// })

const App = ({ Component, pageProps }) => {
    return (
        <>
            <div>test</div>
            <Component {...pageProps} />
        </>
    )
}

export {App as default, firebase}