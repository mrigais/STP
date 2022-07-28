import emailjs from 'emailjs-com'
import React from 'react'
import LOGO from '../../images/media_logo_main.png'
import { Container, Form, FormContent, FormH1,Icon, FormInput, FormLabel, FormWrap, TextArea, FormButton, Logo } from './contact_us_elements'

const ContactUs = () => {

  function sendEmail(e){
    console.log(5)
    console.log(e.target)

    emailjs.sendForm("service_vo13ai9","template_rmrctem",e.target, "5O9XYI_NvDmeMMMqE")
    .then(function(response) {
      console.log("success")
      console.log(response.status)
      console.log(response)
      //  console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
      console.log(error)
      //  console.log('FAILED...', error);
    });
    e.target.reset()
  }

  return (
      <Container>
        <FormWrap>
          <Icon to="/"><Logo src={LOGO} to="/"></Logo></Icon>
          <FormContent>
            <Form onSubmit={sendEmail} action="#">
            
              <FormH1>Have a question for us? </FormH1>
              
              {/* <FormLabel htmlFor='name'>Name</FormLabel> */}
              <FormInput type="text" name="name" placeholder='name' required></FormInput>
              {/* <FormLabel htmlFor='for' >Email</FormLabel> */}
              <FormInput type="email" name="email" placeholder='email' required></FormInput>
              {/* <FormLabel htmlFor='for'>Query</FormLabel> */}
              <TextArea type="text" name="message" placeholder='message'  required></TextArea>
              <FormButton type="submit">Send<i class="fas fa-arrow-circle-right"></i></FormButton>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
  )
}

export default ContactUs
