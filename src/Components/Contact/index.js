import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';
import {Container, FormWrapper, Icon, FormContent, Form, FormH1, FormLabel, FormInput, FormButtom, FormLabelText, FormInputTextarea } from './ContactElements'

const Contactt = () => {
  const form = useRef();
  let nameUser = '';

   function greet() {
    alert(`Thanks you  Mrs./Ms. ${nameUser}`);
   }
   const userTarget = (e)=> {
    let {value} = e.target
     nameUser = value
   }

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_l9ugyfa', 'template_sg2t9wa', form.current, '3QmzbJgYVWWAUxKwm')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      form.current.reset()
      setTimeout(greet); 
  };


  return (
    <>
    <Container>
        <FormWrapper>
            <Icon to='/' >Alexander</Icon>
            <FormContent>
                <Form ref={form} onSubmit={sendEmail}>
                    <FormH1>Contact me</FormH1>
                    <FormLabel htmlFor='for'>Name and Last Name :</FormLabel>
                    <FormInput type='text' name="from_name" onChange={userTarget} required />
                    <FormLabel htmlFor='for'>Email :</FormLabel>
                    <FormInput type='email' name="from_email" required />
                    <FormLabelText htmlFor='for'>Message :</FormLabelText>
                    <FormInputTextarea name='message' required />
                    <FormButtom type="submit" value="Send" >Submit</FormButtom>
                    {/* <Text>Forgot Password</Text> */}
                </Form>
            </FormContent>
        </FormWrapper>
    </Container>
    </>
  )
}

export default Contactt