import React, { useState } from 'react';
import { TextField, Box, IconButton } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

interface ExpandingTextareaProps {
  onSend: (message: string) => void;
  loading?: boolean;
}

const ExpandingTextarea: React.FC<ExpandingTextareaProps> = ({ onSend, loading }) => {
  const [message, setMessage] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setMessage(event.target.value);
  };

  const handleSendMessage = () => {
    if (message.trim()) {
      onSend(message);
      setMessage(''); // Clear the textarea after sending
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'flex-end',
        width: '100%',
        padding: '16px',
        boxSizing: 'border-box'
      }}
    >
      <TextField
        fullWidth
        multiline
        minRows={1}
        placeholder="Ask me about movies or shows..."
        value={message}
        onChange={handleChange}
        onKeyDown={e => {
          if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSendMessage();
          }
        }}
        sx={{
          marginRight: '8px',
          '& .MuiInputBase-inputMultiline': {
            resize: 'none',
            overflow: 'hidden',
          }
        }}
        disabled={!!loading}
      />
      <IconButton
        color="primary"
        onClick={handleSendMessage}
        disabled={!message.trim() || !!loading}
      >
        <SendIcon />
      </IconButton>
    </Box>
  );
};

export default ExpandingTextarea;
  