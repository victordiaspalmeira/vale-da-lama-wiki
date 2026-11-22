# Resumo Completo do Repositório — Wiki do Vale da Lama

Documento de handoff para contextualizar outro agente sobre o estado atual do repositório `wiki-vale-da-lama` (Quartz v4).

---

## 1. Stack, Build e Configuração
- **Gerador:** Quartz v4.5.2 (`npm run quartz -- build`, saída em `public/`).
- **Configuração (`quartz.config.ts`):**
  - `baseUrl`: `victordiaspalmeira.github.io/vale-da-lama-wiki`
  - `locale`: `pt-BR`
  - `enableSPA`: `true`, `Plugin.ContentIndex` habilitado.
  - `ignorePatterns`: `["private", "templates", ".obsidian"]` — portanto `content/templates/` e `content/private/` **não** vão para o site publicado.
- **Estilo (`quartz/styles/custom.scss`):**
  - Estética Web 1.0 / OSR dark/light (`:root[saved-theme="dark"]`, bordas retas sem `border-radius`, fundo texturizado).
  - `.infobox` com `width: 330px`, `overflow: hidden`, `.infobox-image img` com `box-sizing: border-box`, e regras explícitas para `.infobox .table-container > table` e `td` (`margin: 0 !important`, `padding: 0 !important`, `min-width: 0 !important`, `line-height: 1.35 !important`, `table-layout: fixed`, `white-space: normal`) para evitar estouro de largura sobre o `base.scss` do Quartz.
- **Regras do Workspace:** [`.agents/rules/lore-vale-da-lama.md`](.agents/rules/lore-vale-da-lama.md) (`trigger: always_on`) define o tom *in-universe* para jogadores, proibição de spoilers/seções de mestre, regras de links HTML dentro de `<table>` (`.infobox`) e fatos canônicos estabelecidos.

---

## 2. O que foi Adicionado, Alterado e Excluído

### Adicionado recentemente
- **Templates em `content/templates/` (6 arquivos):**
  - `Template NPC.md` (aplicado a NPCs, Exilados, Deuses e entidades únicas)
  - `Template Lugar.md`
  - `Template Tribo.md`
  - `Template Criatura.md`
  - `Template Evento.md`
  - `Template Conceito.md`
- **Novas páginas de conteúdo:**
  - `content/Exilados/Exilados.md`, `Brask.md`, `Nokk.md`, `Skrit.md`
  - `content/Deuses-Fera/Suuhr.md` (Deus Menor Cobra feita de piche líquido no Brejo do Musgo-Negro)
  - `content/Criaturas/Ulok.md` (Ulok, a Grande Javali)
  - `content/Geografia/Terras Verdejantes.md` (região florestal fora do vale, além das Ruínas dos Sem-Nome)
- **Arquivo privado de coleta de lore:**
  - `content/private/Banco de Lore - Perguntas e Respostas.md` (contém Perguntas 1–6 respondidas e integradas à wiki, e **Pergunta 7** aguardando resposta).
- **Rule do workspace:** `.agents/rules/lore-vale-da-lama.md`.

### Excluído / Substituído
- **Removido:** `Elenco de Raiz-Funda.md` (unificado em `Geografia/Raiz-Funda.md`).
- **Removido:** `content/Criaturas/Javali de Musgo-Negro.md` — não existe na campanha; substituído por `content/Criaturas/Ulok.md` (e imagem `content/assets/javali-musgo-negro.jpg` renomeada para `content/assets/ulok.jpg`). Limpas todas as referências em `Pocos de Turfa e Brejo do Musgo-Negro.md`, `Gnarl Martelo-Torto.md`, `Vale da Lama.md`, `Deus-Fera.md` e `index.md`.
- **Removido:** `content/Deuses-Fera/Cobra do Brejo do Musgo-Negro.md` — substituído por `content/Deuses-Fera/Suuhr.md`.
- **Removidos das páginas públicas:** seções `Uso na Mesa` e `Ganchos de Aventura`, além de referências obsoletas a `Quitina Gigante`, `Raiz-Ferro` e `Febre do Musgo`.

