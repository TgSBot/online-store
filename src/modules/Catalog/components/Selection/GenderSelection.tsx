import React, { FC } from 'react';
import { styled } from 'styled-components';
import { useAppDispatch, useAppSelector } from '../../../../hook/redux';
import Text from '../../../../UI/Text/Text';
import checkboxChecking from '../../../../assets/svg/group.svg';
import { StyledInput } from '../../../../UI/Input/InputCheckbox';
import { sortSliceShoes } from '../../../../store/reducers/SortPostsShoes';

const LabelStyled = styled.label``;

const Fake = styled.div`
	width: 24px;
	height: 24px;
	border: 1px solid #dbbba9;
	border-radius: 4px;
	position: relative;
	display: inline-block;
	vertical-align: middle;
	margin: 0px 10px 0px 0px;
	&::before {
		content: '';
		position: absolute;
		width: 14.689px;
		height: 11.406px;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		background-image: url('${checkboxChecking}');
		transition: 0.15s;
		opacity: 0;
	}
	${StyledInput}:checked + &::before {
		opacity: 1;
	}
`;

const GenderSelection: FC = () => {
	// Redux
	const { male, female } = useAppSelector((state) => state.sortPostsShoes);
	const { changeGenderFemale, changeGenderMale } = sortSliceShoes.actions;
	const dispatch = useAppDispatch();

	const onChangeGenderMale = (
		event: React.ChangeEvent<HTMLInputElement>
	): void => {
		dispatch(changeGenderMale(event.target.checked));
	};

	const onChangeGenderFemale = (
		event: React.ChangeEvent<HTMLInputElement>
	): void => {
		dispatch(changeGenderFemale(event.target.checked));
	};

	return (
		<>
			<LabelStyled>
				<StyledInput
					type={'radio'}
					checked={male}
					onChange={onChangeGenderMale}
					name='gender'
				/>
				<Fake />
				<Text
					fontFamily='Intro-Book'
					fontSize='16px'
					color='#444B58'
					margin='0px 41px 0px 0px'
				>
					мужчина
				</Text>
			</LabelStyled>
			<LabelStyled>
				<StyledInput
					type={'radio'}
					checked={female}
					onChange={onChangeGenderFemale}
					name='gender'
				/>
				<Fake />
				<Text fontFamily='Intro-Book' fontSize='16px' color='#444B58'>
					женщина
				</Text>
			</LabelStyled>
		</>
	);
};

export default GenderSelection;
