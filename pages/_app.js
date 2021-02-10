import React from 'react'

const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
    apiKey: 'AIzaSyBdn3aJkiL5zFqetN9_nG1Aw_y9m1oi-98',
    authDomain: 'virtual-glovebox.firebaseapp.com',
    projectId: 'virtual-glovebox'
});

const db = firebase.firestore();
console.log('sanity check', db)

db.collection('users').add({
    FirstName: 'Derek',
    LastName: 'Foster'
})


export default function App({ Component, pageProps }) {
    return (
        <>
            <div>test</div>
            <Component {...pageProps} />
        </>
    )
}
