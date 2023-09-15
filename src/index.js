
/* eslint-disable import/first, no-unused-vars */
import { h } from 'preact';
import habitat from 'preact-habitat';

import App from './components/pages/App';

const _habitat = habitat(App);

_habitat.render({
  selector: '#wrap-klw',
  clean: true
});
