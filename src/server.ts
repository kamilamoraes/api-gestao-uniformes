import express from 'express';
import { uniformesRoutes } from './routes/uniformes.routes.js'; 

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.json({ mensagem: "API de Gestão de Uniformes rodando com sucesso!" });
});

app.use('/uniformes', uniformesRoutes);

const PORT = 3333;
app.listen(PORT, () => {
    console.log(` Servidor rodando na porta http://localhost:${PORT}`);
});