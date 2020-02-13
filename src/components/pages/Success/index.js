/* global fetch */
import { h, Component } from 'preact';
import { func, string } from 'prop-types';
import { Text, MarkupText } from 'preact-i18n';

import List from '../../composition/List';
import Container from '../../canvas/Container';
import Loading from '../../content/Loading';
import Logo from '../../content/Logo';
import Title from '../../content/Title';
import RecyclingContainer from '../../content/RecyclingContainer';
import Back from '../../controls/Back';

export default class Success extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      data: {}
    };
  }

  componentDidMount() {
    const { loadRoute, locale, postcode, material, token } = this.props;
    const url = `${process.env.API_HOST}/api/widget/kerbside/${postcode}?lang=${locale}&materials=${material.id}`;
    const options = { credentials: 'include', headers: { Authorization: `Bearer ${token}` } };

    setTimeout(() => {
      fetch(url, options).then((response) => {
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
            <Text id="success.kerbside.message" fields={{ material: material.name, postcode }}>
              <span>You can recycle {material.name} in {postcode}.</span>
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

    const shuffledAvailable = data.available_materials.sort(() => 0.5 - Math.random());
    const top5Available = shuffledAvailable.slice(0, 5);

    return (
      <Container>
        <Back onClick={() => loadRoute('form')}><Text id="success.back">Search again</Text></Back>
        <Title as="h2" state="info">
          <Text id="success.no_kerbside.title">
            Visit a local recycling location
          </Text>
        </Title>

        <p>
          <MarkupText id="success.no_kerbside.message" fields={{ postcode, material: material.name, materials: material.id }}>
            You can't recycle {material.name} at {postcode}, you'll need to take them
            to your <a href={`https://www.recyclenow.com/local-recycling?rlw-initial-path=places%2Fresults%2F${postcode}%3Fmaterials%3D${material.id}`} target="_blank" rel="noopener noreferrer">nearest recycling location</a>
          </MarkupText>
        </p>

        <p>
          <Text id="success.no_kerbside.list_title">
            Here are some things you can recycle:
          </Text>
        </p>

        <ul>
          {top5Available.map((material) => (
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
  locale: string.isRequired,
  token: string.isRequired
};
