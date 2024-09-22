import express from 'express';
import ImageKit from 'imagekit';
import cors from 'cors';
import mongoose from 'mongoose';
import chat from './models/chat.js';
import userChats from './models/userChats.js';

const app = express();
const port = process.env.PORT || 3000;

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    methods: ['GET', 'POST', 'OPTIONS'],
    credentials: true,
  })
);

// Middleware for accepting JSON from the frontend
app.use(express.json());

// Connecting to MongoDB
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO); // MongoDB connection string
    console.log("Connected to MongoDB");
  } catch (err) {
    console.log(err);
  }
};

const imagekit = new ImageKit({
  urlEndpoint: process.env.IMAGE_KIT_ENDPOINT,
  publicKey: process.env.IMAGE_KIT_PUBLIC_KEY,
  privateKey: process.env.IMAGE_KIT_PRIVATE_KEY,
});

console.log('CORS Origin:', process.env.CLIENT_URL);

// Endpoint for image authentication
app.get('/api/upload', (req, res) => {
  const result = imagekit.getAuthenticationParameters();
  res.send(result);
});

// API request to handle chat creation
app.post("/api/chats", async (req, res) => {
  const { userId, text } = req.body;

  // Log request body to check data
  console.log("Request body:", req.body);

  if (!text || text.trim() === "") {
    return res.status(400).send("Text is required");
  }

  try {
    // Creating a new chat entry
    const newChat = new chat({
      userId: userId,
      history: [{ role: "user", parts: [{ text }] }]
    });
    const savedChat = await newChat.save();

    // Check if a user's chat history already exists
    const userchats = await userChats.find({ userId: userId });

    if (!userchats.length) {
      // No existing chats, create a new user chat document
      const newUserChats = new userChats({
        userId: userId,
        chats: [
          {
            _id: savedChat._id,
            title: text.substring(0, 40),
          }
        ]
      });
      await newUserChats.save();
    } else {
      // If chats exist, update the chat array with the new chat
      await userChats.updateOne(
        { userId: userId },
        {
          $push: {
            chats: {
              _id: savedChat._id,
              title: text.substring(0, 40),
            }
          }
        }
      );
    }

    res.status(201).send(savedChat._id);
  } catch (err) {
    console.log(err);
    res.status(500).send("Error creating chat! Check logs.");
  }
});

// Start the server
app.listen(port, () => {
  connect();
  console.log(`Server is running on port ${port}`);
});
