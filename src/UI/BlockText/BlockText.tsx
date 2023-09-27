import React, { FC, PropsWithChildren } from 'react';
import { styled } from 'styled-components';

interface IBlockText extends PropsWithChildren, BlockTextStyle {}

type BlockTextStyle = {
	width: string;
	height: string;
	margin?: string;
	justify_content?: string;
	align_items?: string;
	flex_direction?: string;
	vertical_align?: string;
	position?: string;
	top?: string;
	right?: string;
	bottom?: string;
	left?: string;
	display?: string;
	transform?: string;
	onClick?: any;
	background_color?: string;
	transition?: string;
	opacity?: string;
	z_index?: string;
	flex_wrap?: string;
};

const BlockTextStyled = styled.div<BlockTextStyle>`
	width: ${(props) => props.width};
	height: ${(props) => props.height};
	margin: ${(props) => props.margin || 0};
	justify-content: ${(props) => props.justify_content || 'normal'};
	display: ${(props) => props.display || 'flex'};
	align-items: ${(props) => props.align_items || 'stretch'};
	flex-direction: ${(props) => props.flex_direction || 'row'};
	vertical-align: ${(props) => props.vertical_align};
	position: ${(props) => props.position || 'static'};
	right: ${(props) => props.right || '0px'};
	top: ${(props) => props.top || '0px'};
	bottom: ${(props) => props.bottom || '0px'};
	left: ${(props) => props.left || '0px'};
	transform: ${(props) => props.transform};
	background-color: ${(props) => props.background_color};
	transition: ${(props) => props.transition || 'none'};
	opacity: ${(props) => props.opacity || '1'};
	z-index: ${(props) => props.z_index || '0'};
	flex-wrap: ${(props) => props.flex_wrap};
`;

const BlockText: FC<IBlockText> = ({ children, onClick, ...props }) => {
	return (
		<BlockTextStyled onClick={onClick} {...props}>
			{children}
		</BlockTextStyled>
	);
};

export default BlockText;
