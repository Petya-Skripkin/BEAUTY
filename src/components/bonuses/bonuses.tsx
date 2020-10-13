import React from 'react';

import { Content, Conteiner, Paragraph, Text, Input, Image } from './styles';

interface IProps {
  title: string;
  text: string;
  img: string;
}

const Bonuses = ({ title, text, img }: IProps) => {
  return (
    <Content>
      <Conteiner>
        <Paragraph>{title}</Paragraph>
        <Text>{text}</Text>
        <Input type='text' placeholder='Введите e-mail' />
      </Conteiner>
      <Image src={img} alt='' />
    </Content>
  )
}

export default Bonuses;