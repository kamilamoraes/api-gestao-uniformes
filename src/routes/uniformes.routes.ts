import { Router } from 'express';
import { uniformesController } from '../controllers/uniformes.controller.js';

const uniformesRoutes = Router();

uniformesRoutes.get('/', uniformesController.listar);
uniformesRoutes.post('/', uniformesController.criar);
uniformesRoutes.put('/:id', uniformesController.atualizar); // Links com ID para atualizar
uniformesRoutes.delete('/:id', uniformesController.deletar); // Links com ID para deletar

export { uniformesRoutes };