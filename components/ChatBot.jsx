import React, { useState } from 'react';
import axios from 'axios';
import './botperso.css';

import SendIcon from '@mui/icons-material/Send';
import { Box, Grid, Stack } from '@mui/material';

import CopyButton from './CopyButton';
import PersonIcon from '@mui/icons-material/Person';
import SmartToyIcon from '@mui/icons-material/SmartToy';




const BotPerso = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);

const chatWithAI = async (userInput) => {
    const apiEndpoint = 'http://localhost:8000/questions';
;

    const data = {
      prompt: userInput,
      max_tokens: 150
    };
try {
      const response = await axios.post(apiEndpoint, data, {});
      //console.log(response)
      //return response.data.choices[0].text.trim();
      return response.data.message
    } catch (error) {
      console.error('Error communicating with the API:', error.message);
      return '';
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    const userMessage = { text: input, user: true };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    const aiMessage = { text: '...', user: false };
    setMessages((prevMessages) => [...prevMessages, aiMessage]);
    const response = await chatWithAI(input);
    const newAiMessage = { text: response, user: false };
    setMessages((prevMessages) => [...prevMessages.slice(0, -1), newAiMessage]);
    setInput('');
  };

  function composant (element) {
    console.log('ici, element', element)
    return (element.user ? <PersonIcon style={{position:'relative', left:"20px"}}/> : <SmartToyIcon />)
  }

  function boite(element) {
    return(element.user? <PersonIcon /> : <SmartToyIcon />)
  }

  return (
    <div className="chatbot-container">
      <div className="chatbot-messages">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`message ${message.user ? 'user-message' : 'ai-message'}`}
          >
            <Grid container spacing={1}>
              <Grid item xs={1} alignContent={"left"} justifyContent={"center"}>
              {boite(message)}
              </Grid>
              <Grid item xs={9} alignContent={'right'}>
              {message.text}
              </Grid>
              <Grid item xs={2} >
              <CopyButton texte={message.text} />
              </Grid>
            </Grid>

          </div>
        ))}
      </div>
      <form className="chatbot-input-form" onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
        />
        <button type="submit"><SendIcon /></button>
      </form>
    </div>
  );
};
export default BotPerso;