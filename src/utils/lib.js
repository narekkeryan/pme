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