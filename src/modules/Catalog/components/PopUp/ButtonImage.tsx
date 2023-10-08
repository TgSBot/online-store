import React, { FC } from 'react';
import { useAppDispatch } from '../../../../hook/redux';
import { IPosts } from '../../../../store/reducers/AllPosts';
import { slicePopUp } from '../../../../store/reducers/PopUp';
import Button from '../../../../UI/Button/Button';
import Img from '../../../../UI/IMG/Img';
import shoes from '../../../../assets/img/image.jpg';

interface IButtonImage {
	post: IPosts | undefined;
	// indexImage: string;
	margin?: string;
}

const ButtonImage: FC<IButtonImage> = ({ post, margin }) => {
	// Redux
	// const { image } = useAppSelector((state) => state.PopUp);
	const { changeImage } = slicePopUp.actions;
	const dispatch = useAppDispatch();

	// Функция для передачи изображение на главное фото
	const changeImageButton = (): void => {
		dispatch(changeImage(shoes));
	};

	return (
		<Button
			width='70px'
			height='75px'
			onClick={changeImageButton}
			margin={margin}
			border_radius='4px'
		>
			<Img src={shoes} alt={'image'} width={'100%'} height={'100%'} />
		</Button>
	);
};

export default ButtonImage;
