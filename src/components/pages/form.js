import { h, Component } from 'preact';
import { func } from 'prop-types';

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
      postcode: '',
      material: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(field, e) {
    this.setState({
      [field]: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { loadRoute } = this.props;

    // Validation

    // Go to the success page
    loadRoute('success');
  }

  render() {
    const { postcode, material } = this.state;
    return (
      <Container>
        <form method="GET" action="" onSubmit={this.handleSubmit}>
          <Title as="h2">What can you recycle at home?</Title>

          <FormGroup>
            <FormGroup.Label for="postcode">Postcode</FormGroup.Label>
            <FormGroup.Control>
              <Input
                type="text"
                id="postcode"
                name="postcode"
                value={postcode}
                onInput={(e) => this.handleChange('postcode', e)}
              />
            </FormGroup.Control>
          </FormGroup>

          <FormGroup>
            <FormGroup.Label for="material">Material</FormGroup.Label>
            <FormGroup.Control>
              <Select
                id="material"
                name="material"
                value={material}
                onInput={(e) => this.handleChange('material', e)}
              >
                <option value="">Select material</option>
                <option value="potatoes">Potatoes</option>
              </Select>
            </FormGroup.Control>
          </FormGroup>

          <FormGroup>
            <FormGroup.Control>
              <Button type="submit">Submit</Button>
              <Logo />
            </FormGroup.Control>
          </FormGroup>
        </form>
      </Container>
    );
  }
}

Form.propTypes = {
  loadRoute: func.isRequired,
};
