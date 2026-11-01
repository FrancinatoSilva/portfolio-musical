# Prompt inicial para o Codex — Portfólio Francis Lean

## Configuração recomendada antes de iniciar (escolhida pelo usuário)

**Modelo para a implementação inicial:** **GPT-6.1 Sol**, com raciocínio **High**, caso essa combinação esteja disponível no seletor do Codex.

Para etapas posteriores, conforme a necessidade e a disponibilidade na conta:

| Etapa | Modelo recomendado | Raciocínio |
| --- | --- | --- |
| Implementação completa e primeira rodada de validação visual | **GPT-6.1 Sol** | **High** |
| Problemas complexos de responsividade, arquitetura ou fidelidade visual | **GPT-6 Astra** | **High** (ou outro nível disponível adequado) |
| Correções pontuais de layout, textos, links e componentes | **GPT-6.1 Terra** | **Medium** |

**Atenção:** estas são recomendações de configuração **para quem opera o Codex**, não instruções capazes de trocar automaticamente o modelo durante a execução. Se um modelo ou nível não aparecer na sua conta, use a melhor alternativa disponível. Não interrompa a tarefa por causa do nome do modelo. Modelos e níveis mais altos podem consumir mais da franquia de uso.

---

## Contexto e objetivo

Você está na pasta **`francis-lean-input-codex`**, com o material aprovado de uma landing page para **Francis Lean**, **guitarrista, músico de sessão e professor de guitarra/violão**. A página ficará na bio do Instagram e terá duas frentes de negócio: **aulas** (online e presenciais em Fortaleza) e **gravações remotas de guitarras**.

**Sua tarefa:** transformar o protótipo editorial aprovado em uma **versão de produção estática, mobile-first, em React + Vite**, preservando ao máximo a identidade visual, os textos e os comportamentos aprovados. Sem backend e preparada para **hospedagem gratuita no Cloudflare Pages**, sem compra de domínio.

O objetivo não é propor um novo visual. É **reproduzir com fidelidade o design já validado** e tornar o projeto confiável, responsivo, acessível e pronto para publicação após autorização.

## Etapa 1 — Auditoria obrigatória ANTES de codificar

1. Leia **`AGENTS.md`**, **`README.md`**, TODOS os arquivos de **`docs/`** e **`conteudo/`**. Identifique as prioridades e possíveis conflitos de informação.
2. Inspecione **`prototipo-aprovado/index.html`** e seus assets. Abra-o no navegador, se o ambiente permitir, para compreender composição, tipografia, hierarquia, navegação e comportamento.
3. Compare visualmente o protótipo com **`referencias/IDENTIDADE-VISUAL-APROVADA.png`**, a imagem conceitual que definiu a identidade do projeto, e com as capturas em **`referencias/previews/`** (desktop e mobile).
4. Verifique as imagens originais em **`midia/fotos-originais/`** e os links/créditos em **`conteudo/videos-e-lancamentos.md`**.
5. Relate sucintamente o que encontrou e avance para a implementação. **Não reabra decisões de design que já foram aprovadas** nem solicite nova autorização para começar a codificar.

## Etapa 2 — Implementação, com fidelidade visual como prioridade

