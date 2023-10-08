import React from 'react';
import Catalog from '../modules/Catalog/Catalog';

// type PropsWrapper = {
// 	overflow?: string;
// };

// const Wrapper = styled.div<PropsWrapper>`
// 	width: fit-content;
// 	height: fit-content;
// 	display: flex;
// 	justify-content: center;
// 	overflow: ${(props) => props.overflow};
// `;

const HomePage = () => {
	// const { active } = useAppSelector((state) => state.PopUp);
	return (
		<>
			<Catalog />
		</>
	);
};

export default HomePage;
