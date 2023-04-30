import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';

function Chat() {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    const socket = io();
    socket.on('newMessage', (msg) => {
      setMessages((prevMessages) => [...prevMessages, msg]);
      window.scrollTo(0, document.body.scrollHeight);
    });
    return () => {
      socket.disconnect();
    };
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (inputValue) {
      const socket = io();
      socket.emit('createMessage', inputValue);
      setInputValue('');
      socket.disconnect();
    }
  };

  return (
    <div>
      <ul id="messages">
        {messages.map((msg, index) => (
          <li key={index}>{msg}</li>
        ))}
      </ul>
      <form id="form" onSubmit={handleFormSubmit}>
        <input
          id="input"
          autoComplete="off"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button>Send</button>
      </form>
    </div>
  );
}

export default Chat;
