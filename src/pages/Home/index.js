import React from 'react';

import { Container, Landscape } from './styles';

import Header from '../../components/Header';

export default function Home() {
  return (
    <Container>
      <Header />
      <Landscape>
        <p>ENCONTRE AS MELHORES OPORTUNIDADES!</p>
        <span>Entre, Explore e Encontre o melhor negócio e o melhor cliente.</span>
      </Landscape>
    </Container>
  );
}
