import Daemon from '../daemon';
import Magician from '../magician';

test('Just attack', () => {
  const alex = new Magician('Alex', 'Magician', 200, 3, false);
  expect(alex.attack).toBe(180);
});

test('Attack with stoned', () => {
  const alex = new Daemon('Salem', 'Daemon', 115.3, 2, true);
  expect(alex.attack).toBe(100);
});

test('Attack zero', () => {
  const alex = new Daemon('SalemX', 'Daemon', 100, 12, true);
  expect(alex.attack).toBe(0);
});
