const retire1 = require('./public/retire1');


//[saved.value, salary.value,goal.value,age.value];
//  var p = [c.value, b.value,d.value,a.value];

test('calculates retirment plan', () => {
  expect(retire1(20, 100000.0, 1000000.0, 25)).toBe('Yes');
});

test('calculates retirment plan', () => {
  expect(retire1(10, 100000.0, 1000000.0, 25)).toBe('Yes');
});

test('calculates retirment plan', () => {
  expect(retire1(5, 34000.0, 1000000.0, 25)).toBe('No');
});






