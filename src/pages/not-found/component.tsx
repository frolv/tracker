import * as React from 'react';
import { FormattedMessage } from 'react-intl';

import './style.scss';

const notFoundPage = () => (
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

export default notFoundPage;
