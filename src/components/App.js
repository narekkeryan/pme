import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Menu from '../containers/Menu';
import Pme from '../containers/Pme';

class App extends Component {
  render() {
    return !this.props.enrolled ? <Menu /> : <Pme />;
  }
}

App.propTypes = {
  enrolled: PropTypes.bool.isRequired
};

export default App;
