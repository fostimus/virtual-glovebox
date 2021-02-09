import React from 'react'
import 'firebase/firestore'
import 'firebase/auth'
import { Fuego, FuegoProvider } from '@nandorojo/swr-firestore'



console.log('sanity check')
const firebaseConfig = {
    apiKey: "AIzaSyBdn3aJkiL5zFqetN9_nG1Aw_y9m1oi-98",
    authDomain: "virtual-glovebox.firebaseapp.com",
    projectId: "virtual-glovebox",
    storageBucket: "virtual-glovebox.appspot.com",
    messagingSenderId: "428139105723",
    appId: "1:428139105723:web:84d388ad87152503b0889e"
}

const fuego = new Fuego(firebaseConfig)

export default function App({ Component, pageProps }) {
    return (
        <FuegoProvider fuego={fuego}>
            <Component {...pageProps} />
        </FuegoProvider>
    )
}
