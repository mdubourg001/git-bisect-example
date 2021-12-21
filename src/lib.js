const { RADIX } = require("./constants");

function square(n) {
  const asNumber = Number.parseInt(n, RADIX);

  if (Number.isNaN(asNumber)) {
    throw `"${n}" is not a number!`;
  }

  return asNumber * asNumber;
}

exports.square = square;
