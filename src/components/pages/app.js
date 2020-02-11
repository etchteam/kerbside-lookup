import { h, Component } from 'preact';
import { array, string, bool } from 'prop-types';

import Transition from '../canvas/Transition';

import Form from './form';
import Success from './success';
import Error from './error';

import '../../styles/main.scss';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      route: 'form',
      enter: false,
      leave: false,
    };

    this.loadRoute = this.loadRoute.bind(this);
  }

  loadRoute(route) {
    // Simple page transitions
    this.setState({ leave: true }, () => {
      setTimeout(() => {
        this.setState({ route, leave: false, enter: true }, () => {
          setTimeout(() => {
            this.setState({ leave: false, enter: false });
          }, 500);
        });
      }, 500);
    });

  }

  render() {
    const { route, enter, leave } = this.state;
    // From the habitat options
    const { materials, postcode, button, placeholder, css } = this.props;

    const routes = {
      form: (
        <Form
          loadRoute={this.loadRoute}
          materials={materials}
          postcode={postcode}
          button={button}
          placeholder={placeholder}
        />
      ),
      success: <Success loadRoute={this.loadRoute} />,
      error: <Error loadRoute={this.loadRoute} />,
    };

    return (
      <div id="klw-app" className={`klw-app-${css ? 'include' : 'exclude'}-css`}>
        <Transition enter={enter} leave={leave}>
          {routes[route] || routes.error}
        </Transition>
      </div>
    );
  }
}

App.propTypes = {
  materials: array,
  postcode: string,
  button: string,
  placeholder: string,
  css: bool,
};

App.defaultProps = {
  materials: [],
  postcode: '',
  button: 'Submit',
  placeholder: 'Enter a postcode...',
  css: true,
};
