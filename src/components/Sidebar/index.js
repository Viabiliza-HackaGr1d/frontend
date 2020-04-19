import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Profile } from './styles';

import defaultProfileImage from '../../assets/default.png';

export default function Sidebar() {
  return (
    <Container>
      <Profile>
        <img src={defaultProfileImage} alt="Profile" />
        <h1>José Da Silva</h1>
        <h3>20 Clientes Satisfeitos</h3>
      </Profile>
      <ul>
        <Link ><li>VENDAS</li></Link>
        <Link ><li>CLIENTES</li></Link>
        <Link ><li>CARTEIRA</li></Link>
        <Link to="/dashboard/profile"><li>SEU PERFIL</li></Link>
      </ul>
    </Container>
  );
}
