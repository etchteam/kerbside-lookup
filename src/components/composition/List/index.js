import { h } from 'preact';
import { node } from 'prop-types';

import Item from './Item';

export default function List({ children }) {
  return (
    <ul className="klw-list">
      {children}
    </ul>
  );
}

List.propTypes = {
  children: node.isRequired,
};

List.Item = Item;
