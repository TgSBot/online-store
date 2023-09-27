import React, { FC, PropsWithChildren } from 'react';
import { styled } from 'styled-components';

interface IButton extends PropsWithChildren, ButtonStyle {}

type ButtonStyle = {
	ground_color?: string;
	width: string;
	height: string;
	border_radius?: string;
	margin?: string;
	type?: string;
	disabled?: any;
	onClick?: any;
	value?: number;
};

const ButtonStyled = styled.button<ButtonStyle>`
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: ${(props) => props.ground_color};
	width: ${(props) => props.width};
	height: ${(props) => props.height};
	border-radius: ${(props) => props.border_radius || 0};
	margin: ${(props) => props.margin || 0};
`;

const Button: FC<IButton> = ({ children, type, onClick, value, ...props }) => {
	return (
		<ButtonStyled type={type} onClick={onClick} value={value} {...props}>
			{children}
		</ButtonStyled>
	);
};

export default Button;
