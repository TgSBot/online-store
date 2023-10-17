import React, { FC, SyntheticEvent, useState } from 'react';
import { styled } from 'styled-components';
import checkboxChecking from '../../assets/svg/group.svg';
import Text from '../Text/Text';

interface IInputCheckbox {
	text?: string;
	onChangeInput?: (event: SyntheticEvent) => void;
	margin?: string;
	type: string;
	onClick?: () => void;
	name?: string;
}

type PropsLabelStyled = {
	margin?: string;
};

export const StyledInput = styled.input`
	display: none;
`;

const LabelStyled = styled.label<PropsLabelStyled>`
	width: fit-content;
	margin: ${(props) => props.margin || '0px'};
`;

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

const InputCheckbox: FC<IInputCheckbox> = ({
	text,
	onChangeInput,
	margin,
	type,
	onClick,
}) => {
	const [selected, setSelected] = useState(false);

	const onChangeLabel = () => {
		selected ? setSelected(false) : setSelected(true);
	};

	const onClickInput = () => {
		if (selected === true) return onClick;
	};

	return (
		<LabelStyled margin={margin} onChange={onChangeLabel}>
			<StyledInput
				type={type}
				checked={selected}
				onChange={onChangeInput}
				onClick={onClickInput()}
				name='shoes'
			/>
			<Fake />
			<Text fontFamily='Intro-Book' fontSize='16px' color='#444B58'>
				{text}
			</Text>
		</LabelStyled>
	);
};

export default InputCheckbox;
