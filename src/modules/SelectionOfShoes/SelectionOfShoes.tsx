import React from 'react';
import styled from 'styled-components';
import SelectionTypeShoes from './components/SelectionTypeShoes';

const Wrapper = styled.div`
	width: fit-content;
	height: fit-content;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const SelectionOfShoes = () => {
	return (
		<Wrapper>
			<SelectionTypeShoes />
		</Wrapper>
	);
};

export default SelectionOfShoes;
