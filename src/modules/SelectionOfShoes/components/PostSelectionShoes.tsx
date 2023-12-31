import React, { FC } from 'react';
import styled from 'styled-components';
import Img from '../../../UI/IMG/Img';
import shoes from '../../../assets/img/selection-shoes.jpg';
import InputCheckbox from '../../../UI/Input/InputCheckbox';
import { useAppDispatch, useAppSelector } from '../../../hook/redux';
import { sliceIndividualShoes } from '../../../store/reducers/IndividualSelectionShoes';

interface PropsPostSelectionShoes {
	typeShoes?: string;
}

const Wrapper = styled.div`
	width: fit-content;
	height: fit-content;
	display: flex;
	flex-direction: column;
	margin: 0px 70px 20px 0px;
`;

const PostSelectionShoes: FC<PropsPostSelectionShoes> = ({ typeShoes }) => {
	const { allTypeShoes } = useAppSelector(
		(state) => state.IndividualSelectionShoes
	);
	const { changeTypeShoes, deleteTypeShoesInArray } =
		sliceIndividualShoes.actions;
	const dispatch = useAppDispatch();

	const onChangeInput = () => {
		if (allTypeShoes.indexOf(String(typeShoes)) === -1) {
			dispatch(changeTypeShoes(typeShoes));
		}
	};

	const onClickInput = () => {
		dispatch(deleteTypeShoesInArray(typeShoes));
	};

	return (
		<Wrapper>
			<Img
				src={shoes}
				alt={''}
				width='280px'
				height='120px'
				margin='0px 0px 10px 0px'
			/>
			<InputCheckbox
				type='checkbox'
				onChangeInput={onChangeInput}
				text={typeShoes}
				onClick={onClickInput}
			/>
		</Wrapper>
	);
};

export default PostSelectionShoes;
