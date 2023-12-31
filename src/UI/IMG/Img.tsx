import React, { FC, PropsWithChildren } from 'react';
import { styled } from 'styled-components';

interface IImg extends PropsWithChildren, imgStyle {
	src: any;
	alt: any;
	onChange?: string;
}

type imgStyle = {
	width: string;
	height: string;
	margin?: string;
	position?: string;
	top?: string;
	right?: string;
	bottom?: string;
	left?: string;
	clip_path?: string;
	transform?: string;
	onChange?: string;
	transition?: string;
	fill?: string;
};

const IMG = styled.img<imgStyle>`
	width: ${(props) => props.width};
	height: ${(props) => props.height};
	position: ${(props) => props.position || 'static'};
	right: ${(props) => props.right || '0px'};
	top: ${(props) => props.top || '0px'};
	bottom: ${(props) => props.bottom || '0px'};
	left: ${(props) => props.left || '0px'};
	margin: ${(props) => props.margin || '0px'};
	clip-path: ${(props) => props.clip_path || 'none'};
	transform: ${(props) => props.transform || 'none'};
	transition: ${(props) => props.transition || 'none'};
	fill: ${(props) => props.fill};
`;

const Img: FC<IImg> = ({ src, alt, onChange, ...props }) => {
	return <IMG src={src} onChange={onChange} alt={alt} {...props} />;
};

export default Img;
