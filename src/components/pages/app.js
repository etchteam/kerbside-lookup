import { h, Component } from 'preact';

import Form from './form';
import Success from './success';
import Error from './error';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      route: 'form',
    };
  }

  render() {
    const { route } = this.state;

    const routes = {
      form: <Form />,
      success: <Success />,
      error: <Error />,
    };

    return routes[route];
  }
}
