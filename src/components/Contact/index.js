import React from "react";
// import ReCAPTCHA from "react-google-recaptcha";

import {
  Container,
  FormWrap,
  Icon,
  FormContent,
  Form,
  FormH1,
  FormLabel,
  FormInput,
  FormButton,
  Text,
  FormTextArea
} from "./ContactElements";

const recaptchaRef = React.createRef();

const Contact = () => {
  return (
    <Container>
      <FormWrap>
        <FormContent>
          <Form method="POST" action="https://public.herotofu.com/v1/d78a8b60-ef4f-11ee-97a2-f17dd40c9cd8">
            <FormH1>Get in touch with us</FormH1>
            <FormLabel htmlFor="for">Full Name *</FormLabel>
            <FormInput type="text" name="fullname" required />
            <FormLabel htmlFor="for">Company *</FormLabel>
            <FormInput type="text" name="company" required />
            <FormLabel htmlFor="for">Email *</FormLabel>
            <FormInput type="email" name="email" required />
            <FormLabel htmlFor="for">Message *</FormLabel>
            <FormTextArea name="message" required />
            <FormButton type="submit">Send</FormButton>
          </Form>
        </FormContent>
      </FormWrap>
    </Container>
  );
};

export default Contact;
