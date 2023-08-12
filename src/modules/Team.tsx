import React, { FC } from 'react';
import { styled } from 'styled-components';
import Text from '../UI/Text/Text';
import { teamMember } from '../assets/list/Team';
import Img from '../UI/IMG/Img';
// import Circle from '../UI/Circle/Circle';

type AbsoluteBlockStyle = {
	width: string;
	height: string;
	top: string;
	right: string;
};

const Wrapper = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	background-color: #484283;
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

// const AbsoluteBlock = styled.div<AbsoluteBlockStyle>`
// 	display: block;
// 	position: absolute;
// 	overflow: hidden;
// 	right: ${(props) => props.right};
// 	top: ${(props) => props.top};
// 	height: ${(props) => props.height};
// 	width: ${(props) => props.width};
// `;

const Team: FC = () => {
	return (
		<Wrapper>
			{/* <AbsoluteBlock right='-350px' top='-150px' height='686px' width='686px'>
				<Circle
					width='686px'
					height='686px'
					ground_color='#F14F4F'
					position='absolute'
				/>
			</AbsoluteBlock>
			<AbsoluteBlock right='-400px' top='-350px' height='644px' width='644px'>
				<Circle
					width='644px'
					height='644px'
					ground_color=''
					position='absolute'
					outline='1px solid rgba(255, 255, 255, 0.50)'
				/>
			</AbsoluteBlock>
			<AbsoluteBlock right='-240px' top='210px' height='297px' width='297px'>
				<Circle
					width='297px'
					height='297px'
					ground_color=''
					position='absolute'
					outline='1px solid rgba(255, 255, 255, 0.50)'
				/>
			</AbsoluteBlock> */}
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
