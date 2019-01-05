import React, { Fragment } from 'react';

const generate = (degree) => {
  let equation = [];
  for (let i = 0; i <= degree; i++) {
    equation.push(
      <Fragment key={i}>
        <span className="a-block">A<sub>{i}</sub>(t)</span>{
         degree - i > 0
          ? degree - i > 1
            ? <Fragment>
              <span className="o-block">*</span>
              <span className="x-block">X<sup>{degree-i}</sup>(t)</span>
              <span className="o-block">+</span>
            </Fragment>
            : <Fragment>
              <span className="o-block">*</span>
              <span className="x-block">X(t)</span>
              <span className="o-block">+</span>
            </Fragment>
          : null
        }
      </Fragment>
    );
  }
  equation.push(
    <Fragment key={degree+1}>
      <span className="o-block">=</span>
      <span className="m-block">[0]</span>
    </Fragment>
  );
  return equation;
};

const Equation = props => <div className="equation">{generate(props.degree)}</div>;

export default Equation;