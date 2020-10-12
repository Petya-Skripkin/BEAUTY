import React from 'react';

import { Content, Menu, LinkContent, Link, Conteiner, Icon, Search, SearchIcon, SearchInput } from './styles';
import { Bell } from '../index';

interface IMenu {
  link: string;
  title: string;
}

interface IProps {
  topMenu: IMenu[];
  bottomMenu: IMenu[];
}

const Header = ({ topMenu, bottomMenu }: IProps) => (
  <Content>
    <Menu Background='gray'>
      {topMenu.map(item => (
        <LinkContent>
          <Link href={item.link}>{item.title}</Link>
        </LinkContent>
      ))}
    </Menu>
    <Conteiner>
      <Icon src='./main-menu.svg' alt='' />
      <Search>
        <SearchIcon href='#' target="_blank"></SearchIcon>
        <SearchInput type='text' />
      </Search>
      <Bell />
    </Conteiner>
    <Menu>
      {bottomMenu.map(item => (
        <LinkContent>
          <Link href={item.link} size={true} >{item.title}</Link>
        </LinkContent>
      ))}
    </Menu>
  </Content>
)

export default Header;