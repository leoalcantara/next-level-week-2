import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

export default function TeacherItem() {
  return (
    <article className="teacher-item">
        <header>
            <img src="https://media-exp1.licdn.com/dms/image/C4E03AQEuZzwstVkdgA/profile-displayphoto-shrink_200_200/0?e=1602115200&v=beta&t=Hy0TOforrpV2OhuYIdXwLxG_KfVxWyAZLHxfl0POvd4" alt="Leonidio Alcantara"/>
            <div>
                <strong>Leonidio Alcantara</strong>
                <span>Química</span>
            </div>
        </header>

        <p>
        Entusiasta das melhores tecnologias de química avançada.
        <br /> <br />
        Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.
        </p>

        <footer>
            <p>
                Preço/hora  
                <strong>R$ 60,00</strong>                     
            </p>
            <button type="button">
                <img src={whatsappIcon} alt="whatsapp"/>
                Entrar em Contato
            </button>
        </footer>                
    </article>
  );
}
