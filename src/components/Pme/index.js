import React, { Component } from 'react';
import { Button } from 'reactstrap';
import './index.scss';
import PropTypes from 'prop-types';
import Options from '../../containers/Pme/Options';
import Equation from './Equation';
import A from '../../containers/Pme/A';
import X from '../../containers/Pme/X';
import { multiply, derivative, add, combine, E, contrast, inverse } from '../../utils/lib';

class Pme extends Component {
  handleEnrollment = e => {
    const { h, A, X } = this.props;
    const Y = multiply(X, X);

    console.log('A:', A);
    console.log('X:', X);
    console.log('Y:', Y);

    console.log('H:', h);

    // derivatives
    // k degree of derivative
    let K = 0;
    while (K <= 0) {
      console.log('K:', K);

      // A derivative
      const _A = [];
      for (let i = 0; i < A.length; i++) {
        _A.push(
          derivative(A[i], K, h, 't')
        );
      }

      // X derivative
      const _X = derivative(X, K, h, 't');

      // Y derivative
      const _Y = derivative(Y, K, h, 't');

      console.log(`A(${K}):`, _A);
      console.log(`X(${K}):`, _X);
      console.log(`Y(${K}):`, _Y);

      // start iterations
      const minusD = [
        ...combine(add(multiply(_A[1], _Y), _A[3]), add(multiply(_A[0], _Y), _A[2])),
        ...combine(_X, E(2, '-'))
      ];
      const D = contrast(minusD);
      const $D = inverse(D);

      console.log('minusD:', minusD);
      console.log('D:', D);
      console.log('$D:', $D);

      K++;
    }
  };

  render() {
    return (
      <div className="container-fluid pme">
        <h1>Parametric matrix equations</h1>
        <Options />
        <Equation degree={this.props.degree} />
        <A degree={this.props.degree} m={this.props.m} />
        <X m={this.props.m} />
        <Button onClick={this.handleEnrollment}>Enroll</Button>
      </div>
    );
  }
}

Pme.propTypes = {
  degree: PropTypes.number.isRequired,
  m: PropTypes.number.isRequired
};

export default Pme;