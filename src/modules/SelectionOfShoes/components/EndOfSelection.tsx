import React, { SyntheticEvent, useState } from 'react';
import styled from 'styled-components';
import Text from '../../../UI/Text/Text';
import Br from '../../../UI/Br/Br';
import Input from '../../../UI/Input/Input';
import Button from '../../../UI/Button/Button';
import Img from '../../../UI/IMG/Img';
import phone from '../../../assets/img/devices-apple-i-phone-11-prophone.png';
import BlockText from '../../../UI/BlockText/BlockText';
import shipped from '../../../assets/img/shipped.png';
import { sliceIndividualShoes } from '../../../store/reducers/IndividualSelectionShoes';
import { useAppDispatch } from '../../../hook/redux';

const Wrapper = styled.div`
	width: fit-content;
	height: fit-content;
	background-color: #fff4ee;
	padding: 80px 100px 51px 100px;
`;

const Row = styled.div`
	width: fit-content;
	height: fit-content;
	display: flex;
	flex-direction: column;
`;

const Suggestion = styled.div`
	width: fit-content;
	height: fit-content;
	padding: 40px 110px 40px 40px;
	background-color: #dbbba9;
	display: flex;
	flex-direction: column;
	border-radius: 4px;
	position: relative;
`;

const Form = styled.form`
	width: fit-content;
	height: fit-content;
	display: flex;
	flex-direction: column;
`;

const EndOfSelection = () => {
	// Меняет статус отправки при нажатии
	const [sending, setSending] = useState(false);

	const [name, setName] = useState('');
	const [errorName, setErrorName] = useState(false);
	const [email, setEmail] = useState('');
	const [errorEmail, setErrorEmail] = useState(false);

	const { changeFormSending } = sliceIndividualShoes.actions;
	const dispatch = useAppDispatch();

	const isValidName = (name: string) => {
		return name.length >= 3 ? true : false;
	};

	const isValidEmail = (email: string) => {
		return /\S+@\S+\.\S+/.test(email);
	};

	const sendingOffer = (event: SyntheticEvent) => {
		event.preventDefault();
		if (!isValidName(name)) setErrorName(true);
		if (!isValidEmail(email)) setErrorEmail(true);
		if (isValidName(name) && isValidEmail(email)) {
			setErrorName(false);
			setErrorEmail(false);
			dispatch(changeFormSending({ name, email }));
			setSending(true);
		}
	};

	return (
		<Wrapper>
			<Row>
				<Text
					fontFamily='Intro-Bold'
					fontSize='30px'
					fontWeight='700'
					color='#444B58'
					margin='0px 0px 26px 0px'
				>
					Ваша подборка готова!
				</Text>
				<Text
					fontFamily='Intro-Book'
					fontSize='18px'
					color='#DBBBA9'
					margin='0px 0px 24px 0px'
				>
					Оставьте свои контактные данные, чтобы бы мы могли отправить
					подготовленный для вас каталог
				</Text>
				<Br margin='0px 0px 25px 0px' background_color='#dbbba9' />
				<Suggestion>
					<Text
						fontFamily='Intro-Bold'
						fontSize='36px'
						fontWeight='700'
						line_height='50.4px'
						margin='0px 0px 10px 0px'
					>
						Получить предложение
					</Text>
					<Text
						fontFamily='Intro-Book'
						fontSize='18px'
						line_height='25.2px'
						margin='0px 0px 24px 0px'
					>
						Получите подборку подходящих для вас моделей на почту
					</Text>
					<Form>
						<Input
							type='text'
							placeholder='Ваше имя'
							width='500px'
							height='60px'
							background_color='#FFF'
							border_radius='4px'
							margin='0px 0px 10px 0px'
							onChange={(event: SyntheticEvent<HTMLInputElement>) =>
								setName(event.currentTarget.value)
							}
						/>
						{errorName ? (
							<Text
								fontFamily='Intro-Regular'
								fontSize='24px'
								color='#CC4949'
								margin='0px 0px 10px 0px'
							>
								Имя должно быть длиннее 2 букв
							</Text>
						) : (
							''
						)}
						<Input
							type='text'
							placeholder='E-mail'
							width='500px'
							height='60px'
							background_color='#FFF'
							border_radius='4px'
							margin={errorEmail ? '0px 0px 10px 0px' : '0px 0px 20px 0px'}
							onChange={(event: SyntheticEvent<HTMLInputElement>) =>
								setEmail(event.currentTarget.value)
							}
						/>
						{errorEmail ? (
							<Text
								fontFamily='Intro-Regular'
								fontSize='24px'
								color='#CC4949'
								margin='0px 0px 10px 0px'
							>
								Ваш email не валиден
							</Text>
						) : (
							''
						)}
						<Button
							width='220px'
							height='60px'
							ground_color='#F14F4F'
							border_radius='4px'
							onClick={sendingOffer}
						>
							<Text fontFamily='Intro-Regular' fontSize='16px'>
								Получить
							</Text>
						</Button>
					</Form>
					<BlockText width='fit-content' height='fit-content'>
						<Img
							src={phone}
							alt={'phone'}
							width='max-content'
							height='max-content'
							position='absolute'
							top='-5px'
							left='600px'
							margin={errorEmail || errorName ? 'auto 0px' : '0px'}
						/>
						{sending ? (
							<Img
								src={shipped}
								alt={'Отправлено'}
								width='190px'
								height='398px'
								position='absolute'
								top='4px'
								left='610px'
							/>
						) : (
							''
						)}
					</BlockText>
				</Suggestion>
			</Row>
		</Wrapper>
	);
};

export default EndOfSelection;
