import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { sendMessage } from '../redux/chatSlice';
import { Button, TextField, Box } from '@mui/material';

const MessageInput = () => {
  const [message, setMessage] = useState('');
  const dispatch = useDispatch();

  const handleSendMessage = () => {
    if (message.trim()) {
      dispatch(sendMessage({ text: message }));
      setMessage('');
    }
  };

  return (
    <Box display="flex" p={1}>
      <TextField
        variant="outlined"
        fullWidth
        placeholder="Type a message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
      />
      <Button variant="contained" color="primary" onClick={handleSendMessage}>
        Send
      </Button>
    </Box>
  );
};

export default MessageInput;
