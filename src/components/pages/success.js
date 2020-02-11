import { h } from 'preact';
import { func } from 'prop-types';

import List from '../composition/List';
import Container from '../canvas/Container';
import Logo from '../content/Logo';
import Title from '../content/Title';
import RecyclingContainer from '../content/RecyclingContainer';
import Back from '../controls/Back';

export default function Success({ loadRoute }) {
  // No kerbside collection
  if (true) {
    return (
      <Container>
        <Back onClick={() => loadRoute('form')}>Search again</Back>
        <Title as="h2" state="info">Visit a local recycling location</Title>
        <p>
          You can't recycle plastic bags at CT1 1XJ, you'll need to take them
          to your <a href="https://www.recyclenow.com/local-recycling?rlw-initial-path=places%2Fresults%2FSW1A%202DD%3Fmaterials%3D17%2C29" target="_blank" rel="noopener noreferrer">nearest recycling location</a>
        </p>

        <p>
          Here are some things you can recycle:
        </p>

        <ul>
          <li>Glass</li>
          <li>Batteries</li>
          <li>Cardboard/paper</li>
          <li>Metal packaging/foil</li>
          <li>Garden waste</li>
        </ul>

        <p>Find out more at <a href="https://recyclenow.com" rel="noopener noreferrer" target="_blank">RecycleNow</a></p>

        <Logo />
      </Container>
    );
  }

  // Kerbside collection
  return (
    <Container>
      <Back onClick={() => loadRoute('form')}>Search again</Back>
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

Success.propTypes = {
  loadRoute: func.isRequired
};
