import React from 'react';
import { styled } from 'styled-components';
import { useAppSelector } from '../../../../hook/redux';
import BlockText from '../../../../UI/BlockText/BlockText';
import Button from '../../../../UI/Button/Button';
import Text from '../../../../UI/Text/Text';

type PropsWrapper = {
	display: string;
};

const Wrapper = styled.div<PropsWrapper>`
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.35);
	display: ${(props) => props.display};
	position: fixed;
	z-index: 3;
	justify-content: center;
	align-items: center;
`;

const Row = styled.div`
	width: fit-content;
	height: fit-content;
	background-color: #fff;
	display: flex;
`;

const ControlCheck = styled.div`
	width: 100%;
	height: fit-content;
	border: 1px solid #d9d9d9;
	border-radius: 4px;
	padding: 30px 30px 50px 30px;
	display: flex;
	flex-direction: column;
`;

const CheckMark = styled.div`
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
	}
`;

const OrderRegistration = () => {
	const { postBasket, sumPricePosts } = useAppSelector(
		(state) => state.BasketPopUp
	);
	const { status } = useAppSelector((state) => state.OrderRegistration);

	return (
		<Wrapper display={status ? 'flex' : 'none'}>
			<Row>
				<BlockText
					width='fit-content'
					height='fit-content'
					margin='40px'
					flex_direction='column'
				>
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
							>{`${sumPricePosts} ₽`}</Text>
						</Text>
						<Button width='fit-content' height='fit-content'>
							<BlockText width='fit-content' height='fit-content'>
								<Text fontFamily='Intro-Book' fontSize='16px' color='#444B58'>
									Состав заказа
								</Text>
								<CheckMark />
							</BlockText>
						</Button>
					</ControlCheck>
				</BlockText>
			</Row>
		</Wrapper>
	);
};

export default OrderRegistration;
