import React from 'react'
import { Avatar } from '@mui/material'
import Badge from '@mui/material/Badge'
import SignOut from './SignOut'
import { auth } from '../firebase'
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
function TopBar() {
  const { photoURL, displayName } = auth.currentUser
  return (
    <div className='TopBar'>
      <div className='UserDetails'>
        <Badge
          overlap="circular"
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          variant="dot"
        >
          <Avatar
            sx={{ width: 24, height: 24 }} src={photoURL} />
        </Badge>
        <div className='UserName'>{displayName}</div>
      </div>
      <SignOut />
    </div>
  )
}

export default TopBar