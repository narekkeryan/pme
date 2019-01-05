import React, { Component } from 'react';
import { FormGroup, Input } from 'reactstrap';
import PropTypes from 'prop-types';
import { cloneDeep } from 'lodash';

class X extends Component {
  handleChange = e => {
    const X = cloneDeep(this.props.X);
    const { i, j } = e.target.dataset;
    X[i][j] = e.target.value;
    this.props.changeX(X);
  };

  generate = () => {
    const { m } = this.props;
    let X = [<div key='X'>X</div>];
    for (let i = 0; i < m; i++) {
      let row = [];
      for (let j = 0; j < m; j++) {
        row.push(<Input key={j} placeholder={`X[${i}][${j}]`} data-i={i} data-j={j} value={this.props.X[i][j]} onChange={this.handleChange} style={{flex: 100 / m + '%'}} />);
      }
      X.push(<FormGroup key={i} className="flex">{row}</FormGroup>);
    }
    return X;
  };

  render() {
    return <div className="x">{this.generate()}</div>;
  }
}

X.propTypes = {
  m: PropTypes.number.isRequired,
  X: PropTypes.array.isRequired,
  changeX: PropTypes.func.isRequired
};

export default X;