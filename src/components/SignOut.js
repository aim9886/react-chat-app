import React from 'react'
import { auth } from '../firebase'
import {Button} from '@mui/material'

function SignOut() {
  return (
    <div style={{
        display: 'flex', justifyContent: 'center', backgroundColor: '#128C7E', borderRadius: '12px'
    }}>
        <Button style={{ padding: '6px 16px 6px 16px', borderRadius: '0', fontWeight: '600', color: 'white' }} onClick={() => auth.signOut()}>Sign Out</Button>
    </div>
  )
}

export default SignOut