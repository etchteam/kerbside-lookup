import { h } from 'preact';
import { Text } from 'preact-i18n';
import PropTypes from 'prop-types';

import Container from '../../canvas/Container';
import PoweredBy from '../../content/PoweredBy';
import Title from '../../content/Title';
import Back from '../../controls/Back';
import OutLink from '../../controls/OutLink';

export default function ErrorPage({ code, title, message, loadRoute, brand }) {
  const badCodes = [401, 403];
  const canSearchAgain = !(code && badCodes.indexOf(code) > -1);
  return (
    <Container>
      {canSearchAgain ? (
        <Back onClick={() => loadRoute('form')}>
          <Text id="error.back">Search again</Text>
        </Back>
      ) : null}
      <Title as="h2" state="danger">
        {title || <Text id="error.title">Oops</Text>}
      </Title>

      <p>
        {message || (
          <Text id="error.message">
            Something went wrong when trying to retrieve your results.
          </Text>
        )}
      </p>

      <p>
        <Text id="error.more">Find out more about recycling near you at</Text>{' '}
        <OutLink brand={brand} />
      </p>

      <PoweredBy brand={brand} />
    </Container>
  );
}

Error.propTypes = {
  code: PropTypes.number,
  title: PropTypes.node,
  message: PropTypes.node,
  loadRoute: PropTypes.func.isRequired,
  locale: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
};
