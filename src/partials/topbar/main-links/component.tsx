import * as React from 'react';
import { withRouter } from 'react-router-dom';
import { Icon, Menu } from 'semantic-ui-react';
import { FormattedMessage } from 'react-intl';

import { MainLinksProps } from './types';

import './style.scss';

const MainLinks = ({ history }: MainLinksProps) => {
  const load = (e: React.MouseEvent<HTMLElement>, route: string) => {
    e.preventDefault();
    history.push(route);
  };

  return (
    <Menu.Menu className="tracker-topbar-main">
      <Menu.Item icon link name="home" href="/" onClick={e => load(e, '/')}>
        <Icon name="home" size="big" />
        <FormattedMessage id="home" defaultMessage="Home" />
      </Menu.Item>
      <Menu.Item icon link name="current" href="/top" onClick={e => load(e, '/top')}>
        <Icon name="line chart" size="big" />
        <FormattedMessage id="current" defaultMessage="Current Top" />
      </Menu.Item>
      <Menu.Item icon link name="records" href="/records" onClick={e => load(e, '/records')}>
        <Icon name="trophy" size="big" />
        <FormattedMessage id="records" defaultMessage="Records" />
      </Menu.Item>
    </Menu.Menu>
  );
};

const RoutedMainLinks = withRouter(MainLinks);
export default RoutedMainLinks;
