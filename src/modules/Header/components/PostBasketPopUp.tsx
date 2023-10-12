import React, { FC, SyntheticEvent } from 'react';
import { styled } from 'styled-components';
import { IPosts } from '../../../store/reducers/AllPosts';
import Img from '../../../UI/IMG/Img';
import shoes from '../../../assets/img/image.jpg';
import BlockText from '../../../UI/BlockText/BlockText';
import Text from '../../../UI/Text/Text';
import basketDelete from '../../../assets/svg/trash-1-busket-delete.svg';
import { useAppDispatch, useAppSelector } from '../../../hook/redux';
import { sliceBasketPopUp } from '../../../store/reducers/BasketPopUp';

interface IPostBasketPopUp {
	post: IPosts;
}

const Wrapper = styled.div`
	width: fit-content;
	height: fit-content;
`;

const Row = styled.div`
	width: fit-content;
	height: fit-content;
`;

const ButtonStyle = styled.button`
	width: max-content;
	position: absolute;
	right: 0px;
	top: 30%;
`;

const Post = styled(BlockText)`
	width: 440px;
	height: fit-content;
	display: flex;
	position: relative;
`;

const PostBasketPopUp: FC<IPostBasketPopUp> = ({ post }) => {
	const { postBasket } = useAppSelector((state) => state.BasketPopUp);
	const { status } = useAppSelector((state) => state.OrderRegistration);
	const { deletePost } = sliceBasketPopUp.actions;
	const dispatch = useAppDispatch();

	const deletePosts = (event: SyntheticEvent): void => {
		event.preventDefault();
		dispatch(deletePost(postBasket.filter((posts) => posts.id !== post.id)));
	};

	return (
		<Wrapper>
			<Row>
				<Post
					width='fit-content'
					height='fit-content'
					flex_direction='row'
					margin='0px 0px 25px 0px'
				>
					<BlockText
						width='fit-content'
						height='fit-content'
						align_items='center'
						margin='0px 10px 0px 0px'
					>
						<Img src={shoes} alt='' width='100px' height='57px' />
					</BlockText>
					<BlockText
						width='fit-content'
						height='fit-content'
						flex_direction='column'
					>
						<Text
							fontFamily='Intro-Book'
							fontSize='14px'
							line_height='20px'
							color='#4D4D4D'
							margin='0px 0px 14px 0px'
						>
							{post.name}
						</Text>
						<Text
							fontFamily='Intro-Bold'
							fontSize='20px'
							fontWeight='700'
							color='#4D4D4D'
						>
							{`${Math.floor(post.net_price)} ₽`}
						</Text>
					</BlockText>
					<ButtonStyle onClick={deletePosts}>
						{status ? (
							<Text fontFamily='Intro-Book' fontSize='14px' color='#B2B5BB'>
								Удалить
							</Text>
						) : (
							<Img
								src={basketDelete}
								alt=''
								width='max-content'
								height='max-content'
							/>
						)}
					</ButtonStyle>
				</Post>
			</Row>
		</Wrapper>
	);
};

export default PostBasketPopUp;
