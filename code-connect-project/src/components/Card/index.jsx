/* eslint-disable react/prop-types */
import './styles.css';
import code from './assets/code.svg';
import chat from './assets/chat.svg';
import share from './assets/share.svg';

export default function Card({ imagemUrl, titulo, resumo, linhasDeCodigo, compartilhamentos, comentarios, usuario }) {
    return (
        <article className='card'>
            <div className='card__image'>
                <img src={imagemUrl} alt='Imagem do post'/>
            </div>
            <div className='card__content'>
                <div className='content__text'>
                    <h3>{titulo}</h3>
                    <p>{resumo}</p>
                </div>
                <div className='content__footer'> 
                    <ul>
                        <li>
                            <img src={code} alt='Códigos'/>
                            {linhasDeCodigo}
                        </li>
                        <li>
                            <img src={share} alt='Compartilhamentos'/>
                            {compartilhamentos}
                        </li>
                        <li>
                            <img src={chat} alt='Comentários'/>
                            {comentarios}
                        </li>
                    </ul>

                    <div className='footer__user'> 
                        <img src={usuario.imagem} alt='Imagem do usuario'/>
                        {usuario.nome}
                    </div>
                </div>
            </div>
        </article>
    )
}