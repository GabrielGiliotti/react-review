/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import './styles.css';

export default function Filter({ list }) {
    return (        
        <section className="container__filter">
            <ul>
                {list.map((item) => <li key={item}>{item}</li>)}
            </ul>
            <button>Limpar tudo</button>
        </section>
    )
}