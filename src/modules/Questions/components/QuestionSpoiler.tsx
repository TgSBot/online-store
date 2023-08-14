import React, { FC, useState } from 'react';
import { styled } from 'styled-components';
import BlockText from '../../../UI/BlockText/BlockText';
import Img from '../../../UI/IMG/Img';
import Text from '../../../UI/Text/Text';
import cross from '../../../assets/svg/unnamed.svg';

type propsRotate = {
	rotate?: string;
};

type propsPosition = {
	top?: string;
}

interface IQuestionSpoiler {
	title: string;
	body: string;
	top?: string;
}

const Wrapper = styled.div<propsPosition>`
	width: 880px;
	height: fit-content;
	border-top: 1px solid black;
	border-bottom: 1px solid black;
	display: flex;
	position: relative;
	top: ${props => props.top};
`;

const Row = styled.div<propsRotate>`
	width: 100%;
	height: fit-content;
	display: flex;
	flex-direction: column;
	margin: ${(props) => props.rotate};
`;

const QuestionSpoiler: FC<IQuestionSpoiler> = ({ title, body, top }) => {
	const [rotate, setRotate] = useState(true);

	const clickRotate = (event: any) => {
		event.preventDefault();
		rotate === false ? setRotate(true) : setRotate(false);
	};

	return (
		<Wrapper top={top}>
			<Row rotate={rotate === true ? '27px 0px 27px 0px' : '27px 0px 0px 0px'}>
				<BlockText
					width='100%'
					height='fit-content'
					justify_content='space-between'
					margin={rotate === false ? '0px 0px 25px 0px' : '0px'}
				>
					<Text fontFamily='Intro-Regular' fontSize='20px' color='black'>
						{title}
					</Text>
					<BlockText
						width='fit-content'
						height='fit-content'
						onClick={(event: any) => clickRotate(event)}
						position={'relative'}
					>
						<Img
							width='25px'
							height='25px'
							src={cross}
							alt=''
							transform={rotate === false ? 'rotate(45deg)' : 'none'}
							transition='0.5s'
						/>
					</BlockText>
				</BlockText>
				<BlockText
					width='800px'
					height='44px'
					display={rotate === true ? 'none' : 'flex'}
					transition='0.5s'
					margin={rotate === false ? '0px 0px 18px 0px' : '0px'}
				>
					<Text
						fontFamily='Intro-Book'
						fontSize='16px'
						color='rgba(36, 36, 36, 0.50)'
						line_height='22.4px'
					>
						{body}
					</Text>
				</BlockText>
			</Row>
		</Wrapper>
	);
};

export default QuestionSpoiler;
