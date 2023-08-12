import React, { FC, PropsWithChildren } from 'react';
import { styled } from 'styled-components';

interface IBlockText extends PropsWithChildren, BlockTextStyle {}

type BlockTextStyle = {
	width: string;
	height: string;
	margin?: string;
	justify_content?: string;
	align_items?: string;
};

const BlockTextStyled = styled.div<BlockTextStyle>`
	width: ${(props) => props.width};
	height: ${(props) => props.height};
	margin: ${(props) => props.margin || 0};
	justify-content: ${(props) => props.justify_content || 'normal'};
	display: flex;
	align-items: ${(props) => props.align_items || 'stretch'};
`;

const BlockText: FC<IBlockText> = ({ children, ...props }) => {
	return <BlockTextStyled {...props}>{children}</BlockTextStyled>;
};

export default BlockText;
