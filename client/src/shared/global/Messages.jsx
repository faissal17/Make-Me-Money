import React from 'react';
import { FaComment } from 'react-icons/fa';

function Messages({ isOpen, toggleMessages }) {
  return (
    <div className="messages-container">
      <button className="chat-icon" onClick={toggleMessages}>
        <FaComment />
      </button>
      {isOpen && (
        <div className="messages">
          <p>This is a message</p>
          <p>This is another message</p>
        </div>
      )}
    </div>
  );
}

export default Messages;
