import React from 'react';

import { Content, Title, Conteiner, Link } from './styles';

interface IMenu {
  title: string;
  link: string;
}

interface IProps {
  title: string;
  menu: IMenu[];
}

const Category = ({ title, menu }: IProps) => {
  return (
    <Content>
      <Title>{title}</Title>
      <Conteiner>
        {menu.map(item => (
          <Link href={item.link}>{item.title}</Link>
        ))}
      </Conteiner>
    </Content>
  )
}

export default Category;