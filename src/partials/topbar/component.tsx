import * as React from 'react';
import { Menu } from 'semantic-ui-react';

import MainLinks from './main-links';
import TopbarSearch from './topbar-search';

import './style.scss';

const Topbar = () => (
  <Menu fixed="top" size="small" className="tracker-topbar">
    <MainLinks />
    <TopbarSearch />
  </Menu>
);

export default Topbar;
