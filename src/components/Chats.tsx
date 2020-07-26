import React from 'react';
import '../styles/main.css';
import Button from '@material-ui/core/button';

const Chats: React.FC = () => {
	const [showChatStreamer, setShowChatStreamer] = React.useState(true);
	const [showChatRiot, setShowChatRiot] = React.useState(true);

	return (
		<div>
			<div className='inline-flex'>
				<div className='p-2 m-2'>
					<Button
						variant='contained'
						onClick={() => setShowChatStreamer(!showChatStreamer)}>
						{showChatStreamer ? 'Hide chat Streamer' : 'Show chat Streamer'}
					</Button>
				</div>
				<div className='p-2 m-2'>
					<Button
						variant='contained'
						onClick={() => setShowChatRiot(!showChatRiot)}>
						{showChatRiot ? 'Hide chat Riot' : 'Show chat Riot'}
					</Button>
				</div>
			</div>
			<div className='inline-flex'>
				{showChatRiot && (
					<div>
						<h5 className='text-gray-100'>Chat RiotCBLOL</h5>
						<iframe
							title='chat-baiano'
							scrolling='yes'
							id='riotgamesbrazil'
							src='https://www.twitch.tv/embed/riotgamesbrazil/chat?parent=costream.netlify.app'
							height='700'
							width='300'></iframe>
					</div>
				)}
				{showChatStreamer && (
					<div>
						<h5 className='text-gray-100'>Chat Streamer</h5>
						<iframe
							title='chat-baiano'
							scrolling='yes'
							id='baiano'
							src='https://www.twitch.tv/embed/baiano/chat?parent=costream.netlify.app'
							height='700'
							width='300'></iframe>
					</div>
				)}
			</div>
			)
		</div>
	);
};

export default Chats;
