import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    messages: [], // Should be an empty array initially
    currentUser: 'user1', // Should be a string or valid value
  };
  

  export const chatSlice = createSlice({
    name: 'chat',
    initialState,
    reducers: {
      sendMessage: (state, action) => {
        state.messages.push({
          id: state.messages.length + 1,
          text: action.payload.text,
          sender: state.currentUser,
          timestamp: new Date().toLocaleTimeString(),
        });
      },
      receiveMessage: (state, action) => {
        state.messages.push({
          id: state.messages.length + 1,
          text: action.payload.text,
          sender: 'otherUser',
          timestamp: new Date().toLocaleTimeString(),
        });
      },
    },
  });
  
  export const { sendMessage, receiveMessage } = chatSlice.actions;
  
