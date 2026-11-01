# Francis Lean — pacote de entrada para o Codex

**Objetivo:** implementar a versão de produção da landing page musical, com a aparência da **versão editorial aprovada** e sem custos iniciais de hospedagem ou domínio.

Este diretório é **um pacote de briefing + mídia + protótipo visual**, e **não** é, por si só, o projeto final em React. Não há necessidade de buscar materiais das conversas anteriores.

## Primeiros passos

1. Abra **`PROMPT-INICIAL-CODEX.md`**. Antes de começar, escolha no seletor do Codex **GPT-6.1 Sol + High** (se disponível); o arquivo também orienta quando usar Astra ou Terra. Depois, use suas instruções para iniciar o trabalho.
2. O Codex deve ler **`AGENTS.md`** e a **`docs/ESPECIFICACAO-FUNCIONAL.md`** antes de programar.
3. Abra **`prototipo-aprovado/index.html`** para ver o layout navegável aprovado. Este é o padrão de **layout, conteúdo e comportamento**.
4. Consulte **`referencias/IDENTIDADE-VISUAL-APROVADA.png`** e as capturas em `referencias/previews/`. A imagem conceitual determina a **direção artística**, mas não substitui o protótipo real, que define o arranjo responsivo.
5. Use `conteudo/` e `midia/` como fontes de conteúdo. Não copie notas de desenvolvimento para a página pública.

## Estrutura

```text
francis-lean-input-codex/
├── README.md                           ← este arquivo
├── AGENTS.md                           ← regras permanentes para o Codex
├── PROMPT-INICIAL-CODEX.md             ← pedido pronto para iniciar implementação
├── docs/
│   ├── ESPECIFICACAO-FUNCIONAL.md
│   ├── SISTEMA-VISUAL.md
│   ├── CRITERIOS-DE-ACEITE.md
│   └── PENDENCIAS-E-OBSERVACOES.md
├── conteudo/
│   ├── conteudo-editorial.md
│   ├── quem-sou-eu-aprovado.md
│   ├── conteudo-original.md
│   ├── videos-e-lancamentos.md
│   └── contato.md
├── midia/
│   └── fotos-originais/
├── referencias/
│   ├── IDENTIDADE-VISUAL-APROVADA.png
│   ├── instagram-referencia-visual.png
│   └── previews/
└── prototipo-aprovado/
    ├── index.html
    └── assets/
```

## Ordem de prioridade em caso de conflito

1. **Decisões finais explícitas do briefing e de `AGENTS.md`** (ex.: não tratar Francis como produtor musical, não exibir textos internos).
2. **Protótipo aprovado**: composição, hierarquia, textos já validados, responsividade e interações.
3. **Imagem da identidade visual aprovada**: atmosfera e tipografia de referência.
4. **Textos editoriais em `conteudo/`**: fonte para pequenas revisões, sem inventar fatos.

**Atenção:** o nome do projeto é *Francis Lean*. A designação profissional aprovada é **guitarrista, músico de sessão e professor**, não “produtor musical”.
