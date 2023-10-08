import Slider, { CustomArrowProps } from 'react-slick';
import { styled } from 'styled-components';
import Button from '../../../../UI/Button/Button';
import 'slick-carousel/slick/slick.css';
import { useAppSelector } from '../../../../hook/redux';
import Text from '../../../../UI/Text/Text';

type PropsButtonSLider = {
	opacity?: string;
};

const ButtonSlider = styled(Button)<PropsButtonSLider>`
	border: 1px solid var(--gray, #b2b5bb);
	border-radius: 4px;
	opacity: ${(props) => props.opacity};
`;

const Wrapper = styled.div`
	width: 430px;
	height: 32px;
`;

const ArrowStyled = styled.button`
	display: none;
`;

const SliderSizeShoes = () => {
	const { post } = useAppSelector((state) => state.PopUp);

	const Arrow = ({ currentSlide, slideCount, ...props }: CustomArrowProps) => (
		<ArrowStyled {...props} />
	);

	const settings = {
		infinity: false,
		slidesToShow: 5,
		focusOnSelect: true,
		prevArrow: <Arrow />,
		nextArrow: <Arrow />,
	};

	return (
		<Wrapper>
			<Slider {...settings}>
				<ButtonSlider
					width='70px'
					height='32px'
					opacity={post?.sizeShoes === 36 ? '1' : '0.5'}
				>
					<Text fontFamily='Intro-Book' fontSize='14px' color='#444B58'>
						36
					</Text>
				</ButtonSlider>
				<ButtonSlider
					width='70px'
					height='32px'
					opacity={post?.sizeShoes === 37 ? '1' : '0.5'}
				>
					<Text fontFamily='Intro-Book' fontSize='14px' color='#444B58'>
						37
					</Text>
				</ButtonSlider>
				<ButtonSlider
					width='70px'
					height='32px'
					opacity={post?.sizeShoes === 38 ? '1' : '0.5'}
				>
					<Text fontFamily='Intro-Book' fontSize='14px' color='#444B58'>
						38
					</Text>
				</ButtonSlider>
				<ButtonSlider
					width='70px'
					height='32px'
					opacity={post?.sizeShoes === 39 ? '1' : '0.5'}
				>
					<Text fontFamily='Intro-Book' fontSize='14px' color='#444B58'>
						39
					</Text>
				</ButtonSlider>
				<ButtonSlider
					width='70px'
					height='32px'
					opacity={post?.sizeShoes === 40 ? '1' : '0.5'}
				>
					<Text fontFamily='Intro-Book' fontSize='14px' color='#444B58'>
						40
					</Text>
				</ButtonSlider>
				<ButtonSlider
					width='70px'
					height='32px'
					opacity={post?.sizeShoes === 41 ? '1' : '0.5'}
				>
					<Text fontFamily='Intro-Book' fontSize='14px' color='#444B58'>
						41
					</Text>
				</ButtonSlider>
				<ButtonSlider
					width='70px'
					height='32px'
					opacity={post?.sizeShoes === 42 ? '1' : '0.5'}
				>
					<Text fontFamily='Intro-Book' fontSize='14px' color='#444B58'>
						42
					</Text>
				</ButtonSlider>
				<ButtonSlider
					width='70px'
					height='32px'
					opacity={post?.sizeShoes === 43 ? '1' : '0.5'}
				>
					<Text fontFamily='Intro-Book' fontSize='14px' color='#444B58'>
						43
					</Text>
				</ButtonSlider>
			</Slider>
		</Wrapper>
	);
};

export default SliderSizeShoes;
