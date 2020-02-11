import { h, Component } from 'preact';
import { func, array, string } from 'prop-types';
import { Text } from 'preact-i18n';

import Grid from '../composition/Grid';
import FormGroup from '../composition/FormGroup';
import Container from '../canvas/Container';
import Logo from '../content/Logo';
import Title from '../content/Title';
import Button from '../controls/Button';
import Input from '../controls/Input';
import Select from '../controls/Select';

export default class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      postcode: props.postcode,
      material: '',
      isValidating: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.isValid = this.isValid.bind(this);
  }

  getState(field) {
    if (this.state[field] !== '') return 'success';

    if (this.state.isValidating && this.state[field] === '') return 'danger';

    return 'default';
  }

  handleChange(field, e) {
    this.setState({
      [field]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { loadRoute } = this.props;
    const { postcode, material } = this.state;

    // Validation
    this.setState({ isValidating: true });

    // Go to the success page
    if (this.isValid()) {
      loadRoute('success', { postcode, material });
    }
  }

  isValid() {
    const { postcode, material } = this.state;

    return postcode !== '' && material !== '';
  }

  render() {
    const { postcode, material, isValidating } = this.state;
    const { postcode: prefilledPostcode, button, placeholder } = this.props;
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
                      placeholder={placeholder}
                      autocomplete="shipping postal-code"
                      value={postcode}
                      state={this.getState('postcode')}
                      onInput={(e) => this.handleChange('postcode', e)}
                    />
                  </FormGroup.Control>
                  {isValidating && postcode === '' ? (
                    <FormGroup.Help>
                      <Text id="form.postcode.validation">Please enter a UK postcode</Text>
                    </FormGroup.Help>
                  ) : null}
                </FormGroup>
              </Grid.Item>
            ) : null}
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
                  >
                    <option value=""><Text id="form.material.placeholder">Select material</Text></option>
                    <option value="potatoes">Potatoes</option>
                    <option value="potatoes">Potatoes Potatoes Potatoes Potatoes Potatoes Potatoes Potatoes Potatoes</option>
                  </Select>
                </FormGroup.Control>
                {isValidating && material === '' ? (
                  <FormGroup.Help>
                    <Text id="form.material.validation">Please choose a material to check</Text>
                  </FormGroup.Help>
                ) : null}
              </FormGroup>
            </Grid.Item>
            <Grid.Item>
              <FormGroup>
                <FormGroup.Control>
                  <Button type="submit">{button}</Button>
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
  loadRoute: func.isRequired,
  materials: array.isRequired,
  postcode: string.isRequired,
  button: string.isRequired,
  placeholder: string.isRequired,
  locale: string.isRequired
};
