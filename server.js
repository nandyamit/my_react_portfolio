// server.js
import express from 'express';
import cors from 'cors';
import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Path to messages.json
const messagesFile = path.join(__dirname, 'messages.json');

// Initialize messages.json if it doesn't exist
async function initializeMessagesFile() {
  try {
    await fs.access(messagesFile);
  } catch {
    await fs.writeFile(messagesFile, JSON.stringify([]));
  }
}

// Store message endpoint
app.post('/api/messages', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    
    // Read existing messages
    const messagesData = await fs.readFile(messagesFile, 'utf8');
    const messages = JSON.parse(messagesData);
    
    // Add new message with timestamp
    const newMessage = {
      id: Date.now(),
      name,
      email,
      message,
      timestamp: new Date().toISOString()
    };
    
    messages.push(newMessage);
    
    // Write back to file
    await fs.writeFile(messagesFile, JSON.stringify(messages, null, 2));
    
    res.status(201).json({ message: 'Message stored successfully' });
  } catch (error) {
    console.error('Error storing message:', error);
    res.status(500).json({ error: 'Failed to store message' });
  }
});

// Initialize messages file and start server
initializeMessagesFile().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});