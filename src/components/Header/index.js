import React from 'react';
import { Link } from 'react-router-dom';
import { NeuButton } from 'neumorphic-ui';
import { Container } from './styles';
import logo from '../../assets/logo.png';

export default function Header() {

  return (
    <Container >
      <div className="menu">
        <Link to="/">
          <img src={logo} alt="Viabiliza" />
        </Link>
        <div className="options" >
          <ul>
            <li><Link to="/about"><NeuButton text="QUEM SOMOS?" ></NeuButton></Link></li>
            <li><Link to="/goal"><NeuButton text="OBJETIVO" ></NeuButton></Link></li>
          </ul>
          <div className="cta">
            <Link to="/login"><NeuButton text="ENTRE AGORA"></NeuButton></Link>
          </div>
        </div>
      </div>
    </Container>
  );
}
