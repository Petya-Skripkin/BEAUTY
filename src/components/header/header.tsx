import React from 'react';

import { Content } from './styles';

interface IProps {
  text: string | number;
}

const Header = ({text}: IProps) => (
  <Content>
    {text}
  </Content>
)

export default Header;