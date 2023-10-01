import React, { FC } from 'react';
import { styled } from 'styled-components';
import { useAppSelector } from '../../../hook/redux';
import BlockText from '../../../UI/BlockText/BlockText';
import Text from '../../../UI/Text/Text';
import InputRange from './InputRange';

const BlockPriceStyled = styled.div`
	width: 240px;
	height: 50px;
	border-radius: 4px;
	border: 1px solid #b2b5bb;
	position: relative;
`;

// Вертикальная черта по середине блока цены
const VerticalLine = styled.hr`
	width: 1px;
	height: 34px;
	background-color: #b2b5bb;
	margin: 8px auto;
`;

const BlockPrice: FC = () => {
	const { minPrice, maxPrice } = useAppSelector(
		(state) => state.sortPostsShoes
	);
	const { loading, error } = useAppSelector((state) => state.allPosts);

	return (
		<BlockPriceStyled>
			<BlockText
				width='fit-content'
				height='fit-content'
				position='absolute'
				top='17px'
				left='40px'
			>
				<Text fontFamily='Intro-Book' fontSize='16px' color='#444B58'>
					{minPrice}
				</Text>
			</BlockText>
			<VerticalLine />
			<BlockText
				width='fit-content'
				height='fit-content'
				position='absolute'
				top='17px'
				left='155px'
			>
				<Text fontFamily='Intro-Book' fontSize='16px' color='#444B58'>
					{loading === true ? '0' : error === true ? '0' : maxPrice}
				</Text>
			</BlockText>
			<InputRange />
		</BlockPriceStyled>
	);
};

export default BlockPrice;
