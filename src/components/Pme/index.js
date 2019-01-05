import React, { Component } from 'react';
import './index.scss';
import PropTypes from 'prop-types';
import Options from '../../containers/Pme/Options';
import Equation from './Equation';
import A from '../../containers/Pme/A';
import X from '../../containers/Pme/X';

class Pme extends Component {
  render() {
    return (
      <div className="container-fluid">
        <h1>Parametric matrix equations</h1>
        <Options />
        <Equation degree={this.props.degree} />
        <A degree={this.props.degree} m={this.props.m} />
        <X m={this.props.m} />
      </div>
    );
  }
}

Pme.propTypes = {
  degree: PropTypes.number.isRequired,
  m: PropTypes.number.isRequired
};

export default Pme;