import React, { Component } from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import PropTypes from 'prop-types';

class Options extends Component {
  handleChange = e => {
    if (e.target.value > 0 && e.target.value <= 4) {
      this.props.changeOption(e.target.name, e.target.value);
    }
  };

  render() {
    return (
      <Form className="flex">
        <FormGroup>
          <Label>
            Degree: (1-4)
            <Input
              type="number"
              name="degree"
              placeholder="Degree"
              value={this.props.degree}
              onChange={this.handleChange}
              step={1}
            />
          </Label>
        </FormGroup>
        <FormGroup>
          <Label>
            M: (1-4)
            <Input
              type="number"
              name="m"
              placeholder="M"
              value={this.props.m}
              onChange={this.handleChange}
              step={1}
            />
          </Label>
        </FormGroup>
        <FormGroup>
          <Label>
            H: (1-4)
            <Input
              type="number"
              name="h"
              placeholder="H"
              value={this.props.h}
              onChange={this.handleChange}
              step={1}
            />
          </Label>
        </FormGroup>
      </Form>
    );
  }
}

Options.propTypes = {
  degree: PropTypes.number.isRequired,
  m: PropTypes.number.isRequired,
  h: PropTypes.number.isRequired,
  changeOption: PropTypes.func.isRequired
};

export default Options;