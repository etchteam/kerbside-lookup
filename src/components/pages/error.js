import { h } from 'preact';
import { func } from 'prop-types';

import Container from '../canvas/Container';
import Logo from '../content/Logo';
import Title from '../content/Title';
import Back from '../controls/Back';

export default function Error({ title, message, loadRoute }) {
  return (
    <Container>
      <Back onClick={() => loadRoute('form')}>Search again</Back>
      <Title as="h2" state="danger">{title || 'Oops'}</Title>

      <p>{message || 'Something went wrong when trying to retrieve your results.'}</p>

      <p>
        Find out more about recycling near you at <a href="https://recyclenow.com" rel="noopener noreferrer" target="_blank">RecycleNow</a>
      </p>

      <Logo />
    </Container>
  );
}

Error.propTypes = {
  loadRoute: func.isRequired,
};
