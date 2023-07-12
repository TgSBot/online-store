import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Reset from './global/styles/Reset';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<>
		<Reset />
		<App />
	</>
);
