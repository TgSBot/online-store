import React from 'react';
import { styled } from 'styled-components';
import BlockText from '../../UI/BlockText/BlockText';
import Text from '../../UI/Text/Text';
import QuestionSpoiler from './components/QuestionSpoiler';

const Wrapper = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Row = styled.div`
	width: 1030px;
	height: fit-content;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	margin: 60px 0px 60px 0px;
`;

const Questions = () => {
	return (
		<Wrapper>
			<Row>
				<BlockText width='fit-content' height='fit-content'>
					<Text
						fontFamily='Intro-Bold'
						fontSize='30px'
						fontWeight='700'
						color='black'
						margin='0px 0px 40px 0px'
					>
						Часто задаваемые вопросы
					</Text>
				</BlockText>
				<BlockText
					width='100%'
					height='fit-content'
					flex_direction='column'
					position='relative'
					left='150px'
				>
					<QuestionSpoiler
						title='Вопрос 1'
						body='А это ответ 1: в комплексе функционируют 6 детских садов с площадками, воспитателями и всякими другими людьми'
						top='1px'
					/>
					<QuestionSpoiler
						title='Вопрос 2'
						body='А это ответ 1: в комплексе функционируют 6 детских садов с площадками, воспитателями и всякими другими людьми'
					/>
				</BlockText>
			</Row>
		</Wrapper>
	);
};

export default Questions;
