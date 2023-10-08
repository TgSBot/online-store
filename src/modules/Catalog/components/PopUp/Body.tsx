import React from 'react';
import { useAppSelector } from '../../../../hook/redux';
import BlockText from '../../../../UI/BlockText/BlockText';
import Text from '../../../../UI/Text/Text';

const Body = () => {
	const { post } = useAppSelector((state) => state.PopUp);
	return (
		<BlockText
			width='fit-content'
			height='fit-content'
			margin='40px 0px 40px 0px'
			flex_direction='row'
		>
			<BlockText
				width='430px'
				height='fit-content'
				flex_direction='column'
				margin='0px 110px 0px 0px'
			>
				<Text
					fontFamily='Intro-Book'
					fontSize='24px'
					color='#444B58'
					margin='0px 0px 20px 0px'
				>
					Описание
				</Text>
				<Text
					fontFamily='Intro-Book'
					fontSize='16px'
					line_height='22.4px'
					color='#444B58'
				>
					Кроссовки Nike Blazer Mid '77 Vintage Suede с винтажной подошвой
					возрождают стиль баскетбольных моделей Nike прошлого, создавая
					впечатление, что они хранились в шкафу долгие годы.
				</Text>
			</BlockText>
			<BlockText
				width='fit-content'
				height='fit-content'
				flex_direction='column'
			>
				<Text fontFamily='Intro-Book' fontSize='24px' color='#444B58'>
					Характеристики
				</Text>
				<BlockText
					width='fit-content'
					height='fit-content'
					flex_direction='column'
				>
					<Text
						fontFamily='Intro-Book'
						fontSize='16px'
						color='#444B58'
						margin='20px 0px 11px 0px'
					>
						Пол: {post?.gender === 'male' ? 'Мужской' : 'Женский'}
					</Text>
					<Text
						fontFamily='Intro-Book'
						fontSize='16px'
						color='#444B58'
						margin='0px 0px 11px 0px'
					>
						Цвета: Разноцветный
					</Text>
					<Text
						fontFamily='Intro-Book'
						fontSize='16px'
						color='#444B58'
						margin='0px 0px 11px 0px'
					>
						Состав: Кожа, текстиль, резина
					</Text>
					<Text fontFamily='Intro-Book' fontSize='16px' color='#444B58'>
						Страна: Вьетнам
					</Text>
				</BlockText>
			</BlockText>
		</BlockText>
	);
};

export default Body;
