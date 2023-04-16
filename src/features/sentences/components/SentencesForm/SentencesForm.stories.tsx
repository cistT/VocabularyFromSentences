import { ComponentMeta, ComponentStoryObj } from '@storybook/react';

import SentencesForm from './SentencesForm';

export default {
  component: SentencesForm,
} as ComponentMeta<typeof SentencesForm>;

export const Index: ComponentStoryObj<typeof SentencesForm> = {
  args: {},
};
