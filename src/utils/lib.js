import math from 'mathjs';

export const multiply = (a, b) => {
  let product = [];
  // TODO: check if a can be multiplied by b
  for (let i = 0; i < a.length; i++) {
    product.push([]);
    for (let j = 0; j < b[0].length; j++) {
      product[i][j] = '';
      for (let k = 0; k < a[0].length; k++) {
        product[i][j] += `(${a[i][k]}) * (${b[k][j]}) + `;
      }
      product[i][j] = product[i][j].slice(0, -3);
    }
  }
  return product;
};

export const derivative = (Matrix, K, H, Variable) => {
  let _X = [];
  for (let i = 0; i < Matrix.length; i++) {
    _X.push([]);
    for (let j = 0; j < Matrix[i].length; j++) {
      _X[i].push(
        Math.pow(H, K) + ' / ' + math.factorial(K) + ' * ' + math.derivative(Matrix[i][j], Variable).toString()
      );
    }
  }
  return _X;
};

export const add = (a, b) => {
  // TODO: check if lengths are equal
  const c = [];
  for (let i = 0; i < a.length; i++) {
    c.push([]);
    for (let j = 0; j < a[0].length; j++) {
      c[i][j] = `${a[i][j]} + ${b[i][j]}`;
    }
  }
  return c;
};

export const combine = (a, b) => {
  // TODO: check if lengths are equal
  const c = [];
  for (let i = 0; i < a.length; i++) {
    c.push([...a[i], ...b[i]]);
  }
  return c;
};

export const E = (size = 2, sign = '') => {
  const _E = [];
  for (let i = 0; i < size; i++) {
    _E.push([]);
    for (let j = 0; j < size; j++) {
      if (i === j) {
        _E[i][j] = `${sign}1`;
      } else {
        _E[i][j] = '0';
      }
    }
  }
  return _E;
};

export const contrast = a => {
  // TODO: make dynamic
  const b = [];
  for (let i = 0; i < a.length; i++) {
    b.push([]);
    for (let j = 0; j < a[0].length; j++) {
      if (a[i][j].charAt(0) === '-') {
        b[i][j] = a[i][j].substr(1);
      } else {
        b[i][j] = `-${a[i][j]}`;
      }
    }
  }
  return b;
};

export const inverse = a => {
  const augmented = a;  
  // const augmented = combine(a, E(a.length));
  /* for (let i = 0; i < a.length; i++) {

  } */
  const m = [];
  for (let i = 0; i < augmented.length; i++) {
    m.push([]);
    for (let j = 0; j < a[i].length; j++) {
      m[i].push(`(${augmented[i][j]}) / (${augmented[i][i]})`);
    }
  }
  return m;
};

// Returns the inverse of matrix `M`.
export const matrix_inverse =  M => {
  // I use Guassian Elimination to calculate the inverse:
  // (1) 'augment' the matrix (left) by the identity (on the right)
  // (2) Turn the matrix on the left into the identity by elemetry row ops
  // (3) The matrix on the right is the inverse (was the identity matrix)
  // There are 3 elemtary row ops: (I combine b and c in my code)
  // (a) Swap 2 rows
  // (b) Multiply a row by a scalar
  // (c) Add 2 rows
  
  //if the matrix isn't square: exit (error)
  if(M.length !== M[0].length){return;}
  
  //create the identity matrix (I), and a copy (C) of the original
  var i=0, ii=0, j=0, dim=M.length, e=0, t=0;
  var I = [], C = [];
  for(i=0; i<dim; i+=1){
      // Create the row
      I[I.length]=[];
      C[C.length]=[];
      for(j=0; j<dim; j+=1){
          
          //if we're on the diagonal, put a 1 (for identity)
          if(i===j){ I[i][j] = 1; }
          else{ I[i][j] = 0; }
          
          // Also, make the copy of the original
          C[i][j] = M[i][j];
      }
  }
  
  // Perform elementary row operations
  for(i=0; i<dim; i+=1){
      // get the element e on the diagonal
      e = C[i][i];
      
      // if we have a 0 on the diagonal (we'll need to swap with a lower row)
      if(e===0){
          //look through every row below the i'th row
          for(ii=i+1; ii<dim; ii+=1){
              //if the ii'th row has a non-0 in the i'th col
              if(C[ii][i] != 0){
                  //it would make the diagonal have a non-0 so swap it
                  for(j=0; j<dim; j++){
                      e = C[i][j];       //temp store i'th row
                      C[i][j] = C[ii][j];//replace i'th row by ii'th
                      C[ii][j] = e;      //repace ii'th by temp
                      e = I[i][j];       //temp store i'th row
                      I[i][j] = I[ii][j];//replace i'th row by ii'th
                      I[ii][j] = e;      //repace ii'th by temp
                  }
                  //don't bother checking other rows since we've swapped
                  break;
              }
          }
          //get the new diagonal
          e = C[i][i];
          //if it's still 0, not invertable (error)
          if(e===0){return}
      }
      
      // Scale this row down by e (so we have a 1 on the diagonal)
      for(j=0; j<dim; j++){
          C[i][j] = C[i][j]/e; //apply to original matrix
          I[i][j] = I[i][j]/e; //apply to identity
      }
      
      // Subtract this row (scaled appropriately for each row) from ALL of
      // the other rows so that there will be 0's in this column in the
      // rows above and below this one
      for(ii=0; ii<dim; ii++){
          // Only apply to other rows (we want a 1 on the diagonal)
          if(ii===i){continue;}
          
          // We want to change this element to 0
          e = C[ii][i];
          
          // Subtract (the row above(or below) scaled by e) from (the
          // current row) but start at the i'th column and assume all the
          // stuff left of diagonal is 0 (which it should be if we made this
          // algorithm correctly)
          for(j=0; j<dim; j++){
              C[ii][j] -= e*C[i][j]; //apply to original matrix
              I[ii][j] -= e*I[i][j]; //apply to identity
          }
      }
  }
  
  //we've done all operations, C should be the identity
  //matrix I should be the inverse:
  return I;
};