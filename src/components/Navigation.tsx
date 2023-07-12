import React, { FC, PropsWithChildren } from 'react';
import { styled } from 'styled-components';

const NavigationStyle = styled.nav`
	width: fit-content;
	height: fit-content;
	display: flex;
	flex-diraction: row;
	align-items: end;
`;

const Navigation: FC<PropsWithChildren> = ({ children }) => {
	return <NavigationStyle>{children}</NavigationStyle>;
};

export default Navigation;
