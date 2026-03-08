import RobotProfileImage from '../assets/robot.png';
import UserProfileImage from '../assets/user.png';
import './ChatMessage.css';
// Render chat messages
function ChatMessage({ message, sender }) {
	return (
		<div
			// Ternary operator (if the sender === user, className = 'chat-message-user', else robot className = 'chat-message-robot' )
			className={sender === 'user' ? 'chat-message-user' : 'chat-message-robot'}
		>
			{sender === 'robot' && (
				<img className='chat-message-profile' src={RobotProfileImage} />
			)}
			<div className='chat-message-text'>{message}</div>

			{sender === 'user' && (
				<img className='chat-message-profile' src={UserProfileImage} />
			)}
		</div>
	);
}
export default ChatMessage;
