import { h, Component } from 'preact';

import Form from './form';
import Success from './success';
import Error from './error';

import '../../styles/main.scss';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      route: 'form',
    };

    this.loadRoute = this.loadRoute.bind(this);
  }

  loadRoute(route) {
    this.setState({ route });
  }

  render() {
    const { route } = this.state;

    const routes = {
      form: <Form loadRoute={this.loadRoute} />,
      success: <Success loadRoute={this.loadRoute} />,
      error: <Error loadRoute={this.loadRoute} />,
    };

    return (
      <div id="klw-app">
        {routes.success || routes[route] || routes.error}
      </div>
    );
  }
}
