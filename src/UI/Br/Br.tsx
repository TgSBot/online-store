import React, { FC } from 'react';
import { styled } from 'styled-components';

type PropsStyledBr = {
	width?: string;
	margin?: string;
	background_color?: string;
};

interface IBr {
	margin?: string;
	width?: string;
	background_color?: string;
}

const StyledBr = styled.div<PropsStyledBr>`
	width: ${(props) => props.width};
	height: 1px;
	background-color: ${(props) => props.background_color || '#808080'};
	margin: ${(props) => props.margin};
`;
const Br: FC<IBr> = ({ margin, width, background_color }) => {
	return (
		<StyledBr
			margin={margin}
			width={width}
			background_color={background_color}
		/>
	);
};

export default Br;
