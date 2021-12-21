const { square } = require("./src/lib");

let exitCode = 0;

function test(label, fn) {
  try {
    fn();
    console.log(`${label} ✅`);
  } catch (error) {
    console.error(`${label} 🚫`);
    console.error(`-> ${error}`);

    exitCode = 1;
  }
}

test("square(2) should be 4", () => {
  const sq = square(2);

  if (sq !== 4) {
    throw `expected 4, got ${sq}`;
  }
});

test("square(10) should be 100", () => {
  const sq = square(10);

  if (sq !== 100) {
    throw `expected 100, got ${sq}`;
  }
});

process.exit(exitCode);
