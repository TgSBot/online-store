import React, { FC, SyntheticEvent } from 'react';
import { styled } from 'styled-components';
import BlockText from '../../../../UI/BlockText/BlockText';
import eyesButton from '../../../../assets/svg/iconly-light-showeyes.svg';
import basketButton from '../../../../assets/svg/Vector_basket.svg';
import Img from '../../../../UI/IMG/Img';
import { IPosts } from '../../../../store/reducers/AllPosts';
import { useAppDispatch, useAppSelector } from '../../../../hook/redux';
import { slicePopUp } from '../../../../store/reducers/PopUp';
import { sliceBasketPopUp } from '../../../../store/reducers/BasketPopUp';

type ButtonProps = {
	margin?: string;
	value?: object;
	background_color?: string;
};

interface IInteractivePanel {
	post: IPosts;
}

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
	background-color: ${(props) => props.background_color || '#444b58'};
	border-radius: 50%;
	justify-content: center;
	align-items: center;
	margin: ${(props) => props.margin || '0px'};
`;

const StyledImg = styled(Img)`
	z-index: 0;
`;

const InteractivePanel: FC<IInteractivePanel> = ({ post }) => {
	// Redux
	const { postBasket } = useAppSelector((state) => state.BasketPopUp);
	const { changePost, changeActivePopUp } = slicePopUp.actions;
	const { changePostBasket, changeStatusActive } = sliceBasketPopUp.actions;
	const dispatch = useAppDispatch();

	const ButtonClickPopUp = (event: SyntheticEvent<HTMLButtonElement>): void => {
		event.preventDefault();
		dispatch(changeActivePopUp(true));
		dispatch(changePost(post));
	};

	const indexOf = () => {
		const indexOf = { count: 0, indexOf: 0 };
		postBasket.forEach((posts, index) => {
			if (posts.id === post.id) {
				indexOf.count = 1;
				indexOf.indexOf = index;
			}
		});
		if (indexOf.count === 0) return true;
		return false;
	};

	const ButtonClickBasketPopUp = (
		event: SyntheticEvent<HTMLButtonElement>
	): void => {
		event.preventDefault();
		if (indexOf()) dispatch(changePostBasket(post));
		if (indexOf() === false) dispatch(changeStatusActive(true));
	};

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
				<PostButton margin='0px 40px 0px 0px' onClick={ButtonClickPopUp}>
					<StyledImg
						src={eyesButton}
						alt=''
						width='23.125px'
						height='18.255px'
					/>
				</PostButton>
				<PostButton
					background_color={indexOf() ? '#444b58' : '#F14F4F'}
					onClick={ButtonClickBasketPopUp}
				>
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