### Alterações estruturais e de lore importantes
- **Infoboxes:** Todos os `[[wikilinks]]` dentro de `<table>` HTML nas páginas publicadas foram convertidos para `<a href="..." class="internal">...</a>` (pois o Quartz não converte wikilinks dentro de HTML bruto).
- **Correções canônicas aplicadas:**
  - `Raiz-Funda`: habitações escavadas nos imensos Cogumelos Nodosos e palafitas.
  - `Lago da Grande Tirana`: já existia antes da queda de Cinderath (convergência das águas das Montanhas do Oeste); não é cratera nem local de desova de dragão; os povos evitam o lago porque feras espirituais batalham lá e grandes predadores vão se hidratar.
  - `Krr'tak`: fêmea, vive entre Masca-Musgo e Ferve-Alga, humor pastelão e extremamente violento, come descendentes de outros Deuses e intrusos, acha péssimo o gosto de goblins e evita matá-los por dívida antiga com Nyog'Sothep.
  - `Sss'kar`: sanguessuga Deus-Fera colossal (não serpente/ser ofídico); usa `../assets/rainha-sanguessuga.jpg`.
  - `Mael'ra` e `Tece-Pele`: negociadora de favores; troca informação por informação, ou concede favores em troca de vínculo espiritual com a teia; quem não paga tem a alma puxada e devorada, e o corpo vira berçário de aranhas parasitas.
  - `Exilados`: nunca houve des-exílio; são recebidos com flechas de aviso e mortos se insistirem.
  - `Comércio e Fronteiras`: comércio inteiramente por escambo; principal tensão é o desrespeito às fronteiras entre Masca-Musgo e Ferve-Alga (Ventre-Inchado raramente interagem).
  - `Ruínas dos Sem-Nome`: goblins nunca exploraram por medo/superstição de criaturas de fogo e fumaça nos túneis ocultos.

### Estado atual do Git (`git status --short`)
- Modificados (`M`): `content/Criaturas/Ulok.md`, `content/Deuses-Fera/Deus-Fera.md`, `content/Deuses-Fera/Og'gath.md`, `content/Exilados/Exilados.md`, `content/Geografia/Lago da Grande Tirana.md`, `content/Geografia/Pocos de Turfa e Brejo do Musgo-Negro.md`, `content/Geografia/Ruinas dos Sem-Nome.md`, `content/Geografia/Terras Verdejantes.md`, `content/Tribos/Ferve-Alga (Olhos-Vermelhos).md`, `content/Tribos/Masca-Musgo.md`, `content/index.md`
- Deletados (`D`): `content/Deuses-Fera/Cobra do Brejo do Musgo-Negro.md`
- Não rastreados (`??`): `.agents/`, `content/Deuses-Fera/Suuhr.md`, `content/private/`

---

## 3. Resumo de Cada Página (`content/`)

Totais atuais: **68 arquivos `.md`** (61 páginas publicadas, 6 templates, 1 banco privado).

### Página Inicial
- **`content/index.md`** (`Início` | sem infobox): Portal de entrada da wiki com capa (`assets/capa-vale-da-lama.jpg`) e tabela de navegação por categorias (Geografia, História, Cosmologia, Tribos, Deuses-Fera, Criaturas & NPCs, Exilados).

