import React, { FC, useState } from 'react';
import { styled } from 'styled-components';
import BlockText from '../../../UI/BlockText/BlockText';

import Img from '../../../UI/IMG/Img';
import Text from '../../../UI/Text/Text';
import InteractivePanel from './InteractivePanel';

interface IPost {
	img: any;
	title: string;
	price: number;
}

const Wrapper = styled.div`
	width: fit-content;
	height: fit-content;
	margin: 0px 20px 20px 0px;
`;

const Row = styled.div`
	width: fit-content;
	height: fit-content;
	display: flex;
`;

const Posts = styled.div``;

const BlockImg = styled(BlockText)`
	border-radius: 4px;
	display: flex;
	flex-direction: column;
`;

const StyledImg = styled(Img)`
	z-index: 0;
`;

const Post: FC<IPost> = ({ img, title, price }) => {
	const [focus, setFocus] = useState(false);

	const onMouseEnterFocus = (event: FocusEvent) => {
		event.preventDefault();
		setFocus(true);
	};

	const onMouseLeaveFocus = (event: FocusEvent) => {
		event.preventDefault();
		setFocus(false);
	};

	return (
		<Wrapper>
			<Row>
				<Posts>
					<BlockImg
						width='280px'
						height='293px'
						position='relative'
						onMouseEnter={onMouseEnterFocus}
						onMouseLeave={onMouseLeaveFocus}
					>
						<StyledImg
							width='max-content'
							height='max-content'
							src={img}
							alt='Кроссовки'
						/>
						{focus === true ? <InteractivePanel /> : ''}
					</BlockImg>
					<BlockText
						width='fit-content'
						height='fit-content'
						flex_direction='column'
					>
						<Text
							fontFamily='Intro-Book'
							fontSize='16px'
							color='#444B58'
							margin='10px 0px 0px 0px'
						>
							{title}
						</Text>
						<Text
							fontFamily='Intro-Regular'
							fontSize='20px'
							color='#444B58'
							margin='10px 0px 0px 0px'
						>
							{`${price} р`}
						</Text>
					</BlockText>
				</Posts>
			</Row>
		</Wrapper>
	);
};

export default Post;
