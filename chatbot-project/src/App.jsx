import { useState } from 'react';
import ChatInput from './components/ChatInput'; // Vite adds .jsx or .js automatically
import './App.css';
import ChatMessages from './components/ChatMessages'; // Vite adds .jsx or .js automatically

function App() {
	// Array Destructuring
	// Save the data using useState
	// First value [chatMessages] = Current Data
	// Second value [setChatMessages] = Updater Function
	const [chatMessages, setChatMessages] = useState([
		{
			message: 'hello chatbot',
			sender: 'user',
			id: crypto.randomUUID(), // Generate random ID
		},
		{
			message: 'Hello! How can I help you?',
			sender: 'robot',
			id: crypto.randomUUID(), // Generate random ID
		},
		{
			message: 'send me todays date',
			sender: 'user',
			id: crypto.randomUUID(), // Generate random ID
		},
		{
			message: 'Today is March 1',
			sender: 'robot',
			id: crypto.randomUUID(), // Generate random ID
		},
	]);

	return (
		<div className='app-container'>
			<ChatMessages chatMessages={chatMessages} />

			<ChatInput
				chatMessages={chatMessages}
				setChatMessages={setChatMessages}
			/>
		</div>
	);
}

export default App;
