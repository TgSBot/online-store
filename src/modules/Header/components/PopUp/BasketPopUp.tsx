import React, { SyntheticEvent, useEffect } from 'react';
import { styled } from 'styled-components';
import { useAppDispatch, useAppSelector } from '../../../../hook/redux';
import { sliceBasketPopUp } from '../../../../store/reducers/BasketPopUp';
import { sliceOrderRegistration } from '../../../../store/reducers/OrderRegistration';
import BlockText from '../../../../UI/BlockText/BlockText';
import Button from '../../../../UI/Button/Button';
import Text from '../../../../UI/Text/Text';
import PostBasketPopUp from '../PostBasketPopUp';
import { BeautifulNumbers } from '../../../../helpers/BeautifulNumbers';

type PropsWrapper = {
	display: string;
};

type PropsRow = {
	display: string;
};

const Wrapper = styled.div<PropsWrapper>`
	width: 100vw;
	height: 100vw;
	display: ${(props) => props.display};
	background-color: rgba(0, 0, 0, 0.35);
	position: fixed;
	z-index: 3;
`;

const Row = styled.div<PropsRow>`
	width: fit-content;
	height; fit-content;
	position: absolute;
	top: 72px;
	left: 1032px;
	z-index: 4;
	display: ${(props) => props.display};
`;

const AllPurchases = styled.div`
	width: 480px;
	max-height: 323px;
	display: flex;
	flex-direction: column;
	background-color: #fff;
	overflow-y: auto;
	overflow-x: hidden;
	padding: 25px 20px;
`;

const BlockAllSum = styled.div`
	width: 100%;
	height: fit-content;
	display: flex;
	flex-direction: row;
	background-color: white;
	justify-content: space-between;
	align-items: center;
`;

const BasketPopUp = () => {
	const { active, postBasket, countPurchases, sumPricePosts } = useAppSelector(
		(state) => state.BasketPopUp
	);
	const { changeStatusActive, changeSumPricePosts } = sliceBasketPopUp.actions;
	const { changeStatus } = sliceOrderRegistration.actions;
	const dispatch = useAppDispatch();

	const closePopUp = (event: SyntheticEvent): void => {
		event.stopPropagation();
		dispatch(changeStatusActive(false));
	};

	const openOrderRegistration = (event: SyntheticEvent) => {
		event.preventDefault();
		dispatch(changeStatusActive(false));
		dispatch(changeStatus(true));
	};

	useEffect(() => {
		const sumPostBasket = () => {
			const sum: number[] = [];
			postBasket.map((post) => sum.push(post.net_price));
			const allPriceToPurchase = sum.reduce(
				(partialSum: number, secondSum: number) =>
					Math.floor(partialSum) + Math.floor(secondSum),
				0
			);
			dispatch(changeSumPricePosts(allPriceToPurchase));
		};
		sumPostBasket();
	}, [changeSumPricePosts, dispatch, postBasket]);

	return (
		<>
			<Wrapper display={active ? 'flex' : 'none'} onClick={closePopUp} />
			<Row
				onClick={(event: SyntheticEvent) => event.stopPropagation()}
				display={active ? 'block' : 'none'}
			>
				<AllPurchases>
					{postBasket.length === 0 ? (
						<Text
							fontFamily='Intro-Book'
							fontSize='30px'
							fontWeight='700'
							color='#444B58'
						>
							Корзина пуста
						</Text>
					) : (
						postBasket.map((post) => {
							return <PostBasketPopUp post={post} key={post.id} />;
						})
					)}
				</AllPurchases>
				{countPurchases === 0 ? (
					''
				) : (
					<BlockAllSum>
						<BlockText
							width='fit-content'
							height='fit-content'
							flex_direction='column'
							margin='20px'
						>
							<Text
								fontFamily='Intro-Book'
								fontSize='14px'
								line_height='20px'
								color='#4D4D4D'
								margin='0px 0px 10px 0px'
							>
								Итого:
							</Text>
							<Text
								fontFamily='Intro-Bold'
								fontSize='20px'
								fontWeight='700'
								color='#4D4D4D'
							>
								{BeautifulNumbers(sumPricePosts)}
							</Text>
						</BlockText>
						<Button
							width='239px'
							height='50px'
							ground_color='#F14F4F'
							border_radius='4px'
							margin='0px 20px 0px 0px'
							onClick={openOrderRegistration}
						>
							<Text fontFamily='Intro-Regular' fontSize='16px'>
								Перейти к оформлению
							</Text>
						</Button>
					</BlockAllSum>
				)}
			</Row>
		</>
	);
};

export default BasketPopUp;
