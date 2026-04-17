# 📱 API WhatsApp

API para envio de mensagens via WhatsApp utilizando **Node.js** e **Express**.

## 🚀 Sobre o Projeto

Esta API permite enviar mensagens de forma automatizada através do WhatsApp, possibilitando integração com diversos sistemas, como:

- CRM
- ERP
- Sistemas de atendimento
- Bots personalizados

A comunicação é feita por meio de requisições HTTP simples.

---

## ⚙️ Tecnologias Utilizadas

- Node.js
- Express
- JavaScript

---

## 📦 Instalação

### 🔧 Pré-requisitos

- Node.js instalado
- NPM ou Yarn

### 📥 Clonando o repositório

```bash
git clone https://github.com/pedsousa06-ai/Api-Whatsapp.git
cd Api-Whatsapp

📚 Instalando dependências
npm install

▶️ Executando o Projeto
node index.js

Após iniciar, o sistema pode solicitar autenticação (ex: QR Code), dependendo da implementação utilizada.

📡 Como Usar a API
📤 Enviar mensagem

Faça uma requisição HTTP:

http://SEU_IP:PORTA/api?celular=NUMERO&mensagem=MENSAGEM

🔹 Parâmetros
Parâmetro	Descrição
celular	Número com DDD
mensagem	Texto da mensagem

✅ Exemplo
http://localhost:3000/api?celular=11999999999&mensagem=Olá mundo

📁 Estrutura do Projeto
📦 Api-Whatsapp
 ┣ 📜 index.js
 ┣ 📜 package.json
 ┗ 📜 demais arquivos do projeto


📄 Licença

Este projeto está sob a licença MIT.


---

Se quiser depois eu adapto ele **100% fiel ao seu código (endpoints reais, porta, lib que você usou, etc.)** — aí fica nível profissional mesmo.
