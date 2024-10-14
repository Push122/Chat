import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { receiveMessage } from './redux/chatSlice'; // Correct path to chatSlice
import { Box, Container } from '@mui/material'; // MUI components
import MessageInput from './components/MessageInput'; // Ensure the correct path
import ChatWindow from './components/ChatWindow'; // Ensure the correct path



const App = () => {
  const dispatch = useDispatch();


  useEffect(() => {
    const receiveMockMessage = () => {
      setTimeout(() => {
        dispatch(receiveMessage({ text: 'Hello! This is a simulated message.' }));
      }, 3000); // Simulate message reception delay
    };
  
    receiveMockMessage();
  }, [dispatch]);
  

  return (
    <>
    <Container maxWidth="sm">
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        height="100vh"
        p={2}
      >
        <ChatWindow />  {/* Component for displaying messages */}
        <MessageInput /> {/* Component for sending new messages */}
      </Box>
    </Container>
    
    </>
    
  );
  
};

export default App;