### `content/Geografia/` (11 páginas — `Template Lugar`)
- **`Vale da Lama.md`** (`../assets/mapa-vale-da-lama.jpg` | 1 lacuna): Visão geral do vale pantanoso, história pós-Grande Morte Lenta, mapa, 8 regiões principais e rumores (Og'gath, Krr'tak, Ulok).
- **`Raiz-Funda.md`** (`../assets/raiz-funda.jpg` | 1 lacuna): Aldeia principal dos Masca-Musgo escavada em Cogumelos Nodosos e palafitas; defesas, pontos de interesse (Forja de Gnarl, Jardim Dourado, Casa do Ancião, Cais) e tabela de moradores/líderes.
- **`Jardim Dourado.md`** (`../assets/jardim-dourado.webp` | 2 lacunas): Santuário sagrado de Nyog'Sothep no coração de Raiz-Funda; abriga o Ídolo, o Ciclo da Devolução e o Musgo Dourado; acesso restrito.
- **`Lago da Grande Tirana.md`** (placeholder | 1 lacuna): Grande bacia central onde convergem as águas das Montanhas do Oeste e onde caiu Cinderath; evitado pelos povos por batalhas de feras espirituais, predadores e por Og'gath.
- **`Aguas Paradas Profundas.md`** (placeholder | 2 lacunas): Brejos escuros e sem correnteza ao sul do lago central; domínio dos Ventre-Inchado, criadouros de sanguessugas e câmara de Murok.
- **`Copas da Teia Prateada.md`** (placeholder | 2 lacunas): Manguezais altos no noroeste com dois andares (dossel suspenso dos Tece-Pele e canais inferiores); aranhas gigantes do dossel.
- **`Costa Salobra.md`** (placeholder | 2 lacunas): Faixa costeira nordeste voltada para o Mar das Brumas; caldeirões de salmoura dos Ferve-Alga e áreas sagradas de desova de Karkinos.
- **`Delta das Aguas Mortas.md`** (placeholder | 2 lacunas): Labirinto de ilhotas e canais mutáveis no leste/sudeste ligando as ruínas e o Rio Lodo-Negro ao Mar das Brumas; frequentado por contrabandistas como Skrit.
- **`Montanhas do Oeste.md`** (placeholder | 3 lacunas): Cordilheira árida fora da borda oeste, antigo domínio dos Dragões Vermelhos e local das minas onde o Ídolo foi achado.
- **`Pocos de Turfa e Brejo do Musgo-Negro.md`** (placeholder | 2 lacunas): Planície ocre-acinzentada no sopé das montanhas com piche natural, gases inflamáveis, musgo-negro ácido e lar de Suuhr.
- **`Ruinas dos Sem-Nome.md`** (`../assets/ruinas-dos-sem-nome.jpg` | 0 lacunas): "As Pedras Mortas", ruínas élficas pré-dracônicas evitadas por serem estéreis aos fungos e por superstição de criaturas de fogo e fumaça nos túneis; rondadas por Nokk.
- **`Terras Verdejantes.md`** (placeholder | 2 lacunas): Região florestal saudável fora do vale (além das ruínas), associada à cura/harmonia, repleta de ruínas antigas, protegida contra a expansão de Nyog'Sothep e governada por Ulok.

### `content/Tribos/` (10 páginas: 5 Tribos + 5 Práticas/Conceitos)
- **`Masca-Musgo.md`** (`../assets/masca-musgo.jpg` | 2 lacunas): Tribo do Oeste em Raiz-Funda, devota de Nyog'Sothep; valores (Ciclo da Devolução, Lei da Troca, Código do Fogo), hierarquia, comércio por escambo e atritos de fronteira com Ferve-Alga.
- **`Ferve-Alga (Olhos-Vermelhos).md`** (placeholder | 2 lacunas): Tribo do Nordeste na Costa Salobra, devota de Karkinos; ferve algas e salmoura, protege áreas de desova, disputa fronteiras com Masca-Musgo.
- **`Ventre-Inchado.md`** (placeholder | 2 lacunas): Tribo do Sul nas Águas Paradas Profundas, devota de Sss'kar; criam sanguessugas gigantes, buscam longevidade pelo sangue, liderados por anciãos vampíricos como Murok; raramente interagem com outros povos.
- **`Tece-Pele.md`** (placeholder | 4 lacunas): Tribo nômade devota de Mael'ra; acampamentos suspensos, olhos e ouvidos pelo pântano, troca de informações, vínculo espiritual e suturas em carne viva.
- **`Povo Dragão.md`** (placeholder | 3 lacunas): Dragões Vermelhos (Filhos de Ashkor) das Montanhas do Oeste; derrotados na Grande Morte Lenta e exterminados na Primeira Caçada Sagrada (incluindo Vexar e a Matriarca Cinderath).
- **`Preparacao a Frio.md`** (placeholder | 3 lacunas): Técnicas artesanais sem fogo dos Masca-Musgo (fermentação, curtume, alquimia, madeira/osso/piche).
- **`Salmoura e Sal Cristalizado.md`** (placeholder | 2 lacunas): Produtos dos caldeirões dos Ferve-Alga usados em conservação, purificação, escambo e ritos de coragem.
- **`Sanguessugas Gigantes.md`** (placeholder | 3 lacunas): Criadas em ânforas pelos Ventre-Inchado para sangrias e oferendas a Sss'kar.
- **`Suturas em Carne Viva.md`** (placeholder | 2 lacunas): Cirurgia ritual com seda prateada pelos Tece-Pele e funcionamento detalhado do Vínculo com a Teia de Mael'ra.
- **`Teia Prateada.md`** (placeholder | 2 lacunas): Símbolo de Mael'ra feito de seda de aranhas gigantes do dossel; acampamentos e rito de marcação.

