# Sistema visual travado — Francis Lean

**Referências de maior prioridade**
1. `referencias/IDENTIDADE-VISUAL-APROVADA.png` — imagem conceitual aprovada como direção artística.
2. `prototipo-aprovado/index.html` — interpretação navegável aprovada, incluindo desktop e mobile.
3. `referencias/previews/` — capturas de tela de comparação.

## Linguagem visual
- **Editorial / pôster musical contemporâneo**, não site corporativo ou template de portfólio.
- **Imagem principal dominante**; composição assimétrica; forte contraste; tipografia marcante; elementos de interface mínimos.
- **Sem granulado/ruído/textura de filme.** A estética vem da composição e da iluminação real das fotos.
- Fotos reais com luz vermelha/âmbar, sombras profundas e pouquíssimo tratamento novo. P&B localizado apenas onde já aparece no protótipo aprovado.
- Elementos sutis: linhas finas, numerações, microtextos e recortes documentais discretos.

## Cores de base (CSS já presente no protótipo)
- Fundo `#09090d`
- Carvão `#111013`
- Vinho/painel `#120e11` e `#370a14` conforme o contexto
- Vermelho de destaque `#dc2626`
- Off-white `#f3eee5`
- Texto secundário `#b9b1ac`
- Usar **os valores do CSS do protótipo** como fonte de verdade quando houver variações.

## Tipografia
- **Assinatura do topo:** asset gráfico `prototipo-aprovado/assets/assinatura-referencia.png`, derivado do layout aprovado. Não substituir por fonte script genérica.
- **Nome enorme da hero:** asset `prototipo-aprovado/assets/nome-tipografico-referencia.png`, preserva proporções e textura de impressão original do conceito sem introduzir novos efeitos.
- **Outros títulos:** `'Anton', Impact, 'Arial Narrow', sans-serif` (ou a regra exata existente no CSS do protótipo).
- **Texto / navegação:** `'Inter', Arial, sans-serif`, com tracking elevado em etiquetas e microtextos.
- Não adicionar novos estilos ou fontes arbitrárias. As fontes exatas da imagem gerada não são identificáveis; use a solução existente, aprovada visualmente.

## Imagens
| Arquivo original | Utilização aprovada |
| --- | --- |
| `midia/fotos-originais/img_principal.JPEG` | Hero em destaque |
| `midia/fotos-originais/img_secundaria1.jpeg` | Ao Vivo / recorte documental |
| `midia/fotos-originais/img_secundaria2.jpeg` | Gravações / cena de performance com computador ao fundo |

- `referencias/instagram-referencia-visual.png` **não** é um asset do site: fornece contexto da estética do perfil.
- A terceira foto **não deve ser descrita como fotografia do home studio**.
- A referência conceitual é para **comparação**, não para ser usada como fundo único da página: elementos precisam permanecer funcionais.

## Desktop vs. mobile
- Reorganizar **a mesma identidade**, sem trocar família de fonte, cor principal ou linguagem de composição.
- Na primeira dobra, manter o guitarrista e a hierarquia do nome legíveis.
- Em Aulas, Gravações, Lançamentos, Ao Vivo e Contato, preservar o ritmo editorial e evitar cartões arredondados genéricos.
- Confirmar diferentes larguras e alturas; não forçar screenshot de desktop como imagem de fundo no mobile.

## Restrições
- Proibidos: granulado novo, film grain, ruído, glassmorphism, gradiente decorativo sem função, imagens de terceiros não autorizadas, redirecionamentos ocultos e animações chamativas.
- **Não altere o design aprovado por conveniência do framework.** Se necessário, reproduza CSS original antes de reorganizá-lo.
