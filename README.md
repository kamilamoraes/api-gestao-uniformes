API de Gestao de Uniformes

Uma API REST desenvolvida em Node.js e TypeScript para o gerenciamento e controle de estoque de pecas de uniformes empresariais e de atendimento.

Tecnologias Utilizadas
- Node.js (Ambiente de execucao)
- TypeScript (Tipagem estatica para maior seguranca do codigo)
- Express (Framework para construcao das rotas e requisicoes HTTP)
- tsx (Executor de TypeScript em modo de desenvolvimento)

Funcionalidades e Rotas
A API gerencia os dados de modelos, cores, tamanhos e quantidades em estoque atraves das seguintes rotas:

- GET /uniformes - Lista todos os uniformes atualmente cadastrados no estoque.
- POST /uniformes - Cadastra uma nova peca de uniforme.
- PUT /uniformes/:id - Atualiza a quantidade disponivel de uma peca especifica com base no ID.
- DELETE /uniformes/:id - Remove uma peca do sistema de controle de estoque.

Como Executar o Projeto

1. Clone este repositorio para sua maquina local.
2. Instale as dependencias necessarias executando: npm install
3. Inicie o servidor de desenvolvimento com o comando: npm run dev
4. A API estara disponivel para testes em: http://localhost:3333/uniformes