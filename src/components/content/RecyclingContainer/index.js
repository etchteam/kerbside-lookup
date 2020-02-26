import { h } from 'preact';
import PropTypes from 'prop-types';

import Title from '../Title';

export default function RecyclingContainer({ title, image, content }) {
  return (
    <div className="klw-recycling-container">
      <div className="klw-recycling-container__image">
        {image ? (
          <img src={image} alt={title} role="presentation" />
        ) : <span className="klw-recycling-container__no-image" />}
      </div>
      <div className="klw-recycling-container__content">
        <Title as="h3">{title}</Title>
        <p>{content}</p>
      </div>
    </div>
  );
}

RecyclingContainer.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
};
