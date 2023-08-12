import React, { FC } from 'react';
import styled from 'styled-components';
import Text from '../../../UI/Text/Text';
import Basket from '../assets/svg/Vector_basket.svg';
import Circle from '../../../UI/Circle/Circle';

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

const BasketIMG = styled.div`
	width: fit-content;
	height: fit-content;
	display: flex;
	flex-direction: row;
`;

const Navbar: FC = () => {
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
						<a href='#'>
							<BasketIMG>
								<IMG src={Basket} alt='Корзина' />
								<Circle
									position='relative'
									top='8.5px'
									left='-10px'
									ground_color='#F14F4F'
									width='16px'
									height='17px'
								>
									<Text fontSize='12px' fontFamily='Intro-Book'>
										1
									</Text>
								</Circle>
							</BasketIMG>
						</a>
					</BasketRow>
				</NavigationStyle>
			</Row>
		</Wrapper>
	);
};

export default Navbar;
