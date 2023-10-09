import React from 'react';
import { useAppSelector } from '../hook/redux';
import Catalog from '../modules/Catalog/Catalog';
import PopUpPost from '../modules/Catalog/components/PopUpPost';
import BasketPopUp from '../modules/Header/components/PopUp/BasketPopUp';
import Header from '../modules/Header/Header';

const HomePage = () => {
	const { active } = useAppSelector((state) => state.PopUp);

	return (
		<>
			<PopUpPost display={active ? true : false} />
			<BasketPopUp />
			<Header />
			<Catalog />
		</>
	);
};

export default HomePage;
