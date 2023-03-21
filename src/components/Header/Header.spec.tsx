import { render } from '@testing-library/react';
import Header from './Header';

describe('Headerコンポーネントのテスト', () => {
  test('アプリの名前が表示されるかどうかの確認', () => {
    const { getByText } = render(<Header appName='test' />);
    expect(getByText('test')).toBeTruthy();
  });
});