1. Implemente em **React + Vite**. Use CSS ou Tailwind somente se a abordagem escolhida permitir reproduzir o protótipo **com precisão**. Evite dependências e abstrações desnecessárias.
2. **Preserve a hero aprovada**: foto principal dominante, assinatura manuscrita, nome gigante condensado, paleta escura/vermelha, composição assimétrica, detalhe documental em P&B, linhas e numerações discretas. **Não redesenhe a abertura.**
3. **Preserve a linguagem tipográfica**, sem substituições arbitrárias: elementos tipográficos gráficos já existentes no protótipo para a hero; **Anton** nos demais títulos condensados; **Inter** para textos. Mantenha hierarquia, espaçamento, proporções e pesos.
4. **Proibido adicionar** granulado, ruído, textura de filme, filtros novos, efeitos futuristas, glassmorphism ou cards genéricos. Use as fotografias reais fornecidas, sem inventar imagens do músico.
5. Desktop e mobile precisam transmitir a **mesma identidade**. Adapte apenas composição, proporções, cortes, espaçamentos e navegação para cada largura, respeitando as capturas aprovadas.
6. Mantenha as seções, na ordem editorial definida: **Quem sou eu** na abertura; **Aulas + Metodologia**; **Gravações + Trabalhos lançados + Home Studio**; **Ao Vivo**; **Contato**.
7. O menu superior tem **somente Aulas, Gravações e Ao Vivo**, levando às respectivas âncoras por rolagem suave (respeitando preferência por movimento reduzido).
8. Tenha **dois CTAs de WhatsApp com mensagens pré-preenchidas diferentes**: um para informações sobre aulas e outro para orçamento de gravações. Utilize o número e as mensagens em `conteudo/contato.md`.
9. Use **os links reais de YouTube e Spotify**, vídeos curtos e créditos indicados em `conteudo/videos-e-lancamentos.md`. Não coloque arquivos grandes de vídeo no repositório. Não use autoplay. Caso incorpore vídeo, carregue o player somente após interação quando possível.
10. Preserve **a voz pessoal e o texto aprovado de “Quem sou eu”**, incluindo referências de fé e a analogia do “purê de batatas”. O ponto 02 da metodologia deve dizer exatamente: **“Uma formação inicial de aproximadamente seis meses, com liberdade para continuar se aprofundando após este período”.**
11. Descreva Francis como **músico de sessão, guitarrista e professor**, nunca como “produtor musical”. Não invente trabalhos, depoimentos, resultados, credenciais, preços ou serviços.
12. No **Home Studio**, mantenha a relação de equipamentos fornecida, mas **não exiba** a nota interna sobre não ser necessária uma foto do setup.
13. Não publique textos internos ou marcadores de protótipo; **remova “Estudo de design / 2026”** de qualquer parte pública da página.

## Etapa 3 — Comparação visual e refinamento obrigatório

A fidelidade visual **não deve ser presumida apenas porque o site compila**.

1. Execute a aplicação e, se houver navegador de automação/captura disponível, gere **screenshots reais da implementação** para **desktop (1440 px e 1280 px)** e **mobile (390 px e 375 px)**. Inspecione também **768 px**.
2. Compare lado a lado com as referências de **`referencias/previews/`**, dando prioridade a: enquadramento da foto principal; tamanho/posicionamento de **FRANCIS LEAN**; assinatura; tipografia; respiro; alinhamento dos textos; cards de Ao Vivo; transição visual entre as seções.
3. Corrija diferenças **perceptíveis** sem inventar novos elementos de design, e repita a inspeção onde houver mudanças relevantes.
4. Se o ambiente **não permitir screenshots**, informe claramente essa limitação. Ainda assim, faça as verificações que forem possíveis e não declare fidelidade visual perfeita sem comparação.
5. Verifique ausência de overflow horizontal, cortes ruins, texto ilegível, espaços vazios não intencionais e elementos sobrepostos.

## Etapa 4 — Validação técnica e entrega

- Rode **`npm install`**, **`npm run dev`** para inspeção e **`npm run build`**; corrija erros reais encontrados.
- Teste âncoras de navegação, botões de WhatsApp, links de vídeos/músicas e links de Instagram/YouTube, além dos estados de foco e acessibilidade por teclado.
- Garanta HTML semântico, textos alternativos adequados, contraste legível, imagens otimizadas/lazy-loading fora da primeira dobra e respeito a **`prefers-reduced-motion`**.
- Mantenha os recursos estáticos locais organizados, sem vazamento de anotações internas ou dependência de serviços pagos.
- Faça uma revisão final com **`docs/CRITERIOS-DE-ACEITE.md`** e aponte qualquer critério não cumprido, com sua justificativa.
- Entregue um **projeto React/Vite executável**, um breve resumo dos arquivos alterados, os comandos locais e as instruções para publicar no **Cloudflare Pages** (build `npm run build`; saída `dist`) **somente quando o proprietário autorizar a publicação**.

## Restrições finais

**Conteúdo e design já estão aprovados.** Não recrie a página do zero, não altere a identidade visual e não acrescente funcionalidades não solicitadas (autenticação, pagamentos, agendamento complexo, dashboards, banco de dados etc.). Não modifique o protótipo aprovado como se fosse a versão de produção: utilize-o como referência preservada e crie a aplicação em estrutura própria.

**Primeira ação nesta sessão:** audite os materiais e implemente o projeto seguindo as etapas acima, sem interromper por pequenas lacunas não bloqueadoras. Caso não exista capa oficial de um lançamento, mantenha uma solução provisória coerente e documente a pendência sem afirmar que é a capa oficial.
