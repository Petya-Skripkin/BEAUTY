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
  {/* <Components.Bell /> */}
  </>
)

export default Demo;