import React, { FC, useCallback } from 'react';
import { styled } from 'styled-components';
import { useAppSelector } from '../../../../hook/redux';
import Text from '../../../../UI/Text/Text';
import InputRange from './InputRange';

interface PropsPrice {
	border_width: string;
	border_radius: string;
}

const BlockPriceStyled = styled.div`
	width: fit-content;
	height: fit-content;
	display: flex;
	position: relative;
`;

const Price = styled.div<PropsPrice>`
	width: 119.5px;
	height: 50px;
	display: flex;
	justify-content: center;
	align-items: center;
	border-width: ${(props) => props.border_width};
	border-style: solid;
	border-color: #b2b5bb;
	border-radius: ${(props) => props.border_radius};
`;

// Вертикальная черта по середине блока цены
const VerticalLine = styled.hr`
	width: 1px;
	height: 34px;
	background-color: #b2b5bb;
	position: absolute;
	left: 50%;
	top: 8px;
`;

const BlockPrice: FC = () => {
	const { minPrice, maxPrice } = useAppSelector(
		(state) => state.sortPostsShoes
	);
	const { loading, error } = useAppSelector((state) => state.allPosts);

	const blockMaxPrice = useCallback(() => {
		return (
			<Price border_width='1px 1px 1px 0px' border_radius='0px 4px 4px 0px'>
				<Text fontFamily='Intro-Book' fontSize='16px' color='#444B58'>
					{error === true ? '0' : loading === true ? '0' : maxPrice}
				</Text>
			</Price>
		);
	}, [error, loading, maxPrice]);

	return (
		<>
			<BlockPriceStyled>
				<Price border_width='1px 0px 1px 1px' border_radius='4px 0px 0px 4px'>
					<Text fontFamily='Intro-Book' fontSize='16px' color='#444B58'>
						{minPrice}
					</Text>
				</Price>
				<VerticalLine />
				{blockMaxPrice()}
			</BlockPriceStyled>
			<InputRange />
		</>
	);
};

export default BlockPrice;
