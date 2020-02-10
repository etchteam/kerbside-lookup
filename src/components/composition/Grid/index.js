import { h } from 'preact';
import { node } from 'prop-types';

import Item from './Item';

export default function Grid({ children }) {
  return (
    <div className="klw-grid">
      {children}
    </div>
  );
}

Grid.propTypes = {
  children: node.isRequired,
};

Grid.Item = Item;

