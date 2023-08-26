import React, { useState } from 'react';
import { styled } from 'styled-components';
import PopUp from '../../../components/PopUp';
import BlockText from '../../../UI/BlockText/BlockText';
import Text from '../../../UI/Text/Text';
import tooltip from '../../../assets/img/Tooltip.png';

const HoverImg = styled.img`
	width: 20px;
	height: 20px;
`;

const MainOffice = () => {
	const [focus, setFocus] = useState(false);
	const blockFocus = (event: React.MouseEvent<HTMLImageElement>): void => {
		event.preventDefault();
		setFocus(true);
	};

	const blockBlurFocus = (event: React.MouseEvent<HTMLImageElement>): void => {
		event.preventDefault();
		setFocus(false);
	};
	return (
		<BlockText
			width='fit-content'
			height='fit-content'
			margin='0px 0px 40px 0px'
		>
			<Text
				fontFamily='Intro-Book'
				fontSize='14px'
				line_height='19.6px'
				letter_spacing='1.12px'
				text_transform='uppercase'
				color='#B2B5BB'
				margin='0px 10px 0px 0px'
			>
				Главный офис
			</Text>
			<HoverImg
				src={tooltip}
				alt=''
				onMouseEnter={blockFocus}
				onMouseLeave={blockBlurFocus}
			/>
			<PopUp
				explanation={true}
				top={'67px'}
				left={'469px'}
				animation={
					focus === true
						? 'appearance 0.2s ease 1 normal running 0s both'
						: 'none'
				}
			>
				Адрес и телефон для корреспонденции, инвесторов. Вопросы о доставке,
				качестве обслуживания и товара просьба задавать в отдел продаж
			</PopUp>
		</BlockText>
	);
};

export default MainOffice;
