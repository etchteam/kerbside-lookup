import { h } from 'preact';
import PropTypes from 'prop-types';

import Control from './Control';
import Help from './Help';
import Label from './Label';

export default function FormGroup({ children }) {
  return <div className="klw-form-group">{children}</div>;
}

FormGroup.propTypes = {
  children: PropTypes.node.isRequired,
};

FormGroup.Control = Control;
FormGroup.Help = Help;
FormGroup.Label = Label;
