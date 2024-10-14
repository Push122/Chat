import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { Box, Typography } from '@mui/material';
import Message from './Message';

const ChatWindow = () => {
  const messages = useSelector((state) => state.chat.messages);
  const chatEndRef = useRef(null);

  // Auto scroll to the bottom when a new message is sent
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <Box
      p={2}
      sx={{
        height: '400px',
        overflowY: 'auto',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {messages.map((msg) => (
        <Message key={msg.id} message={msg} />
      ))}
      <div ref={chatEndRef} />
    </Box>
  );
};

export default ChatWindow;
