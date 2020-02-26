import { h } from 'preact';
import PropTypes from 'prop-types';
import { Text, withText } from 'preact-i18n';

const OutLink = withText({
  locale: <Text id="locale">en</Text>
})(({ brand, locale }) => {
  const path = locale === 'cy' ? '/cy/alla-i-ei-ailgylchu' : '/what-to-do-with';
  const text = locale === 'cy' ? 'ailgylchu dros Gymru' : 'Recycle for Wales';
  return brand === 'rfw' ? (
    <a
      href={`https://www.recycleforwales.org.uk${path}`}
      rel="noopener noreferrer"
      target="_blank"
    >
      {text}
    </a>
  ) : (
    <a
      href="https://recyclenow.com/what-to-do-with"
      rel="noopener noreferrer"
      target="_blank"
    >
      RecycleNow
    </a>
  );
});

OutLink.propTypes = {
  brand: PropTypes.string.isRequired,
  locale: PropTypes.string.isRequired
};

export default OutLink;
