# GOVERNANCA

v0.11 | 09/11/2026 | Regras comuns a todos os repositórios ATAMAiNET/* e aos agentes (Claude, GPT e Copilot). Uma página.

Fonte: ATAMAiNET/governanca. Cada repositório da Mesa recebe uma cópia em `prompts/GOVERNANCA.md` por `scripts/distribuir.sh`. Não edite a cópia: mude aqui, por PR, e redistribua.

## Pap do agente
1. Leia `prompts/PROJETO.md` do repositório (o específico) e esta página (o comum). Em conflito, vale o PROJETO.md: aponte e pergunte.
2. Responda em português; separe fato, relato e hipótese; não preencha lacunas.
3. Mudança: branch → PR → o dono revisa e faz o merge. Nunca na main. Nada de commit, push ou merge sem aprovação.
4. Identifique-se. Issue e PR: 1ª linha do corpo `Agente: Claude`, `Agente: GPT` ou `Agente: Copilot`. Commit: a mesma linha no fim da mensagem. Comentário: comece com `Claude:`, `GPT:` ou `Copilot:`. Não use `Co-Authored-By`.
5. Pendência vira issue no repositório do assunto; documento não guarda lista de pendências.
6. Abriu issue ou PR: rode `scripts/sincronizar-projeto.sh` (no governanca) e informe o resultado. Se não conseguir, avise o dono na mesma resposta, com o link do item.
7. Ao Git não vão dados pessoais, nomes reais de terceiros nem conteúdo do SEI, do Teams ou do FNDE. Veja as regras entre projetos abaixo.

## Comandos PAP
`PAP <alvo>` define o formato da resposta. Não autoriza gravar, executar nem enviar.

```
PAP OP     # passos em tela (Make, Drive, apps), com o resultado esperado comentado
PAP BASH   # comandos bash prontos para colar, com # comentário em cada linha
PAP PWSH   # o mesmo, em PowerShell
PAP GIT    # só comandos git, com o resultado esperado comentado
PAP EXEC   # conclusão, opções e recomendação, em até 5 linhas
PAP PUB    # conteúdo pronto para o público; enviar depende de autorização do dono
```

- Uma ação por linha; o comentário diz o resultado esperado.
- Antes de comando que apague, sobrescreva ou envie: linha `# ATENÇÃO:`.
- Sem segredos no comando; use variáveis de ambiente.
- Git sempre em branch, nunca na main.

## Pautas
- Issue com rótulo `pauta`, no repositório do assunto (no governanca, se vale para vários).
- Qualquer participante pode abrir pautas, comentar, perguntar, sugerir e revisar, inclusive suas próprias contribuições. Sem papéis fixos nem rodadas obrigatórias.
- Cada contribuição identifica quem fala e preserva o histórico. Uma chamada do dono a uma IA autoriza uma intervenção, sem acionar outras IAs automaticamente.
- O dono decide num comentário. A execução é por branch e PR citando a issue.
- Conteúdo do SEI, do Teams e do FNDE: lido numa pasta fora dos repositórios; ao Git só vai o resultado.
- Visão única: o Project "Mesa ATAMAiNET" (conta ATAMAiNET, privado) reúne issues e PRs dos repositórios da tabela Projetos. A fonte continua sendo a issue; o Project não guarda conteúdo próprio.

## Regras que valem entre projetos
- Dados do CGAUX ficam só no `mcmp-cgaux`, com pseudônimos (R1 a R4, G1). Não vão para outros projetos. O Project mostra os títulos das issues dele; dados não vão para título nem para campo do Project.
- Eu Sou: nenhuma informação interna não pública do FNDE nem contato obtido pelo cargo.
- Abas Abertas: o prompt editorial manda no processo e na voz; a Bíblia manda nos fatos e na continuidade. Se divergirem, apontar e perguntar.

## Projetos
| Projeto | Repositório | Prefixo de PR |
| --- | --- | --- |
| Eu Sou (N0 e artefato) | eu-sou | n0: |
| MCMP-CGAUX e artigo | mcmp-cgaux | mcmp: / artigo: |
| Abas Abertas | abas-abertas | abas: |
| Aposentado em Dia | aposentadoemdia | — |
| Automações (Aposentado em Dia, LinkedIn, prospecção) | automacoes | — |
| Governança | governanca | — |

## Como as instruções se organizam
1. **Global** (preferências de cada IA): regras mínimas, iguais em tudo. É a única instrução fora do Git; os projetos ficam com o campo de instruções vazio.
2. **No Git**: `prompts/PROJETO.md` (o específico) e `prompts/GOVERNANCA.md` (esta página, copiada). Os arquivos-ponte `CLAUDE.md`, `AGENTS.md` e `.github/copilot-instructions.md` têm só a linha `Leia prompts/PROJETO.md e prompts/GOVERNANCA.md e siga-os.`

### Global
```
Responda em português.
Não invente nem preencha lacunas; separe fato, relato e hipótese.
Alterações em arquivos: em patch (-Removido / +Inserido).
Não envie ao Git dados pessoais, nomes reais de terceiros nem conteúdo sob custódia institucional (SEI, Teams, FNDE).
Ao consultar qualquer repositório ATAMAiNET/*, leia primeiro prompts/PROJETO.md e siga-o; se não existir, avise. Se não conseguir ler o repositório, diga e pare. Em conflito entre o chat e o repositório, o repositório prevalece: aponte e pergunte.
Mudanças no repositório: branch → PR → eu reviso e faço o merge. Nunca na main. Nada de commit, push ou merge sem minha aprovação. Identifique-se como agente (Agente: Claude, GPT ou Copilot) em issue, PR e commit; sem Co-Authored-By.
```

Se um projeto não achar o repositório sozinho, a instrução dele leva só esta linha: `Repositório: ATAMAiNET/{REPO}`.

### IAs
| IA | Entrada | Lê no repositório |
| --- | --- | --- |
| Claude | extensão Claude Code no VS Code; claude.ai | `CLAUDE.md` |
| GPT | extensão Codex no VS Code; ChatGPT | `AGENTS.md` |
| Copilot | chat e agente do VS Code | `.github/copilot-instructions.md` |

## Manutenção (dono, no PC)
- `scripts/instalar-global.sh`: grava a global para Claude, Codex e Copilot (`~/.copilot/instructions`). Rode quando a global mudar.
- `scripts/sincronizar-projeto.sh`: põe na Mesa as issues e PRs abertas dos repositórios em `REPOS`.
- `scripts/distribuir.sh`: depois de cada merge nesta página, abre uma PR em cada repositório com a cópia `prompts/GOVERNANCA.md` e os arquivos-ponte (cria os que faltam; nos que têm texto próprio, acrescenta a linha no fim).
- Projeto novo: crie o repositório com `prompts/PROJETO.md`, acrescente-o na tabela Projetos e em `REPOS` no `scripts/sincronizar-projeto.sh`, e rode `scripts/distribuir.sh`.
- IA nova: instalar a global, acrescentar a linha na tabela IAs, rodar o teste de leitura.
