import { HTMLProps } from 'react';
import styled from 'styled-components';

export interface InputProps extends HTMLProps<HTMLInputElement> {}

export const BasicInput = styled.input<InputProps>`
`;
