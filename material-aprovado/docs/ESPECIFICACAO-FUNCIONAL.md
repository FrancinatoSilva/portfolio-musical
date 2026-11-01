# Especificação funcional — landing page Francis Lean

## Objetivo do produto
Transformar visitas do Instagram em pedidos de **aulas de guitarra/violão** ou de **gravação online de guitarra**. Perfil de músico de sessão e professor. Conversão realizada via WhatsApp.

## Público
- Pessoas interessadas em aulas online ou presenciais (Fortaleza, CE).
- Artistas e produtores que precisam de guitarras gravadas e arranjos para suas músicas.

## Arquitetura de informação (uma página)
1. **Abertura / hero:** foto principal em palco, assinatura, nome em display grande, apresentação curta e navegação.
2. **Quem sou eu:** texto pessoal aprovado; identidade e trajetória musical.
3. **Aulas:** guitarra e violão, presencial/online, iniciante a avançado; CTA de WhatsApp.
4. **Metodologia:** ambiente leve e prazeroso; segundo ponto literalmente: **“Uma formação inicial de aproximadamente seis meses, com liberdade para continuar se aprofundando após este período”.**
5. **Gravações:** posicionamento como **músico de sessão**; valorização do arranjo e do contexto musical; vídeo do solo de *Jardim Fechado*; CTA próprio.
6. **Trabalhos lançados:** *Jardim Fechado* — Sara Souza e *Salvo Estou* — Davi Vieira; crédito **gravação das guitarras**, com links Spotify e YouTube.
7. **Home studio:** apenas a lista de equipamentos confirmados, sem exigência de foto.
8. **Ao Vivo:** três performances YouTube Shorts, próximas ao final da página, com layout assimétrico aprovado e apoio fotográfico discreto.
9. **Contato / rodapé:** dois CTAs WhatsApp, Instagram, YouTube e Fortaleza — CE. Rodapé final sem “Estudo de design / 2026”.

## Navegação
Somente três itens principais: **Aulas**, **Gravações**, **Ao Vivo**, com `href` ancorando em `#aulas`, `#gravacoes`, `#ao-vivo`. Rolagem suave, respeitando movimento reduzido. Não criar páginas secundárias no MVP.

## Conversão
- **Aulas:** https://wa.me/5585991006505?text=Ol%C3%A1%2C%20Francis!%20Gostaria%20de%20saber%20mais%20sobre%20suas%20aulas.
- **Gravações:** https://wa.me/5585991006505?text=Ol%C3%A1%2C%20Francis!%20Gostaria%20de%20conversar%20sobre%20uma%20grava%C3%A7%C3%A3o.
- Abrir em outra aba com `rel="noopener noreferrer"` quando apropriado.

## Vídeos e lançamentos
- **Quatro YouTube Shorts:** um de gravação e três de performance — URLs completas em `conteudo/videos-e-lancamentos.md`.
- **Dois lançamentos:** YouTube + Spotify, links externos.
- O protótipo validado apresenta **cards clicáveis com links externos**. Pode ser acrescentada reprodução incorporada sob demanda **somente se** ela não alterar o visual aprovado e for solicitada/validada pelo proprietário; o funcionamento original dos links deve ser preservado.
- Sem autoplay; otimizar dados para visitantes de celular.
- **Não inventar** capa oficial, thumbnail ou crédito que não tenha sido fornecido.

## Comportamento mobile
- Mesmo sistema de cores e tipografia de desktop; reordenar elementos responsivamente, não criar uma nova direção de arte.
- Manter visíveis os três itens de navegação em larguras usuais de celular.
- Garantir enquadramento correto do guitarrista, sem cortar pontos centrais da foto ou esconder textos de forma problemática.

## Requisitos não funcionais
- Linguagem `pt-BR`, SEO básico (title/description, meta viewport, OG opcional com imagem autorizada).
- Estrutura semântica e links descritivos; textos alternativos adequados nas imagens.
- Contraste e focos visíveis; teclado e `prefers-reduced-motion`.
- Lazy-load nas imagens abaixo da abertura; usar dimensões de imagem quando possível para evitar layout shift.
- Não exigir backend ou serviços pagos.
- Build estático: Vite → `dist/` para Cloudflare Pages.

## Fora do escopo por enquanto
- Preços, agendamento online, contratos, sistema de alunos, login, pagamentos, CMS, newsletter, marketing automatizado.
- Fotos do home studio e capas oficiais de trabalhos não fornecidas.
- Integrações que exijam chaves privadas no frontend.
