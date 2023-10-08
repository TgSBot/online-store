import React, { useEffect } from 'react';
import { styled } from 'styled-components';
import BlockText from '../../../../UI/BlockText/BlockText';
import shoes from '../../../../assets/img/image.jpg';
import Button from '../../../../UI/Button/Button';
import Text from '../../../../UI/Text/Text';
import { getPosts } from '../../../../api/Posts';
import { useAppDispatch, useAppSelector } from '../../../../hook/redux';
import { sortSliceShoes } from '../../../../store/reducers/SortPostsShoes';
import { sliceAllPosts } from '../../../../store/reducers/AllPosts';
import Post from '../Post';
import {
	randomProductAvailability,
	randomGenderPost,
	randomRating,
	randomSizeShoes,
} from '../../../../helpers/RandomStatePosts';

const Posts = styled(BlockText)`
	flex-direction: row;
	flex-wrap: wrap;
`;

const LoadingPosts = () => {
	// Redux
	const {
		allPosts,
		loading,
		error,
		selectedPosts,
		defaultValue,
		filteredPosts,
		sorted,
	} = useAppSelector((state) => state.allPosts);
	const { page } = useAppSelector((state) => state.sortPostsShoes);
	const { changePrice, changePagePost } = sortSliceShoes.actions;
	const {
		changePosts,
		changeLoadingPosts,
		changeStatusError,
		changeSelectedPosts,
		changeStatusDefaultValue,
		changeFilteredPosts,
	} = sliceAllPosts.actions;
	const dispatch = useAppDispatch();

	// Кнопка подгрузки новых постов
	function loadingPostsButton() {
		dispatch(changeLoadingPosts(true));
		if (!sorted) {
			const selectedPosts = allPosts.slice(page.start, page.end);
			dispatch(changePagePost());
			dispatch(changeSelectedPosts(selectedPosts));
		}
		if (sorted) {
			const filteredPost = filteredPosts.slice(page.start, page.end);
			dispatch(changePagePost());
			dispatch(changeFilteredPosts(filteredPost));
		}
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
		if (defaultValue) dispatch(changeStatusDefaultValue(false));
	}, [
		allPosts,
		changeLoadingPosts,
		changeSelectedPosts,
		dispatch,
		defaultValue,
		changeStatusDefaultValue,
	]);

	useEffect(() => {
		// Выставление максимальной и минимальной цены товара
		const arrayPrice = allPosts.map((element) => {
			let price = [];
			price.push(Number(element.price));
			return price;
		});

		const minPrice = Math.min(...arrayPrice.flat());
		const maxPrice = Math.max(...arrayPrice.flat());

		// Передача значений(max, min) после загрузки постов
		const setPrice = () => {
			dispatch(changePrice([minPrice, maxPrice]));
		};
		setTimeout(setPrice, 0);
	}, [dispatch, changePrice, allPosts]);

	// Для проверки на фильтрационный массив
	const returnStatusPosts = () => {
		if ((filteredPosts.length > 0 && sorted) || sorted)
			return filteredPosts.slice(0, 9);
		return selectedPosts;
	};

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
				returnStatusPosts().map((post) => {
					return (
						<Post
							key={post.id}
							title={post.name}
							price={Math.ceil(post.net_price)}
							img={shoes}
							post={post}
						/>
					);
				})
			)}
			{loading ? (
				''
			) : error ? (
				''
			) : selectedPosts.length < 9 ? (
				''
			) : filteredPosts.length < 9 && sorted ? (
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
						onClick={loadingPostsButton}
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
