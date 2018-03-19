import * as React from 'react';
import { Header, Segment } from 'semantic-ui-react';
import { injectIntl, InjectedIntlProps } from 'react-intl';

import './style.scss';

class MainPage extends React.Component<InjectedIntlProps, {}> {
  public componentWillMount() {
    let title = this.props.intl.formatMessage({
      id: 'home',
      defaultMessage: 'Home'
    });
    document.title = `${title} | Tracker`;
  }

  public render() {
    return (
      <div>
        <Segment textAlign="center" vertical>
          <Header as="h1">Tracker</Header>
        </Segment>
      </div>
    );
  }
}

const IntlMainPage = injectIntl(MainPage);
export default IntlMainPage;
