const express = require('express');
const chatbotController = require('../controllers/chatbotController');
const authenticateToken = require('../middlewares/authMiddleware');
const router = express.Router();

router.get('/', authenticateToken, chatbotController.getAllChatbots);
router.get('/:id', authenticateToken, chatbotController.getChatbotById);
router.put('/customize/:id', authenticateToken, chatbotController.customizeChatbot);
router.post('/create', authenticateToken, chatbotController.createChatbot);


module.exports = router;
