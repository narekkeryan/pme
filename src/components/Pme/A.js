import React, { Component } from 'react';
import { FormGroup, Input } from 'reactstrap';
import PropTypes from 'prop-types';
import { cloneDeep } from 'lodash';

class A extends Component {
  handleChange = e => {
    const A = cloneDeep(this.props.A);
    const { i, j, k } = e.target.dataset;
    A[i][j][k] = e.target.value;
    this.props.changeA(A);
  };

  generate = () => {
    const { degree, m } = this.props;
    let A = [];
    for (let i = 0; i <= degree; i++) {
      A.push([]);
      A[i].push(<div key="A">A({i})</div>);
      for (let j = 0; j < m; j++) {
        let row = [];
        for (let k = 0; k < m; k++) {
          row.push(<Input key={k} placeholder={`A(${i})[${j}][${k}]`} data-i={i} data-j={j} data-k={k} value={this.props.A[i][j][k]} onChange={this.handleChange} style={{flex: 100 / m + '%'}} />);
        }
        A[i].push(<FormGroup key={j} className="flex">{row}</FormGroup>);
      }
    }
    return A;
  };

  render() {
    return <div className="a">{this.generate()}</div>;
  }
}

A.propTypes = {
  degree: PropTypes.number.isRequired,
  m: PropTypes.number.isRequired,
  A: PropTypes.array.isRequired,
  changeA: PropTypes.func.isRequired
};

export default A;