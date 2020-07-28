import React from 'react';
import '../styles/main.css';
import Switch from 'react-switch';

const Chats: React.FC = () => {
	const [showChatStreamer, setShowChatStreamer] = React.useState(true);
	const [showChatRiot, setShowChatRiot] = React.useState(true);

	return (
		<div>
			<div className='inline-flex'>
				<div className='p-2 m-2'>
					{showChatStreamer ? (
						<h5 className='text-gray-100'>Hide chat Streamer</h5>
					) : (
						<h5 className='text-gray-100'>Show chat Streamer</h5>
					)}
					<Switch
						onChange={() => setShowChatStreamer(!showChatStreamer)}
						checked={showChatStreamer}
						onColor='#B1E5F2'
						offColor='#A6A6A8'
					/>
				</div>
				<div className='p-2 m-2'>
					{showChatRiot ? (
						<h5 className='text-gray-100'>Hide chat Riot</h5>
					) : (
						<h5 className='text-gray-100'>Show chat Riot</h5>
					)}
					<Switch
						onChange={() => setShowChatRiot(!showChatRiot)}
						checked={showChatRiot}
						onColor='#B1E5F2'
						offColor='#A6A6A8'
					/>
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
