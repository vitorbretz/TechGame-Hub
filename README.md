# TechGame-Hub

TechGame-Hub é um blog sobre tecnologia e games com foco em notícias, análises, reviews e tutoriais. Projeto estático moderno usando Tailwind CSS e uma estrutura simples de páginas HTML para facilitar edição e publicação local.

## Visão geral
- Conteúdo: notícias, análises de hardware, reviews de jogos e posts da comunidade.
- Estrutura leve pensada para ser facilmente editável em HTML/CSS.
- Recursos visuais organizados em `assets/img/`.
- Páginas organizadas em `pages/` para cada seção (news, sobre, login, create-post).

## Estrutura do repositório
```
TechGame-Hub/
├── index.html                          # Página inicial (raiz)
├── pages/
│   ├── news/
│   │   └── newsMain.html              # Hub de notícias
│   ├── create-post/
│   │   └── create.html                # Formulário de criação de post
│   ├── sobre/
│   │   └── about.html                 # Sobre o projeto
│   └── login/
│       └── logIn.html                 # Página de login
├── assets/
│   └── img/                           # Imagens do site
├── scripts/
│   └── script.js                      # Scripts JavaScript
├── input.css                          # Arquivo de entrada do Tailwind
├── output.css                         # CSS compilado (gerado)
├── tailwind.config.js                 # Configuração do Tailwind
└── package.json                       # Dependências e scripts
```

## Rotas e Caminhos
Todos os caminhos devem usar **`./`** (relativo) para funcionar no GitHub Pages:

| Página | Rota |
|--------|------|
| Inicial | `./index.html` ou `/` |
| Notícias | `./pages/news/newsMain.html` |
| Criar Post | `./pages/create-post/create.html` |
| Sobre | `./pages/sobre/about.html` |
| Login | `./pages/login/logIn.html` |

## Como usar links corretos nos arquivos HTML

**Exemplos de links que funcionam:**
```html
<!-- No index.html -->
<link href="./output.css" rel="stylesheet" />
<a href="./pages/news/newsMain.html">Notícias</a>
<a href="./pages/login/logIn.html">Login</a>
<img src="./assets/img/logo.png" alt="Logo" />
<script src="./scripts/script.js"></script>

<!-- Nas páginas em pages/ (ex: newsMain.html) -->
<link href="../../output.css" rel="stylesheet" />
<a href="../../index.html">Início</a>
<img src="../../assets/img/hero.png" alt="Hero" />
<script src="../../scripts/script.js"></script>
```

## Como executar localmente
1. Abra o projeto no VS Code.
2. Rode `npm install` para instalar dependências.
3. Execute `npm run build` para compilar o CSS com Tailwind.
4. Para desenvolvimento, use `npm run dev` ou abra `index.html` no navegador.

## GitHub Pages
- O `index.html` está na **raiz do repositório**.
- Todos os caminhos usam `./` (relativo).
- Não quebra links ao fazer deploy.
- Acesse em: `https://vitorbretz.github.io/TechGame-Hub`

## Como contribuir
- Edite ou adicione páginas em `pages/`.
- Imagens em `assets/img/`.
- Scripts em `scripts/`.
- Atualize os caminhos de links se adicionar novas pastas.
- Faça PRs com descrições claras das mudanças.

## Licença
Consulte o arquivo [LICENSE](LICENSE) no repositório para detalhes.
