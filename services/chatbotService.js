const prisma = require('../models/prisma');

const createChatbot = async (userId, chatbotData) => {
  const chatbot = await prisma.chatbot.create({
    data: {
      userId,
      ...chatbotData,
    },
  });
  return chatbot;
};

const customizeChatbot = async (userId, chatbotId, customizations) => {
    chatbotId = parseInt(chatbotId,10)
    const chatbot = await prisma.chatbot.findUnique({
      where: { id: chatbotId },
    });
    if (!chatbot || chatbot.userId !== userId) {
      throw new Error('Unauthorized');
    }
  
    const updatedChatbot = await prisma.chatbot.update({
      where: { id: chatbotId },
      data: customizations,
    });
  
    return updatedChatbot;
  };

const getAllChatbots = async (userId) => {
  const chatbots = await prisma.chatbot.findMany({
    where: { userId },
  });
  return chatbots;
};

const getChatbotById = async (userId, chatbotId) => {
  chatbotId = parseInt(chatbotId,10)
  const chatbot = await prisma.chatbot.findUnique({
    where: { id: chatbotId },
  });
  if (!chatbot || chatbot.userId !== userId) {
    throw new Error('Unauthorized');
  }
  return chatbot;
};

module.exports = { createChatbot, customizeChatbot, getAllChatbots, getChatbotById };
