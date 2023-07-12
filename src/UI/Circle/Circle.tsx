import React, { FC, PropsWithChildren } from 'react';
import { styled } from 'styled-components';

interface ICircle extends PropsWithChildren {
	width: string;
	height: string;
	backgroundColor: string;
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
	border: ${(props) => props.border};
	border-radius: 50%;
	background-color: ${(props) => props.backgroundColor}; 
	display: flex;
	justify-content: center;
	align-items: center;
	position: ${(props) => props.position};
	right: ${(props) => props.right};
	top: ${(props) => props.top};
  bottom: ${(props) => props.bottom}; 
`;

const Circle: FC<ICircle> = ({ children, ...props }) => {
	return <CircleStyled {...props}>{children}</CircleStyled>;
};

export default Circle;
