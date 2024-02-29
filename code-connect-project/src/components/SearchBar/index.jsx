/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import { useState } from 'react';
import './styles.css';

export default function SearchBar({ list , setList }) {

    const [search, setSearch] = useState('');

    function updateList(e) {
        if(e.key === 'Enter' && !list.includes(search) && search !== '') {
            setList([...list, search]);
        }
    }

    return (
        <input 
            type='search' 
            placeholder='Digite o que você procura' 
            className='barra__pesquisa'
            onChange={(e => setSearch(e.target.value.trim()))}
            onKeyDown={(e) => updateList(e)}/>        
    )
}