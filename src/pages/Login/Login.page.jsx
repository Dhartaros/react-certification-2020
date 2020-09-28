import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router';

import { useAuth } from '../../providers/Auth';

const Container = styled.section`
  width: 300px;
`;

const WelcomeMessage = styled.h1`
  text-align: center;
  letter-spacing: -1px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Group = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;

const Input = styled.input`
  font-size: 1.2rem;
  width: 100%;
  padding: 0.4rem 0.6rem;
  border-radius: 3px;
  border: 1px solid white;
  background-color: rgba(0, 0, 0, 0.1);
`;

const InputLabel = styled.strong`
  display: block;
  font-weight: 700;
  text-transform: capitalize;
  margin-bottom: 0.4rem;
`;

const Button = styled.button`
  width: 5rem;
  margin-top: 1rem;
  padding: 0.4rem 0.6rem;
  font-size: 1.2rem;
  border: none;
  border-radius: 3px;
`;

const NoAccountLink = styled.a`
  color: black !important;
`;

function LoginPage() {
  const { login } = useAuth();
  const history = useHistory();

  function authenticate(event) {
    event.preventDefault();
    login();
    history.push('/');
  }

  return (
    <Container>
      <WelcomeMessage>Welcome back!</WelcomeMessage>
      <Form onSubmit={authenticate}>
        <Group>
          <label htmlFor="username">
            <InputLabel>username </InputLabel>
            <Input required type="text" id="username" />
          </label>
        </Group>
        <Group>
          <label htmlFor="password">
            <InputLabel>password </InputLabel>
            <Input required type="password" id="password" />
          </label>
        </Group>
        <Button type="submit">Sign In</Button>
        <NoAccountLink
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.youtube.com/watch?v=rAlTOfl9F2w"
        >
          I don&apos;t have an account
        </NoAccountLink>
      </Form>
    </Container>
  );
}

export default LoginPage;
