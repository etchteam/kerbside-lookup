import { h } from 'preact';
import { string } from 'prop-types';

import Title from '../Title';

export default function RecyclingContainer({ title, image, content }) {
  return (
    <div className="klw-recycling-container">
      <div className="klw-recycling-container__image">
        <img src={image} alt={title} role="presentation" />
      </div>
      <div className="klw-recycling-container__content">
        <Title as="h3">{title}</Title>
        <p>{content}</p>
      </div>
    </div>
  );
}
