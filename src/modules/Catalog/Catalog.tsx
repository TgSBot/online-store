import React, { FC } from 'react';
import { styled } from 'styled-components';
import Text from '../../UI/Text/Text';
import Selection from './components/Selection';
import BlockText from '../../UI/BlockText/BlockText';
import LoadingPosts from './components/Post/LoadingPosts';

const Wrapper = styled.div`
	width: 100%;
	height: fit-content;
	display: flex;
	justify-content: center;
`;

const Row = styled.div`
	width: fit-content;
	height: fit-content;
	margin: 60px 0px 0px 0px;
	align-items: center;
`;

const Catalog: FC = () => {
	return (
		<Wrapper>
			<Row>
				<Text
					fontFamily='Intro-Bold'
					fontSize='30px'
					fontWeight='700'
					color='#444B58'
					margin='0px 0px 40px 0px'
				>
					Каталог
				</Text>
				<BlockText width='fit-content' height='fit-content'>
					<Selection margin='0px 20px 0px 0px' />
					<LoadingPosts />
				</BlockText>
			</Row>
		</Wrapper>
	);
};

export default Catalog;
