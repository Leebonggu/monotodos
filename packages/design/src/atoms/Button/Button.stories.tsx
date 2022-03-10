import React from 'react';
import { ComponentStory } from '@storybook/react';
import { BasicButton,  ButtonProps } from './Button'; 

export default {
  title: 'atom/Button',
  component: BasicButton,
  parameters: {},
} as ButtonProps;

export const DefaultButton: ComponentStory<typeof BasicButton> = (args) => <BasicButton {...args}>Hello</BasicButton>