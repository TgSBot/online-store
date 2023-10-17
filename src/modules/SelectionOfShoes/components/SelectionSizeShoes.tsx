import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Text from '../../../UI/Text/Text';
import InputCheckbox from '../../../UI/Input/InputCheckbox';
import BlockText from '../../../UI/BlockText/BlockText';
import { useAppDispatch, useAppSelector } from '../../../hook/redux';
import Img from '../../../UI/IMG/Img';
import shoes from '../../../assets/img/rectangle-45-shoes.jpg';
import Button from '../../../UI/Button/Button';
import Br from '../../../UI/Br/Br';
import { sliceIndividualShoes } from '../../../store/reducers/IndividualSelectionShoes';

const Wrapper = styled.div`
	width: fit-content;
	height: fit-content;
	background-color: #fff4ee;
	padding: 40px 100px;
`;

const Row = styled.div`
	width: fit-content;
	height: fit-content;
	display: flex;
	flex-direction: column;
`;

const StyledForm = styled.form`
	width: fit-content;
	height: fit-content;
	display: flex;
	flex-direction: row;
	margin: 0px 0px 22px 0px;
`;

const SelectionSizeShoes = () => {
	const [error, setError] = useState(false);
	const { page, sizeShoes } = useAppSelector(
		(state) => state.IndividualSelectionShoes
	);
	const { changeSizeShoes, deleteSizeShoesInArray, changePage } =
		sliceIndividualShoes.actions;
	const dispatch = useAppDispatch();

	const arraySizeShoes = ['менее 36', '36-38', '39-41', '42-44', '45 и более'];

	const onChangeInput = (size: string) => {
		if (sizeShoes.indexOf(String(size)) === -1) {
			dispatch(changeSizeShoes(size));
		}
	};

	const onClickInput = (size: string) => {
		dispatch(deleteSizeShoesInArray(size));
	};

	const nextStep = () => {
		if (sizeShoes.length > 0) {
			dispatch(changePage());
		}
		setError(true);
	};

	useEffect(() => {
		if (sizeShoes.length > 0 && error) setError(false);
	}, [error, sizeShoes]);

	return (
		<Wrapper>
			<Row>
				<Text
					fontFamily='Intro-Bold'
					fontSize='30px'
					fontWeight='700'
					color='#444B58'
					margin='0px 0px 20px 0px'
				>
					Мы подберём идеальную пару для вас
				</Text>
				<Text
					fontFamily='Intro-Book'
					fontSize='16px'
					color='#808080'
					margin='0px 0px 10px 0px'
				>
					Ответьте на три вопроса и мы вышлем каталог с самыми подходящими для
					вас моделями
				</Text>
				<Br width='100%' margin='0px 0px 20px 0px' />
				<Text
					fontFamily='Intro-Book'
					fontSize='24px'
					color='#444B58'
					margin={error ? '0px 0px 20px 0px' : '0px 0px 40px 0px'}
				>
					Какой размер вам подойдёт?
				</Text>
				{error ? (
					<Text
						fontFamily='Intro-Regular'
						fontSize='24px'
						color='#CC4949'
						margin='0px 0px 20px 0px'
					>
						Пожалуйста выберите размер кроссовок
					</Text>
				) : (
					''
				)}
				<StyledForm>
					{arraySizeShoes.map((size) => {
						return (
							<InputCheckbox
								type='checkbox'
								key={size}
								text={size}
								onChangeInput={() => onChangeInput(size)}
								onClick={() => onClickInput(size)}
								margin='0px 70px 0px 0px'
							/>
						);
					})}
				</StyledForm>
				<Img
					src={shoes}
					alt={'обувь'}
					width='100%'
					height='100%'
					margin='0px 0px 20px 0px'
				/>
				<Br margin='0px 0px 20px 0px' />
				<BlockText
					width='100%'
					height='fit-content'
					justify_content='space-between'
					align_items='center'
				>
					<Text fontFamily='Intro-Book' fontSize='16px' color='#808080'>
						{`${page.thisPage} из ${page.maxPage}`}
					</Text>
					<Button
						width='211px'
						height='50px'
						border='1px solid #444B58'
						border_radius='4px'
						onClick={nextStep}
					>
						<Text fontFamily='Intro-Regular' fontSize='16px' color='#444B58'>
							Следующий шаг
						</Text>
					</Button>
				</BlockText>
			</Row>
		</Wrapper>
	);
};

export default SelectionSizeShoes;
