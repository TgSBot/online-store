import React, { FC, PropsWithChildren } from 'react';
import { styled } from 'styled-components';
import Fonts from '../../global/styles/Fonts';

interface IText extends PropsWithChildren {
	fontFamily: string;
	fontSize: string;
	lineHeight?: string;
	fontWeight?: string;
	fontStyle?: string;
	color?: string;
	margin?: string;
}

const StyledText = styled.span<IText>`
	font-family: ${(props) => props.fontFamily || 'sans-serif'};
	font-size: ${(props) => props.fontSize};
	line-height: ${(props) => props.lineHeight || 'normal'};
	font-weight: ${(props) => props.fontWeight || '400'};
	font-style: ${(props) => props.fontStyle || 'normal '};
	color: ${(props) => props.color || 'white'};
	margin: ${({ margin }) => margin || '0px'};
`;

const Text: FC<IText> = ({ children, ...props }) => {
	return (
		<>
			<Fonts />
			<StyledText {...props}>{children}</StyledText>
		</>
	);
};

export default Text;
