# Instruções para agentes de codificação — Francis Lean

## Escopo
Criar um site estático, responsivo, mobile-first, de **uma página**, a partir dos materiais fornecidos, para divulgação de aulas de guitarra/violão e gravações online como músico de sessão. A página ficará na bio do Instagram.

## REGRAS INEGOCIÁVEIS
- **Preserve a identidade aprovada.** Comece inspecionando `prototipo-aprovado/index.html`, `referencias/IDENTIDADE-VISUAL-APROVADA.png` e as prévias desktop/mobile. Não redesenhe a hero por conta própria.
- **Não acrescente granulado, ruído, textura de filme, filtros de película, elementos brilhantes/futuristas, glassmorphism, sombras exageradas ou cards genéricos.**
- **Não altere a linguagem tipográfica.** A assinatura manuscrita e o nome condensado da hero existem como assets de referência no protótipo. Outros títulos usam a mesma família condensada do protótipo (Anton) e os textos usam Inter; preserve pesos, proporções, espaçamentos e hierarquia. Não inclua arquivos de fonte no pacote final para o usuário.
- **Não altere** cores, enquadramentos, organização editorial e espaçamentos a ponto de descaracterizar a versão aprovada.
- **Não apresente Francis como produtor musical**. Usar “músico de sessão”, “guitarrista” e “professor”.
- O menu superior contém **somente** os links **Aulas**, **Gravações**, **Ao Vivo**. O contato também aparece como CTA nas seções e no rodapé; não criar uma quarta opção principal de menu.
- Manter 2 links **distintos** para WhatsApp, com mensagens pré-preenchidas específicas de aulas e gravações.
- **Não exibir** “Estudo de design / 2026”, referências a “protótipo”, “MVP”, ou frases dirigidas ao desenvolvedor no site final.
- Não inventar preços, currículos, depoimentos, certificações, resultados, equipamentos, serviços, prazos ou promessas.
- Textos e fotos preservam autenticidade, fé e personalidade do músico (incluindo “purê de batatas” e seu humor na seção pessoal).
- As três fotos originais são a fonte principal. Não substituir por fotografias geradas, bancos de imagem ou imagens que imitem Francis.
- Mobile e desktop devem parecer a **mesma marca**, e não dois designs diferentes.

## Fontes de verdade
- Para estilo/aparência funcional: `prototipo-aprovado/index.html` e `referencias/`.
- Para texto e créditos dos trabalhos: `conteudo/`.
- Para imagens: `midia/fotos-originais/` (e os crops aprovados em `prototipo-aprovado/assets/`).
- Para critérios de aprovação: `docs/CRITERIOS-DE-ACEITE.md`.

## Implementação
- Preferência: React + Vite e CSS/Tailwind somente se reproduzirem o design com fidelidade. Não migrar para frameworks que introduzam custos, backend ou complexidade desnecessária.
- Site estático, sem autenticação, banco de dados, checkout ou CMS na primeira versão.
- Preferir componentes pequenos, dados de mídia separados e nomes claros.
- Priorizar velocidade de carregamento, acessibilidade, semântica e links funcionais; lazy-loading para mídias fora da hero, respeito a `prefers-reduced-motion`.
- Nunca inserir `iframe` de YouTube com autoplay. Se implementar reprodução na própria página, carregar o player apenas após ação do visitante e preservar a aparência aprovada dos cards.
- A revisão final deve comparar renderizações desktop e mobile com as imagens em `referencias/previews/`.

## Correção de conteúdo antes de publicar
No protótipo há uma frase **interna** dentro do bloco Home Studio: “sem necessidade de exibir uma foto do setup nesta versão”. Essa instrução não deve aparecer no site público. Preserve a lista dos três equipamentos e substitua a frase completa por uma descrição curta e natural, ou retire a frase (sem alterar o design).

## Entregável esperado do Codex
Um repositório de site executável, instruções de execução (`npm install`, `npm run dev`, `npm run build`), testes mínimos de navegação/links e, após validação do usuário, instruções de publicação gratuita no Cloudflare Pages. Não publicar automaticamente sem autorização.
