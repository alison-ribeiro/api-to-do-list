# API Lista de Tarefas

Esta é uma API de lista de tarefas criada com Node.js, Express, MySQL e Sequelize.

## Como usar
**Não foi implementado segurança na API cuidado, é uma API simples**

1. **Instalação**: Primeiro, clone o repositório para o seu computador local usando `git clone`. Em seguida, navegue até o diretório do projeto e execute `npm install` ou `yarn intall`para instalar todas as dependências necessárias.
2. **Configuração do Banco de Dados**: Configure a conexão com o banco de dados MySQL no arquivo `dbConnection.ts`. Certifique-se de que o banco de dados especificado existe e que as credenciais de login estão corretas.

3. **.env**: Crie e configure o arquivo .env na raiz do projeto seguindo o exemplo abaixo.
PORT=4000
DB_HOST=host
DB_PORT=port
DB_USERNAME=user
DB_PASSWORD=password
DB_DATABASE=nameDatabase

4. **Configuração do Banco de Dados**: Configure a conexão com o banco de dados MySQL no arquivo `dbConnection.ts`. Certifique-se de que o banco de dados especificado existe e que as credenciais de login estão corretas.

5. **Execução**: Para iniciar o servidor, execute `npm start` ou `yarn install` no terminal. Isso iniciará o servidor na porta especificada no arquivo de configuração.

6. **Uso da API**: A API tem os seguintes endpoints:

    - `GET /todos`: Retorna todas as tarefas.
    - `POST /todos`: Cria uma nova tarefa. O corpo da solicitação deve ser um objeto JSON com as propriedades `task` e `done`.
    - `GET /todos/:id`: Retorna a tarefa com o ID especificado.
    - `PUT /todos/:id`: Atualiza a tarefa com o ID especificado. O corpo da solicitação deve ser um objeto JSON com as propriedades que você deseja atualizar.
    - `DELETE /todos/:id`: Exclui a tarefa com o ID especificado.