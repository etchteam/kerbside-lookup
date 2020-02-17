import { h } from 'preact';
import PropTypes from 'prop-types';
import { Text, MarkupText } from 'preact-i18n';

import Container from '../../canvas/Container';
import Logo from '../../content/Logo';
import Title from '../../content/Title';
import Back from '../../controls/Back';

export default function Error({ code, title, message, loadRoute }) {
  const badCodes = [401, 403];
  const canSearchAgain = !(code && badCodes.indexOf(code) > -1);
  return (
    <Container>
      {canSearchAgain ? (
        <Back onClick={() => loadRoute('form')}><Text id="error.back">Search again</Text></Back>
      ) : null}
      <Title as="h2" state="danger">
        {title || <Text id="error.title">Oops</Text>}
      </Title>

      <p>
        {message || <Text id="error.message">Something went wrong when trying to retrieve your results.</Text>}
      </p>

      <p>
        <MarkupText id="error.more">
          Find out more about recycling near you at <a href="https://recyclenow.com" rel="noopener noreferrer" target="_blank">RecycleNow</a>
        </MarkupText>
      </p>

      <Logo />
    </Container>
  );
}

Error.propTypes = {
  code: PropTypes.number,
  title: PropTypes.node,
  message: PropTypes.node,
  loadRoute: PropTypes.func.isRequired,
  locale: PropTypes.string.isRequired
};
