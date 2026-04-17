# 📱 API WhatsApp

API REST para envio de mensagens via WhatsApp utilizando Node.js.

---

## 🚀 Sobre o Projeto

Esta API foi desenvolvida para permitir o envio automatizado de mensagens pelo WhatsApp através de requisições HTTP.

Ideal para integração com:

- Sistemas de atendimento
- CRMs
- ERPs
- Bots automatizados
- Notificações em tempo real

---

## ⚙️ Tecnologias Utilizadas

- Node.js
- Express
- JavaScript

---

## 📦 Instalação

### 🔧 Pré-requisitos

- Node.js (versão 14 ou superior)
- NPM ou Yarn

### 📥 Clonar o repositório

```bash
git clone https://github.com/pedsousa06-ai/Api-Whatsapp.git
cd Api-Whatsapp
```

### 📚 Instalar dependências

```bash
npm install
```

---

## ▶️ Executando o Projeto

```bash
node index.js
```

Ou com nodemon:

```bash
npx nodemon index.js
```

---

## 🔐 Autenticação

Ao iniciar a aplicação, pode ser necessário autenticar o WhatsApp:

- Um QR Code pode ser exibido no terminal
- Escaneie com seu WhatsApp
- A sessão pode ser salva automaticamente

---

## 🌐 Configuração

Por padrão, a API roda em:

```
http://localhost:3000
```

Caso utilize variável de ambiente:

```
PORT=3000
```

---

## 📡 Endpoints da API

### 📤 Enviar mensagem

**GET /api**

#### 🔹 Parâmetros

| Parâmetro | Tipo   | Obrigatório | Descrição |
|----------|--------|------------|----------|
| celular  | string | ✅         | Número com DDD |
| mensagem | string | ✅         | Texto da mensagem |

#### ✅ Exemplo de requisição

```
http://localhost:3000/api?celular=11999999999&mensagem=Olá mundo
```

#### ✅ Exemplo com curl

```bash
curl "http://localhost:3000/api?celular=11999999999&mensagem=Olá mundo"
```

---

## 📥 Respostas da API

### ✅ Sucesso

```json
{
  "status": "sucesso",
  "mensagem": "Mensagem enviada com sucesso"
}
```

### ❌ Erro

```json
{
  "status": "erro",
  "mensagem": "Falha ao enviar mensagem"
}
```

---

## 📁 Estrutura do Projeto

```
Api-Whatsapp/
│
├── index.js
├── package.json
├── node_modules/
└── outros arquivos
```

---

## ⚠️ Avisos Importantes

- Este projeto não utiliza a API oficial do WhatsApp
- Pode haver risco de bloqueio do número
- Evite:
  - Spam
  - Disparos em massa
  - Uso abusivo

---

## 🛠️ Melhorias Futuras

- Autenticação via API Key
- Envio de imagens e arquivos
- Webhook para mensagens recebidas
- Logs estruturados
- Painel administrativo
- Deploy com Docker

---

## 🤝 Contribuição

1. Fork o projeto  
2. Crie uma branch  
```bash
git checkout -b minha-feature
```

3. Commit  
```bash
git commit -m "feat: minha feature"
```

4. Push  
```bash
git push origin minha-feature
```

5. Abra um Pull Request  

---

## 📄 Licença

Este projeto está sob a licença MIT.

---

## 👨‍💻 Autor

Pedro Sousa  
https://github.com/pedsousa06-ai
