import React, { useContext, useState } from 'react';
import { Form,Button, Container } from 'react-bootstrap';
import {  Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProviders';

const Register = () => {

   const {createUser} = useContext(AuthContext);
   const [accept,setAccept] = useState(false);
   const [error, setError] = useState('');

   const handleRegister = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value ;
    const photo = form.photo.value;
    const email =form.email.value ;
    const password = form.password.value ;

    console.log(name,photo,email,password);
    createUser(email,password)
    .then(result => {
      const createdUser = result.user;
      console.log(createdUser);
      setError('');
    })
    .catch(error => {
      console.log(error);
      setError(error.message);
    })
    form.reset()
   }

   const handleAccepted = event => {
    setAccept(event.target.checked);
   }

    return (
        <Container className='w-25 mx-auto'>
        <h3>Please Register</h3>
          <Form onSubmit={handleRegister}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Name</Form.Label>
    <Form.Control type="text" name='name' placeholder="Enter your name" required/>
    
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Photo URL</Form.Label>
    <Form.Control type="text" name='photo' placeholder="Enter your photo URL" required/>
    
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" name='email' placeholder="Enter email" required/>
    
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" name='password' placeholder="Password" required/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check 
    onClick={handleAccepted}
    type="checkbox" 
    name='accept' 
    label={<>Accept <Link to="/terms">Terms and Conditions</Link> </>} />
  </Form.Group>
  <Button variant="primary" disabled={!accept}  type="submit">
    Register
  </Button>
  <br />
  <Form.Text className="text-secondary ">
     Already Have an Account ? <Link to='/login'>Login</Link>
    </Form.Text>

</Form>
<p className='text-danger'>{error}</p>
    </Container>
    );
};

export default Register;
