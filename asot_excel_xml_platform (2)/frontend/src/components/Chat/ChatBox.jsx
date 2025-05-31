// src/components/Chat/ChatBox.jsx
import { useState } from 'react';
import './chatbox.css';

export default function ChatBox({ onSend }) {
  const [input, setInput] = useState('');
  return (
    <div className="chatbox">
      <input
        type="text"
        placeholder="How can I help you today?"
        value={input}
        onChange={e => setInput(e.target.value)}
        onKeyDown={e => e.key === 'Enter' && onSend(input)}
      />
      <button onClick={() => onSend(input)}>Send</button>
    </div>
  );
}
