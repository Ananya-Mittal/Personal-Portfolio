import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(join(__dirname, '../dist')));

// Sample data (replace with database in a real application)
const projects = [
  {
    id: 1,
    title: 'Force Majeaur',
    description: 'It is a project which is built to solve natural calamities related problems. It provides various ways to over come natural calamities and how  natural disasters occur. Apart from that it helps people stuck in natural calamities to contact life savers.',
    imageUrl: 'C:\Users\ANANYA MITTAL\Desktop\coding\Personal-Portfolio\Force Majeaur.png',
    githubUrl: 'https://github.com/Ananya-Mittal/codegeek.git',
  },
];

const blogPosts = [
  {
    id: 1,
    title: 'My First Blog Post',
    content: 'This is the content of my first blog post.',
    date: '2023-04-15',
  },
  {
    id: 2,
    title: 'Learning React',
    content: 'Today, I learned about React hooks and how to use them effectively.',
    date: '2023-04-20',
  },
];

app.get('/api/projects', (req, res) => {
  res.json(projects);
});

app.get('/api/blog', (req, res) => {
  res.json(blogPosts);
});

app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;
  // In a real application, you would save this data to a database or send an email
  console.log('Received contact form submission:', { name, email, message });
  res.status(200).json({ message: 'Message received' });
});

app.get('*', (req, res) => {
  res.sendFile(join(__dirname, '../dist/index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});