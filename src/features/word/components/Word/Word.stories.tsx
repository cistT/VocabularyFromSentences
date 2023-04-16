import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import Word from './Word';

export default {
  component: Word,
} as ComponentMeta<typeof Word>;

export const Index: ComponentStoryObj<typeof Word> = {
  args: {
    word: 'Hello',
    meaning: 'こんにちは',
    explanation: 'アメリカなどで使われるあいさつ',
  },
};
