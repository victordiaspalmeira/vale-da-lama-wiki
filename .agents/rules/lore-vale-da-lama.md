---
trigger: always_on
---

# Diretrizes da Wiki do Vale da Lama (Quartz v4)

## 1. Público e Tom
- **Wiki para Jogadores:** Todo conteúdo publicado em `content/` (exceto `private/` e `templates/`) é **primariamente para jogadores**, escrito de forma *in-universe* / enciclopédica.
- **Proibido em páginas públicas:** Não incluir seções como `Uso na Mesa`, `Ganchos de Aventura`, segredos exclusivos de mestre ou spoilers ocultos dos jogadores.
- **Nunca inventar lore sem confirmação:** Se faltar informação, usar `*A preencher.*` (ou perguntar ao usuário) em vez de inventar fatos ou nomes.

## 2. Templates e Estrutura HTML
- Usar os modelos em `content/templates/`:
  - `Template NPC.md` (também aplicado a Exilados, Deuses e entidades únicas)
  - `Template Lugar.md`
  - `Template Tribo.md`
  - `Template Criatura.md`
  - `Template Evento.md`
  - `Template Conceito.md`
- **Links dentro de `<table>` HTML (`.infobox`):** O Quartz não converte `[[wikilinks]]` dentro de blocos `<table>` HTML crus. Sempre usar `<a href="../Pasta/Nome-da-Pagina" class="internal">Rótulo</a>` dentro da infobox, e `[[Pasta/Nome da Pagina|Rótulo]]` no corpo Markdown.
- **Links em tabelas Markdown:** Usar `[[Pasta/Nome da Pagina\|Rótulo]]` (pipe escapado).

## 3. Fatos Estabelecidos (Não Contradizer)
- **Raiz-Funda:** Feita primariamente de habitações escavadas nos imensos Cogumelos Nodosos e de palafitas (não existe página separada de "Elenco de Raiz-Funda").
- **Lago da Grande Tirana:** O lago já existia antes da queda de Cinderath; é a convergência das águas que se originam das Montanhas do Oeste e passam por todo o vale. Não é cratera nem local sagrado de desova de dragão.
- **Krr'tak:** Fêmea, vive no território entre os Masca-Musgo e os Ferve-Alga; alimenta-se de criaturas descendentes de outros Deuses (como Deuses-Fera) e intrusos; acha péssimo o gosto de Goblins e evita matá-los por uma dívida antiga com Nyog'Sothep, mas não hesita se necessário; senso de humor pastelão e extremamente violento.
- **Sss'kar:** É uma sanguessuga Deus-Fera colossal (não uma serpente/ser ofídico).
- **Mael'ra e Tece-Pele:** Mael'ra é negociadora de favores; troca informação por informação, mas concede favores específicos em troca de um vínculo espiritual com a teia (fio espiritual). Quem não paga em tempo hábil tem a alma puxada até seu covil e devorada, enquanto o corpo vazio vaga pelo pântano como berçário para aranhas parasitas.
- **Ulok, a Grande Javali:** Vive nas Terras Verdejantes (depois das Ruínas dos Sem-Nome). Não existe "Javali de Musgo-Negro".
- **Brejo do Musgo-Negro:** Abriga **Suuhr**, um Deus Menor Cobra fêmea feita de piche líquido (gorda e preguiçosa; aceita oferendas de caça fresca, especialmente sapos e coelhos).
- **Micélio Dourado e Masca-Musgo:** O antigo "Musgo Dourado" foi corrigido para **Micélio Dourado** (por ser fungo, não musgo). O nome da tribo **Masca-Musgo** persiste porque precede a descoberta do Micélio — musgo comum era uma das principais fontes de alimento dos Goblins nas montanhas e arredores quando não podiam escolher o que comer.
- **Sem menções a:** `Quitina Gigante`, `Raiz-Ferro` ou `Febre do Musgo`.

## 4. Validação
- Após editar páginas, rodar `npm run quartz -- build` para garantir que não há erros de build.
