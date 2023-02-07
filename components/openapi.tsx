import React, { useState } from 'react';
import axios from 'axios';
import {OpenAIApi, Configuration} from 'openai'
const OpenAIPage = () => {
  const [textInput, setTextInput] = useState('');
  const [response, setResponse] = useState(null);

  const handleChange = event => {
    setTextInput(event.target.value);
  };
  const configuration = new Configuration({
    apiKey: "api-key",
  });
  const openai = new OpenAIApi(configuration);

  const handleSubmit = async event => {
    event.preventDefault();
    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: textInput,
        max_tokens: 300,
        temperature: 0.25,
    })

    setResponse(response.data.choices[0].text)
  };

  return (
    <div>
      <h1 className='font-serif pt-3 flex justify-center p-1 '>Write mails with the power of GPT3</h1>
      <div className='grid grid-rows-1 p-2'>
        <form  onSubmit={handleSubmit}>
            <div className='container flex justify-center font-serif pt-3'>Write mails that you have never written before!</div>
            <label htmlFor="text-input" className='container flex justify-center font-serif pt-3'>Enter text:</label>
            
            <input className='container p-3 justify-center origin-center font-serif'
            type="text"
            id="text-input"
            value={textInput}
            onChange={handleChange}
            />
            <div className='flex  justify-center pt-3'>
                <button type="submit" className='font-serif border rounded-sm p-2 hover:bg-slate-200'>Submit</button>
            </div>
        </form>
      </div>
      <div className='container  p-5 border m-2 font-serif'>{response && <p> {response}</p>}</div>
    </div>
  );
};

export default OpenAIPage;
