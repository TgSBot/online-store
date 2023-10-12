import React, { FormEvent, SyntheticEvent, useEffect, useState } from 'react';
import { styled } from 'styled-components';
import { useAppDispatch, useAppSelector } from '../../../../hook/redux';
import BlockText from '../../../../UI/BlockText/BlockText';
import { sliceOrderRegistration } from '../../../../store/reducers/OrderRegistration';
import CheckOrderRegistration from './CheckOrderRegistration';
import Input from '../../../../UI/Input/Input';
import Button from '../../../../UI/Button/Button';
import Text from '../../../../UI/Text/Text';
import { event } from 'yandex-maps';

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
	const [numberPhone, setNumberPhone] = useState('');
	const [email, setEmail] = useState('');
	const [error, setError] = useState(false);

	// Redux
	const { status } = useAppSelector((state) => state.OrderRegistration);
	const { changeStatus } = sliceOrderRegistration.actions;
	const dispatch = useAppDispatch();

	const closePopUp = (event: SyntheticEvent) => {
		event.preventDefault();
		dispatch(changeStatus(false));
	};

	const validationName = () => {
		if (name.length < 3) {
			setError(true);
			return false;
		}
		return true;
	};

	const validationPhoneNumber = () => {
		if (numberPhone.length < 11) {
			setError(true);
			return false;
		}
		return true;
	};

	const validationEmail = () => {
		return /\S+@\S+\.\S+/.test(email);
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
							onChange={(event: FormEvent<HTMLInputElement>) =>
								setName(event.currentTarget.value)
							}
							value={name}
						/>
						{error ? (
							<Text fontFamily='Intro-Book' fontSize='16' color='#F14F4F'>
								Имя должно содержать не менее 3 букв
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
							onChange={(event: FormEvent<HTMLInputElement>) =>
								setNumberPhone(event.currentTarget.value)
							}
							value={numberPhone}
						/>
						<Input
							type='text'
							width='500px'
							height='60px'
							background_color='#F6F6F6'
							placeholder='E-mail'
							border_radius='4px'
							margin='0px 0px 51px 0px'
							onChange={(event: FormEvent<HTMLInputElement>) =>
								setEmail(event.currentTarget.value)
							}
							value={email}
						/>
						<Button
							width='221px'
							height='60px'
							ground_color='#F14F4F'
							border_radius='4px'
							disabled={error ? true : false}
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
