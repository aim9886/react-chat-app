import React from 'react'
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import { auth } from '../firebase.js'
import { Button } from '@mui/material'
function SignIn() {
  function signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider
    auth.signInWithPopup(provider)
  }
  return (
    <div className="signInContainer" style={{ display: 'flex', justifyContent: 'center'}}>
      <div style={{justifyContent: 'center', alignItems: 'center' }}>
        <h2 style={{color: 'white', fontSize: '22px', marginBottom: '40px', textAlign: 'center' }}>🔥 Welcome to FireChat 🔥</h2>
        <Button style={{ padding: '16px 50px 16px 50px', fontSize: '16px', borderRadius: '12px', fontWeight: '600', backgroundColor: '#13131d', color: 'rgb(221, 224, 227)', boxShadow: '#0000' }} onClick={signInWithGoogle}>Sign In With Google</Button>
      </div>
    </div>
  )
}

export default SignIn