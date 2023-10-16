import React from 'react';
import styled from 'styled-components';
import Text from '../../../UI/Text/Text';

type PropsStyledBr = {
	width?: string;
	margin?: string;
};

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

const StyledBr = styled.div<PropsStyledBr>`
	width: ${(props) => props.width};
	height: 1px;
	background-color: #808080;
	margin: ${(props) => props.margin};
`;

const SelectionSizeShoes = () => {
	const arraySizeShoes = ['менее 36', '36-38', '39-41', '42-44', '45 и более'];

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
				<StyledBr width='100%' margin='' />
				<Text
					fontFamily='Intro-Book'
					fontSize='24px'
					color='#444B58'
					margin='0px 0px 40px 0px'
				>
					Какой размер вам подойдёт?
				</Text>
			</Row>
		</Wrapper>
	);
};

export default SelectionSizeShoes;
