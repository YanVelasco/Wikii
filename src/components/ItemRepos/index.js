/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { ItemContainer } from './style';

export default function ItemRepos({ repo, onRemove }) {
  const handleRemoveClick = () => {
    onRemove(repo.id);
  };

  return (
    <ItemContainer>
      <h3>{repo.name}</h3>
      <p>{repo.full_name}</p>
      <a href={repo.html_url} className='link-repository'>Detalhes do Repositório</a>
      <a href="#" className='link-remove' onClick={handleRemoveClick}>Remover Repositório?</a>
      <hr/>
    </ItemContainer>
  );
}

