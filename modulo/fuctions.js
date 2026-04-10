const { contatos } = require('./contatos');

// 1. Listar TODOS os usuários
const getAllUsers = function () {
  return contatos["whats-users"].map(user => ({
    id: user.id,
    account: user.account,
    nickname: user.nickname,
    number: user.number,
    "profile-image": user["profile-image"],
    background: user.background,
    "created-since": user["created-since"],
  }));
};

// 2. Listar profile de um usuário pelo ID
const getUserProfile = function (id) {
  const user = contatos["whats-users"].find(u => u.id === Number(id));
  if (!user) return null;

  return {
    id: user.id,
    account: user.account,
    nickname: user.nickname,
    number: user.number,
    "profile-image": user["profile-image"],
    background: user.background,
    "created-since": {
      start: user["created-since"].start,
      end: user["created-since"].end,
    },
  };
};

// 3. Listar contatos de um usuário (nome, foto, descrição)
const getUserContacts = function (id) {
  const user = contatos["whats-users"].find(u => u.id === Number(id));
  if (!user) return null;

  return user.contacts.map(contact => ({
    name: contact.name,
    description: contact.description,
    image: contact.image,
  }));
};

// 4. Listar TODAS as mensagens de um usuário
const getAllMessages = function (id) {
  const user = contatos["whats-users"].find(u => u.id === Number(id));
  if (!user) return null;

  return user.contacts.map(contact => ({
    contact: contact.name,
    messages: contact.messages.map(msg => ({
      sender: msg.sender,
      content: msg.content,
      time: msg.time,
    })),
  }));
};

// 5. Listar conversa entre usuário e um contato específico
const getConversation = function (userId, contactName) {
  const user = contatos["whats-users"].find(u => u.id === Number(userId));
  if (!user) return null;

  const contact = user.contacts.find(
    c => c.name.toLowerCase() === contactName.toLowerCase()
  );
  if (!contact) return null;

  return {
    user: { account: user.account, number: user.number },
    contact: contact.name,
    messages: contact.messages.map(msg => ({
      sender: msg.sender,
      content: msg.content,
      time: msg.time,
    })),
  };
};

// 6. Pesquisar por palavra-chave nas mensagens
const searchMessages = function (userId, contactName, keyword) {
  const conversation = getConversation(userId, contactName);
  if (!conversation) return null;

  const results = conversation.messages.filter(msg =>
    msg.content.toLowerCase().includes(keyword.toLowerCase())
  );

  return {
    user: conversation.user,
    contact: conversation.contact,
    keyword,
    results,
  };
};

module.exports = {
  getAllUsers,
  getUserProfile,
  getUserContacts,
  getAllMessages,
  getConversation,
  searchMessages,
};

