import React from 'react';
import styled from 'styled-components';
import Text from '../../../UI/Text/Text';
import BlockText from '../../../UI/BlockText/BlockText';

const Wrapper = styled.div`
	width: fit-content;
	height: fit-content;
	background-color: #fff4ee;
	padding: 40px 100px;
`;

const Row = styled.div`
	width: fit-content;
	height: fit-content;
`;

const StyledBr = styled.br`
	width: 100px;
	height: 1px;
	background-color: #808080;
`;

const SelectionTypeShoes = () => {
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
					<StyledBr />
					<Text fontFamily='Intro-Book' fontSize='24px' color='#444B58'>
						Какой тип кроссовок рассматриваете?
					</Text>
				</BlockText>
			</Row>
		</Wrapper>
	);
};
export default SelectionTypeShoes;
