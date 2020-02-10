import { h } from 'preact';

import Container from '../canvas/Container';
import Logo from '../content/Logo';
import Title from '../content/Title';

export default function Success() {
  // Also handle no kerbside lookup
  return (
    <Container>
      <Title as="h2">Good news!</Title>
      <p>You can recycle plastic bags in CT1 1XJ.</p>

      <ul>
        <li>
          <img src="http://placehold.it/100x100" alt="Recycling image" />
          <h3>Flats</h3>
          <p>Place in your black recycling box</p>
        </li>
        <li>
          <img src="http://placehold.it/100x100" alt="Recycling image" />
          <h3>Kerbside properties</h3>
          <p>Place in your black wheelie bin</p>
        </li>
      </ul>

      <p>Find out more at <a href="https://recyclenow.com" rel="noopener noreferrer" target="_blank">RecycleNow</a></p>

      <Logo />
    </Container>
  );
}
