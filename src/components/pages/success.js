import { h } from 'preact';

import List from '../composition/List';
import Container from '../canvas/Container';
import Logo from '../content/Logo';
import Title from '../content/Title';
import RecyclingContainer from '../content/RecyclingContainer';

export default function Success() {
  // Also handle no kerbside lookup
  return (
    <Container>
      <Title as="h2" state="success">Good news!</Title>
      <p>You can recycle plastic bags in CT1 1XJ.</p>

      <List>
        <List.Item>
          <RecyclingContainer
            image="http://placehold.it/64x64"
            title="Flats"
            content="Place in your black recycling box"
          />
        </List.Item>
        <List.Item>
          <RecyclingContainer
            image="http://placehold.it/64x64"
            title="Kerbside properties"
            content="Place in your black wheelie bin"
          />
        </List.Item>
      </List>

      <p>Find out more at <a href="https://recyclenow.com" rel="noopener noreferrer" target="_blank">RecycleNow</a></p>

      <Logo />
    </Container>
  );
}
