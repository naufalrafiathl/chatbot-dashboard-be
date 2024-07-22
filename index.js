const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const chatbotRoutes = require('./routes/chatbotRoutes');
const errorHandler = require('./middlewares/errorMiddleware');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({
    origin: 'http://localhost:3001',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  }));
  

app.use(express.json());

app.use('/auth', authRoutes);
app.use('/chatbot', chatbotRoutes);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
