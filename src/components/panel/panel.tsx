import React from 'react';

import { Conteiner, Button, Image } from './styles';

interface IProps {
  image: string;
  text: string;
  price: string;
}

const Panel = ({ image, text, price }: IProps) => {
  return (
    <Conteiner>
      <Image src={image} alt="" />
      <div>{text}</div>
      <h3> {price} </h3><br />
      <Button>Купить</Button>
    </Conteiner>
  )
}

export default Panel;