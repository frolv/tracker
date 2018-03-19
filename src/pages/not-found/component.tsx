import * as React from 'react';
import { injectIntl, InjectedIntlProps, FormattedMessage } from 'react-intl';

import './style.scss';

class NotFoundPage extends React.Component<InjectedIntlProps, {}> {
  public componentWillMount() {
    let title = this.props.intl.formatMessage({
      id: 'not-found',
      defaultMessage: 'Not Found'
    });
    document.title = `${title} | Tracker`;
  }

  public render() {
    return (
      <div className="not-found">
        <h2 className="not-found-header">
          <FormattedMessage id="404-header" defaultMessage="Not Found" />
        </h2>
        <p className="not-found-text">
          <FormattedMessage
             id="404-text"
             defaultMessage="The requested page does not exist"
          />
        </p>
      </div>
    );
  }
}

const IntlNotFoundPage = injectIntl(NotFoundPage);
export default IntlNotFoundPage;
