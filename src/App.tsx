import React from 'react';
import './styles/main.css';
import Players from './components/Players';
import Chats from './components/Chats';

const App: React.FC = () => {
	return (
		<div className='flex m-4 p-4'>
			<div className='grid gap-2 grid-cols-3 p-2 '>
				<Chats />
				<Players />
			</div>
		</div>
	);
};

export default App;
