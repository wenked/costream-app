import React from 'react';
import ReactPlayer from 'react-player';
import { Button } from '@material-ui/core';

const Players: React.FC = () => {
	const [youtubeWidth, setYoutubeWidth] = React.useState<string>('900px');
	const [youtubeHeight, setYoutubeHeight] = React.useState<string>('768px');

	return (
		<div>
			<div className='text-gray-100'>
				<h4 className='text-lg'>Tamanho da tela do youtube</h4>
				<div className='inline-flex'>
					<div className='m-2 px-2'>
						<Button
							variant='contained'
							onClick={() => {
								setYoutubeHeight('480px');
								setYoutubeWidth('640px');
							}}>
							640px
						</Button>
					</div>
					<div className='m-2 px-2'>
						<Button
							variant='contained'
							onClick={() => {
								setYoutubeHeight('720px');
								setYoutubeWidth('900px');
							}}>
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
					<div className='m-2 px-2'>
						<Button
							variant='contained'
							onClick={() => setYoutubeWidth('1280px')}>
							1280px
						</Button>
					</div>
				</div>
			</div>
			<div className='px-2'>
				<ReactPlayer
					url='https://www.youtube.com/watch?v=DcxpvJb6wZo'
					width={youtubeWidth}
					height={youtubeHeight}
					config={{
						youtube: {
							playerVars: { controls: 1 },
						},
					}}
				/>

				<div className='absolute bottom-0 right-0'>
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
		</div>
	);
};

export default Players;
