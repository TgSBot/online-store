import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Text from '../../../UI/Text/Text';
import BlockText from '../../../UI/BlockText/BlockText';
import PostSelectionShoes from './PostSelectionShoes';
import { useAppDispatch, useAppSelector } from '../../../hook/redux';
import Button from '../../../UI/Button/Button';
import Br from '../../../UI/Br/Br';
import { sliceIndividualShoes } from '../../../store/reducers/IndividualSelectionShoes';

const Wrapper = styled.div`
	width: fit-content;
	height: fit-content;
	background-color: #fff4ee;
	padding: 40px 30px 40px 100px;
`;

const Row = styled.div`
	width: fit-content;
	height: fit-content;
`;

const SelectionTypeShoes = () => {
	const [error, setError] = useState(false);

	const { page, allTypeShoes } = useAppSelector(
		(state) => state.IndividualSelectionShoes
	);
	const { changePage } = sliceIndividualShoes.actions;
	const dispatch = useAppDispatch();

	const typeSelectionShoes = [
		'Топсайдеры',
		'Оксфорды',
		'Кроссовки',
		'Кеды',
		'Зимние',
		'Походные',
	];

	const nextStep = () => {
		if (allTypeShoes.length > 0) {
			dispatch(changePage());
		}
		setError(true);
	};

	useEffect(() => {
		if (allTypeShoes.length > 0 && error) setError(false);
	}, [error, allTypeShoes]);

	return (
		<Wrapper>
			<Row>
				<BlockText
					width='fit-content'
					height='fit-content'
					flex_direction='column'
				>
					<Text
						fontFamily='Intro-Book'
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
						margin='0px 0px 20px 0px'
					>
						Какой тип кроссовок рассматриваете?
					</Text>
				</BlockText>
				<BlockText
					width='1050px'
					height='fit-content'
					flex_direction='row'
					flex_wrap='wrap'
				>
					{typeSelectionShoes.map((typeShoes) => {
						return <PostSelectionShoes key={typeShoes} typeShoes={typeShoes} />;
					})}
				</BlockText>
				{error ? (
					<Text
						fontFamily='Intro-Regular'
						fontSize='24px'
						color='#CC4949'
						margin='0px 0px 0px 0px'
					>
						Пожалуйста выберите тип кроссовок
					</Text>
				) : (
					''
				)}
				<Br width='980px' margin='20px 0px 20px 0px' />
				<BlockText
					width='980px'
					height='fit-content'
					align_items='center'
					justify_content='space-between'
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
export default SelectionTypeShoes;
