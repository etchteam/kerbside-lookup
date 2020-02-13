import 'promise-polyfill/dist/polyfill';
import 'cross-fetch/polyfill';
import { h, Component } from 'preact';
import { array, string } from 'prop-types';
import { IntlProvider } from 'preact-i18n';

import Transition from '../../canvas/Transition';

import Form from '../Form';
import Success from '../Success';
import Error from '../Error';

import '../../../styles/main.scss';

import welsh from '../../../lib/cy.json';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      route: 'form',
      props: {},
      enter: false,
      leave: false
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
    const { materials, postcode, button, placeholder, locale, token } = this.props;

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
          {...props}
        />
      ),
      success: <Success loadRoute={this.loadRoute} locale={locale} token={token} {...props} />,
      error: <Error loadRoute={this.loadRoute} locale={locale} {...props} />
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
  materials: array,
  postcode: string,
  button: string,
  placeholder: string,
  token: string.isRequired,
  locale: string
};

App.defaultProps = {
  materials: [],
  postcode: '',
  button: 'Submit',
  placeholder: 'Enter a postcode...',
  locale: 'en'
};