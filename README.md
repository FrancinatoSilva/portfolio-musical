# Francis Lean — portfólio musical

Landing page estática em React + Vite para aulas de guitarra/violão e gravações remotas. Sem backend, cadastro ou serviços pagos. A versão de produção está em `src/` e `public/`; o pacote de referência permanece preservado em `material-aprovado/` e não é incluído no build.

## Executar

Requer Node.js 22.12+ (validado com Node 24) e npm.

```sh
npm install
npm run dev
npm run build
npm run preview
```

Em instalações seguintes, `npm ci` usa o lockfile. O build gera `dist/`.

## Testes e capturas

```sh
npx playwright install chromium
npm test
```

Com Chromium já instalado no Linux:

```sh
CHROMIUM_PATH=/usr/bin/chromium npm test
```

Os testes verificam cinco larguras (375, 390, 768, 1280 e 1440 px), carregamento das imagens e fontes, erros do React, overflow horizontal, âncoras, URLs aprovadas, mensagens do WhatsApp, conteúdo, foco por teclado e movimento reduzido. As capturas completas ficam em `test-results/`, diretório ignorado pelo Git. Testes de URLs conferem os destinos; não garantem que plataformas externas mantenham cada vídeo ou música disponível.

## Manutenção

- `src/App.jsx`: componentes das sete seções, mantendo o HTML editorial aprovado.
- `src/styles.css`: CSS do protótipo preservado, com ajustes de acessibilidade.
- `src/media.js`: links oficiais e mensagens do WhatsApp.
- `public/images/`: três fotos reais e dois elementos gráficos da hero.
- As mesmas famílias Anton e Inter são carregadas pelo CDN público do Fontsource/jsDelivr, com versões fixas, `font-display: swap` e fallback. Não há arquivos de fontes no pacote. É necessária conexão para obter as fontes; a hero mantém seus elementos gráficos locais.
- Não modificar o protótipo como versão de produção. Não criar worktree para tarefas neste ambiente isolado: usar o checkout existente.

## Publicação no Cloudflare Pages — somente após autorização

Nada foi publicado automaticamente. Após a aprovação do proprietário, conectar o repositório no Cloudflare Pages (ou enviar o build pelo fluxo de upload direto).

- Comando de build: `npm run build`
- Diretório de saída: `dist`
- Diretório raiz: raiz deste projeto
- Node.js: 24
- Sem variáveis de ambiente ou segredos
- Usar o subdomínio gratuito fornecido pelo Cloudflare (`*.pages.dev`); não é necessário comprar domínio.

Não enviar `material-aprovado/`, `node_modules/` ou testes como arquivos públicos: publicar apenas `dist/`.

Ver `docs/VALIDACAO.md` para resultados e pendências editoriais.
