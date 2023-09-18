// eslint-disable-next-line @typescript-eslint/no-unused-vars, unused-imports/no-unused-imports
import { h } from 'preact';
import { Text, withText } from 'preact-i18n';
import PropTypes from 'prop-types';

import LogoCY from './LogoCY';
import LogoEN from './LogoEN';

const Logo = withText({
  locale: <Text id="locale">en</Text>,
})(({ brand, locale }) => {
  const path = locale === 'cy' ? '/cy' : '';
  return brand === 'rfw' ? (
    <a
      className="klw-logo"
      href={`http://walesrecycles.org.uk${path}`}
      rel="noopener noreferrer"
      target="_blank"
    >
      <LogoCY />
    </a>
  ) : (
    <a
      className="klw-logo"
      href="https://recyclenow.com"
      rel="noopener noreferrer"
      target="_blank"
    >
      <LogoEN />
    </a>
  );
});

Logo.propTypes = {
  brand: PropTypes.string.isRequired,
  locale: PropTypes.string.isRequired,
};

export default Logo;
