import React, { FC } from 'react';
import { styled } from 'styled-components';
import Text from '../UI/Text/Text';
import { teamMember } from '../assets/list/Team';
import Img from '../UI/IMG/Img';
import Circle from '../UI/Circle/Circle';

const Wrapper = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	background-color: #484283;
	position: relative;
	overflow: hidden;
`;

const Row = styled.div`
	margin: 60px 0px 60px 0px;
	z-index: 1;
`;

const Posts = styled.div`
	display: flex;
	flex-direction: row;
`;

const Post = styled.div`
	display: flex;
	flex-direction: column;
	margin: 40px 20px 40px 0px;
`;

const Team: FC = () => {
	return (
		<Wrapper>
			<Circle
				width='686px'
				height='686px'
				ground_color='#F14F4F'
				position='absolute'
				left='1370px'
				top='-149px'
			/>
			<Circle
				width='644px'
				height='644px'
				position='absolute'
				ground_color=''
				left='1470px'
				top='-330px'
				border='1px solid rgba(255, 255, 255, 0.50)'
				z_index='0'
			/>
			<Circle
				width='297px'
				height='297px'
				ground_color=''
				border='1px solid rgba(255, 255, 255, 0.50)'
				position='absolute'
				left='1760px'
				top='260px'
				z_index='0'
			/>
			<Row>
				<Text fontFamily='Intro-Bold' fontSize='30px' fontWeight='700'>
					Наша команда
				</Text>
				<Posts>
					{teamMember.map((post, index) =>
						index < 3 ? (
							<Post key={post.id}>
								<Img
									src={post.img}
									alt='Фото Человека'
									width='380px'
									height='400px'
								/>
								<Text
									fontFamily='Intro-Bold'
									fontSize='24px'
									margin='20px 0px 20px 0px'
								>
									{post.title}
								</Text>
								<Text fontFamily='Intro-Book' fontSize='16px'>
									{post.position}
								</Text>
							</Post>
						) : (
							''
						)
					)}
				</Posts>
				<Posts>
					{teamMember.map((post, index) =>
						index >= 3 ? (
							<Post key={post.id}>
								<Img
									src={post.img}
									alt='Фото Человека'
									width='380px'
									height='400px'
								/>
								<Text
									fontFamily='Intro-Bold'
									fontSize='24px'
									margin='20px 0px 20px 0px'
								>
									{post.title}
								</Text>
								<Text fontFamily='Intro-Book' fontSize='16px'>
									{post.position}
								</Text>
							</Post>
						) : (
							''
						)
					)}
				</Posts>
			</Row>
		</Wrapper>
	);
};

export default Team;
