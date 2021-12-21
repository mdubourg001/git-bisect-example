function square(n) {
  const asNumber = Number.parseInt(n);

  return asNumber * asNumber;
}

const n = process.argv[2];
const result = square(n);

console.log(result);
