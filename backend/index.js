import express from 'express';
import ImageKit from 'imagekit';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 3000;

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    methods: ['GET', 'POST', 'OPTIONS'],
    credentials: true,
  })
);

const imagekit = new ImageKit({
  urlEndpoint: process.env.IMAGE_KIT_ENDPOINT,
  publicKey: process.env.IMAGE_KIT_PUBLIC_KEY,
  privateKey: process.env.IMAGE_KIT_PRIVATE_KEY,
});

console.log('CORS Origin:', process.env.CLIENT_URL);

// Add a route for the root URL
app.get('/', (req, res) => {
  res.send('Welcome to the ImageKit API Server');
});

app.get('/api/upload', (req, res) => {
  const result = imagekit.getAuthenticationParameters();
  res.send(result);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
