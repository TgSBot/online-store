import React from 'react';
import { Rating } from 'react-simple-star-rating';
import { styled } from 'styled-components';
import checkMarks from '../../../../assets/svg/vectorcheck-mark.svg';
import { useAppSelector } from '../../../../hook/redux';
import BlockText from '../../../../UI/BlockText/BlockText';
import Button from '../../../../UI/Button/Button';
import Text from '../../../../UI/Text/Text';
import SliderSizeShoes from './SliderSizeShoes';

const Title = styled.div`
	width: fit-content;
	height: fit-content;
	margin: 0px 0px 0px 20px;
	display: flex;
	flex-direction: column;
`;

const AllAdvantages = styled.ul`
	width: fit-content;
	height: fit-content;
	display: flex;
	flex-direction: column;
	margin: 20px 0px 0px 0px;
`;

const Advantages = styled.li`
	font-family: Intro-Book;
	font-size: 14px;
	color: #b2b5bb;
	display: inline-flex;
	margin: 0px 0px 9px 0px;
	&::before {
		content: '';
		width: 14.689px;
		height: 11.364px;
		background: url(${checkMarks}) no-repeat;
		padding: 0px 25.269px 0px 0px;
		vertical-align: middle;
	}
	&:last-child {
		margin: 0px;
	}
`;

const TitlePopUp = () => {
	const { post } = useAppSelector((state) => state.PopUp);

	return (
		<Title>
			<BlockText
				width='fit-content'
				height='fit-content'
				margin='0px 0px 40px 0px'
			>
				<Text
					fontFamily='Intro-Book'
					fontSize='16px'
					color='#B2B5BB'
					margin='0px 47px 0px 0px'
				>
					Артикул: 879876
				</Text>
				<Text fontFamily='Intro-Book' fontSize='16px' color='#B2B5BB'>
					В наличии:{' '}
					<Text fontFamily='Intro-Book' fontSize='16px' color='#444B58'>
						{post?.productAvailability}
					</Text>
				</Text>
			</BlockText>
			<BlockText
				width='fit-content'
				height='fit-content'
				margin='0px 0px 20px 0px'
			>
				<Text
					fontFamily='Intro-Book'
					fontSize='24px'
					line_height='33.6px'
					color='#444B58'
				>
					{post?.name}
				</Text>
			</BlockText>
			<Rating
				readonly
				initialValue={post?.rating}
				size={20}
				fillColor={'#F14F4F'}
			/>
			<Text
				fontFamily='Intro-Book'
				fontSize='16px'
				color='#444B58'
				margin='20px 0px 20px 0px'
			>
				Выберите размер
			</Text>
			<SliderSizeShoes />
			<BlockText
				width='fit-content'
				height='fit-content'
				margin='40px 0px 0px 0px'
			>
				<Text
					fontFamily='Intro-Bold'
					fontSize='30px'
					fontWeight='700'
					color='#444B58'
				>
					{post?.net_price}
				</Text>
				<Text
					fontFamily='Intro-Bold'
					fontSize='16px'
					fontWeight='400'
					color='#B2B5BB'
					margin='auto 0px auto 32px'
				>
					{post?.price}
				</Text>
			</BlockText>
			<Button
				width='430px'
				height='60px'
				border_radius='4px'
				ground_color='#F14F4F'
				margin='96px 0px 0px 0px'
			>
				<Text fontFamily='Intro-Regular' fontSize='16px' color='#FFF'>
					Заказать
				</Text>
			</Button>
			<BlockText width='fit-content' height='fit-content'>
				<AllAdvantages>
					<Advantages>Бесплатная доставка до двери</Advantages>
					<Advantages>Оплата заказа при получении</Advantages>
					<Advantages>Обмен в течении двух недель</Advantages>
				</AllAdvantages>
			</BlockText>
		</Title>
	);
};

export default TitlePopUp;