### `content/Cosmologia/` (9 páginas: 1 Entidade + 8 Conceitos)
- **`Nyog'Sothep.md`** (`../assets/nyog-sothep.jpg` | 1 lacuna): Deus Verdadeiro fúngico sem forma física definida; Manifestação do Enxame, Éditos e Anátemas, Ciclo da Devolução (3 estágios) e Jardim Dourado.
- **`Deus Verdadeiro.md`** (placeholder | 2 lacunas): Categoria de divindades supremas de interação indireta no plano físico, em contraste com Deuses-Fera.
- **`Idolo de Nyog'Sothep.md`** (placeholder | 1 lacuna): Relíquia de madeira (mosca sobre boca de sapo) achada nas minas do oeste que produz Musgo Dourado; guardada no Jardim Dourado.
- **`Musgo Dourado.md`** (placeholder | 1 lacuna): Musgo-fungo simbiótico (*Aurumycota sothepi*) usado para cura, visões e risco de Ascensão fúngica.
- **`Animismo.md`** (placeholder | 2 lacunas): Crença de que o pântano é vivo e possui memória (ferramentas, trilhas, águas).
- **`Lei da Troca.md`** (placeholder | 1 lacuna): Princípio de reciprocidade obrigatória ao colher, caçar ou viajar; gestos e punições por quebra.
- **`Codigo de Honra do Fogo.md`** (placeholder | 1 lacuna): Distinção entre fogo-ferramenta permitido e fogo-profano (combate, punição, cremação).
- **`Sentenca do Esquecimento.md`** (placeholder | 3 lacunas): Marca de Cinza Fria (infrações menores) e Sentença do Esquecimento (pena capital para crimes com fogo).
- **`Mascara de Ervas Amargas.md`** (placeholder | 2 lacunas): Respirador de couro curtido a frio e ervas usado para filtrar esporos densos e gases.

### `content/Deuses-Fera/` (7 páginas: 1 Conceito + 6 Entidades)
- **`Deus-Fera.md`** (placeholder | 0 lacunas): Conceito dos Deuses-Fera (transitam entre etéreo e físico), tabela comparativa e regras de caçada (Ninhadas vs. Territórios Sagrados de Desova).
- **`Karkinos.md`** (`../assets/karkinos.jpg` | 2 lacunas): Deus-Caranguejo da Costa Salobra, adorado pelos Ferve-Alga; governa as marés e áreas de desova.
- **`Sss'kar.md`** (`../assets/rainha-sanguessuga.jpg` | 3 lacunas): Sanguessuga Deus-Fera colossal das Águas Paradas Profundas, adorado pelos Ventre-Inchado com oferendas de sangue.
- **`Mael'ra.md`** (`../assets/maelra.jpg` | 1 lacuna): Deusa-Fera Aranha adorada pelos Tece-Pele; negociadora de informações e favores via fio espiritual.
- **`Og'gath.md`** (`../assets/oggath.jpg` | 1 lacuna): Sapo-Trovão do Lago Central; patrulha as margens como se procurasse algo, atacando quem se aproxima demais.
- **`Krr'tak.md`** (`../assets/krrtak.jpg` | 1 lacuna): Louva-a-deus Deus-Fera menor (fêmea) entre Masca-Musgo e Ferve-Alga; humor brutal, evita goblins por dívida com Nyog'Sothep.
- **`Suuhr.md`** (placeholder | 4 lacunas): Cobra Deus-Fera menor (fêmea) feita de piche líquido no Brejo do Musgo-Negro; gorda e preguiçosa, aceita caça fresca (sapos e coelhos).

### `content/Criaturas/` (3 páginas — `Template Criatura`)
- **`Pinça-de-Sal.md`** (placeholder | 0 lacunas): Caranguejo-gigante jovem ligado ao culto de Karkinos na Costa Salobra.
- **`Rainha-Sanguessuga de Águas Paradas.md`** (`../assets/rainha-sanguessuga.jpg` | 0 lacunas): Sanguessuga colossal ligada aos Ventre-Inchado, avistada recentemente próxima ao Lago da Grande Tirana.
- **`Ulok.md`** (`../assets/ulok.jpg` | 3 lacunas): Ulok, a Grande Javali; governante violenta das Terras Verdejantes que ataca sem provocação e tem muitos filhos briguentos.

### `content/Historia/` (2 páginas — `Template Evento`)
- **`A Grande Morte Lenta.md`** (placeholder | 0 lacunas): 20 anos de sabotagem com esporos contra os Dragões Vermelhos (Filhos de Ashkor), Batalha da Lua Nova e Primeira Caçada Sagrada.
- **`Cacada Sagrada.md`** (placeholder | 2 lacunas): Rito tradicional de iniciação dos Masca-Musgo inspirado na Primeira Caçada Sagrada; leis de reciprocidade, sem fogo e respeito às desovas.

