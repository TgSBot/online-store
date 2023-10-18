import React, { FC } from 'react';
import { styled } from 'styled-components';
import Navbar from './components/Navbar';
import Text from '../../UI/Text/Text';
import Button from '../../UI/Button/Button';
import BlockText from '../../UI/BlockText/BlockText';

const Wrapper = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	background-color: #484283;
	justify-content: center;
`;

const Row = styled.div`
	width: fit-content;
	height: 100%;
	display: flex;
	flex-direction: column;
	margin: 20px 0px 100px 0px;
	z-index: 1;
`;

const TransparentInscription = styled.div`
	position: absolute;
	top: 250px;
	right: 415px;
	z-index: 0;
	width: 980px;
	height: 200px;
`;

const Header: FC = () => {
	return (
		<Wrapper id='header'>
			<TransparentInscription>
				<Text
					fontFamily='Intro-Bold'
					fontSize='196px'
					fontWeight='700'
					color='rgba(255, 255, 255, 0.12)'
				>
					SneakMax
				</Text>
			</TransparentInscription>
			<Row>
				<Navbar />
				<BlockText width='580px' height='100px' margin='100px 0px 20px 0px'>
					<Text fontFamily='Intro-Regular' fontSize='36px' line_height='50.4px'>
						Кроссовки известных брендов с доставкой по России и СНГ
					</Text>
				</BlockText>
				<BlockText width='480px' height='44px' margin='0px 0px 40px 0px'>
					<Text fontFamily='Intro-Book' fontSize='16px' line_height='22.4px'>
						Мы продаем кроссовки брендов Nike, Adidas, Puma, Reebok, Converse и
						многие другие по низким ценам
					</Text>
				</BlockText>
				<a href='#catalog'>
					<Button
						ground_color='#F14F4F'
						width='250px'
						height='60px'
						border_radius='4px'
					>
						<Text fontFamily='Intro-Regular' fontSize='16px' color='white'>
							Перейти к покупкам
						</Text>
					</Button>
				</a>
			</Row>
		</Wrapper>
	);
};

export default Header;
