# Validação — Francis Lean

Implementação estática React/Vite concluída para revisão do proprietário. Nenhuma publicação, conta ou domínio foi criado. A configuração publicada do ambiente não foi alterada.

## Auditoria e decisões

Foram lidos AGENTS.md, README, todos os arquivos de `docs/` e `conteudo/`, o HTML/CSS completo do protótipo, as três fotos originais, a identidade conceitual e as nove capturas fornecidas.

O protótipo prevalece sobre a imagem conceitual para navegação e composição: três itens de menu, designação de músico de sessão e fotos reais fornecidas. O código de produção está separado; todos os arquivos do pacote aprovado foram conferidos byte a byte com o ZIP original.

A aplicação mantém sete componentes de seção: Hero, About, Lessons, Recordings, Releases, Live e Contact. Links aprovados centralizados em `src/media.js`. Não foram acrescentados serviços ou conteúdos de marketing.

Removida a nota interna do Home Studio; mantidos os três equipamentos. O ponto 02 da metodologia usa exatamente o texto solicitado. Não há marcadores internos no conteúdo público.

## Evidências técnicas

- `npm install`: concluído; lockfile gerado.
- `npm run dev`: servidor iniciado e navegado em Chromium real.
- `npm run build`: passou, saída estática `dist/`.
- `npm test`, com `CHROMIUM_PATH=/usr/bin/chromium`: **7 testes passaram** na rodada final.
- Larguras verificadas: **375, 390, 768, 1280 e 1440 px**. Capturas completas reais geradas em `test-results/`.
- Sem overflow horizontal detectado nessas larguras; imagens visíveis e fontes Anton/Inter carregadas; sem erros JavaScript na página.
- Navegação de âncoras, quatro CTAs com dois destinos WhatsApp, quatro Shorts, quatro links de lançamentos e redes sociais conferidos contra os dados aprovados.
- Foco visível, link para pular ao conteúdo e navegação de teclado exercitados; movimento reduzido desativa rolagem animada e transições.
- Imagens abaixo da abertura usam lazy-loading e dimensões intrínsecas. O recorte decorativo oculto no celular permanece oculto, conforme o protótipo.
- Sem players automáticos, iframe, arquivos de vídeo, backend, segredos ou variáveis obrigatórias.
- Fotos secundárias convertidas para WebP, das dimensões originais: 519.799 → 234.932 bytes e 539.784 → 236.506 bytes. Foto principal mantida, já pequena (78.160 bytes).
- Ícones de seta e reprodução em SVG evitam diferenças de glifos/emoji entre sistemas.
- A versão de produção também foi aberta pelo `npm run preview`: HTTP 200, React renderizado, navegação e imagens visíveis funcionais, sem erros JavaScript.

Os testes de links conferem URLs e mensagens, sem prometer disponibilidade ou direitos de acesso das plataformas de terceiros. WhatsApp não foi acionado para enviar mensagens.

## Revisão visual e checklist de aceite

Capturas reais por seção foram comparadas lado a lado com as referências desktop de 1440 px e mobile de 390 px; versões de 1280, 768 e 375 px também foram inspecionadas. A hero preserva o enquadramento, assinatura, título gráfico, paleta e detalhe em P&B. As demais seções preservam CSS, ordem, espaçamentos e assimetria dos três registros de Ao Vivo. Não foram acrescentados ruído, filtros, efeitos ou cards.

**Diferença documentada:** os títulos das capturas fornecidas são visivelmente mais finos que a Anton real. O briefing exige explicitamente Anton: mantive essa família, seus pesos definidos pelo CSS e a composição original, sem substituir a fonte para imitar as capturas. Isso altera o peso visual e algumas quebras dos títulos. A fidelidade tipográfica pixel a pixel às capturas permanece pendente de revisão do proprietário; não é declarada correspondência perfeita.

O Google Fonts retornou bloqueio 403 no ambiente. A versão final usa as mesmas famílias Anton e Inter pelo Fontsource/jsDelivr, com versões fixas, TLS e fallback, sem empacotar arquivos de fontes. Seu carregamento foi confirmado no navegador.

Os critérios funcionais e de build foram atendidos nos testes descritos. A revisão de contraste e enquadramento foi visual; não substitui uma auditoria completa de acessibilidade ou a conferência em aparelhos físicos.

## Pendências previstas no briefing

- Conferência final do proprietário em celular real e aprovação visual, incluindo a diferença de peso dos títulos descrita acima.
- Capas oficiais dos lançamentos e miniaturas específicas dos Shorts não foram fornecidas. Mantida a apresentação editorial e as fotos ilustrativas existentes, sem afirmar que são capas oficiais ou imagens exatas de cada vídeo.
- Confirmação das autorizações de exibição dos registros, quando aplicável, pelo proprietário.
- Publicação somente após autorização. Instruções do Cloudflare Pages no README: build `npm run build`, saída `dist/`, sem necessidade de domínio comprado.
