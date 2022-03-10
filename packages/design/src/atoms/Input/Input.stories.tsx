import React from 'react';
import { ComponentStory } from '@storybook/react';
import { BasicInput,  InputProps } from './Input'; 

export default {
  title: 'atom/Input',
  component: BasicInput,
  parameters: {},
} as InputProps;

export const DefaultInput: ComponentStory<typeof BasicInput> = (args) => <BasicInput {...args} />