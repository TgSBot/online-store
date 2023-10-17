import React from 'react';
import styled from 'styled-components';
import Details from './components/Details';
import { useAppSelector } from '../../hook/redux';
import SelectionTypeShoes from './components/SelectionTypeShoes';
import SelectionSizeShoes from './components/SelectionSizeShoes';
import EndOfSelection from './components/EndOfSelection';

const Wrapper = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Row = styled.div`
	width: fit-content;
	height: fit-content;
	margin: 60px 0px 60px 0px;
`;

const SelectionOfShoes = () => {
	const { page } = useAppSelector((state) => state.IndividualSelectionShoes);
	console.log(page.thisPage);

	return (
		<Wrapper>
			<Row>
				{page.thisPage === 1 ? (
					<SelectionTypeShoes />
				) : page.thisPage === 2 ? (
					<SelectionSizeShoes />
				) : page.thisPage === 3 ? (
					<Details />
				) : (
					<EndOfSelection />
				)}
			</Row>
		</Wrapper>
	);
};

export default SelectionOfShoes;
