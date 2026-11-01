# Checklist de aceite antes da publicação

## Fidelidade visual
- [ ] Hero desktop reproduz a versão aprovada (fotografia, assinatura, nome condensado, posição e dimensão dos elementos).
- [ ] Versão mobile preserva a mesma identidade e não tem sobreposição ou cortes problemáticos.
- [ ] Nenhuma textura granulada/ruído/efeito de película foi adicionada.
- [ ] Tipografias seguem assinatura+nome gráfico da hero e Anton/Inter conforme o protótipo.
- [ ] Seções Aulas, Metodologia, Gravações, Trabalhos lançados, Ao Vivo e Contato seguem a linguagem editorial aprovada.
- [ ] A página não parece um catálogo de cards genéricos; três cards da seção Ao Vivo preservam o layout aprovado.

## Conteúdo
- [ ] “Francis Lean” e “músico de sessão” presentes corretamente; **sem** o cargo “produtor musical”.
- [ ] “Quem sou eu” mantém sua personalidade, fé, a metáfora de “purê de batatas” e a trajetória musical.
- [ ] Metodologia ponto 02 apresenta o texto solicitado **exatamente**.
- [ ] As duas músicas, artistas e créditos de guitarras estão corretos.
- [ ] Equipamentos: Audient EVO 4, Audio-Technica ATH-M40x, Edifier MR4 (não inventar outros).
- [ ] Não aparece “Estudo de design / 2026”, “protótipo”, “MVP” ou observações técnicas como a frase sobre não precisar de foto do setup.

## Funcional
- [ ] Menu Aulas → `#aulas`; Gravações → `#gravacoes`; Ao Vivo → `#ao-vivo`.
- [ ] CTA Aulas abre WhatsApp com mensagem de aulas.
- [ ] CTA Gravações abre WhatsApp com mensagem de gravação.
- [ ] Quatro Shorts abrem os vídeos corretos; dois lançamentos têm YouTube e Spotify corretos.
- [ ] Instagram e canal YouTube apontam para as URLs fornecidas.
- [ ] Nenhum link vazio ou asset quebrado.

## Qualidade
- [ ] Rodar `npm install`, `npm run dev` e `npm run build` sem erros.
- [ ] Testar pelo menos **375, 390, 768, 1280 e 1440 pixels** de largura.
- [ ] Sem barra horizontal indesejada ou quebra de texto importante.
- [ ] Links navegáveis por teclado com foco visível; labels e alt-text significativos.
- [ ] Imagens fora da dobra usam carregamento preguiçoso quando cabível; nenhum vídeo auto-inicia.
- [ ] Contraste confortável em fotografias iluminadas.
- [ ] `prefers-reduced-motion` respeitado.
- [ ] Site gerado como artefato estático, adequado a hospedagem gratuita no Cloudflare Pages.

## Revisão humana final
- [ ] Proprietário conferiu foto/corte em celular real.
- [ ] Direitos/autorização de exibição comercial dos registros de terceiros confirmados quando necessários.
- [ ] Proprietário aprovou versão final antes de publicar.
