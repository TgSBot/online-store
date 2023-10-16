import React, { ChangeEvent, FC, useState } from 'react';
import styled from 'styled-components';
import Img from '../../../UI/IMG/Img';
import shoes from '../../../assets/img/selection-shoes.jpg';
import checkboxChecking from '../../../assets/svg/group.svg';
import InputCheckbox, { StyledInput } from '../../../UI/Input/InputCheckbox';
import Text from '../../../UI/Text/Text';
import { sliceIndividualShoes } from '../../../store/reducers/IndividualSelectionShoes';
import { useAppDispatch, useAppSelector } from '../../../hook/redux';

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

// const LabelStyled = styled.label``;

// const Fake = styled.div`
// 	width: 24px;
// 	height: 24px;
// 	border: 1px solid #dbbba9;
// 	border-radius: 4px;
// 	position: relative;
// 	display: inline-block;
// 	vertical-align: middle;
// 	margin: 0px 10px 0px 0px;
// 	&::before {
// 		content: '';
// 		position: absolute;
// 		width: 14.689px;
// 		height: 11.406px;
// 		top: 50%;
// 		left: 50%;
// 		transform: translate(-50%, -50%);
// 		background-image: url('${checkboxChecking}');
// 		transition: 0.15s;
// 		opacity: 0;
// 	}
// 	${StyledInput}:checked + &::before {
// 		opacity: 1;
// 	}
// `;

const PostSelectionShoes: FC<PropsPostSelectionShoes> = ({ typeShoes }) => {
	const [type, setType] = useState(false);

	const { allTypeShoes } = useAppSelector(
		(state) => state.IndividualSelectionShoes
	);
	const { changeTypeShoes } = sliceIndividualShoes.actions;
	const dispatch = useAppDispatch();

	const onChangeTypeShoes = () => {};

	console.log(allTypeShoes);

	return (
		<Wrapper>
			<Img
				src={shoes}
				alt={''}
				width='280px'
				height='120px'
				margin='0px 0px 10px 0px'
			/>
			<InputCheckbox checked={type} />
		</Wrapper>
	);
};

export default PostSelectionShoes;
