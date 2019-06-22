/* eslint-disable quotes */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable space-before-function-paren */
/**
 * Arquivo: server.js
 * Descrição: arquivo responsável por toda a configuração da aplicação.
 * Data: 02/06/2019
 * Author: Glaucia Lemos
 */

const app = require('./src/app');

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log("Aplicação executando na porta ", port);
});
