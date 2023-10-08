import {useState} from 'react'
import {usertoken} from './saveTokenToFirestore';
import './forms.css'
let userid = null ;
function Reflect(){
  const [email, setEmail] = useState('')
  const [message, setMessagel] = useState('')

  const reflect = e => {
    e.preventDefault()
    alert("your email is" + email)
    alert("your message" + message)
  }
  userid= email
  console.log(email);
  fetch('https://localhost:5020/send-notifi?email=${encodeURIComponent(email)}',
   method: "GET" ,
   headers: {}
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
            onChange={e => setMessagel(e.target.value)}/>
      <button type='submit'>Message & Email Sender</button>
        </form>
    </div>)}