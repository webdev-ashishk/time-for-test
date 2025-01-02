import { expect, test } from 'vitest';
import { Multiply } from '../Multiply';

test('multiply', () => {
  const result = Multiply(10, 20);
  expect(result).toBe(200);
});
