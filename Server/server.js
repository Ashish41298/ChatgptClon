import express from "express";
import bodyParser from "body-parser";
import OpenAI from 'openai';
import cors from 'cors';
import dotenv from 'dotenv';
import fetch from 'node-fetch'; // Import 'node-fetch' for making HTTP requests
import AbortController from 'abort-controller';
import Bard from "bard-ai";
dotenv.config();
const app = express();
app.use(cors());
const port = process.env.PORT || 3000;
app.use(bodyParser.json());

app.get('/api/', async (req, res) => {
  res.send("🪟⚛️🕉️ now bot started");
});

app.post('/api/chat', async (req, res) => {
  const prompt = req.body.prompt;

  try {
    const openai = new OpenAI({
      apiKey: process.env.OPEN_AI_KEY,
    });

    const controller = new AbortController();
    const signal = controller.signal;

    const request = fetch('https://jsonplaceholder.typicode.com/todos/1', { signal });

    // Example: abort the request after 5 seconds
    setTimeout(() => controller.abort(), 5000);

    const response = await request;
    const data = await response.json();

    const chatCompletion = await openai.chat.completions.create({
      messages: [{ role: 'user', content: prompt }],
      model: 'gpt-3.5-turbo',
    });

    res.status(200).send({
      bot: chatCompletion.choices[0].message,
      externalData: data // Sending external API data back to the client
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

//Bard AI -> Api
app.post('/api/Bardchat', async (req, res) => {
  const prompt = req.body.prompt;
  console.log(prompt);
  const apiKey =process.env.BARD_AI_KEY; 
  const url = `https://generativelanguage.googleapis.com/v1beta2/models/text-bison-001:generateText?key=${apiKey}`;
    const data = {
      prompt: {
          text: `${prompt}`
      }
  };
    const headers = {
      'Content-Type': 'application/json',
  };

  const options = {
      method: 'POST',
      headers,
      body: JSON.stringify(data),
  };

  try {
      const response = await fetch(url, options);
      const responseData = await response.json();
      console.log(responseData.candidates);
      res.status(200).send({
        bot: responseData.candidates,
        externalData: data // Sending external API data back to the client
      });
  } catch (error) {
      console.error('Error:', error);
  }
 });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
