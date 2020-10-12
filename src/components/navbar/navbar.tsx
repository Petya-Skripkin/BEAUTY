import React from 'react';

import { Content, Conteiner, Button, Slide } from './styles';

const Navbar = () => {
  return (
    <Content>
      <Conteiner>
        <h1>Супер кресло</h1><br />
        Текст акции всегда отражает суть, а не просто болтовню, поэтому внимательнее <br /><br />
        <Button>Подробнее</Button>
      </Conteiner>
        <Slide bgImage='./background.svg'></Slide>
    </Content>
  )
}

export default Navbar;