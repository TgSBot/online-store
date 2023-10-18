import React, { FC, SyntheticEvent } from 'react';
import { Map, YMaps } from 'react-yandex-maps';
import { styled } from 'styled-components';
import { useAppDispatch, useAppSelector } from '../../../hook/redux';
import { slicePopUp } from '../../../store/reducers/PopUp';
import BlockText from '../../../UI/BlockText/BlockText';
import Body from './PopUp/Body';
import PopUpImages from './PopUp/PopUpImages';
import TitlePopUp from './PopUp/TitlePopUp';

type PropsWrapper = {
	display: string;
};

const Wrapper = styled.div<PropsWrapper>`
	width: 100%;
	height: 100%;
	display: ${(props) => props.display};
	background-color: rgba(0, 0, 0, 0.35);
	position: fixed;
	z-index: 3;
	justify-content: center;
	align-items: center;
`;

const Row = styled.div`
	width: fit-content;
	height: 1000px;
	background-color: #fff;
	overflow: auto;
`;

const PopUpPost: FC = () => {
	const { active } = useAppSelector((state) => state.PopUp);
	const { changeActivePopUp } = slicePopUp.actions;
	const dispatch = useAppDispatch();

	return (
		<Wrapper
			display={active ? 'flex' : 'none'}
			onClick={() => {
				dispatch(changeActivePopUp(false));
			}}
		>
			<Row
				onClick={(event: SyntheticEvent) => {
					event.stopPropagation();
				}}
			>
				<BlockText
					width='fit-content'
					height='fit-content'
					margin='40px'
					flex_direction='column'
				>
					<BlockText
						width='fit-content'
						height='fit-content'
						flex_direction='row'
					>
						<PopUpImages />
						<TitlePopUp />
					</BlockText>
					<Body />
					<BlockText width='1060px' height='456px'>
						<YMaps>
							<Map
								width={1060}
								height={456}
								defaultState={{ center: [55.755864, 37.617698], zoom: 9 }}
							/>
						</YMaps>
					</BlockText>
				</BlockText>
			</Row>
		</Wrapper>
	);
};

export default PopUpPost;
