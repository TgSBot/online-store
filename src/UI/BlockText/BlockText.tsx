import React, { FC, PropsWithChildren } from 'react';
import { styled } from 'styled-components';

interface IBlockText extends PropsWithChildren, BlockTextStyle {}

type BlockTextStyle = {
	width: string;
	height: string;
	margin: string;
};

const BlockTextStyled = styled.div<BlockTextStyle>`
	width: ${(props) => props.width};
	height: ${(props) => props.height};
	margin: ${(props) => props.margin || 0};
`;

const BlockText: FC<IBlockText> = ({ children, ...props }) => {
	return <BlockTextStyled {...props}>{children}</BlockTextStyled>;
};

export default BlockText;
