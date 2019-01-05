import React, { Component } from 'react';
import logo from '../../logo.svg';
import './index.scss';
import PropTypes from 'prop-types';

class Menu extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Parametric matrix equations
          </p>
          <span
            className="App-link"
            onClick={this.props.enroll}
          >
            Enroll
          </span>
        </header>
      </div>
    );
  }
}

Menu.propTypes = {
  enroll: PropTypes.func.isRequired
};

export default Menu;
