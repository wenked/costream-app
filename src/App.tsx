import React from 'react';
import './styles/main.css';
import Players from './components/Players';
import Chats from './components/Chats';

const App: React.FC = () => {
	return (
		<div className='container mx-2 px-2'>
			<div className='flex justify-start content-start items-start flex-row'>
				<Chats />
				<Players />
			</div>
		</div>
	);
};

export default App;
