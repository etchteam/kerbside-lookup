/* global fetch */
import { h, Component } from 'preact';
import { func, string } from 'prop-types';
import { Text, MarkupText } from 'preact-i18n';

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
    const { loadRoute, locale } = this.props;

    const urls = [
      '/assets/data/kerbside-collection.json',
      '/assets/data/no-kerbside-collection.json',
      '/assets/data/error.json'
    ];

    // Get a random response
    const url = urls[Math.floor(Math.random() * urls.length)];

    setTimeout(() => {
      fetch(`${url}?lang=${locale}`).then((response) => {
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
          <Back onClick={() => loadRoute('form')}><Text id="success.back">Search again</Text></Back>
          <Title as="h2" state="success"><Text id="success.kerbside.title">Good news!</Text></Title>
          <p>
            <Text id="success.kerbside.message" fields={{ material, postcode }}>
              You can recycle {material} in {postcode}.
            </Text>
          </p>

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

          <p>
            <MarkupText id="success.more">
              Find out more at <a href="https://recyclenow.com" rel="noopener noreferrer" target="_blank">RecycleNow</a>
            </MarkupText>
          </p>

          <Logo />
        </Container>
      );
    }

    return (
      <Container>
        <Back onClick={() => loadRoute('form')}><Text id="success.back">Search again</Text></Back>
        <Title as="h2" state="info">
          <Text id="success.no_kerbside.title">
            Visit a local recycling location
          </Text>
        </Title>

        <p>
          <MarkupText id="success.no_kerbside.message" fields={{ postcode, material }}>
            You can't recycle {material} at {postcode}, you'll need to take them
            to your <a href={`https://www.recyclenow.com/local-recycling?rlw-initial-path=places%2Fresults%2F${postcode}%3Fmaterials%3D17%2C29`} target="_blank" rel="noopener noreferrer">nearest recycling location</a>
          </MarkupText>
        </p>

        <p>
          <Text id="success.no_kerbside.list_title">
            Here are some things you can recycle:
          </Text>
        </p>

        <ul>
          {data.available_materials.map((material) => (
            <li key={material}>{material}</li>
          ))}
        </ul>

        <p>
          <MarkupText id="success.more">
            Find out more at <a href="https://recyclenow.com" rel="noopener noreferrer" target="_blank">RecycleNow</a>
          </MarkupText>
        </p>

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
