import { h } from 'preact';
import { MarkupText } from 'preact-i18n';

import logo from './logo.svg';
import logoCY from './logo-cy.svg';

export default function Logo() {
  return (
    <MarkupText id="logo" fields={{ logo: logoCY }}>
      <a
        className="klw-logo"
        href="https://recyclenow.com"
        rel="noopener noreferrer"
        target="_blank"
      >
        <span className="klw-logo__img" style={{ backgroundImage: `url(${logo})` }} />
      </a>
    </MarkupText>
  );
}
