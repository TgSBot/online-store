import React from 'react';
import { styled } from 'styled-components';
import Text from '../UI/Text/Text';
import BlockText from '../UI/BlockText/BlockText';
import Img from '../UI/IMG/Img';
import sneak from '../assets/img/pexels-budgeron-bach-51588252-sneakers.png';
import Circle from '../UI/Circle/Circle';

const Wrapper = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	background-color: #484283;
	justify-content: center;
	position: relative;
`;

const Row = styled.div`
	width: 1180px;
	height: fit-content;
	display: flex;
	flex-direction: row;
	align-items: center;
	position: relative;
	overflow: hidden;
`;

const Title = styled.div`
	display: flex;
	flex-direction: column;
`;

const About = styled.div`
	display: flex;
	justify-content: flex-end;
	width: 100%;
	height: 24px;
`;

const TextBefore = styled.div`
	display: inline-block;
	position: relative;
	height: 24px;
	left: 70px;
	&:before {
		content: '';
		border-bottom: 3px solid white;
		background-image: url('../assets/img/line-6.jpg');
		width: 30px;
		height: 3px
		display: block;
		position: absolute;
		top: 12px;
		left: -50px;
	}
`;

const AboutUs = () => {
	return (
		<Wrapper>
			<Circle
				width='644px'
				height='644px'
				border='1px solid rgba(255, 255, 255, 0.50)'
				ground_color=''
				position='absolute'
				left='-360px'
				top='-200px'
			/>
			<BlockText
				width='fit-content'
				height='fit-content'
				position='absolute'
				top='-190px'
				left='210px'
			>
				<Circle
					width='297px'
					height='297px'
					border='1px solid rgba(255, 255, 255, 0.50)'
					ground_color=''
				/>
				<Circle
					width='15px'
					height='15px'
					ground_color='#F14F4F'
					position='absolute'
					top='240px'
					left='252px'
					border='1px solid #F14F4F'
				/>
			</BlockText>
			<Row>
				<Title>
					<BlockText
						width='fit-content'
						height='fit-content'
						align_items='normal'
					>
						<Text
							fontFamily='Intro-Bold'
							fontSize='30px'
							fontWeight='700'
							margin='0px 0px 20px 0px'
							text_align=''
						>
							Пара слов о нас
						</Text>
					</BlockText>
					<BlockText width='380px' height='130px'>
						<Text
							fontFamily='Intro-Book'
							fontSize='16px'
							line_height='22.4px'
							margin='0px 0px 20px 0px'
						>
							Спорт держит нас в форме. Учит дисциплине. Объединяет нас. Через
							спорт мы можем менять жизни. В том числе с помощью воодушевляющих
							историй спортсменов. Чтобы помочь тебе подняться и двигаться
							вперед.
						</Text>
					</BlockText>
					<About>
						<TextBefore>
							<Text fontFamily='Intro-Bold' fontSize='20px' fontWeight='700'>
								SneakMax
							</Text>
						</TextBefore>
					</About>
				</Title>
				<Img
					src={sneak}
					alt={'Кроссовки'}
					width='870px'
					height='588px'
					position='relative'
					clip_path='polygon(45% 0, 100% 0%, 74% 100%, 13% 100%)'
				/>
			</Row>
		</Wrapper>
	);
};

export default AboutUs;
