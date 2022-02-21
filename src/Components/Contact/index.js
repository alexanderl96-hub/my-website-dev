import React from 'react'
import {Container, FormWrapper, Icon, FormContent, Form, FormH1, FormLabel, FormInput, FormButtom, Text } from './ContactElements'

const Contactt = () => {
  return (
    <>
    <Container>
        <FormWrapper>
            <Icon to='/' >Alexander</Icon>
            <FormContent>
                <Form action='#' >
                    <FormH1>Contact me</FormH1>
                    <FormLabel htmlFor='for'>Name</FormLabel>
                    <FormInput type='text' required />
                    <FormLabel htmlFor='for'>Last name</FormLabel>
                    <FormInput type='text' required />
                    <FormLabel htmlFor='for'>Message:</FormLabel>
                    <FormInput type='text' required />
                    <FormButtom >Submit</FormButtom>
                    {/* <Text>Forgot Password</Text> */}
                </Form>
            </FormContent>
        </FormWrapper>
    </Container>
    </>
  )
}

export default Contactt