### `content/NPCs/` (13 páginas — `Template NPC`)
- **`Sacerdote-Chefe Malok.md`** (`../assets/malok.jpg` | 2 lacunas): Líder espiritual e político máximo de Raiz-Funda.
- **`Zog.md`** (`../assets/zog.jpg` | 3 lacunas): Voz-de-Esporo, xamã animista e conselheiro da Lei da Troca.
- **`Irmãos Snakk e Drig.md`** (`../assets/snakk-e-drig.jpg` | 3 lacunas): Gêmeos Coveiros-Sacerdotes do Jardim Dourado (Ciclo da Devolução).
- **`Kruk.md`** (`../assets/kruk.jpg` | 2 lacunas): Mestre dos Caçadores tradicionalista; rivaliza com Grixa.
- **`Grixa.md`** (`../assets/grixa.jpg` | 3 lacunas): Batedora de Elite; defende estratégias ousadas e disputa liderança com Kruk.
- **`Gnarl Martelo-Torto.md`** (`../assets/gnarl.jpg` | 4 lacunas): Ferreiro da Forja Periférica (fogo-ferramenta controlado e trabalho a frio).
- **`Birka.md`** (`../assets/birka.jpg` | 3 lacunas): A Mão-Ácida; alquimista e curtidora a frio, ponte comercial com os Tece-Pele.
- **`Torg.md`** (`../assets/torg.jpg` | 5 lacunas): Construtor de palafitas, jangadas com piche e calçados de brejo.
- **`Varga.md`** (`../assets/varga.jpg` | 3 lacunas): Capitã da Guarda de Raiz-Funda; coordena vigias e armadilhas.
- **`Velho Rói-Raiz.md`** (`../assets/velho-roi-raiz.jpg` | 3 lacunas): Juiz das Disputas na Casa do Ancião; aplica punições e exílios.
- **`Vó Mofo-Velho.md`** (`../assets/vo-mofo-velho.jpg` | 4 lacunas): Decana de Raiz-Funda e guardiã da memória oral.
- **`Snikk.md`** (`../assets/snikk.jpg` | 5 lacunas): Curandeiro-Chefe autorizado a entrar no Jardim Dourado.
- **`Murok.md`** (`../assets/murok.jpg` | 3 lacunas): O Ancião Centenário (+120 anos) dos Ventre-Inchado nas Águas Paradas Profundas.

### `content/Exilados/` (4 páginas: 1 Visão Geral + 3 Exilados)
- **`Exilados.md`** (placeholder | 0 lacunas): Categoria de ex-moradores de Raiz-Funda banidos sem possibilidade de perdão; recebidos com flechas de aviso e mortos se insistirem.
- **`Brask.md`** (`../assets/brask.jpg` | 3 lacunas): O Cinza-Quente; exilado por usar brasa roubada em disputa pessoal; ronda os Poços de Turfa.
- **`Nokk.md`** (`../assets/nokk.jpg` | 3 lacunas): O Profano; exilado por tentar invadir o Jardim Dourado; ronda as Ruínas dos Sem-Nome.
- **`Skrit.md`** (`../assets/skrit.jpg` | 4 lacunas): O Sem-Troca; exilado por quebrar a Lei da Troca e contrabando; guia clandestino no Delta das Águas Mortas.

---

## 4. Próximos Passos Sugeridos
1. **Continuar a coleta de lore** em `content/private/Banco de Lore - Perguntas e Respostas.md` (a **Pergunta 7**, sobre a rivalidade entre Kruk e Grixa, está aberta).
2. **Preencher os campos `*A preencher.*`** (especialmente nos NPCs de Raiz-Funda, em *História*, *Personalidade* e *O que se Conta pelo Pântano*) conforme o usuário for fornecendo lore.
3. **Substituir `[ Ilustração: ... ]`** pelas artes restantes ou futuras (há artes de goblins em `~/Imagens/goblins` caso o usuário queira atribuir).
4. **Publicar alterações:** fazer `git add`, `git commit` e `git push` para atualizar o site no GitHub Pages (`victordiaspalmeira.github.io/vale-da-lama-wiki`), validando sempre antes com `npm run quartz -- build`.
