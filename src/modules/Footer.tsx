import React from 'react';
import { styled } from 'styled-components';
import Text from '../UI/Text/Text';
import BlockText from '../UI/BlockText/BlockText';
import Button from '../UI/Button/Button';
import { sliceBasketPopUp } from '../store/reducers/BasketPopUp';
import { useAppDispatch } from '../hook/redux';

const Wrapper = styled.div`
	width: 100%;
	height: 100%;
	background-color: #444b58;
	display: flex;
	justify-content: center;
`;

const Row = styled.div`
	width: fit-content;
	height: fit-content;
	display: flex;
	flex-direction: row;
	margin: 28px 0px 28px 0px;
`;

const Footer = () => {
	const { changeStatusActive } = sliceBasketPopUp.actions;
	const dispatch = useAppDispatch();

	const openPopUp = (): void => {
		dispatch(changeStatusActive(true));
	};

	const timeOutDispatch = () => {
		setTimeout(openPopUp, 750);
	};

	return (
		<Wrapper id='footer'>
			<Row>
				<a href='#header'>
					<Text fontFamily='Intro-Bold' fontSize='30px' fontWeight='700'>
						SneakMax
					</Text>
				</a>
				<BlockText
					width='fit-content'
					height='fit-content'
					flex_direction='row'
					position='relative'
					top='8px'
					align_items='center'
				>
					<a href='#catalog'>
						<Text
							fontFamily='Intro-Bold'
							fontSize='14px'
							margin='0px 40px 0px 355px'
						>
							Каталог
						</Text>
					</a>
					<a href='#aboutUs'>
						<Text
							fontFamily='Intro-Bold'
							fontSize='14px'
							margin='0px 40px 0px 0px'
						>
							О нас
						</Text>
					</a>
					<a href='#selectionOfShoes'>
						<Text
							fontFamily='Intro-Bold'
							fontSize='14px'
							margin='0px 40px 0px 0px'
						>
							Подбор товара
						</Text>
					</a>
					<a href='team'>
						<Text
							fontFamily='Intro-Bold'
							fontSize='14px'
							margin='0px 40px 0px 0px'
						>
							Наша команда
						</Text>
					</a>
					<a href='#header'>
						<Button
							width='fit-content'
							height='fit-content'
							onClick={timeOutDispatch}
						>
							<Text
								fontFamily='Intro-Bold'
								fontSize='14px'
								margin='0px 40px 0px 0px'
							>
								Доставка и оплата
							</Text>
						</Button>
					</a>
					<a href='#contacts'>
						<Text
							fontFamily='Intro-Bold'
							fontSize='14px'
							margin='0px 40px 0px 0px'
						>
							Контакты
						</Text>
					</a>
				</BlockText>
			</Row>
		</Wrapper>
	);
};

export default Footer;
