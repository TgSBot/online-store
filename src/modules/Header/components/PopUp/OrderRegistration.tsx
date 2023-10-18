import React, { FormEvent, SyntheticEvent, useEffect, useState } from 'react';
import { styled } from 'styled-components';
import { useAppDispatch, useAppSelector } from '../../../../hook/redux';
import BlockText from '../../../../UI/BlockText/BlockText';
import { sliceOrderRegistration } from '../../../../store/reducers/OrderRegistration';
import CheckOrderRegistration from './CheckOrderRegistration';
import Input from '../../../../UI/Input/Input';
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
	overflow: auto;
`;

const Row = styled.div`
	width: fit-content;
	height: fit-content;
	background-color: #fff;
	display: flex;
`;

const Form = styled.form`
	width: fit-content;
	height: fit-content;
	margin: 40px 0px 0px 0px;
	display: flex;
	flex-direction: column;
`;

const OrderRegistration = () => {
	const [name, setName] = useState('');
	const [errorName, setErrorName] = useState(false);
	const [nameIsDirty, setNameIsDirty] = useState(false);
	const [numberPhone, setNumberPhone] = useState('');
	const [errorNumberPhone, setErrorNumberPhone] = useState(false);
	const [numberPhoneIsDirty, setNumberPhoneIsDirty] = useState(false);
	const [email, setEmail] = useState('');
	const [errorEmail, setErrorEmail] = useState(false);
	const [emailIsDirty, setEmailIsDirty] = useState(false);

	// Redux
	const { status } = useAppSelector((state) => state.OrderRegistration);
	const { changeStatus, changePurchaseOrder } = sliceOrderRegistration.actions;
	const dispatch = useAppDispatch();

	const isValidName = (name: string) => {
		return name.length >= 2 ? true : false;
	};

	const isValidNumberPhone = (phoneNumber: string) => {
		return /^[\d][\d -]{4,14}\d$/.test(phoneNumber);
	};

	const isValidEmail = (email: string) => {
		return /\S+@\S+\.\S+/.test(email);
	};

	const sendingOffer = (event: SyntheticEvent) => {
		event.preventDefault();
		if (
			isValidName(name) &&
			isValidEmail(email) &&
			isValidNumberPhone(numberPhone)
		) {
			console.log(
				`Форма оформления продажи: имя -> ${name}, номер телефона -> ${numberPhone}, почта -> ${email}`
			);
			dispatch(changePurchaseOrder({ name, numberPhone, email }));
			dispatch(changeStatus(false));
		}
	};

	useEffect(() => {
		!isValidName(name) && nameIsDirty
			? setErrorName(true)
			: setErrorName(false);
		!isValidNumberPhone(numberPhone) && numberPhoneIsDirty
			? setErrorNumberPhone(true)
			: setErrorNumberPhone(false);
		!isValidEmail(email) && emailIsDirty
			? setErrorEmail(true)
			: setErrorEmail(false);
	}, [email, name, numberPhone, emailIsDirty, numberPhoneIsDirty, nameIsDirty]);

	const closePopUp = (event: SyntheticEvent) => {
		event.preventDefault();
		dispatch(changeStatus(false));
	};

	return (
		<Wrapper display={status ? 'flex' : 'none'} onClick={closePopUp}>
			<Row onClick={(event: SyntheticEvent) => event.stopPropagation()}>
				<BlockText
					width='fit-content'
					height='fit-content'
					margin='40px'
					flex_direction='column'
				>
					<CheckOrderRegistration />
					<Form>
						<Input
							type='text'
							width='500px'
							height='60px'
							background_color='#F6F6F6'
							placeholder='Ваше имя'
							border_radius='4px'
							margin='0px 0px 10px 0px'
							onClick={() => setNameIsDirty(true)}
							onChange={(event: FormEvent<HTMLInputElement>) =>
								setName(event.currentTarget.value)
							}
							value={name}
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
							width='500px'
							height='60px'
							background_color='#F6F6F6'
							placeholder='Номер телефона'
							border_radius='4px'
							margin='0px 0px 10px 0px'
							onClick={() => setNumberPhoneIsDirty(true)}
							onChange={(event: FormEvent<HTMLInputElement>) =>
								setNumberPhone(event.currentTarget.value)
							}
							value={numberPhone}
						/>
						{errorNumberPhone ? (
							<Text
								fontFamily='Intro-Regular'
								fontSize='24px'
								color='#CC4949'
								margin='0px 0px 10px 0px'
							>
								Не правильный номер телефона
							</Text>
						) : (
							''
						)}
						<Input
							type='text'
							width='500px'
							height='60px'
							background_color='#F6F6F6'
							placeholder='E-mail'
							border_radius='4px'
							margin={errorEmail ? '0px 0px 10px 0px' : '0px 0px 51px 0px'}
							onClick={() => setEmailIsDirty(true)}
							onChange={(event: FormEvent<HTMLInputElement>) =>
								setEmail(event.currentTarget.value)
							}
							value={email}
						/>
						{errorEmail ? (
							<Text
								fontFamily='Intro-Regular'
								fontSize='24px'
								color='#CC4949'
								margin='0px 0px 41px 0px'
							>
								Не правильный email
							</Text>
						) : (
							''
						)}
						<Button
							width='221px'
							height='60px'
							ground_color='#F14F4F'
							border_radius='4px'
							onClick={sendingOffer}
						>
							<Text fontFamily='Intro-Regular' fontSize='16px' color='#FFF'>
								Оформить заказ
							</Text>
						</Button>
					</Form>
				</BlockText>
			</Row>
		</Wrapper>
	);
};

export default OrderRegistration;
