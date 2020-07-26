import React from 'react';
import ReactPlayer from 'react-player';
import { Button } from '@material-ui/core';

const Players: React.FC = () => {
	const [youtubeWidth, setYoutubeWidth] = React.useState('900px');

	return (
		<div>
			<div className='text-gray-100'>
				<h4 className='font-bold'>Tamanho da tela do youtube</h4>
				<div className='inline-flex'>
					<div className='m-2 px-2'>
						<Button
							variant='contained'
							onClick={() => setYoutubeWidth('640px')}>
							640px
						</Button>
					</div>
					<div className='m-2 px-2'>
						<Button
							variant='contained'
							onClick={() => setYoutubeWidth('900px')}>
							900px
						</Button>
					</div>
					<div className='m-2 px-2'>
						<Button
							variant='contained'
							onClick={() => setYoutubeWidth('1080px')}>
							1080px
						</Button>
					</div>
				</div>
			</div>
			<div className='px-2'>
				<ReactPlayer
					playing
					url='https://www.youtube.com/watch?v=qbMTpwgpZ0E'
					width={youtubeWidth}
					height='600px'
					config={{
						youtube: {
							playerVars: { controls: 1 },
						},
					}}
				/>
				<ReactPlayer
					style={{ position: 'relative' }}
					width='300px'
					height='250px'
					pip
					playing
					url='https://www.twitch.tv/baiano'
				/>
			</div>
		</div>
	);
};

export default Players;
