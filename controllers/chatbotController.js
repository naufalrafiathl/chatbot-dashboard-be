const chatbotService = require('../services/chatbotService');

const createChatbot = async (req, res, next) => {
  try {
    const chatbot = await chatbotService.createChatbot(req.user.id, req.body);
    res.json({ chatbot });
  } catch (err) {
    next(err);
  }
};

const customizeChatbot = async (req, res, next) => {
    try {
      const chatbotId = parseInt(req.params.id, 10); 
      const updatedChatbot = await chatbotService.customizeChatbot(req.user.id, chatbotId, req.body);
      res.json({ chatbot: updatedChatbot });
    } catch (err) {
      next(err);
    }
  };

const getAllChatbots = async (req, res, next) => {
  try {
    const chatbots = await chatbotService.getAllChatbots(req.user.id);
    res.json({ chatbots });
  } catch (err) {
    next(err);
  }
};

const getChatbotById = async (req, res, next) => {
  try {
    const chatbot = await chatbotService.getChatbotById(req.user.id, req.params.id);
    res.json({ chatbot });
  } catch (err) {
    next(err);
  }
};

module.exports = { createChatbot, customizeChatbot, getAllChatbots, getChatbotById };
