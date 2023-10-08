import React from 'react';
import { useAppSelector } from '../../../../hook/redux';
import BlockText from '../../../../UI/BlockText/BlockText';
import Img from '../../../../UI/IMG/Img';
import shoes from '../../../../assets/img/image.jpg';
import ButtonImage from './ButtonImage';

const PopUpImages = () => {
	const { post } = useAppSelector((state) => state.PopUp);
	return (
		<BlockText width='fit-content' height='fit-content' flex_direction='column'>
			<Img src={shoes} alt='Главное фото' width='520px' height='462px' />
			<BlockText width='fit-content' height='fit-content'>
				<ButtonImage post={post} margin='20px 20px 0px 0px' />
				<ButtonImage post={post} margin='20px 20px 0px 0px' />
				<ButtonImage post={post} margin='20px 20px 0px 0px' />
				<ButtonImage post={post} margin='20px 20px 0px 0px' />
				<ButtonImage post={post} margin='20px 20px 0px 0px' />
				<ButtonImage post={post} margin='20px 0px 0px 0px' />
			</BlockText>
		</BlockText>
	);
};

export default PopUpImages;
