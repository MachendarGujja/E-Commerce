import { useState} from "react";
import { useNavigate , Link  } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import uuid from 'react-uuid';
import '../components/Register.css'

export default function Register({registerButton}){
  const [first_name,setFirstName] = useState('');
  const [first_error,setFirstError] = useState('');
  const [second_error,setSecondError] = useState('');
  const [email_error,setEmailError] = useState('');
  const [pass_error,setPassError] = useState('');
  const [last_name,setLastName] = useState('');
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState('');

    const history = useNavigate();
  
    const submitFunction = (e) =>{
      e.preventDefault();
      // console.log(email,password);
      if(first_name.length>0 && password.length>0 && last_name.length>0 && email.length>0){
        const data = {
          id:uuid(),
          firstName:first_name,
          lastName:last_name,
          mail:email,
          pass:password,
        }
        registerButton(data);
        history('/signin')
      }
      if(first_name.length===0){
        setFirstError('Required First Name');
      }
      if(last_name.length === 0){
        setSecondError('Required Last Name');
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
        <Form.Group className="mb-2 mt-2" style={{width:320}} controlId="formFname">
        <Form.Label>First Name</Form.Label>
        <Form.Control type="text" placeholder="Enter first name" onChange={(e)=>(setFirstName(e.target.value))}/>
        <Form.Text style={{color:'red'}}>{first_name.length===0?first_error:''}</Form.Text>
      </Form.Group>
      <Form.Group className="mb-2" style={{width:320}} controlId="formLname">
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="text" placeholder="Enter last name" onChange={(e)=>(setLastName(e.target.value))}/>
        <Form.Text style={{color:'red'}}>{last_name.length===0?second_error:''}</Form.Text>
      </Form.Group>
      <Form.Group className="mb-2" style={{width:320}} controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={(e)=>(setEmail(e.target.value))}/>
        <Form.Text style={{color:'red'}}>{email.length===0?email_error:''}</Form.Text>
      </Form.Group>
      <Form.Group className="mb-4" style={{width:320}} controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={(e)=>(setPassword(e.target.value))}/>
        <Form.Text style={{color:'red'}}>{password.length===0?pass_error:''}</Form.Text>
      </Form.Group>
      <Button variant="primary"  style={{width:320,backgroundColor:'#0E76A8',border:'none'}}  type="submit">
        Join Now
      </Button>
      <Form.Group>
      <Form.Label>Already on PRADA? <Link to='/signin' style={{textDecoration:'none'}}>Sign in</Link></Form.Label>
      </Form.Group>
    </Form>
    </div>
      </div>
    )
  }