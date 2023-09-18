import { h } from 'preact';
import { Text } from 'preact-i18n';
import PropTypes from 'prop-types';

import Logo from '../Logo';

export default function PoweredBy({ brand }) {
  return (
    <div className="klw-powered-by">
      <span className="klw-powered-by__text">
        <Text id="powered_by">Powered by</Text>
      </span>
      <span className="klw-powered-by__logo">
        <Logo brand={brand} />
      </span>
    </div>
  );
}

PoweredBy.propTypes = {
  brand: PropTypes.string.isRequired,
};
