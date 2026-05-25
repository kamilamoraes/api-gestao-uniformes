import { type Request, type Response } from 'express';

export const estoqueUniforme = [
  { id: 1, modelo: "Camiseta Polo Empresarial", cor: "Azul Marinho", tamanho: "M", quantidade: 45 },
  { id: 2, modelo: "Camiseta Algodão Básica", cor: "Preta", tamanho: "G", quantidade: 12 }
];

export const uniformesController = {
  listar(req: Request, res: Response) {
    return res.json(estoqueUniforme);
  },

  criar(req: Request, res: Response) {
    const { modelo, cor, tamanho, quantidade } = req.body;
    const novoUniforme = { id: estoqueUniforme.length + 1, modelo, cor, tamanho, quantidade };
    estoqueUniforme.push(novoUniforme);
    return res.status(201).json(novoUniforme);
  },

  atualizar(req: Request, res: Response) {
    const { id } = req.params;
    const { quantidade } = req.body;

    const uniforme = estoqueUniforme.find(item => item.id === Number(id));

    if (!uniforme) {
      return res.status(404).json({ mensagem: "Uniforme não encontrado" });
    }

    uniforme.quantidade = quantidade;
    return res.json({ mensagem: "Estoque atualizado com sucesso", uniforme });
  },

  deletar(req: Request, res: Response) {
    const { id } = req.params;
    const index = estoqueUniforme.findIndex(item => item.id === Number(id));

    if (index === -1) {
      return res.status(404).json({ mensagem: "Uniforme não encontrado" });
    }

    estoqueUniforme.splice(index, 1);
    return res.json({ mensagem: "Uniforme removido do estoque" });
  }
};