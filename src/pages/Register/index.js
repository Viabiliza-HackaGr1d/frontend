import React from 'react';
import { NeuCard, NeuButton } from 'neumorphic-ui';
import { Link } from 'react-router-dom';
import { Container } from './styles';

export default function Register() {
  return (
    <Container>
      <NeuCard height={520} width={600}>
        <h1>REGISTRAR</h1>
        <Link class="account-create" to='/login'>Já possui uma conta?</Link>
        <form>
          <input placeholder="Nome" /> <br />
          <input placeholder="Email" /> <br />
          <input type="password" placeholder="Senha" /> <br />
          <input type="password" placeholder="Confirmar Senha" /> <br />
        </form>
        <div className="submitButton"><NeuButton text="Entrar" /></div>
      </NeuCard>
    </Container>
  );
}
