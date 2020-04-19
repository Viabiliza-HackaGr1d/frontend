import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Profile } from './styles';

import defaultProfileImage from '../../assets/default.png';

export default function Sidebar() {
  return (
    <Container>
      <Profile>
        <img src={defaultProfileImage} alt="Profile" />
      </Profile>
      <ul>
        <Link ><li>VENDAS</li></Link>
        <Link ><li>CLIENTES</li></Link>
        <Link ><li>CARTEIRA</li></Link>
        <Link ><li>CONTATO</li></Link>
      </ul>
    </Container>
  );
}
