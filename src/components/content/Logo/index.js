import { h } from 'preact';
import { withText, Text } from 'preact-i18n';

import LogoEN from './LogoEN';
import LogoCY from './LogoCY';

const Logo = withText({
  locale: <Text id="locale">en</Text>
})(({ locale }) => {
  return locale === 'cy' ? (
    <a
      className="klw-logo"
      href="https://www.recycleforwales.org.uk/cy"
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

export default Logo;
