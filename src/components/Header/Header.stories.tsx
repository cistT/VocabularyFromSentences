import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import Header from './Header';
import { APP_NAME } from '@/const/app';

export default {
  component: Header,
} as ComponentMeta<typeof Header>;

export const Index: ComponentStoryObj<typeof Header> = {
  args: {
    appName: APP_NAME,
  },
};
