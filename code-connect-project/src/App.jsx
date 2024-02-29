import { useEffect, useState } from 'react';
import './App.css';
import Card from './components/Card';
import Filter from './components/Filter';
import Sidebar from './components/Sidebar';
import Ordering from './components/Ordering';
import SearchBar from './components/SearchBar';

function App() {
  const [data, setData] = useState([]);
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch('https://my-json-server.typicode.com/MonicaHillman/codeconnect-api/publicacoes')
    .then(response => response.json())
    .then(data => setData(data))
  }, []);

  return (
    <div className='container'>
      <Sidebar />
      <div>
        <SearchBar list={list} setList={setList}/>
        <Filter list={list}/>
        <Ordering />
        <ul className='card__list'>
          {data ? data.map((item, index) => (
            <li key={index}>
              <Card 
                id={item.id} 
                imagemUrl={item.imagem_capa} 
                titulo={item.titulo}
                resumo={item.resumo}
                linhasDeCodigo={item.linhas_de_codigo}
                compartilhamentos={item.compartilhamentos}
                comentarios={item.comentarios}
                usuario={item.usuario}
              />
            </li>
          )) : null}
        </ul>
      </div>
    </div>
  )
}

export default App
