import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import BlockText from '../../../UI/BlockText/BlockText';
import shoes from '../../../assets/img/image.jpg';
import Button from '../../../UI/Button/Button';
import Text from '../../../UI/Text/Text';
import { getPosts } from '../../../api/Posts';
import { useAppDispatch, useAppSelector } from '../../../hook/redux';
import { sortSliceShoes } from '../../../store/reducers/SortPostsShoes';
import { sliceAllPosts } from '../../../store/reducers/AllPosts';
import Price from '../../../helpers/Price';
import Post from './Post';
import {
	randomProductAvailability,
	randomGenderPost,
	randomRating,
	randomSizeShoes,
} from '../../../helpers/RandomStatePosts';

const Posts = styled(BlockText)`
	flex-direction: row;
	flex-wrap: wrap;
`;

const LoadingPosts = () => {
	// Индексы для новых постов
	const [page, setPage] = useState({ start: 9, end: 18 });

	// Redux
	const { allPosts, loading, error, selectedPosts } = useAppSelector(
		(state) => state.allPosts
	);
	const { changePrice } = sortSliceShoes.actions;
	const {
		changePosts,
		changeLoadingPosts,
		changeStatusError,
		changeSelectedPosts,
	} = sliceAllPosts.actions;
	const dispatch = useAppDispatch();

	// Выставление максимальной и минимальной цены товара
	const price = Price();

	// Передача значений(max, min) после загрузки постов
	const setPrice = () => {
		dispatch(changePrice(price));
	};
	setTimeout(setPrice, 0);

	// Кнопка подгрузки новых постов
	function resetPostsButton() {
		dispatch(changeLoadingPosts(true));
		setPage({ start: (page.start += 9), end: (page.end += 9) });
		const selectedPosts = allPosts.slice(page.start, page.end);
		dispatch(changeSelectedPosts(selectedPosts));
		dispatch(changeLoadingPosts(false));
	}

	// Загрузка постов при открытии сайта
	useEffect(() => {
		dispatch(changeLoadingPosts(true));
		const fetchPosts = async () => {
			const posts = await getPosts();
			posts?.code
				? dispatch(changeStatusError(true))
				: dispatch(
						changePosts(
							posts.data.data.map((post: object) => {
								return {
									...post,
									gender: randomGenderPost(),
									sizeShoes: randomSizeShoes(),
									rating: randomRating(),
									productAvailability: randomProductAvailability(),
								};
							})
						)
				  );
		};
		fetchPosts();
	}, [
		changeSelectedPosts,
		dispatch,
		changeLoadingPosts,
		changePosts,
		changeStatusError,
	]);

	// Выборка первых постов
	useEffect(() => {
		const selectedPosts = allPosts.slice(0, 9);
		dispatch(changeSelectedPosts(selectedPosts));
		dispatch(changeLoadingPosts(false));
	}, [allPosts, changeLoadingPosts, changeSelectedPosts, dispatch]);

	return (
		<Posts width='900px' height='fit-content'>
			{loading ? (
				<Text fontFamily='Intro-Bold' fontSize='30px' color='#444B58'>
					Идёт загрузка...
				</Text>
			) : error ? (
				<Text fontFamily='Intro-Bold' fontSize='30px' color='#444B58'>
					Произошла ошибка при загрузке товаров
				</Text>
			) : (
				selectedPosts.map((post) => {
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
			{loading ? (
				''
			) : error ? (
				''
			) : page.start === 99 ? (
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
	);
};

export default LoadingPosts;
