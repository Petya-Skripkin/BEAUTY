import React from 'react';

import * as Components from '../../components';

import { 
  TOP_MENU,
  BOTTOM_MENU,
  FOOTER_MENU,
 } from './mock';

const Demo = () => (
  <>
  <Components.Header 
    topMenu= {TOP_MENU}
    bottomMenu= {BOTTOM_MENU}
  />
  <Components.Navbar />
  <Components.Bonuses 
    title= 'Получайте бонусы и подарки'
    text= 'Каждый месяц разыгрываем 10 000 рублей для наших клиентов'
    img= './messege.svg'
  />
  <Components.Icon 
    link= '#'
    icon= './youtube.svg'
  />
  <Components.Category 
    title= 'Популярные категории'
    menu= {FOOTER_MENU}
  />
  <Components.Navbar /> 
  <Components.Panel 
  image='./cheir.svg'
  text='Парикмахерское кресло «Норм» гидравлическое'
  price='9 900 ₽'
  /> 
  </>
)

export default Demo;