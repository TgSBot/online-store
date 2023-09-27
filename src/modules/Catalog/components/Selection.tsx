import React, { FC, useCallback } from 'react';
import { styled } from 'styled-components';
import { useAppDispatch, useAppSelector } from '../../../hook/redux';
import { sortSliceShoes } from '../../../store/reducers/SortPostsShoes';
import BlockText from '../../../UI/BlockText/BlockText';
import Button from '../../../UI/Button/Button';
import Text from '../../../UI/Text/Text';
import BlockPrice from './BlockPrice';
import GenderSelection from './GenderSelection';

type propsButtonSizeShoes = {
	border_radius?: string;
	border?: string;
};

const Wrapper = styled.div`
	width: fit-content;
	height: fit-content;
	background-color: #fff4ee;
	border: 1px solid #fff4ee;
	border-radius: 4px;
`;

const Row = styled.div`
	width: fit-content;
	height: fit-content;
	margin: 20px;
	position: relative;
`;

const ButtonSizeSort = styled(Button)<propsButtonSizeShoes>`
	border: ${(props) => props.border};
	z-index: 1;
	font-family: Intro-Book;
	font-size: 16px;
	color: #444b58;
	&:active {
		outline: 2px solid;
	}
`;

const Selection: FC = () => {
	const { changeSizeShoes, changeStateDefault } = sortSliceShoes.actions;
	const { minPrice, maxPrice, male, female, sizeShoes } = useAppSelector(
		(state) => state.sortPostsShoes
	);
	const dispatch = useAppDispatch();

	const sizeShoesArray = [35, 36, 37, 38, 39, 40, 41, 42, 43];

	const onChangeSizeShoes = (
		event: React.ChangeEvent<HTMLButtonElement>
	): void => {
		event.preventDefault();
		dispatch(changeSizeShoes(event.target.value));
	};

	const defaultSortSettings = () => {
		dispatch(changeStateDefault());
	};

	const InputRangePrice = () => {
		return <BlockPrice />;
	};

	// useEffect(() => {
	// 	InputRangePrice();
	// }, [defaultSortSettings]);

	const outputValues = () => {
		alert(`
			Цена -> Минимальная цена: ${minPrice}, Максимальная цена: ${maxPrice},
			Пол -> ${male === true ? 'Мужской' : female === true ? 'Женский' : 'Не выбран'}
			Размер обуви -> ${sizeShoes}`);
	};

	return (
		<Wrapper>
			<Row>
				<BlockText width='240px' height='fit-content'>
					<Text
						fontFamily='Intro-Book'
						fontSize='24px'
						color='#444B58'
						margin='0px 0px 20px 0px'
					>
						Подбор <br />
						по параметрам
					</Text>
				</BlockText>
				<BlockText
					width='fit-content'
					height='fit-content'
					flex_direction='column'
				>
					<Text
						fontFamily='Intro-Book'
						fontSize='16px'
						color='#444B58'
						margin='0px 0px 10px 0px'
						fontStyle='normal'
					>
						Цена.руб
					</Text>
				</BlockText>
				{InputRangePrice()}
				<Text
					fontFamily='Intro-Book'
					fontSize='16px'
					margin='20px 0px 10px 0px'
					color='#444B58'
				>
					Пол
				</Text>
				<BlockText
					width='fit-content'
					height='fit-content'
					flex_direction='row'
				>
					<GenderSelection />
				</BlockText>
				<Text
					fontFamily='Intro-Book'
					fontSize='16px'
					color='#444B58'
					margin='20px 0px 10px 0px'
				>
					Размер
				</Text>
				<BlockText
					width='240px'
					height='171px'
					justify_content='space-around'
					flex_wrap='wrap'
					align_items='center'
					margin='0px 0px 20px 0px'
				>
					{sizeShoesArray.map((size) => (
						<ButtonSizeSort
							width='80px'
							height='57px'
							border_radius={
								size === sizeShoesArray[2]
									? '0px 1.143px 0px 0px'
									: size === sizeShoesArray[0]
									? '1.143px 0px 0px 0px'
									: '0px'
							}
							border='1px solid #DBBBA9'
							key={size}
							onClick={onChangeSizeShoes}
							value={size}
						>
							{size}
						</ButtonSizeSort>
					))}
				</BlockText>
				<Button
					width='239px'
					height='60px'
					ground_color='#444B58'
					border_radius='4px'
					margin='0px 0px 20px 0px'
					onClick={outputValues}
				>
					<Text fontFamily='Intro-Regular' fontSize='16px' color='#FFF'>
						Применить
					</Text>
				</Button>
				<BlockText width='100%' height='fit-content' justify_content='center'>
					<Button
						width='72px'
						height='16px'
						ground_color='none'
						onClick={defaultSortSettings}
					>
						<Text fontFamily='Intro-Regular' fontSize='16px' color='#444B58'>
							сбросить
						</Text>
					</Button>
				</BlockText>
			</Row>
		</Wrapper>
	);
};

export default Selection;