import {useState} from 'react'
import { userToken } from './saveTokenToFirebase';
import './forms.css'
let userid = null;
function Agent(){
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  
  const reflect = e => {
    e.preventDefault()
    alert("your email is" + email)
    alert("your message" + message)
    userid= email;
    console.log(userid);
     fetch("http://localhost:5020/send-notifi", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message }),
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
            value={message}
            required
            placeholder="Enter your message"
            onChange={e => setMessage(e.target.value)}/>
      <button type='submit'>SENDER</button>
        </form>
       
    </div>
  )}
  export  {Agent, userid};
