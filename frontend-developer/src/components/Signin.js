import { useState} from "react";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../components/Register.css'

export default function Signin({data,loginFunction}){
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState('');
    const [email_error,setEmailError] = useState('');
    const [pass_error,setPassError] = useState('');

    // const history = useNavigate();
  
    const submitFunction = (e) =>{
      e.preventDefault();
      const author = data.find(prev => prev.mail === email && prev.pass === password);
      if(author){
        loginFunction(true,author);
      }
      if(password.length === 0){
        setPassError('Required Password');
      }
      if(email.length === 0){
        setEmailError('Required Email');
      }
    }  

    return(
      <div className="registration-page">
        <div>
        <img className="iconimg" src="https://media.designrush.com/inspiration_images/136099/conversions/_1513769278_678_Prada_Logo_865cc60eea8d-desktop.jpg" alt="icon"/>
        </div>
        <div className="registration-form">
        <Form onSubmit={submitFunction}>
      <Form.Group className="mb-2" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={(e)=>(setEmail(e.target.value))}/>
        <Form.Text style={{color:'red'}}>{email.length===0?email_error:''}</Form.Text>
      </Form.Group>

      <Form.Group className="mb-4" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={(e)=>(setPassword(e.target.value))}/>
        <Form.Text style={{color:'red'}}>{password.length===0?pass_error:''}</Form.Text>
      </Form.Group>
      <Button variant="primary"  style={{width:320,backgroundColor:'#0E76A8',border:'none'}}  type="submit">
        Sign In
      </Button>
      <Form.Group>
      <Form.Label>New to PRADA? <Link to='/register' style={{textDecoration:'none'}}>Join now</Link></Form.Label>
      </Form.Group>
    </Form>
    </div>
      </div>
    )
  }