import React from 'react';
import { NeuCard, NeuButton } from 'neumorphic-ui';
import { Link } from 'react-router-dom';
import { Container } from './styles';

export default function Login() {
  return (
    <Container>
      <NeuCard height={450} width={600}>
        <h1>LOGIN</h1>
        <Link class="account-create" to='/register'>Não possui uma conta?</Link>
        <form>
          <input placeholder="Email"></input><br />
          <input type="password" placeholder="Senha"></input>
        </form>
        <div className="submitButton"><NeuButton text="Entrar" /></div>
      </NeuCard>
    </Container>
  );
}
