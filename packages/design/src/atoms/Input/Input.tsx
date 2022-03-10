import { HTMLProps } from 'react';
import styled from 'styled-components';

interface InputProps extends HTMLProps<HTMLInputElement> {}

export const BasicInput = styled.input<InputProps>`
`;
