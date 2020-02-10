import { h } from 'preact';

import Container from '../canvas/Container';
import Logo from '../content/Logo';
import Title from '../content/Title';

export default function Error({ title, message }) {
  return (
    <Container>
      <Title as="h2">{title || 'Oops'}</Title>

      <p>{message || 'Something went wrong when trying to retrieve your results.'}</p>

      <p>
        Find out more about recycling near you at <a href="https://recyclenow.com" rel="noopener noreferrer" target="_blank">RecycleNow</a>
      </p>

      <Logo />
    </Container>
  );
}
