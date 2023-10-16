import React, { useState } from 'react';
import BlockText from '../../../../UI/BlockText/BlockText';
import { styled } from 'styled-components';
import Button from '../../../../UI/Button/Button';
import { useAppSelector } from '../../../../hook/redux';
import Text from '../../../../UI/Text/Text';
import PostBasketPopUp from '../PostBasketPopUp';
import { BeautifulNumbers } from '../../../../helpers/BeautifulNumbers';

type PropsCheckMarks = {
	animation?: string;
};

const ControlCheck = styled.div`
	width: 100%;
	height: fit-content;
	border: 1px solid #d9d9d9;
	border-radius: 4px;
	padding: 30px 30px 20px 30px;
	display: flex;
	flex-direction: column;
`;

const CheckMark = styled.div<PropsCheckMarks>`
	display: inline-block;
	width: 7px;
	height: 7px;
	position: relative;
	top: 10px;
	&::before {
		content: '';
		height: 1px;
		width: 7px;
		position: absolute;
		background-color: #444b58;
		transform: rotate(45deg);
		border-radius: 2px;
		animation: link_before 0.3s easy 1 normal running 0s forwards;
	}
	@keyframes link_before {
		0% {
			transform: rotate(45deg);
		}
		100% {
			transform: rotate(-45deg);
		}
	}
	&::after {
		content: '';
		height: 1px;
		width: 7px;
		position: absolute;
		background-color: #444b58;
		transform: rotate(-45deg);
		left: 8px;
		border-radius: 2px;
		animation: link_after 0.3s easy-in 1 normal running 0s forwards;
	}
	@keyframes link_after {
		0% {
			transform: rotate(-45deg);
		}
		100% {
			transform: rotate(45deg);
		}
	}
`;

const BlockOrderPost = styled(BlockText)`
	max-height: 233px;
	overflow-y: auto;
`;

const CheckOrderRegistration = () => {
	// Показ состава заказа
	const [order, setOrder] = useState(false);

	const { postBasket, sumPricePosts } = useAppSelector(
		(state) => state.BasketPopUp
	);
	return (
		<>
			<BlockText
				width='fit-content'
				height='fit-content'
				flex_direction='row'
				margin='0px 0px 40px 0px'
			>
				<Text
					fontFamily='Intro-Bold'
					fontSize='20px'
					line_height='20px'
					fontWeight='700'
					color='#444B58'
					margin='0px 210px 0px 0px'
				>
					Оформление заказа
				</Text>
				<Text fontFamily='Intro-Book' fontSize='14px' color='#B2B5BB'>
					Заказ 3456 67
				</Text>
			</BlockText>
			<ControlCheck>
				<Text
					fontFamily='Intro-Book'
					fontSize='16px'
					color='#B2B5BB'
					margin='0px 0px 20px 0px'
				>
					Товаров в заказе:{' '}
					<Text
						fontFamily='Intro-Bold'
						color='#444B58'
						fontWeight='700'
						fontSize='16px'
					>{`${postBasket.length} шт`}</Text>
				</Text>
				<Text
					fontFamily='Intro-Book'
					fontSize='16px'
					color='#B2B5BB'
					margin='0px 0px 20px 0px'
				>
					Общая сумма заказ:{' '}
					<Text
						fontFamily='Intro-Bold'
						color='#444B58'
						fontWeight='700'
						fontSize='16px'
					>{`${BeautifulNumbers(sumPricePosts)} ₽`}</Text>
				</Text>
				<Button
					width='fit-content'
					height='fit-content'
					onClick={() => (order ? setOrder(false) : setOrder(true))}
					margin='0px 0px 34px 0px'
				>
					<BlockText width='fit-content' height='fit-content'>
						<Text fontFamily='Intro-Book' fontSize='16px' color='#444B58'>
							Состав заказа
						</Text>
						<CheckMark animation='link 0.3s easy-in 1 normal running 0s forwards' />
					</BlockText>
				</Button>
				<BlockOrderPost
					width='fit-content'
					height='fit-content'
					flex_direction='column'
				>
					{postBasket.map((post) => {
						return <PostBasketPopUp key={post.id} post={post} />;
					})}
				</BlockOrderPost>
			</ControlCheck>
		</>
	);
};

export default CheckOrderRegistration;
