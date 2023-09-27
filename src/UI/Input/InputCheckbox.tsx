import React, { FC } from 'react';
import { styled } from 'styled-components';

interface IInputCheckbox {
	id?: string;
}

export const StyledInput = styled.input`
	display: none;
`;

const InputCheckbox: FC<IInputCheckbox> = ({ id }) => {
	return <StyledInput type={'checkbox'} id={id} />;
};

export default InputCheckbox;
