import React, { FC, SyntheticEvent } from 'react';
import styled from 'styled-components';
import Text from '../../../UI/Text/Text';
import Basket from '../../../assets/svg/Vector_basket.svg';
import Circle from '../../../UI/Circle/Circle';
import { sliceBasketPopUp } from '../../../store/reducers/BasketPopUp';
import { useAppDispatch, useAppSelector } from '../../../hook/redux';

const Wrapper = styled.header`
	width: fit-content;
	height: fit-content;
	display: flex;
	justify-content: center;
	border-bottom: 1px solid rgba(255, 255, 255, 0.5);
`;

const Row = styled.div`
	width: 100%;
	display: flex;
	height: fit-content;
	flex-direction: row;
	margin: 0px 0px 20px 0px;
	align-items: center;
`;

const NavigationStyle = styled.nav`
	width: fit-content;
	height: fit-content;
	display: flex;
	flex-direction: row;
	align-items: end;
`;

const BasketRow = styled.div`
	width: fit-content;
	height: fit-content;
	display: flex;
	flex-direction: row;
	align-items: end;
`;

const IMG = styled.img`
	width: 20px;
	height: 18.5px;
`;

const BasketIMG = styled.button`
	width: fit-content;
	height: fit-content;
	display: flex;
	flex-direction: row;
	position: relative;
`;

const Navbar: FC = () => {
	const { countPurchases } = useAppSelector((state) => state.BasketPopUp);
	const { changeStatusActive } = sliceBasketPopUp.actions;
	const dispatch = useAppDispatch();

	const openPopUp = (event: SyntheticEvent): void => {
		event.preventDefault();
		dispatch(changeStatusActive(true));
	};

	return (
		<Wrapper>
			<Row>
				<Text
					fontSize='30px'
					fontFamily='Intro-Bold'
					fontWeight='700'
					margin='0px 220px 0px 0px'
				>
					SneakMax
				</Text>
				<NavigationStyle>
					<Text
						fontSize='14px'
						fontFamily='Intro-Book'
						margin='0px 40px 0px 0px'
					>
						Каталог
					</Text>
					<Text
						fontSize='14px'
						fontFamily='Intro-Book'
						margin='0px 40px 0px 0px'
					>
						О нас
					</Text>
					<Text
						fontSize='14px'
						fontFamily='Intro-Book'
						margin='0px 40px 0px 0px'
					>
						Подбор товара
					</Text>
					<Text
						fontSize='14px'
						fontFamily='Intro-Book'
						margin='0px 40px 0px 0px'
					>
						Наша команда
					</Text>
					<Text
						fontSize='14px'
						fontFamily='Intro-Book'
						margin='0px 40px 0px 0px'
					>
						Доставка и оплата
					</Text>
					<Text
						fontSize='14px'
						fontFamily='Intro-Book'
						margin='0px 40px 0px 0px'
					>
						Контакты
					</Text>
					<BasketRow>
						<Text
							fontSize='14px'
							fontFamily='Intro-Book'
							margin='0px 10px 0px 0px'
						>
							Корзина
						</Text>
						<BasketIMG onClick={openPopUp}>
							<IMG src={Basket} alt='Корзина' />
							{countPurchases === 0 ? (
								''
							) : (
								<Circle
									position='absolute'
									top='8.5px'
									left='9px'
									ground_color='#F14F4F'
									width='16px'
									height='17px'
									justify_content='center'
									align_items='center'
								>
									<Text fontSize='12px' fontFamily='Intro-Book'>
										{countPurchases}
									</Text>
								</Circle>
							)}
						</BasketIMG>
					</BasketRow>
				</NavigationStyle>
			</Row>
		</Wrapper>
	);
};

export default Navbar;
