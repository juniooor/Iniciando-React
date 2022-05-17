import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function App(props) {
  const navigate = useNavigate();
  const [ usuario, setUsuario ] = useState('');
  function handlePesquisa() {
    axios.get(`https://api.github.com/users/${usuario}/repos`).then( response => {
    const repositories = response.data;
    const repositoriesName = [];
    repositories.map((repository)=> repositoriesName.push(repository.name));
    localStorage.setItem('repositoriesName', JSON.stringify(repositoriesName));   
    navigate('./repositories');
});
  }

  return (
    <>
      <input className="usuarioInput" placeholder="usuario" value={ usuario } onChange={e => setUsuario(e.target.value)} />
      <button type='button' onClick={handlePesquisa}> Pesquisar</button>
    </>
  );
};

export default App;
