import React from 'react';
import EndOfSelection from '../modules/SelectionOfShoes/components/EndOfSelection';

// import SelectionOfShoes from '../modules/SelectionOfShoes/SelectionOfShoes';
// import { useAppSelector } from '../hook/redux';
// import Catalog from '../modules/Catalog/Catalog';
// import PopUpPost from '../modules/Catalog/components/PopUpPost';
// import BasketPopUp from '../modules/Header/components/PopUp/BasketPopUp';
// import OrderRegistration from '../modules/Header/components/PopUp/OrderRegistration';
// import Header from '../modules/Header/Header';

const HomePage = () => {
	// const { active } = useAppSelector((state) => state.PopUp);

	return (
		<>
			{/* <PopUpPost display={active ? true : false} />
			<BasketPopUp />
			<OrderRegistration />
			<Header />
			<Catalog /> */}
			<EndOfSelection />
		</>
	);
};

export default HomePage;
