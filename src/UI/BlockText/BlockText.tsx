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
};

const BlockTextStyled = styled.div<BlockTextStyle>`
	width: ${(props) => props.width};
	height: ${(props) => props.height};
	margin: ${(props) => props.margin || 0};
	justify-content: ${(props) => props.justify_content || 'normal'};
	display: flex;
	align-items: ${(props) => props.align_items || 'stretch'};
	flex-direction: ${(props) => props.flex_direction || 'row'};
	vertical-align: ${(props) => props.vertical_align};
	position: ${(props) => props.position || 'static'};
	right: ${(props) => props.right || '0px'};
	top: ${(props) => props.top || '0px'};
	bottom: ${(props) => props.bottom || '0px'};
	left: ${(props) => props.left || '0px'};
`;

const BlockText: FC<IBlockText> = ({ children, ...props }) => {
	return <BlockTextStyled {...props}>{children}</BlockTextStyled>;
};

export default BlockText;
