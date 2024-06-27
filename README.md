# CodigoCerto - Equipe07

Este repositório é destinado ao desenvolvimento de uma landing page para o projeto **Código Certo**. O projeto inclui desenvolvimento de front-end em HTML/CSS e JavaScript, back-end em Node.js, e banco de dados em PostgreSQL.

## Objetivo

Criar uma landing page que apresente o projeto Código Certo, com informações atrativas e uma interface amigável. A página deve permitir interação básica com o back-end para coleta e exibição de dados dinâmicos.

## Tecnologias utilizadas

- **Front-end:** HTML, CSS, JavaScript, Bootstrap
- **Back-end:** Node.js, Express.js
- **Banco de Dados:** PostgreSQL, Sequelize ORM
- **Controle de Versão:** Git
- **Gerenciamento de Dependências:** npm
- **Ferramentas de Design UX/UI:** Figma
- **QA (Controle de Qualidade):** Jest, Cypress

## Estrutura do projeto

```bash
equipe07/
├── .github/
│   └── workflows/
│       └── ci.yml       # Configuração do GitHub Actions
├── uxui/
│   ├── wireframes/      # Protótipos e wireframes
│   └── design/          # Arquivos de design (Figma, Sketch, etc.)
├── frontend/
│   ├── index.html       # Página principal da landing page
│   ├── styles.css       # Estilos CSS
│   └── app.js           # Lógica JavaScript
├── backend/
│   ├── server.js        # Servidor Node.js
│   └── routes/
│       └── api.js       # Rotas da API
├── database/
│   ├── schema.sql       # Esquema do banco de dados
│   └── seed.sql         # Dados iniciais
├── qa/
│   ├── tests/           # Testes automatizados
│   └── README.md        # Instruções para execução de testes
├── .gitignore
├── README.md            # Documentação do projeto, Instruções para contribuição e Convenção de branches
```
## Configuração do ambiente de desenvolvimento
### Requisitos
- Git: Controle de versão
- Node.js: (v14 ou superior) - Plataforma de execução - JavaScript
- npm: Gerenciador de pacotes para Node.js
- PostgreSQL: Sistema de gerenciamento de banco de dados relacional
- Editor de Código: Visual Studio Code (recomendado)
## Passos para configuração do fluxo de trabalho
```bash
# Fork do repositório e clone
git clone https://github.com/seu-usuario/equipe07.git
cd equipe07

# Configurar upstream
git remote add upstream https://github.com/codigocerto/equipe07.git

# Sincronizar com develop
git fetch upstream
git checkout -b develop --track upstream/develop
git pull upstream develop

# Criar e configurar branches
git checkout develop

# Trabalhar em uma feature
git checkout -b feature/uxui-nome-da-feature

# Implementar mudanças
git add .
git commit -m "Descrição clara do que foi feito"
git push origin feature/uxui-nome-da-feature

# Criar um Pull Request para a branch
1. Vá para o repositório forkado no GitHub.
2. Clique em Compare & pull request.
3. Preencha a descrição para o pull request e crie o PR para a branch develop no repositório principal.

# manter o fork sincronizado
Sincronize seu fork regularmente para evitar conflitos.
Sempre trabalhe na branch de desenvolvimento (develop) e crie sub-branches para features específicas.
```
## Convenção de branches
Cada equipe deve seguir o fluxo de trabalho definido acima e as seguintes convenções de branches:

```bash
Estrutura de Branches

- **`main`:** Código estável e pronto para produção.
- **`develop`:** Integração contínua de desenvolvimento.
- **`uxui`:** Desenvolvimento de protótipos e design de interfaces.
- **`frontend`:** Desenvolvimento do front-end.
- **`backend`:** Desenvolvimento do back-end.
- **`database`:** Gerenciamento do banco de dados.
- **`feature/frontend-nome-da-feature`:** Para novas funcionalidades. # feature/nome da stack-nome da feature
- **`bugfix/nome-do-bug`:** Para correções de bugs.
- **`release/vX.X`:** Para preparação de lançamentos.
- **`qa/[nome-do-teste]`:** Branch para desenvolvimento e execução de testes automatizados.
```

## Criação e uso de Container Docker

### Passos para criar e executar o container
1. **Navegar até o diretório contendo o Dockerfile**
```bash
cd /caminho/para/o/projeto
cd /caminho/para/o/diretório/da/stack
```
2. **Construir a imagem Docker**
```bash
docker build -t nome-da-imagem . # o ponto no final é necessáro - indica onde estão os arquivos para a contrução da imagem
````
3. **Executar o container**
````bash
docker run -d -p 8080:80 nome-da-imagem # exemplo para nginx, mapeando a porta do container (80) para a porta 8080 do host local
````
4. **Parar e remover o container**
````bash
docker stop nome-do-container
docker rm nome-do-container

