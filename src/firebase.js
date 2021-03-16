require('firebase/auth');
// Required for side-effects
require('firebase/firestore');
// Initialize Cloud Firestore through Firebase
const firebase = require('firebase');
firebase.initializeApp({
    apiKey: process.env['apiKey'],
    authDomain: process.env['authDomain'],
    projectId: "virtual-glovebox"
});
const db = firebase.firestore();
// creates a document with key:values
db.collection('registration info').doc('cars').set({
    vehicle: {
        vin: 987654321,
        LP: '4321',
        Insurance: 123456789,
        address: 'mixed',
        maintenance: [{ mechanic: 'details' }, { parts: 'namesOfParts' }, {}]
    }
}).then(() => {
    console.log('**Firebase document successfully written!')
}).catch((error) => {
    console.log('Error writing document: ', error)
})

// reads all documents in a collection from fireStore
// db.collection('users')
//     .get()
//     .then(querySnapshot => {
//         querySnapshot.forEach(doc => {
//             console.log(doc);
//             console.log(`${doc.id} => ${Object.entries(doc.data())}`);
//         });
//     });


// delete a document(the doc has to be very specific towards ID)
// db.collection('users').doc('MRNp0RmkAUrHAcIzDivQ').delete().then(() => {
//     console.log('Document successfully deleted!')
// }).catch((error) => {
//     console.log('Error removing document: ', error)
// })