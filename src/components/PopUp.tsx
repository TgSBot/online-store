import React, { FC, PropsWithChildren } from 'react';
import { styled } from 'styled-components';
import BlockText from '../UI/BlockText/BlockText';
import Text from '../UI/Text/Text';

interface IPopUp extends PropsWithChildren {
	explanation: boolean;
	opacity?: string;
	top?: string;
	right?: string;
	bottom?: string;
	left?: string;
	animation?: string;
}

type PropsWrapper = {
	background_color: string;
};

type PropsRow = {
	width: string;
};

type PropsAbsolute = {
	opacity?: string;
	top?: string;
	right?: string;
	bottom?: string;
	left?: string;
	animation?: string;
};

const Absolute = styled.div<PropsAbsolute>`
	position: absolute;
	opacity: ${(props) => props.opacity || '0'};
	top: ${(props) => props.top};
	right: ${(props) => props.right};
	bottom: ${(props) => props.bottom};
	left: ${(props) => props.left};
	animation: ${(props) => props.animation || 'none'};
	z-index: 1;
	@keyframes appearance {
		0% {
			opacity: 0;
		}
		50% {
			opacity: 0.5;
		}
		100% {
			opacity: 1;
		}
	}
`;

const Wrapper = styled.div<PropsWrapper>`
	width: fit-content;
	height: fit-content;
	background-color: ${(props) => props.background_color};
	border-radius: 4px;
	display: flex;
`;

const Row = styled.div<PropsRow>`
	width: ${(props) => props.width};
	height: fit-content;
`;

const PopUp: FC<IPopUp> = ({
	children,
	explanation,
	opacity,
	top,
	right,
	left,
	bottom,
	animation,
	...props
}) => {
	return (
		<Absolute
			opacity={opacity}
			top={top}
			right={right}
			bottom={bottom}
			left={left}
			animation={animation}
		>
			<Wrapper background_color={explanation === true ? 'white' : '#444b58'}>
				<Row width={explanation === true ? '426px' : '95px'}>
					<Text
						fontFamily='Intro-Book'
						fontSize={explanation === true ? '14px' : '12px'}
						margin={explanation === true ? '10px 20px' : '10px'}
						line_height={explanation === true ? '19.6px' : 'normal'}
						text_align={explanation === true ? 'start' : 'center'}
						color={explanation === true ? '#444B58' : 'white'}
					>
						{children}
					</Text>
				</Row>
			</Wrapper>
			<BlockText
				width='fit-content'
				height='fit-content'
				position='absolute'
				z_index='-1'
				margin={explanation === true ? '0px 0px 0px 5px' : '0px auto'}
				top={explanation === true ? '46px' : '16px'}
			>
				<svg
					width='31'
					height='41'
					viewBox='0 0 31 41'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						d='M31 15.1852C31 23.5717 19.5 41 15.5 41C11.5 41 0 23.5717 0 15.1852C0 6.79864 6.93959 0 15.5 0C24.0604 0 31 6.79864 31 15.1852Z'
						fill={explanation === true ? 'white' : '#444b58'}
					/>
				</svg>
			</BlockText>
		</Absolute>
	);
};

export default PopUp;
