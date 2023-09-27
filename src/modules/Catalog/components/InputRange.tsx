import React, { FC, useEffect, useState } from 'react';
import ReactSlider from 'react-slider';
import { styled } from 'styled-components';
import { useAppDispatch, useAppSelector } from '../../../hook/redux';
import { sortSliceShoes } from '../../../store/reducers/SortPostsShoes';

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

const InputRange: FC = () => {
	const [minRange, setMinRange] = useState(0);
	const [maxRange, setMaxRange] = useState(100);

	// Для взаимодействия со store
	const { defaultVelues } = useAppSelector((state) => state.sortPostsShoes);

	const { changeMinimumPrice, changeMaximumPrice, changeDefaultVelues } =
		sortSliceShoes.actions;
	const dispatch = useAppDispatch();

	//Value - значение
	const ChangeValueSlider = (value: any) => {
		setMaxRange(value[1]);
		setMinRange(value[0]);
		dispatch(changeMinimumPrice(value[0]));
		dispatch(changeMaximumPrice(value[1]));
	};

	useEffect(() => {
		if (defaultVelues === true) {
			setMinRange(0);
			setMaxRange(100);
			dispatch(changeDefaultVelues(false));
		}
	}, [defaultVelues]);

	return (
		<>
			<StyledSlider
				renderTrack={Track} // Кастомная линия ползунка
				renderThumb={Thumb} // Кастомный ползунок
				minDistance={1.7} // Минимальная дистанция между ползунками
				value={[minRange, maxRange]}
				onChange={ChangeValueSlider}
			/>
		</>
	);
};

export default InputRange;
