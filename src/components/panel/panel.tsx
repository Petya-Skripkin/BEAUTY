import React from 'react';

import { Content, Conteiner, Button, Image } from './styles';

const Panel = () => {
  return (
    <Content>
      <Conteiner>
        <Image bgImage='./cheir.svg'></Image>
        <br /> Парикмахерское кресло <br />
        <br /> "Норм" гидравлическое<br />
        <h3> 9 900 ₽ </h3><br/>
        <Button>Купить</Button>        
        </Conteiner>
    </Content>
  )
}

export default Panel;