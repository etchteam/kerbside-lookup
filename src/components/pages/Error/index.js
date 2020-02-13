import { h } from 'preact';
import { func, node, string } from 'prop-types';
import { Text, MarkupText } from 'preact-i18n';

import Container from '../../canvas/Container';
import Logo from '../../content/Logo';
import Title from '../../content/Title';
import Back from '../../controls/Back';

export default function Error({ title, message, loadRoute }) {
  return (
    <Container>
      <Back onClick={() => loadRoute('form')}><Text id="error.back">Search again</Text></Back>
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
  title: node,
  message: node,
  loadRoute: func.isRequired,
  locale: string.isRequired
};
