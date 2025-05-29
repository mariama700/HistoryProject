require('dotenv').config(); // Load .env variables

const express = require('express');
const axios = require('axios');
const app = express();
const path = require('path');

const presidents = require('./presidents.json');
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// 🏠 Home Page
app.get('/', (req, res) => {
  res.render('index', { presidents });
});

// 💬 Chat Page
app.get('/chat/:name', (req, res) => {
  const president = presidents.find(p => p.name === req.params.name);
  res.render('chat', { president });
});

// 🎲 Meme Generator
app.get('/memes', (req, res) => {
  const memeFiles = [
    '/memes/meme1.png',
    '/memes/meme2.png',
    '/memes/meme3.png',
    '/memes/meme4.png',
    '/memes/meme5.png',
    '/memes/meme6.png',
    '/memes/meme7.png'
  ];
  const randomMeme = memeFiles[Math.floor(Math.random() * memeFiles.length)];
  res.render('memes', { meme: randomMeme });
});

// 🤖 AI Chat Route using OpenRouter + DeepSeek
app.post('/chat/:name', async (req, res) => {
  const userMessage = req.body.message;
  const presidentName = req.params.name;

  console.log("💬 User Message:", userMessage);
  console.log("🧑‍⚖️ President:", presidentName);
  console.log("🔑 API KEY:", process.env.OPENROUTER_API_KEY);

  try {
    const response = await axios.post(
      'https://openrouter.ai/api/v1/chat/completions',
      {
        model: 'deepseek/deepseek-chat:free',
        messages: [
          {
            role: 'system',
            content: `You are ${presidentName}, a U.S. president. Speak in the first person and only say things you would say during your presidency. Be historically accurate and short and brief (1 sentence responses). Try exaggerating your political views to show how conservative/liberal you. BE SUPER FUNNY. Use gen-z slang. give one sentence responses and ask questions back.`
          },
          {
            role: 'user',
            content: userMessage
          }
        ]
      },
      {
        headers: {
          'Authorization': `Bearer ${process.env.OPENROUTER_API_KEY}`,
          'Content-Type': 'application/json',
          'HTTP-Referer': 'http://localhost:3000' // Optional but helps with OpenRouter free usage
        }
      }
    );

    const aiResponse = response.data.choices[0].message.content;
    console.log("✅ AI Response:", aiResponse);
    res.json({ reply: aiResponse });

  } catch (error) {
    console.error("❌ AI ERROR:", error.response?.data || error.message);
    res.status(500).json({ reply: "Something went wrong with the AI." });
  }
});

// 🚀 Start the Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
