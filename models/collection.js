import React from 'react'
import { useCollection } from '@nandorojo/swr-firestore'
import { Text } from 'react-native'
import 'firebase/firestore'


const db = firebase.firestore()
const { data, add } = useCollection('users', {
    where: ['FirstName', '==', 'Los Angeles']
})
db.collection('users').add({
    FirstName: "Los Angeles",
    LastName: "CA"
})
    .then(() => {
        console.log("Document successfully written!");
    })
    .catch((error) => {
        console.error("Error writing document: ", error);
    });

export default function UserList() {
    const { data, update, error } = useCollection(`users`)
    if (error) return <Text>Error!</Text>
    if (!data) return <Text>Loading...</Text>
    return data.map(user => <Text key={user.id}>{user.name}</Text>)
}