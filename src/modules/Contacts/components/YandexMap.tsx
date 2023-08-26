import React from 'react';
import { YMaps, Map } from 'react-yandex-maps';
import BlockText from '../../../UI/BlockText/BlockText';

const YandexMap = () => {
	return (
		<BlockText width='680px' height='498px' z_index='0'>
			<YMaps>
				<Map
					defaultState={{ center: [59.929511, 30.362192], zoom: 12 }}
					width='680px'
					height='498px'
				/>
			</YMaps>
		</BlockText>
	);
};

export default YandexMap;
