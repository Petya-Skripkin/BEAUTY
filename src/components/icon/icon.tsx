import React from 'react';

import { Image, Link } from './styles';

interface IProps {
  link: string;
  icon: string;
}

const Icon = ({link, icon}:IProps) => {
  return (
    <Link href= {link}>
      <Image src= {icon} alt='' />
    </Link>
  )
}

export default Icon;