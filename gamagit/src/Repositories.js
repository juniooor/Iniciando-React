import React, { useEffect } from "react";
import { useState } from "react/cjs/react.production.min";
import * as S from './Styled';


export default function Repositories() {

const [ repositories, setRepositores ] = useState([]); 
  useEffect(() => {
    let repositoriesName = localStorage.getItem('repositoriesName');
    repositoriesName = JSON.parse(repositoriesName)
    setRepositores(repositoriesName);
  }, [])
    return (
      <S.Container>
        <S.Title>Repositorios</S.Title>
          <S.List>
            {repositories.map(Repositories=>aaaaaa)}
          </S.List>
      </S.Container>
  )
};