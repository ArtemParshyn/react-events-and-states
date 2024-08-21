import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { addMessage, setMessages } from '../features/chatSlice';

function checking(setMessage, e){
  if (e.target.value !== ""){
    setMessage(e.target.value)
  }

}

function ChatPage() {
  const [message, setMessage] = useState('');
  const dispatch = useDispatch();
  const messages = useSelector((state) => state.chat.messages);
  const token = useSelector((state) => state.auth.token);

  useEffect(() => {
    const fetchMessages = async () => {
      try {

        const response = await axios.get('http://localhost:4000/chats', {
          headers: { Authorization: `Bearer ${token}` },
        });
        dispatch(setMessages(response.data));
      } catch (error) {
        console.error('Fetch messages error', error);
      }
    };

    fetchMessages();
  }, [dispatch, token]);

  const handleSend = async () => {

    try {
      if (message === ""){
          throw "Message field is empty";
        }
      await axios.post('http://localhost:4000/chats', { body: message }, {
        headers: { Authorization: `Bearer ${token}` },
      });
      dispatch(addMessage({ username: 'Me', body: message }));
      setMessage('');
    } catch (error) {
      console.error('Send message error', error);
    }
  };

  return (
    <div>
      <h1>Chat</h1>
      <div>
        {messages.map((msg, index) => (
          <div key={index}>
            <strong>{msg.username}: </strong>{msg.body}
          </div>
        ))}
      </div>
      <input
        type="text"
        value={message}
        onChange={(e) => checking(setMessage, e)}
        placeholder="Type a message"
      />
      <button onClick={handleSend}>Send</button>
    </div>
  );
}

export default ChatPage;
