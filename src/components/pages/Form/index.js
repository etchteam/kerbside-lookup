/* global fetch */
import { h, Component } from 'preact';
import PropTypes from 'prop-types';
import { Text, withText } from 'preact-i18n';
import find from 'lodash/find';
import isValidPostcode from 'uk-postcode-validator';

import Grid from '../../composition/Grid';
import FormGroup from '../../composition/FormGroup';
import Container from '../../canvas/Container';
import Logo from '../../content/Logo';
import Title from '../../content/Title';
import Button from '../../controls/Button';
import Input from '../../controls/Input';
import Select from '../../controls/Select';

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      postcode: props.postcode,
      material: '',
      isValidating: false,
      loading: true,
      materials: []
    };

    this.filteredMaterials = this.filteredMaterials.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.isValid = this.isValid.bind(this);
  }

  componentDidMount() {
    const { loadRoute, locale, token, apihost } = this.props;
    const host = apihost || process.env.API_HOST;
    const url = `${host}/api/widget/materials?lang=${locale}`;
    const options = { credentials: 'include', headers: { Authorization: `Bearer ${token}` } };

    fetch(url, options).then(async (response) => {
      const data = await response.json();
      if (!response.ok) {
        return {
          ...data,
          code: response.status
        };
      }
      return data;
    }).then((data) => {
      if (data.error) {
        loadRoute('error', { message: data.error, code: data.code });
      } else {
        this.setState({ materials: data, loading: false });
        if (this.isValid()) this.handleSubmit();
      }
    }).catch((e) => {
      console.log(e);
      loadRoute('error');
    });
  }

  filteredMaterials() {
    const { materials: materialSelection } = this.props;
    const { materials } = this.state;

    return materials.filter((material) => {
      return !materialSelection.length ||
        materialSelection.indexOf(material.id) > -1 ||
        materialSelection.indexOf(material.name) > -1;
    });
  }

  getState(field) {
    const postcodeSuccess = ((field === 'postcode' && isValidPostcode(this.state[field])) || field !== 'postcode');
    const postcodeDanger = (field === 'postcode' && !isValidPostcode(this.state[field]));

    if (this.state[field] !== '' && postcodeSuccess) return 'success';

    if (this.state.isValidating && (this.state[field] === '' || postcodeDanger)) return 'danger';

    return 'default';
  }

  handleChange(field, e) {
    this.setState({
      [field]: e.target.value
    });
  }

  handleSubmit(e) {
    if (e) e.preventDefault();
    const { loadRoute } = this.props;
    const { postcode, material, materials } = this.state;

    // Validation
    this.setState({ isValidating: true });

    // Go to the success page
    if (this.isValid()) {
      const filteredMaterials = this.filteredMaterials();
      const materialToSend = filteredMaterials.length === 1 ? filteredMaterials[0] : find(materials, { id: Number(material) });
      loadRoute('success', { postcode, material: materialToSend });
    }
  }

  isValid() {
    const { postcode, material } = this.state;
    const { materials: materialSelection } = this.props;

    return isValidPostcode(postcode) && (material !== '' || materialSelection.length === 1);
  }

  render() {
    const { postcode, material, isValidating, loading } = this.state;
    const { postcode: prefilledPostcode, button, placeholder, intlPlaceholder, materials: materialSelection } = this.props;

    const i18nPlaceholder = placeholder || intlPlaceholder || 'Enter a postcode...';

    return (
      <Container>
        <form method="GET" action="" onSubmit={this.handleSubmit}>
          <Title as="h2"><Text id="form.title">What can you recycle at home?</Text></Title>

          <Grid>
            {!prefilledPostcode ? (
              <Grid.Item style={{ flexBasis: '200px' }}>
                <FormGroup>
                  <FormGroup.Label for="postcode"><Text id="form.postcode.label">Postcode</Text></FormGroup.Label>
                  <FormGroup.Control>
                    <Input
                      type="text"
                      id="postcode"
                      name="postcode"
                      placeholder={i18nPlaceholder}
                      autocomplete="shipping postal-code"
                      value={postcode}
                      state={this.getState('postcode')}
                      onInput={(e) => this.handleChange('postcode', e)}
                    />
                  </FormGroup.Control>
                  {isValidating && !isValidPostcode(postcode) ? (
                    <FormGroup.Help>
                      <Text id="form.postcode.validation">Enter a valid UK postcode</Text>
                    </FormGroup.Help>
                  ) : null}
                </FormGroup>
              </Grid.Item>
            ) : null}
            {materialSelection.length !== 1 ? (
              <Grid.Item style={{ flexBasis: '300px' }}>
                <FormGroup>
                  <FormGroup.Label for="material"><Text id="form.material.label">Material</Text></FormGroup.Label>
                  <FormGroup.Control>
                    <Select
                      id="material"
                      name="material"
                      value={material}
                      onInput={(e) => this.handleChange('material', e)}
                      state={this.getState('material')}
                      disabled={loading}
                      loading={loading}
                    >
                      <option value=""><Text id="form.material.placeholder">Select material</Text></option>
                      {this.filteredMaterials().map((item) => {
                        return (
                          <option value={item.id}>{item.name}</option>
                        );
                      })}
                    </Select>
                  </FormGroup.Control>
                  {isValidating && material === '' ? (
                    <FormGroup.Help>
                      <Text id="form.material.validation">Choose a material to check</Text>
                    </FormGroup.Help>
                  ) : null}
                </FormGroup>
              </Grid.Item>
            ) : null}
            <Grid.Item>
              <FormGroup>
                <FormGroup.Control>
                  <Button type="submit">{button || <Text id="form.button">Submit</Text>}</Button>
                  <Logo />
                </FormGroup.Control>
              </FormGroup>
            </Grid.Item>
          </Grid>
        </form>
      </Container>
    );
  }
}

Form.propTypes = {
  loadRoute: PropTypes.func.isRequired,
  materials: PropTypes.array.isRequired,
  postcode: PropTypes.string,
  button: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  locale: PropTypes.string.isRequired,
  token: PropTypes.string.isRequired,
  intlPlaceholder: PropTypes.string,
  apihost: PropTypes.string
};

export default withText({ intlPlaceholder: 'form.postcode.placeholder' })(Form);
