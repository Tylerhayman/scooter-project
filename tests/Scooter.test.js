const Scooter = require('../src/Scooter')
const User = require('../src/User')

//typeof scooter === object
describe('scooter object', () => {
  test('does something', () => {
    // edit this to be a real test!
    expect(false).toEqual(true);
  }
)
})

test("charge", async () => {
  const scooter = new Scooter();
  await scooter.charge(); // we need to wait for the charge!
  expect(newScooter.charge).toBe(100);
});

//Method tests
describe('scooter methods', () => {
  // tests here!

  //rent method

  //dock method

  //requestRepair method

  //charge method

})
