import React, { FC } from 'react';
import { styled } from 'styled-components';
import Text from '../UI/Text/Text';
import { teamMember } from '../assets/list/Team';

const Wrapper = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	background-color: #484283;
`;

const Row = styled.div`
	margin: 60px 0px 60px 0px;
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

const IMG = styled.img`
	display: block;
	width: 380px;
	height: 400px;
`;

const Team: FC = () => {
	return (
		<Wrapper>
			<Row>
				<Text fontFamily='Intro-Bold' fontSize='30px' fontWeight='700'>
					Наша команда
				</Text>
				<Posts>
					{teamMember.map((post, index) =>
						index < 3 ? (
							<Post key={post.id}>
								<IMG src={post.img} alt='Фото Человека' />
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
								<IMG src={post.img} alt='Фото Человека' />
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
