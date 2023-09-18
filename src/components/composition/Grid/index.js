import { h } from 'preact';
import PropTypes from 'prop-types';

import Item from './Item';

export default function Grid({ children }) {
  return <div className="klw-grid">{children}</div>;
}

Grid.propTypes = {
  children: PropTypes.node.isRequired,
};

Grid.Item = Item;
