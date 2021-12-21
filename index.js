const RADIX = 10;

function square(n) {
  const asNumber = Number.parseInt(n, RADIX);

  if (Number.isNaN(asNumber)) {
    throw `"${n}" is not a number!`;
  }

  return asNumber * asNumber;
}

const n = process.argv[2];
const result = square(n);

console.log(result);
