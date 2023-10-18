import React, { FC } from 'react';
import { styled } from 'styled-components';
import BlockText from '../../UI/BlockText/BlockText';
import Text from '../../UI/Text/Text';
import Img from '../../UI/IMG/Img';
import vk from '../../assets/svg/vk.svg';
import instagram from '../../assets/svg/instagram.svg';
import YandexMap from './components/YandexMap';
import MainOffice from './components/MainOffice';

const Wrapper = styled.div`
	width: 100%;
	height: 618px;
	background-color: #f3f6f6;
	display: flex;
	justify-content: center;
	z-index: 0;
`;

const Row = styled.div`
	width: fit-content;
	height: fit-content;
	display: flex;
	flex-direction: row;
	margin: 60px 0px 60px 0px;
`;

const Title = styled.div`
	display: flex;
	flex-direction: column;
	margin: 0px 200px 0px 0px;
`;

const Contacts: FC = () => {
	return (
		<Wrapper id='contacts'>
			<Row>
				<Title>
					<BlockText
						width='fit-content'
						height='fit-content'
						margin='0px 0px 60px 0px'
					>
						<Text
							fontFamily='Intro-Bold'
							fontSize='30px'
							fontWeight='700'
							color='#444B58'
						>
							Контакты
						</Text>
					</BlockText>
					<MainOffice />
					<BlockText
						width='fit-content'
						height='fit-content'
						flex_direction='column'
						margin='0px 0px 40px 0px'
					>
						<Text
							fontFamily='Intro-Regular'
							fontSize='30px'
							line_height='42px'
							color='#444B58'
							margin='0px 0px 10px 0px'
						>
							+7 800 789 89 89
						</Text>
						<Text
							fontFamily='Intro-Book'
							fontSize='18px'
							line_height='25.2px'
							color='#444B58'
						>
							г. Санкт-Петербург, Комсомольская, 43 к1
						</Text>
					</BlockText>
					<BlockText
						width='fit-content'
						height='fit-content'
						flex_direction='column'
						margin='0px 0px 40px 0px'
						z_index='0'
					>
						<Text
							fontFamily='Intro-Book'
							fontSize='14px'
							line_height='19.6px'
							letter_spacing='1.12px'
							text_transform='uppercase'
							color='#B2B5BB'
							margin='0px 0px 20px 0px'
						>
							отдел продаж
						</Text>
						<Text
							fontFamily='Intro-Regular'
							fontSize='30px'
							line_height='42px'
							color='#444B58'
							margin='0px 0px 10px 0px'
						>
							+7 800 789 89 89
						</Text>
						<Text
							fontFamily='Intro-Book'
							fontSize='18px'
							line_height='25.2px'
							color='#444B58'
						>
							г. Санкт-Петербург, Комсомольская, 43 к1
						</Text>
					</BlockText>
					<BlockText width='fit-content' height='fit-content'>
						<a href='!#'>
							<Img
								src={vk}
								alt=''
								width='44px'
								height='44px'
								margin='0px 20px 0px 0px'
							/>
						</a>
						<a href='!#'>
							<Img src={instagram} alt='' width='44px' height='44px' />
						</a>
					</BlockText>
				</Title>
				<YandexMap />
			</Row>
		</Wrapper>
	);
};

export default Contacts;
