import React from 'react';

import logoImg from '../../assets/logo.svg';
import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github explorer" />
      <Title>Explore repositórios no GitHub</Title>
      <Form>
        <input placeholder="digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories></Repositories>

    </>
  );
}

export default Dashboard;
