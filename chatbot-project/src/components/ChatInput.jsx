import { useState } from 'react';
import { Chatbot } from 'supersimpledev';
import './ChatInput.css';

function ChatInput({ chatMessages, setChatMessages }) {
	// Array Destructuring
	// First value [inputText] = Current Data
	// Second value [setInputText] = Updater Function
	const [inputText, setInputText] = useState('');

	// Event to get the value of input
	// Then save it to useState
	function saveInputText(event) {
		//Updater function(inputText)
		const inputText = event.target.value;
		setInputText(inputText);
	}

	function sendMessage() {
		// User messages
		const newChatMessages = [
			...chatMessages,
			{
				// Add chat messages
				message: inputText,
				sender: 'user',
				id: crypto.randomUUID(),
			},
		];

		// Update the chatMessages
		setChatMessages(newChatMessages);

		// Chatbot Response Messages
		const response = Chatbot.getResponse(inputText);
		// Robot response from the user messages
		setChatMessages([
			...newChatMessages,
			{
				// Add chat messages
				message: response,
				sender: 'robot',
				id: crypto.randomUUID(),
			},
		]);

		// Update the input text to blank
		setInputText('');
	}

	return (
		<div className='chat-input-container'>
			<input
				className='chat-input'
				onChange={saveInputText}
				placeholder='Send a message to ChatBot'
				size='30'
				value={inputText} // Insert this to get access from the updater function (setInputText)
			/>
			<button className='send-button' onClick={sendMessage}>
				Send
			</button>
		</div>
	);
}

export default ChatInput;
