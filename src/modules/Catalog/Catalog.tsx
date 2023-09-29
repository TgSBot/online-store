import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import Text from '../../UI/Text/Text';
import Selection from './components/Selection';
import BlockText from '../../UI/BlockText/BlockText';
import Button from '../../UI/Button/Button';
import { getPosts } from '../../api/Posts';
import Post from './components/Post';
import shoes from '../../assets/img/image.jpg';
import { useAppDispatch, useAppSelector } from '../../hook/redux';
import { sliceAllPosts } from '../../store/reducers/AllPosts';
import Price from '../../helpers/Price';
import { sortSliceShoes } from '../../store/reducers/SortPostsShoes';

const Wrapper = styled.div`
	width: 100%;
	height: fit-content;
	display: flex;
	justify-content: center;
`;

const Row = styled.div`
	width: fit-content;
	height: fit-content;
	margin: 60px 0px 0px 0px;
	align-items: center;
`;

const Posts = styled(BlockText)`
	flex-direction: row;
	flex-wrap: wrap;
`;

const Catalog = () => {
	const [loading, setLoading] = useState(false);

	const { allPosts } = useAppSelector((state) => state.allPosts);
	const { changePrice } = sortSliceShoes.actions;
	const { changePosts } = sliceAllPosts.actions;
	const dispatch = useAppDispatch();

	const price = Price();

	function setPrice() {
		dispatch(changePrice(price));
	}
	setTimeout(setPrice, 0);

	const resetPostsButton = async () => {
		setLoading(true);
		const posts = await getPosts();
		dispatch(changePosts(posts));
		setLoading(false);
	};

	useEffect(() => {
		const fetchPosts = async () => {
			setLoading(true);
			const posts = await getPosts();
			dispatch(changePosts(posts));
			setLoading(false);
		};
		fetchPosts();
	}, [changePosts, dispatch]);

	return (
		<Wrapper>
			<Row>
				<Text
					fontFamily='Intro-Bold'
					fontSize='30px'
					fontWeight='700'
					color='#444B58'
					margin='0px 0px 40px 0px'
				>
					Каталог
				</Text>
				<BlockText width='fit-content' height='fit-content'>
					<Selection margin='0px 20px 0px 0px' />
					<Posts width='900px' height='800px'>
						{loading === true ? (
							<Text fontFamily='Intro-Bold' fontSize='30px' color='#444B58'>
								Идёт загрузка...
							</Text>
						) : (
							allPosts.map((post) => {
								return (
									<Post
										key={post.id}
										title={post.name}
										price={Math.ceil(Number(post.price))}
										img={shoes}
									/>
								);
							})
						)}
						{loading === true ? (
							''
						) : (
							<BlockText
								width='100%'
								height='fit-content'
								justify_content='center'
								margin='40px 0px 0px 0px'
							>
								<Button
									width='200px'
									height='60px'
									ground_color='#F14F4F'
									border_radius='4px'
									margin='0px 0px 60px 0px'
									onClick={resetPostsButton}
								>
									<Text fontFamily='Intro-Regular' fontSize='16px' color='#FFF'>
										Показать ещё
									</Text>
								</Button>
							</BlockText>
						)}
					</Posts>
				</BlockText>
			</Row>
		</Wrapper>
	);
};

export default Catalog;
