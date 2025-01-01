import { expect, test } from 'vitest';
import { sum } from '../sum';

test('sum testing', () => {
  const result = sum(10, 30);
  expect(result).toBe(40);
});
