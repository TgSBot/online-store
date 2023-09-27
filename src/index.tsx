import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import Reset from './global/styles/Reset';
import { setupStore } from './store/Store';

const store = setupStore();

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<>
		<Reset />
		<Provider store={store}>
			<App />
		</Provider>
	</>
);
