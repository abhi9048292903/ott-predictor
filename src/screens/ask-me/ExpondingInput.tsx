import React, { useState } from 'react';
import { TextField, Box, IconButton } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

const ExpandingTextarea = () => {
    const [message, setMessage] = useState('');
  
    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setMessage(event.target.value);
    };
  
    const handleSendMessage = () => {
      console.log('Sending message:', message);
      setMessage(''); // Clear the textarea after sending
    };
  
    return (
      <Box
        sx={{
          display: 'flex',
          alignItems: 'flex-end', // Aligns the button with the bottom of the textarea
          width: '100%',
          padding: '16px', // Add some padding around the component
          boxSizing: 'border-box' // Include padding in the element's total width
        }}
      >
        <TextField
          fullWidth // Takes the full width of its container
          multiline // Allows multiline input
          minRows={1} // Minimum number of rows for the textarea
          placeholder="Ask me about movies or shows..."
          value={message}
          onChange={handleChange}
          sx={{
            marginRight: '8px', // Space between the textarea and the button
            '& .MuiInputBase-inputMultiline': { //  Target the textarea input area
              resize: 'none', // Prevent manual resizing
              overflow: 'hidden', // Hide scrollbar
            }
          }}
        />
        <IconButton
          color="primary"
          onClick={handleSendMessage}
          disabled={!message.trim()} // Disable the button if the message is empty or only contains whitespace
        >
          <SendIcon />
        </IconButton>
      </Box>
    );
  };
  
  export default ExpandingTextarea;
  