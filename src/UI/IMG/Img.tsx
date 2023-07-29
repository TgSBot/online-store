import React, { FC, PropsWithChildren } from 'react';
import { styled } from 'styled-components';

interface IImg extends PropsWithChildren, imgStyle {
	src: any;
	alt: any;
}

type imgStyle = {
	width: string;
	height: string;
	border_radius?: string;
};

const IMG = styled.img<imgStyle>`
	width: ${(props) => props.width};
	height: ${(props) => props.height};
	border-radius: ${(props) => props.border_radius};
`;

const Img: FC<IImg> = ({ src, alt, ...props }) => {
	return <IMG src={src} alt={alt} {...props} />;
};

export default Img;
