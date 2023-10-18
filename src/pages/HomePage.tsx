import React from 'react';
import SelectionOfShoes from '../modules/SelectionOfShoes/SelectionOfShoes';
import Catalog from '../modules/Catalog/Catalog';
import PopUpPost from '../modules/Catalog/components/PopUpPost';
import BasketPopUp from '../modules/Header/components/PopUp/BasketPopUp';
import OrderRegistration from '../modules/Header/components/PopUp/OrderRegistration';
import Header from '../modules/Header/Header';
import AboutUs from '../modules/AboutUs';
import Team from '../modules/Team';
import Questions from '../modules/Questions/Questions';
import ConnectUs from '../modules/ConnectUs/ConnectUs';
import Contacts from '../modules/Contacts/Contacts';
import Footer from '../modules/Footer';

const HomePage = () => {
	return (
		<>
			<BasketPopUp />
			<PopUpPost />
			<OrderRegistration />
			<Header />
			<Catalog />
			<AboutUs />
			<SelectionOfShoes />
			<Team />
			<Questions />
			<Contacts />
			<ConnectUs />
			<Footer />
		</>
	);
};

export default HomePage;
