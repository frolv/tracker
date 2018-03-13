import { compose } from 'redux';
import { connect } from 'react-redux';
import { getContext } from 'recompose';
import * as PropTypes from 'prop-types';

/* tslint:disable:no-any */

/**
 * A replacement for react-redux's `connect` which passes on the `intl` context
 * of the root react-intl IntlProvider to all child components, allowing them
 * to make use of react-intl's functionality.
 * @param connectArgs Arguments for the to the `connect` function.
 * @return The equivalent of `connect` from react-redux, but the component
 *   created by the function passes on its `intl` context to children.
 */
const connectWithIntl = (...connectArgs: any[]) => {
  return compose(
    getContext({ intl: PropTypes.object }),
    connect(...connectArgs)
  );
};

export default connectWithIntl;
