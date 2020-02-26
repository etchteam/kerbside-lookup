/* global fetch */
import { h, Component } from 'preact';
import PropTypes from 'prop-types';
import { Text, MarkupText } from 'preact-i18n';

import List from '../../composition/List';
import Container from '../../canvas/Container';
import Loading from '../../content/Loading';
import OutLink from '../../controls/OutLink';
import PoweredBy from '../../content/PoweredBy';
import Title from '../../content/Title';
import RecyclingContainer from '../../content/RecyclingContainer';
import Back from '../../controls/Back';
import NearestRecycling from '../../controls/NearestRecycling';

export default class Success extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      data: {}
    };
  }

  componentDidMount() {
    const { loadRoute, locale, postcode, material, token, apihost } = this.props;
    const host = apihost || process.env.API_HOST;
    const url = `${host}/api/widget/kerbside/${postcode}?lang=${locale}&materials=${material.id}`;
    const options = { credentials: 'include', headers: { Authorization: `Bearer ${token}` } };

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
  }

  render() {
    const { loadRoute, postcode, material, brand } = this.props;
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
              <span>You can put {material.name} in your home recycling in {postcode}.</span>
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
            <Text id="success.more">
              Find out how to recycle more items at
            </Text>
            {' '}
            <OutLink brand={brand} />
          </p>

          <PoweredBy brand={brand} />
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
            Unfortunately...
          </Text>
        </Title>

        <p>
          <MarkupText id="success.no_kerbside.message" fields={{ postcode, material: material.name, materials: material.id }}>
            You <strong>can't</strong> put {material.name} in your home recycling in {postcode} at the moment, you'll need to take them
            to your
          </MarkupText>
          {' '}
          <NearestRecycling brand={brand} postcode={postcode} materialId={material.id} />
        </p>

        <p>
          <Text id="success.no_kerbside.list_title">
            But here are some things you can recycle at home:
          </Text>
        </p>

        <ul>
          {top5Available.map((material) => (
            <li key={material}>{material}</li>
          ))}
        </ul>

        <p>
          <MarkupText id="success.more">
            Find out how to recycle more items at
          </MarkupText>
          {' '}
          <OutLink brand={brand} />
        </p>

        <PoweredBy brand={brand} />
      </Container>
    );
  }
}

Success.propTypes = {
  loadRoute: PropTypes.func.isRequired,
  postcode: PropTypes.string.isRequired,
  material: PropTypes.string.isRequired,
  locale: PropTypes.string.isRequired,
  token: PropTypes.string.isRequired,
  apihost: PropTypes.string,
  brand: PropTypes.string.isRequired
};
