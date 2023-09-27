import React, { FC } from 'react';
import ReactSlider from 'react-slider';
import { styled } from 'styled-components';
import { useAppDispatch, useAppSelector } from '../../../hook/redux';
import { sortSliceShoes } from '../../../store/reducers/SortPostsShoes';

interface IInputRange {
	defaultSettings?: any;
}

type PropsTrackColor = {
	thumb: number;
};

const StyledSlider = styled(ReactSlider)`
	width: 240px;
	height: fit-content;
	position: relative;
`;

const StyledThumb = styled.div`
	height: 18px;
	width: 3px;
	background-color: #444b58;
	cursor: grab;
	color: #444b58;
	border-radius: 20px;
	position: absolute;
	top: -10px;
	z-index: 1;
	&:focus-visible {
		outline: 1px solid #fff4ee;
	}
`;

const Thumb = (props: object) => <StyledThumb {...props} />;

const StyledTrack = styled.div<PropsTrackColor>`
	height: 2px;
	background-color: #444b58;
	position: relative;
	top: -2px;
`;

const Track = (props: object, state: any) => (
	<StyledTrack {...props} thumb={state.index} />
);

const InputRange: FC<IInputRange> = ({ defaultSettings }) => {
	// Для взаимодействия со store
	const { maxPrice, minPrice } = useAppSelector(
		(state) => state.sortPostsShoes
	);
	const { changeMinimumPrice, changeMaximumPrice } = sortSliceShoes.actions;
	const dispatch = useAppDispatch();

	//Value - значение
	const ChangeValueSlider = (value: any) => {
		dispatch(changeMinimumPrice(Math.round(value[0])));
		dispatch(changeMaximumPrice(Math.round(value[1])));
	};

	return (
		<>
			<StyledSlider
				renderTrack={Track} // Кастомная линия ползунка
				renderThumb={Thumb} // Кастомный ползунок
				minDistance={1.7} // Минимальная дистанция между ползунками
				defaultValue={[minPrice, maxPrice]}
				onChange={ChangeValueSlider}
			/>
		</>
	);
};

export default InputRange;
