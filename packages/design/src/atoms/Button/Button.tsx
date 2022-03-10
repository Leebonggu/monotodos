import { HTMLProps } from 'react';
import styled from 'styled-components';

interface ButtonProps extends HTMLProps<HTMLButtonElement> {
  block?: boolean;
  width?: number;
  height?: number;
}

export const BasicButton = styled.button<ButtonProps>`
  width: ${props => props.block ? '100%' : `${props.width || 100}px`};
  height: ${props => `${props.height || 50}px`};
`;

