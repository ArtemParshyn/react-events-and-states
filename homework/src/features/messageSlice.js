import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  messages: [],
  loading: false,
};

const messageSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {
    setMessages: (state, action) => {
      state.messages = action.payload;
    },
    appendMessage: (state, action) => {
      state.messages.push(action.payload);
    },
  },
});

export const { setMessages, appendMessage } = messageSlice.actions;
export default messageSlice.reducer;
