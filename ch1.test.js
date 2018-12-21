/*
 * j
 * Write a program that tries to test that your composition function respects
 * identity
*/

import { compose, identity } from './ch1'

test('compose respects left identity property', () => {
    const mockFn = (a) => a;

    const composedFn = compose(identity, mockFn);

    expect(mockFn('someValue'))
        .toEqual(composedFn('someValue'));
})

test('compose respects right identity property', () => {
    const mockFn = (a) => a;

    const composedFn = compose(mockFn, identity);

    expect(mockFn('someValue'))
        .toEqual(composedFn('someValue'));
})
