
/* eslint-disable import/first, no-unused-vars */
const poly = require('preact-cli/lib/lib/webpack/polyfills');

import { h } from 'preact';
import habitat from 'preact-habitat';

import App from './components/pages/app';

const _habitat = habitat(App);

_habitat.render({
  selector: '#wrap-klw',
  clean: true
});
