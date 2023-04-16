import extractWords from '../extractWords';

describe('', () => {
  test('', () => {
    const result = extractWords('Hello world. I programming. ');
    expect(result).toEqual(['Hello', 'world', 'I', 'programming']);
  });
});
