import cors from 'cors';
import express from 'express';
import { routes } from './routes';

const app = express();

// segurança, por enquanto está aberto para todo mundo
app.use(cors());
// plugin para o express verificar se há um corpo em json
app.use(express.json());
app.use(routes);

// a aplicação vai "ouvir" a porta /3333
//função que será executada assim que o servidor estiver no ar
app.listen(process.env.PORT || 3333, () => {
  console.log('HTTP server runing!');
});