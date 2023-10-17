import React, { FC, PropsWithChildren } from 'react';
import { styled } from 'styled-components';

interface IButton extends PropsWithChildren, ButtonStyle {
	disabled?: boolean;
}

type ButtonStyle = {
	ground_color?: string;
	width: string;
	height: string;
	border_radius?: string;
	margin?: string;
	type?: string;
	onClick?: any;
	value?: number;
	border?: string;
	justify_content?: string;
	align_items?: string;
};

const ButtonStyled = styled.button<ButtonStyle>`
	display: flex;
	justify-content: ${(props) => props.justify_content || 'center'};
	align-items: ${(props) => props.align_items || 'center'};
	background-color: ${(props) => props.ground_color};
	width: ${(props) => props.width};
	height: ${(props) => props.height};
	border-radius: ${(props) => props.border_radius || 0};
	margin: ${(props) => props.margin || 0};
	border: ${(props) => props.border};
	&:disable {
		opacity: 0.5;
	}
`;

const Button: FC<IButton> = ({
	children,
	type,
	onClick,
	value,
	disabled,
	...props
}) => {
	return (
		<ButtonStyled
			type={type}
			onClick={onClick}
			value={value}
			disabled={disabled}
			{...props}
		>
			{children}
		</ButtonStyled>
	);
};

export default Button;
