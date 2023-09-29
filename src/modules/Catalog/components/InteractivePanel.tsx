import React from 'react';
import { styled } from 'styled-components';
import BlockText from '../../../UI/BlockText/BlockText';
import eyesButton from '../../../assets/svg/iconly-light-showeyes.svg';
import basketButton from '../../../assets/svg/Vector_basket.svg';
import Img from '../../../UI/IMG/Img';

type ButtonProps = {
	margin?: string;
};

const InteractiveMenu = styled(BlockText)`
	width: 280px;
	height: 29;
	display: flex;
	background-color: rgba(255, 255, 255, 0.6);
`;

const PostButton = styled.button<ButtonProps>`
	display: flex;
	width: 80px;
	height: 80px;
	background-color: #444b58;
	border-radius: 50%;
	justify-content: center;
	align-items: center;
	margin: ${(props) => props.margin || '0px'};
`;

const StyledImg = styled(Img)`
	z-index: 0;
`;

const InteractivePanel = () => {
	return (
		<InteractiveMenu
			width='280px'
			height='293px'
			position='absolute'
			justify_content='center'
			align_items='center'
			z_index='1'
		>
			<BlockText
				width='fit-content'
				height='fit-content'
				justify_content='space-between'
			>
				<PostButton margin='0px 40px 0px 0px'>
					<StyledImg
						src={eyesButton}
						alt=''
						width='23.125px'
						height='18.255px'
					/>
				</PostButton>
				<PostButton>
					<StyledImg
						src={basketButton}
						alt=''
						width='23.125px'
						height='18.255px'
					/>
				</PostButton>
			</BlockText>
		</InteractiveMenu>
	);
};

export default InteractivePanel;
