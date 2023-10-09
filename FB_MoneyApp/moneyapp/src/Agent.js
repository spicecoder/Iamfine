import {useState} from 'react'
import {userTokenn} from './getTokenFromFirebase'

import './forms.css'
let userid = null;
function Agent(){
  const [email, setEmail] = useState('')
  const [chat, setChat] = useState('')
  
  const reflect = e => {
    e.preventDefault()
    alert("your email is  " + email)
    alert("your message  " + chat)
    alert("fetched   "+ userTokenn)
    userid= email;
    console.log(userid);
     fetch("http://localhost:5020/send-notifi", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ chat,userTokenn}),
      
    })
  //   fetch("http://localhost:5020/send-notifi", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ userToken }),
  //   })
  }
  
  return(
    <div className='center'>
        <h1>Email Reflector</h1>
        <form onSubmit={reflect} name='email_form'>
          <input
            type='email'
            value={email}
            required
            placeholder="Enter your email"
            onChange={e => setEmail(e.target.value)}/>
             <input
            type='message'
            value={chat}
            required
            placeholder="Enter your message"
            onChange={e => setChat(e.target.value)}/>
      <button type='submit'>SENDER</button>
        </form>
       
    </div>
  )}
  export  {Agent, userid};
