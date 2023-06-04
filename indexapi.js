const express = require('express');
const app = express();
const port = 8080;

app.get('/comprar', (req, res) => {
  const productName = req.query.name;

  // Aqui você pode adicionar a lógica para processar a compra do produto com o nome fornecido

  res.send('Compra do produto "${productName}" realizada com sucesso.');
});

app.listen(port, () => {
  console.log('API está executando em http://localhost:${port}');
});