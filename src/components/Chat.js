import React, { useState, useEffect, useRef } from 'react'
import { auth, db } from '../firebase'
import SendMessage from './SendMessage'
import TopBar from './TopBar'
function Chat() {
    const scroll = useRef()
    const [messages, setMessages] = useState([])
    useEffect(() => {
        db.collection('messages').orderBy('createdAt').limit(50).onSnapshot(snapshot => {
            setMessages(snapshot.docs.map(doc => doc.data()))
        scroll.current.scrollIntoView({ behavior: 'smooth' })
        })
    }, [])
    useEffect(() => {
        // 👇️ scroll to bottom every time messages change
        scroll.current?.scrollIntoView({behavior: 'smooth'});
      }, [messages]);
    return (
        <div className='main-container'>
            <div className='chatContainer'>
                <TopBar/>
                {<div className="msgs">
                    {messages.map(({ id, text, photoURL, uid }) => (
                      <div>
                            <div key={id} className={`msg ${uid === auth.currentUser.uid ? 'sent' : 'received'}`}>
                                <img src={photoURL} alt={id} />
                                <p>{text}</p>
                            </div>
                            </div>
                    ))}
                <div ref={scroll}></div>
                    </div>}
                <SendMessage scroll={scroll} />
            </div>
        </div>
    )
}

export default Chat