import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  max-width: 800px;
  margin: 0 auto;
  padding: 25px 0;
  @media only screen and (max-width: 650px) {
    flex-direction: column;
  }
`;

const Form = styled.form`
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.05);
  padding: 25px;
  flex: 1 0 66%;
  text-align: center;
  h3 {
    text-align: left;
  }
`;

const Input = styled.input`
  display: block;
  margin: 10px 0;
  font-size: 18px;
  padding: 15px 10px;
  width: 100%;
  border: none;
  border-radius: 10px;
  transition: background-color 0.3s;
  background-color: rgba(0, 0, 0, 0.08);
  &:hover {
    background-color: rgba(0, 0, 0, 0.06);
  }
  &:focus {
    outline: none;
    background-color: rgba(0, 0, 0, 0.03);
  }
`;

const Textarea = styled.textarea`
  display: block;
  margin: 10px 0;
  font-size: 18px;
  font-family: inherit;
  padding: 15px 10px;
  width: 100%;
  border: none;
  border-radius: 10px;
  transition: background-color 0.3s;
  background-color: rgba(0, 0, 0, 0.08);
  height: 150px;
  &:hover {
    background-color: rgba(0, 0, 0, 0.06);
  }
  &:focus {
    outline: none;
    background-color: rgba(0, 0, 0, 0.03);
  }
`;

const Submit = styled.button`
  margin: 10px auto;
  font-size: 18px;
  padding: 15px 10px;
  width: 50%;
  border: none;
  border-radius: 10px;
  transition: background-color 0.3s;
  background-color: rgba(0, 0, 0, 0.08);
  &:hover {
    background-color: rgba(0, 0, 0, 0.06);
  }
  &:focus {
    outline: none;
    background-color: rgba(0, 0, 0, 0.03);
  }
`;

const Details = styled.p`
  margin-left: 15px;
  margin-top: 25px;
  color: rgba(0, 0, 0, 0.5);
`;

const A = styled.a`
  color: rgba(0, 0, 0, 0.5);
  transition: all 0.3s;
  &:hover {
    color: rgba(0, 0, 0, 1);
  }
`;

const ContactForm = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    body: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (e.target.disabled) {
      return;
    }

    e.target.disabled = true;
    const res = await fetch(process.env.GATSBY_AWS_MAILER_API, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...form,
        to: 'shadi.beshai@uregina.ca',
        subject: 'You Received a Message from www.shadibeshai.ca',
        debug: false,
      }),
    });

    if (res.status === 200) {
      setForm({ name: '', email: '', body: '' });
    }
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <h3>Email me</h3>
        <Input
          type="text"
          id="name"
          name="name"
          placeholder="Name"
          value={form.name || ''}
          onChange={handleChange}
        />
        <Input
          type="text"
          id="email"
          name="email"
          placeholder="Email"
          value={form.email || ''}
          onChange={handleChange}
        />
        <Textarea
          id="body"
          name="body"
          placeholder="Message"
          value={form.body || ''}
          onChange={handleChange}
        />
        <Submit>Submit</Submit>
      </Form>
      <Details>
        Dr. Shadi Beshai
        <br />
        Department of Psychology
        <br />
        University of Regina
        <br />
        3737 Wascana Parkway Regina, SK. S4S0A2
        <br />
        <A href="tel:3065854026">306-585-4026</A>
        <br />
        <A href="mailto:shadi.beshai@uregina.ca">shadi.beshai@uregina.ca</A>
      </Details>
    </Container>
  );
};

export default ContactForm;
