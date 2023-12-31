import React, { FC, PropsWithChildren } from 'react';
import { styled } from 'styled-components';
import Fonts from '../../global/styles/Fonts';

interface IText extends PropsWithChildren {
	fontFamily: string;
	fontSize: string;
	line_height?: string;
	fontWeight?: string;
	fontStyle?: string;
	color?: string;
	margin?: string;
	text_align?: string;
	display?: string;
	letter_spacing?: string;
	text_transform?: string;
	z_index?: string;
	onClick?: any;
	opacity?: string;
	vertical_align?: string;
	text_decoration?: string;
}

const StyledText = styled.span<IText>`
	font-family: ${(props) => props.fontFamily || 'sans-serif'};
	font-size: ${(props) => props.fontSize};
	line-height: ${(props) => props.line_height || 'normal'};
	font-weight: ${(props) => props.fontWeight || '400'};
	font-style: ${(props) => props.fontStyle || 'normal '};
	color: ${(props) => props.color || 'white'};
	margin: ${({ margin }) => margin || '0px'};
	text-align: ${(props) => props.text_align || 'start'};
	display: ${(props) => props.display || 'inline-block'};
	letter-spacing: ${(props) => props.letter_spacing};
	text-transform: ${(props) => props.text_transform};
	z-index: ${(props) => props.z_index || '0'};
	opacity: ${(props) => props.opacity};
	vertical-align: ${(props) => props.vertical_align};
	text-decoration: ${(props) => props.text_decoration || 'none'};
`;

const Text: FC<IText> = ({ children, onClick, ...props }) => {
	return (
		<>
			<Fonts />
			<StyledText onClick={onClick} {...props}>
				{children}
			</StyledText>
		</>
	);
};

export default Text;
