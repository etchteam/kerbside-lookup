import { h, Component } from 'preact';

export default class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      postcode: '',
      material: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(field, e) {
    this.setState({
      [field]: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    // Validation

    // Go to the success page
  }

  render() {
    const { postcode, material } = this.state;
    return (
      <form method="GET" action="" onSubmit={this.handleSubmit}>
        <h2>What can you recycle at home?</h2>

        <div>
          <label for="postcode">Postcode</label>
          <input
            type="text"
            id="postcode"
            name="postcode"
            value={postcode}
            onInput={(e) => this.handleChange('postcode', e)}
          />
        </div>

        <div>
          <label for="material">Material</label>
          <select
            id="material"
            name="material"
            value={material}
            onInput={(e) => this.handleChange('material', e)}
          >
            <option value="">Select material</option>
            <option value="potatoes">Potatoes</option>
          </select>
        </div>

        <button type="submit">Submit</button>
      </form>
    );
  }
}
