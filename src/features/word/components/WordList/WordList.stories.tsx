import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import WordList from './WordList';

export default {
  component: WordList,
} as ComponentMeta<typeof WordList>;

export const Index: ComponentStoryObj<typeof WordList> = {
  args: {
    wordList: [
      {
        id: '1',
        word: 'hello',
        meaning: 'こんにちは',
        explanation: '挨拶で使われる',
      },
      {
        id: '2',
        word: 'test',
        meaning: '試験',
        explanation: '',
      },
      {
        id: '3',
        word: 'Hoge',
        meaning: '',
        explanation: '',
      },
    ],
  },
};
