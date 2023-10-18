import React, { FC } from 'react';
import { styled } from 'styled-components';

interface IInput extends InputStyle {
	placeholder: string;
	type: 'text' | 'tel';
	onChange?: any;
	onBlur?: any;
	value?: any;
	ref?: any;
	onClick?: any;
}

type InputStyle = {
	background_color: string;
	width: string;
	height: string;
	border_radius?: string;
	border?: string;
	margin?: string;
};

const InputStyled = styled.input<InputStyle>`
	background-color: ${(props) => props.background_color};
	width: ${(props) => props.width};
	height: ${(props) => props.height};
	border-radius: ${(props) => props.border_radius};
	border: ${(props) => props.border || 'none'};
	margin: ${(props) => props.margin};
	padding: 0px 0px 0px 20px;
	&::placeholder {
		font-size: 16px;
		line-height: 22.4px;
		color: #b2b5bb;
		font-family: Intro-Book;
	}
`;

const Input: FC<IInput> = ({ ref, ...props }) => {
	return (
		<InputStyled
			{...props}
			value={props.value}
			placeholder={props.placeholder}
			onClick={props.onClick}
			type={props.type}
		/>
	);
};

export default Input;
