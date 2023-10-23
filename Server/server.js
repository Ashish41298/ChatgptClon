import express from "express";
import bodyParser from "body-parser";
import OpenAI from 'openai';
import cors from 'cors';
import dotenv from 'dotenv';
import { AbortController } from 'abort-controller';

dotenv.config();
const app = express();
app.use(cors());
const port = process.env.PORT || 3000;
app.use(bodyParser.json());
app.get('/api/', async (req, res) => {
  res.send("🪟⚛️🕉️ now bot started");
});

app.post('/api/chat', async (req, res) => {
  const prompt = req.body.prompt; // Removed unnecessary await here

  // Create a new AbortController and signal
  const controller = new AbortController();
  const signal = controller.signal;

  try {
    const openai = new OpenAI({
      apiKey: process.env.OPEN_AI_KEY,
    });

    const chatCompletion = await openai.chat.completions.create({
      messages: [{ role: 'user', content: prompt }],
      model: 'gpt-3.5-turbo',
      abortSignal: signal, // Pass the abort signal here
    });

    res.status(200).send({
      bot: chatCompletion.choices[0].message
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
