import { useRef, useEffect } from 'react';
import ChatMessage from './ChatMessage'; // Vite adds .jsx or .js automatically
import './ChatMessages.css';

// Render chat messages logic
// Generate the HTML
function ChatMessages({ chatMessages }) {
	// Container that save html inside of it
	const chatMessagesRef = useRef(null);

	// Run some code when component is updated and changed
	useEffect(() => {
		// Current Chat Messages
		const containerElem = chatMessagesRef.current;
		// If containerElem or chatMessages exist
		if (containerElem) {
			// Auto scroll after sending chat
			containerElem.scrollTop = containerElem.scrollHeight;
		}
	}, [chatMessages]); // Run code whenever chatMessages is updated

	return (
		<div className='chat-messages-container' ref={chatMessagesRef}>
			{chatMessages.map((chatMessage) => {
				return (
					<ChatMessage
						message={chatMessage.message}
						sender={chatMessage.sender}
						key={chatMessage.id}
					/>
				);
			})}
		</div>
	);
}

export default ChatMessages;
