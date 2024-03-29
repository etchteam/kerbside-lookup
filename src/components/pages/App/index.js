import { h, Component } from 'preact';
import { IntlProvider } from 'preact-i18n';
import PropTypes from 'prop-types';

import welsh from '../../../lib/cy.json';
import Transition from '../../canvas/Transition';
import ErrorPage from '../Error';
import Form from '../Form';
import Success from '../Success';

import '../../../styles/main.scss';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      route: 'form',
      props: {},
      enter: false,
      leave: false,
    };

    this.loadRoute = this.loadRoute.bind(this);
  }

  loadRoute(route, props) {
    // Simple page transitions
    this.setState({ leave: true }, () => {
      setTimeout(() => {
        this.setState({ route, props, leave: false, enter: true }, () => {
          setTimeout(() => {
            this.setState({ leave: false, enter: false });
          }, 500);
        });
      }, 500);
    });
  }

  render() {
    const { route, props, enter, leave } = this.state;
    // From the habitat options
    const {
      materials,
      postcode,
      button,
      placeholder,
      locale,
      token,
      apihost,
      brand,
    } = this.props;

    const routes = {
      form: (
        <Form
          loadRoute={this.loadRoute}
          materials={materials}
          postcode={postcode}
          button={button}
          placeholder={placeholder}
          locale={locale}
          token={token}
          apihost={apihost}
          brand={brand}
          {...props}
        />
      ),
      success: (
        <Success
          loadRoute={this.loadRoute}
          locale={locale}
          token={token}
          apihost={apihost}
          brand={brand}
          {...props}
        />
      ),
      error: (
        <ErrorPage
          loadRoute={this.loadRoute}
          locale={locale}
          brand={brand}
          {...props}
        />
      ),
    };

    return (
      <IntlProvider definition={locale === 'cy' ? welsh : {}}>
        <Transition enter={enter} leave={leave}>
          {routes[route] || routes.error}
        </Transition>
      </IntlProvider>
    );
  }
}

App.propTypes = {
  materials: PropTypes.array,
  postcode: PropTypes.string,
  button: PropTypes.string,
  placeholder: PropTypes.string,
  token: PropTypes.string.isRequired,
  locale: PropTypes.string,
  apihost: PropTypes.string,
  brand: PropTypes.string,
};

App.defaultProps = {
  materials: [],
  postcode: '',
  locale: 'en',
  brand: 'rn',
};
