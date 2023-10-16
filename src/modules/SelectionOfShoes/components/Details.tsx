import React from 'react';
import { styled } from 'styled-components';
import Text from '../../../UI/Text/Text';
import BlockText from '../../../UI/BlockText/BlockText';
import { useAppSelector } from '../../../hook/redux';
import Button from '../../../UI/Button/Button';
import Br from '../../../UI/Br/Br';

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

const StyledInput = styled.textarea`
	max-width: 465px;
	min-height: 246px;
	border-radius: 4px;
	background-color: #fff;
	padding: 20px;
	resize: none;
	color: #dbbba9;
	font-family: Intro-Book;
	font-size: 16px;
	margin: 0px 0px 122px 0px;
	&::placeholder {
		color: #dbbba9;
		font-family: Intro-Book;
		font-size: 16px;
	}
	&:focus {
		border: none;
	}
`;

const Details = () => {
	const { page } = useAppSelector((state) => state.IndividualSelectionShoes);
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
				<Br margin='0px 0px 20px 0px' />
				<Text
					fontFamily='Intro-Book'
					fontSize='24px'
					color='#444B58'
					margin='0px 0px 20px 0px'
				>
					Уточните какие-либо моменты
				</Text>
				<StyledInput placeholder='Введите сообщение' />
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

export default Details;
