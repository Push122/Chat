// components/Message.js
import React from 'react';
import { Box, Typography } from '@mui/material';

const Messages = ({ message }) => {
  return (
    <Box mb={1} display="flex" justifyContent={message.sender === 'user1' ? 'flex-end' : 'flex-start'}>
      <Box
        p={1}
        bgcolor={message.sender === 'user1' ? 'primary.main' : 'grey.300'}
        color={message.sender === 'user1' ? 'white' : 'black'}
        borderRadius="8px"
        maxWidth="80%"
      >
        <Typography variant="body1">{message.text}</Typography>
        <Typography variant="caption" align="right" display="block">
          {message.timestamp}
        </Typography>
      </Box>
    </Box>
  );
};

export default Messages;
