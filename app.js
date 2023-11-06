const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const users = []; // Armazene os usuários cadastrados aqui (normalmente você usaria um banco de dados).

// Rota de cadastro
app.post('/cadastro', (req, res) => {
  const { nome, email, senha } = req.body;

  // Valide os dados de entrada, por exemplo, verifique se o email é único.

  const novoUsuario = { nome, email, senha };
  users.push(novoUsuario);

  res.status(201).json({ message: 'Usuário cadastrado com sucesso' });
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
