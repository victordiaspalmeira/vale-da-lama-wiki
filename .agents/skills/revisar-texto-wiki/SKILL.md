---
name: revisar-texto-wiki
description: >-
  Use this skill when the user asks to improve, rewrite, polish, or review the
  prose, style, clarity, or immersion of wiki pages in Vale da Lama - Goblinoides.
---

# Revisão e Melhoria de Textos da Wiki

Procedimento para elevar a qualidade literária, a clareza e a imersão *in-universe* das páginas da wiki **Vale da Lama - Goblinoides** sem violar o cânone nem introduzir spoilers.

## Regras Inegociáveis

1. **Zero Invenção de Lore:** Nunca invente nomes próprios, eventos históricos, segredos de mestre ou fatos não confirmados. Se faltar informação canônica, mantenha `*A preencher.*` ou pergunte ao usuário.
2. **Público-Alvo (Jogadores):** Toda página pública deve ser legível por jogadores. Nunca inclua seções de mestre (`Uso na Mesa`, `Ganchos de Aventura`), metagame ou spoilers da campanha.
3. **Cânone e Tabus:** Respeite integralmente `.agents/rules/lore-vale-da-lama.md` (incluindo termos proibidos como `Quitina Gigante`, `Raiz-Ferro` e `Febre do Musgo`).

## Fluxo de Revisão por Página

1. **Ler a página inteira e o contexto mínimo:**
   - Identifique o tipo de página e o template correspondente em `content/templates/` (`Template NPC.md`, `Template Lugar.md`, `Template Tribo.md`, `Template Criatura.md`, `Template Evento.md`, `Template Conceito.md`).
2. **Cortar redundância e prosa burocrática:**
   - Elimine repetições entre a `.infobox`, a introdução e as seções internas.
   - Troque construções genéricas de ficha de RPG (*"é responsável por"*, *"atua como"*, *"desempenha o papel de"*, *"garante a coesão"*) por verbos diretos e concretos.
   - Evite repetir adjetivos e clichês no mesmo parágrafo (ex.: *"sombrio"*, *"misterioso"*, *"ancestral"*, *"implacável"* em excesso).
3. **Equilíbrio entre Objetividade de Wiki e Tom OSR Sóbrio:**
   - **Wiki em primeiro lugar:** o texto deve ser claro, direto e fácil de consultar na mesa. Evite excesso de metáforas, adjetivação carregada ou prosa excessivamente poética que esconda a informação prática.
   - **Tom OSR contido:** mantenha atmosfera sombria, folclórica e de sobrevivência sem floreios longos — frases firmes, concretas e funcionais.
   - Nunca copie rascunhos do usuário palavra por palavra; adapte o conteúdo para prosa enciclopédica limpa com sabor OSR.
   - Em **O que se Conta pelo Pântano**, escreva rumores curtos e concretos ouvidos no cais ou nas fogueiras, sem repetir o texto enciclopédico acima.
4. **Conferir formatação Quartz v4:**
   - Dentro de `<table>` HTML (`.infobox`), use sempre `<a href="../Pasta/Slug-da-Pagina" class="internal">Rótulo</a>`.
   - No corpo Markdown, use `[[Pasta/Nome da Pagina|Rótulo]]`.
   - Em tabelas Markdown, escape o pipe: `[[Pasta/Nome da Pagina\|Rótulo]]`.
   - Preserve comentários e estrutura de seções do template aplicável.
5. **Validar o build:**
   - Execute `npm run quartz -- build` após concluir as edições e confirme saída com código `0`.
