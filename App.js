import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import 'firebase/firestore'
import 'firebase/auth'
import { Fuego, FuegoProvider } from '@nandorojo/swr-firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBdn3aJkiL5zFqetN9_nG1Aw_y9m1oi-98",
  authDomain: "virtual-glovebox.firebaseapp.com",
  projectId: "virtual-glovebox",
  storageBucket: "virtual-glovebox.appspot.com",
  messagingSenderId: "428139105723",
  appId: "1:428139105723:web:84d388ad87152503b0889e"
}
const fuego = new Fuego(firebaseConfig)
export default function App() {
  return (
    <>
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <StatusBar style="auto" />
      </View>
      <FuegoProvider fuego={fuego} >
        <virtual-glovebox />
      </FuegoProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
