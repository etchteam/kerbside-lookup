import { h } from 'preact';
import PropTypes from 'prop-types';
import { Text, withText } from 'preact-i18n';

const NearestRecycling = withText({
  locale: <Text id="locale">en</Text>
})(({ brand, locale, postcode, materialId }) => {
  const path = locale === 'cy' ? '/cy/lleoliad-ailgylchu-1' : '/local-recycling';
  const text = locale === 'cy' ? 'lleoliad ailgylchu agosaf' : 'nearest recycling location';
  const query = `?rlw-initial-path=places%2Fresults%2F${postcode}%3Fmaterials%3D${materialId}`;
  return brand === 'rfw' ? (
    <a
      href={`http://walesrecycles.org.uk${path}${query}`}
      rel="noopener noreferrer"
      target="_blank"
    >
      {text}
    </a>
  ) : (
    <a
      href={`https://www.recyclenow.com/local-recycling${query}`}
      rel="noopener noreferrer"
      target="_blank"
    >
      {text}
    </a>
  );
});

NearestRecycling.propTypes = {
  brand: PropTypes.string.isRequired,
  locale: PropTypes.string.isRequired,
  postcode: PropTypes.string.isRequired,
  materialId: PropTypes.string.isRequired
};

export default NearestRecycling;
