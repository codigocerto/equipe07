# CodigoCerto - Equipe07

Este repositório é destinado ao desenvolvimento de uma landing page para o projeto **Código Certo**. O projeto inclui desenvolvimento de front-end em HTML/CSS e JavaScript, back-end em Node.js, e banco de dados em PostgreSQL.

## Objetivo

Criar uma landing page que apresente o projeto Código Certo, com informações atrativas e uma interface amigável. A página deve permitir interação básica com o back-end para coleta e exibição de dados dinâmicos.

## Tecnologias Utilizadas

- **Front-end:** HTML, CSS, JavaScript, Bootstrap
- **Back-end:** Node.js, Express.js
- **Banco de Dados:** PostgreSQL, Sequelize ORM
- **Controle de Versão:** Git
- **Gerenciamento de Dependências:** npm
- **Ferramentas de Design UX/UI:** Figma

## Estrutura do Projeto

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
├── .gitignore
├── README.md            # Documentação do projeto, Convenções e instruções para contribuição
```
## Configuração do Ambiente de Desenvolvimento
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
cd equipe7

# Configurar upstream
git remote add upstream https://github.com/codigocerto/equipe07.git

# Sincronizar com develop
git fetch upstream
git checkout develop
git merge upstream/develop
git push origin develop

# Criar e configurar branches
git checkout develop
git checkout -b uxui   # ou frontend, backend, database, qa

# Trabalhar em uma feature
git checkout uxui     # ou frontend, backend, database, qa
git checkout -b uxui/feature/nome-da-feature

# Implementar mudanças
git add .
git commit -m "Descrição clara do que foi feito"
git push origin uxui/feature/nome-da-feature

# Criar um Pull Request para a branch
1. Vá para o repositório forkado no GitHub.
2. Clique em Compare & pull request.
3. Preencha a descrição para o pull request e crie o PR para a sua branch (frontend, backend, database ...) no repositório principal.

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
- **`feature/nome-da-feature`:** Para novas funcionalidades.
- **`bugfix/nome-do-bug`:** Para correções de bugs.
- **`release/vX.X`:** Para preparação de lançamentos.

