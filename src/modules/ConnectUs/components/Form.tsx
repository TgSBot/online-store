import React, { FC } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { styled } from 'styled-components';
import Text from '../../../UI/Text/Text';
import Input from '../../../UI/Input/Input';
import Button from '../../../UI/Button/Button';
import BlockText from '../../../UI/BlockText/BlockText';

type FormValue = {
	firstName: string;
	phoneNumber: string;
};

const Wrapper = styled.div`
	width: 380px;
	height: 414.97px;
	display: flex;
	background-color: #484283;
	border-radius: 4px;
`;

const Row = styled.div`
	width: fit-content;
	height: fit-content;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const Title = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
`;

const FormStyled = styled.form`
	display: flex;
	justify-content: center;
	flex-direction: column;
	height: fit-content;
`;

const Form: FC = () => {
	const {
		handleSubmit,
		control,
		formState: { errors },
		setValue,
	} = useForm<FormValue>({ mode: 'onChange' });

	const HandleSubmitOn = (data: any): any => {
		console.log(JSON.stringify(data));
		setValue('firstName', '');
		setValue('phoneNumber', '');
	};

	return (
		<Wrapper>
			<Row>
				<Title>
					<Text
						fontFamily='Intro-Bold'
						fontSize='30px'
						fontWeight='700'
						margin='40px 0px 20px 0px'
					>
						Есть вопросы?
					</Text>
					<Text
						fontFamily='Intro-Book'
						fontSize='16px'
						margin='0px 64px 40px 56px'
						text_align='center'
					>
						Заполните форму и наш менеджер свяжется с вами
					</Text>
				</Title>
				<FormStyled onSubmit={handleSubmit(HandleSubmitOn)}>
					<Controller
						name='firstName'
						control={control}
						defaultValue={''}
						rules={{
							required: true,
						}}
						render={({ field: { onChange, onBlur, value } }) => (
							<Input
								placeholder='Ваше имя'
								background_color='white'
								width='340px'
								height='59.624px'
								border_radius='4px'
								type='text'
								onChange={onChange}
								onBlur={onBlur}
								value={value}
								border={errors?.firstName?.message ? '2px solid red' : 'none'}
							/>
						)}
					/>
					<BlockText
						margin='9.94px 0px 10.05px 0px'
						width='fit-content'
						height='fit-content'
					>
						<Controller
							name='phoneNumber'
							control={control}
							defaultValue={''}
							rules={{
								required: true,
								minLength: 11,
								pattern: /^[\d\+][\d\(\)\ -]{4,14}\d$/,
							}}
							render={({ field: { onChange, onBlur, value } }) => (
								<Input
									placeholder='Номер телефона'
									background_color='white'
									width='340px'
									height='59.624px'
									border_radius='4px'
									type='tel'
									onChange={onChange}
									onBlur={onBlur}
									value={value}
									border={
										errors?.phoneNumber?.message ? '2px solid red' : 'none'
									}
								/>
							)}
						/>
					</BlockText>
					<Button
						width='338px'
						height='60px'
						ground_color='#F14F4F'
						border_radius='4px'
						margin='0px 0px 40.77px 0px'
					>
						<Text fontFamily='Intro-Regular' fontSize='16px' color='white'>
							Отправить
						</Text>
					</Button>
				</FormStyled>
			</Row>
		</Wrapper>
	);
};

export default Form;
