import React, { FC, PropsWithChildren } from 'react';
import { styled } from 'styled-components';

interface ICircle extends PropsWithChildren {
	width: string;
	height: string;
	groundcolor: string;
	border?: string;
	position?: string;
	top?: string;
	right?: string;
	bottom?: string;
	left?: string;
}

const CircleStyled = styled.div<ICircle>`
	width: ${(props) => props.width};
	height: ${(props) => props.height}:
	border: ${(props) => props.border || 'none'};
	border-radius: 50%;
	background-color: ${(props) => props.groundcolor}; 
	display: flex;
	justify-content: center;
	align-items: center;
	position: ${(props) => props.position || 'static'};
	right: ${(props) => props.right || '0px'};
	top: ${(props) => props.top || '0px'};
  bottom: ${(props) => props.bottom || '0px'};
  left: ${(props) => props.left || '0px'} 
`;

const Circle: FC<ICircle> = ({ children, ...props }) => {
	return <CircleStyled {...props}>{children}</CircleStyled>;
};

export default Circle;
