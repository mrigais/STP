import emailjs from 'emailjs-com'
import React from 'react'
import { Container, Form, FormContent, FormH1,Icon, FormInput, FormLabel, FormWrap, TextArea, FormButton } from './contact_us_elements'

const ContactUs = () => {

  function sendEmail(e){
    console.log(5)

    // emailjs.send('gmail', 'service_vo13ai9',e.target, "5O9XYI_NvDmeMMMqE")
    // .then(function(response) {
    //    console.log('SUCCESS!', response.status, response.text);
    // }, function(error) {
    //    console.log('FAILED...', error);
    // });
    // e.target.reset()
  }

  return (
      <Container>
        <FormWrap>
          {/* <Icon to="/">STM</Icon> */}
          <FormContent>
            <Form  action="#">
              <FormH1>Get In Touch With STM</FormH1>
              <FormLabel htmlFor='for'>Email</FormLabel>
              <FormInput type="email" required></FormInput>
              <FormLabel htmlFor='for'>Query</FormLabel>
              <TextArea type="text" required></TextArea>
              <FormButton type="submit">Send</FormButton>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    
   
  
  )
}

export default ContactUs
