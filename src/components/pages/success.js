/* global fetch */
import { h, Component } from 'preact';
import { func, string } from 'prop-types';

import List from '../composition/List';
import Container from '../canvas/Container';
import Loading from '../content/Loading';
import Logo from '../content/Logo';
import Title from '../content/Title';
import RecyclingContainer from '../content/RecyclingContainer';
import Back from '../controls/Back';

export default class Success extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      data: {}
    };
  }

  componentDidMount() {
    const { loadRoute } = this.props;

    const urls = [
      '/assets/data/kerbside-collection.json',
      '/assets/data/no-kerbside-collection.json',
      '/assets/data/error.json'
    ];

    // Get a random response
    const url = urls[Math.floor(Math.random() * urls.length)];

    setTimeout(() => {
      fetch(url).then((response) => {
        return response.json();
      }).then((data) => {
        if (data.error) {
          loadRoute('error', { message: data.error });
        } else {
          this.setState({ data, loading: false });
        }
      }).catch(() => {
        loadRoute('error');
      });
    }, 1000);
  }

  render() {
    const { loadRoute, postcode, material } = this.props;
    const { loading, data } = this.state;

    if (loading) {
      return <Loading />;
    }

    if (data.kerbside_collection) {
      return (
        <Container>
          <Back onClick={() => loadRoute('form')}>Search again</Back>
          <Title as="h2" state="success">Good news!</Title>
          <p>You can recycle {material} in {postcode}.</p>

          <List>
            {data.schemes.map((scheme) => {
              return (
                <List.Item>
                  <RecyclingContainer
                    image={scheme.icon}
                    title={scheme.name}
                    content={scheme.action}
                  />
                </List.Item>
              );
            })}
          </List>

          <p>Find out more at <a href="https://recyclenow.com" rel="noopener noreferrer" target="_blank">RecycleNow</a></p>

          <Logo />
        </Container>
      );
    }

    return (
      <Container>
        <Back onClick={() => loadRoute('form')}>Search again</Back>
        <Title as="h2" state="info">Visit a local recycling location</Title>
        <p>
          You can't recycle {material} at {postcode}, you'll need to take them
          to your <a href="https://www.recyclenow.com/local-recycling?rlw-initial-path=places%2Fresults%2FSW1A%202DD%3Fmaterials%3D17%2C29" target="_blank" rel="noopener noreferrer">nearest recycling location</a>
        </p>

        <p>
          Here are some things you can recycle:
        </p>

        <ul>
          {data.available_materials.map((material) => (
            <li key={material}>{material}</li>
          ))}
        </ul>

        <p>Find out more at <a href="https://recyclenow.com" rel="noopener noreferrer" target="_blank">RecycleNow</a></p>

        <Logo />
      </Container>
    );
  }
}

Success.propTypes = {
  loadRoute: func.isRequired,
  postcode: string.isRequired,
  material: string.isRequired,
  locale: string.isRequired
};
