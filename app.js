const express = require('express');
const cors = require('cors');
const {
  getAllUsers,
  getUserProfile,
  getUserContacts,
  getAllMessages,
  getConversation,
  searchMessages,
} = require('./functions');

const app = express();
app.use(cors());
app.use(express.json());


app.get('/v1/whatsapp/users', (req, res) => {
  res.json(getAllUsers());
});


app.get('/v1/whatsapp/users/:id/profile', (req, res) => {
  const result = getUserProfile(req.params.id);
  if (!result) return res.status(404).json({ error: "Usuário não encontrado" });
  res.json(result);
});


app.get('/v1/whatsapp/users/:id/contacts', (req, res) => {
  const result = getUserContacts(req.params.id);
  if (!result) return res.status(404).json({ error: "Usuário não encontrado" });
  res.json(result);
});


app.get('/v1/whatsapp/users/:id/messages', (req, res) => {
  const result = getAllMessages(req.params.id);
  if (!result) return res.status(404).json({ error: "Usuário não encontrado" });
  res.json(result);
});


app.get('/v1/whatsapp/users/:id/conversation', (req, res) => {
  const { contact } = req.query;
  if (!contact) return res.status(400).json({ error: "Informe ?contact=Nome" });
  const result = getConversation(req.params.id, contact);
  if (!result) return res.status(404).json({ error: "Usuário ou contato não encontrado" });
  res.json(result);
});


app.get('/v1/whatsapp/users/:id/search', (req, res) => {
  const { contact, keyword } = req.query;
  if (!contact || !keyword) return res.status(400).json({ error: "Informe ?contact=Nome&keyword=palavra" });
  const result = searchMessages(req.params.id, contact, keyword);
  if (!result) return res.status(404).json({ error: "Usuário ou contato não encontrado" });
  res.json(result);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
