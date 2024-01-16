import React, { useState } from 'react'
import { db, auth } from '../firebase'
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import { Input, Button } from '@material-ui/core'
function SendMessage({ scroll }) {
    const [msg, setMsg] = useState('')

    async function sendMessage(e) {
        e.preventDefault()
        const { uid, photoURL } = auth.currentUser

        await db.collection('messages').add({
            text: msg,
            photoURL,
            uid,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        })
        setMsg('')
        scroll.current.scrollIntoView({ behavior: 'smooth' })
    }
    return (
        <div>
            <form onSubmit={sendMessage}>
                <div className="sendMsg">
                    <input style={{
                        width: '78%', fontSize: '15px', fontWeight: '550', marginLeft: '5px', marginRight: '10px', outline: 'none',
                        border: 'none', background:'transparent', color: 'white'
                    }} placeholder='Type a message...' type="text" value={msg} onChange={e => setMsg(e.target.value)} />
                    <Button style={{ width: '12%', fontSize: '14px', fontWeight: '550', maxWidth: '200px', color: 'white', backgroundColor: '#128C7E' }} type="submit">Send</Button>
                </div>
            </form>
        </div>
    )
}

export default SendMessage