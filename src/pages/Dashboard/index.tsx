import React, { useState, FormEvent, useEffect } from 'react';
import { FiChevronRight } from 'react-icons/fi';

import api from '../../services/api';
import logoImg from '../../assets/logo.svg';
import {
  Title, Form, Repositories, Error,
} from './styles';

interface Repository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  }
}

const Dashboard: React.FC = () => {
  const [newRepo, setNewRepo] = useState('');
  const [inputError, setInputError] = useState('');
  const [repositories, setRepositories] = useState<Repository[]>(() => {
    const storagedRepos = localStorage.getItem('@GithubExplorer:repositories');

    return storagedRepos
      ? JSON.parse(storagedRepos)
      : [];
  });

  useEffect(() => {
    localStorage.setItem('@GithubExplorer:repositories', JSON.stringify(repositories));
  }, [repositories]);

  async function handleAddRepository(event: FormEvent<HTMLFormElement>): Promise<void> {
    try {
      event.preventDefault();

      if (!newRepo) {
        setInputError('Digite o autor/nome do repositório');
        return;
      }

      const { data } = await api.get(`repos/${newRepo}`);
      setRepositories([...repositories, data]);
      setInputError('');
      setNewRepo('');
    } catch (error) {
      setInputError('Erro na busca do repositório');
    }
  }

  return (
    <>
      <img src={logoImg} alt="Github explorer" />
      <Title>Explore repositórios no GitHub</Title>
      <Form hasError={Boolean(inputError)} onSubmit={handleAddRepository}>
        <input
          value={newRepo}
          onChange={(event) => setNewRepo(event.target.value)}
          placeholder="digite o nome do repositório"
        />
        <button type="submit">Pesquisar</button>
      </Form>

      {inputError && <Error>{inputError}</Error>}

      <Repositories>
        {repositories.map((repository) => (
          <a key={repository.full_name} href={`/repositories/${repository.full_name}`}>
            <img
              src={repository.owner.avatar_url}
              alt={repository.owner.login}
            />
            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>

            <FiChevronRight size={20} />
          </a>
        ))}
      </Repositories>

    </>
  );
};

export default Dashboard;
