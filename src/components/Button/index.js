import React from 'react';

import { Container } from './styles';

export default function Button({ text, height }) {
  return (
    <Container style={{ height: height }}>
      <p>{text}</p>
    </Container>
  );
}
