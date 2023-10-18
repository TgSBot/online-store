import React from 'react';
import Form from './components/Form';
import { styled } from 'styled-components';
import Img from '../../UI/IMG/Img';
import flowers from '../../assets/img/rectangle-37.jpg';
import firework from '../../assets/img/rectangle-39.jpg';
import dog from '../../assets/img/rectangle-38.jpg';
import eat from '../../assets/img/rectangle-40.jpg';
import busStop from '../../assets/img/rectangle-41.jpg';
import instagram from '../../assets/img/px-instagram-logo-1.jpg';
import BlockText from '../../UI/BlockText/BlockText';

type PropsPhoto = {
	margin?: string;
};

const Wrapper = styled.div`
	width: 100%;
	height: 555px;
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
	z-index: 1;
	background-color: white;
`;

const Row = styled.div`
	width: fit-content;
	height: fit-content;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
`;

const Instagram = styled.div`
	width: fit-content;
	height: fit-content;
	display: flex;
	flex-direction: column;
	margin: 0px 0px 0px 60px;
	justify-content: center;
`;

const BlockPhoto = styled.div<PropsPhoto>`
	width: fit-content;
	height: fit-content;
	display: flex;
	flex-direction: row;
	margin: ${(props) => props.margin || '0px'};
`;

const Photo = styled.div<PropsPhoto>`
	display: flex;
	flex-direction: column;
	margin: ${(props) => props.margin || '0px'};
`;

const ConnectUs = () => {
	return (
		<Wrapper id='connectUs'>
			<Row>
				<Form />
				<Instagram>
					<BlockText
						width='100%'
						height='100%'
						justify_content='center'
						margin='0px 0px 22px 0px'
					>
						<Img
							src={instagram}
							alt={'Instagram'}
							width='157px'
							height='55.64927px'
						/>
					</BlockText>
					<BlockPhoto>
						<Photo margin='0px 18px 0px 0px'>
							<Img
								src={flowers}
								alt={'Цветы'}
								width='157px'
								height='161px'
								margin='0px 0px 15px 0px'
							/>
							<Img
								src={firework}
								alt={'Фейерверки'}
								width='157px'
								height='161px'
							/>
						</Photo>
						<Img src={dog} alt={'Собака'} width='330px' height='336.9px' />
						<Photo margin='0px 0px 0px 18px'>
							<Img
								src={eat}
								alt={'Мужчина готовит еду'}
								width='157px'
								height='161px'
								margin='0px 0px 14.91px'
							/>
							<Img
								src={busStop}
								alt={'Остановка'}
								width='157px'
								height='161px'
							/>
						</Photo>
					</BlockPhoto>
				</Instagram>
			</Row>
		</Wrapper>
	);
};

export default ConnectUs;
