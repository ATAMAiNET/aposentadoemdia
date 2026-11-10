# Instruções do projeto — Aposentado em Dia

## Natureza

Este repositório público contém o manual do serviço e a página de prospecção. Reúne processos, checklists, modelos vazios e política de privacidade. Não é cadastro, dossiê nem base de clientes. Respostas e contatos dos interessados ficam fora do Git, em armazenamento privado.

## Regras deste repositório

As regras comuns (git, PR, identificação do agente, privacidade) estão em `prompts/GOVERNANCA.md`. Aqui, só o que é deste projeto.

1. NUNCA inclua dados pessoais: CPF, RG, NB, matrícula, contas bancárias, senhas, laudos, valores de casos reais, protocolos, NUPs ou nomes de pessoas reais. Use marcadores: [CLIENTE], [CPF], [NB], [MATRÍCULA], [PROCURADOR(A)], [DATA], [VALOR], [PROTOCOLO]. Outros campos necessários também devem ser marcadores genéricos. A vedação abrange arquivos, nomes de arquivos, commits, PRs, issues, logs e anexos.
2. Use somente normas e orientações públicas oficiais, sem transportar conteúdo de casos ou documentos internos.
3. No PR, sem “Generated with…”; liste os arquivos alterados.
4. Separe sempre FATO (norma ou fonte citada), PRÁTICA (recomendação operacional) e HIPÓTESE (a confirmar). Não invente prazos, valores ou procedimentos. Quando não souber, escreva “a confirmar” e indique a fonte ou canal competente (gov.br, Receita, INSS, SouGov ou órgão destinatário). Registre divergências entre fontes e não universalize experiências específicas.
5. Escreva em português do Brasil, com linguagem clara para quem cuida de idosos. Explique termos técnicos e não presuma incapacidade por idade.

## Convenções

- Markdown UTF-8; nomes de arquivos em minúsculas, sem acentos, palavras separadas por hífen; preservar `README.md` e `prompts/PROJETO.md`.
- Processos com prefixo numérico de dois dígitos e as seções: Quando usar; Pré-requisitos; Passo a passo; Prazos e custos; Armadilhas comuns; Comprovantes a guardar e convenção de nome; Fontes e revisão.
- Fontes: título/link público, data de consulta e escopo. Rever requisitos a cada execução e atualizar este manual quando a fonte mudar.
- Marcadores só são substituídos em cópias externas. Nenhum documento preenchido retorna ao Git.
- Nomes de comprovantes externos: tipo, exercício quando aplicável e [DATA], sem CPF, nome real, NB, matrícula ou protocolo. Data: AAAA-MM-DD.
- Na criação de arquivo, todas as linhas novas são inserções; preservar histórico do README existente.
- Separar também FATO / RELATO / HIPÓTESE no dossiê externo. Relato não vira fato sem evidência.

## Fluxo de revisão

Antes de pedir aprovação, mostre árvore, resumo e pendências junto com o diff. Não acrescentar dados de clientes nem material institucional para contextualizar revisão. Antes de publicar, conferir conteúdo, metadados e arquivos ignorados. O `.gitignore` não é mecanismo de controle de acesso.
