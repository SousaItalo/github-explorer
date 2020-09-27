import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

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

      <Repositories>
        <a href='teste'>
          <img
            src="https://avatars1.githubusercontent.com/u/11684877?s=460&u=4fa07a5bfb56758dafd3b1b2747dfa4e5ad2e867&v=4"
            alt='Italo Sousa'
          />
          <div>
            <strong>Github Explorer</strong>
            <p>Explore git hub repositories all around the internet</p>
          </div>

          <FiChevronRight  size={20}/>
        </a>
      </Repositories>

    </>
  );
}

export default Dashboard;
