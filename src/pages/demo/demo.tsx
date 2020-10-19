import React from 'react';

import * as Components from '../../components';

import { 
  TOP_MENU,
  BOTTOM_MENU
 } from './mock';

const Demo = () => (
  <>
  <Components.Header 
    topMenu= {TOP_MENU}
    bottomMenu= {BOTTOM_MENU}
  />
  <Components.Navbar /> 
  <Components.Panel /> 
  </>
)

export default Demo;