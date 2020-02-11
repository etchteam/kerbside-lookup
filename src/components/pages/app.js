import 'promise-polyfill/src/polyfill';
import 'whatwg-fetch';
import { h, Component } from 'preact';
import { array, string, bool } from 'prop-types';
import { IntlProvider } from 'preact-i18n';

import Transition from '../canvas/Transition';

import Form from './form';
import Success from './success';
import Error from './error';

import '../../styles/main.scss';

import welsh from '../../lib/cy.json';

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
    const { materials, postcode, button, placeholder, css, locale } = this.props;

    const routes = {
      form: (
        <Form
          loadRoute={this.loadRoute}
          materials={materials}
          postcode={postcode}
          button={button}
          placeholder={placeholder}
          locale={locale}
          {...props}
        />
      ),
      success: <Success loadRoute={this.loadRoute} locale={locale} {...props} />,
      error: <Error loadRoute={this.loadRoute} locale={locale} {...props} />
    };

    return (
      <IntlProvider definition={locale === 'cy' ? welsh : {}}>
        <div className={`klw-app-${css ? 'include' : 'exclude'}-css`}>
          <Transition enter={enter} leave={leave}>
            {routes[route] || routes.error}
          </Transition>
        </div>
      </IntlProvider>
    );
  }
}

App.propTypes = {
  materials: array,
  postcode: string,
  button: string,
  placeholder: string,
  css: bool,
  token: string,
  locale: string
};

App.defaultProps = {
  materials: [],
  postcode: '',
  button: 'Submit',
  placeholder: 'Enter a postcode...',
  css: true,
  token: '',
  locale: 'en'
};
