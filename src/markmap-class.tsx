import React, { Component } from 'react';
import { Transformer } from 'markmap-lib';
import { Markmap } from 'markmap-view/dist/index.esm';

const transformer = new Transformer();
const initValue = `# markmap

- beautiful
- useful
- easy
- interactive
`;

export default class MarkmapClass extends Component {
  state = {
    value: initValue,
  };

  bindSvg = (el) => {
    this.svg = el;
  };

  componentDidMount() {
    this.mm = Markmap.create(this.svg);
    this.updateSvg();
  }

  handleChange = (e) => {
    this.setState({ value: e.target.value }, this.updateSvg);
  };

  updateSvg = () => {
    const { root } = transformer.transform(this.state.value);
    this.mm.setData(root);
    this.mm.fit();
  };

  render() {
    const { value } = this.state;
    return (
      <React.Fragment>
        <div className="flex-1">
          <textarea
            className="w-full h-full border border-gray-400"
            value={value}
            onChange={this.handleChange}
          />
        </div>
        <svg className="flex-1" ref={this.bindSvg} />
      </React.Fragment>
    );
  }
}
