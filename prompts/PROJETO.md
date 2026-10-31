# Instruções do projeto — Aposentado em Dia

## Natureza

Este repositório público contém o manual do serviço e a página de prospecção. Reúne processos, checklists, modelos vazios e política de privacidade. Não é cadastro, dossiê nem base de clientes. Respostas e contatos dos interessados ficam fora do Git, em armazenamento privado.

## Regras obrigatórias para qualquer IA ou colaborador

1. Leia primeiro `prompts/PROJETO.md` em toda nova atuação. Se futuramente estiver ausente, avise; se não conseguir ler o repositório, informe e pare. Se houver conflito entre chat e regras do repositório, aponte e consulte o responsável antes de alterar.
2. NUNCA inclua dados pessoais: CPF, RG, NB, matrícula, contas bancárias, senhas, laudos, valores de casos reais, protocolos, NUPs ou nomes de pessoas reais. Use marcadores: [CLIENTE], [CPF], [NB], [MATRÍCULA], [PROCURADOR(A)], [DATA], [VALOR], [PROTOCOLO]. Outros campos necessários também devem ser marcadores genéricos. A vedação abrange arquivos, nomes de arquivos, commits, PRs, issues, logs e anexos.
3. Não use dados ou documentos sob custódia institucional (SEI, Teams ou órgãos onde o responsável trabalha). Use somente normas e orientações públicas oficiais, sem transportar conteúdo de casos ou documentos internos.
4. Crie uma branch própria a partir da `main` atualizada e abra PR somente após aprovação da proposta. Nunca faça commit ou push direto na `main`. Não faça merge: o responsável revisa e faz o merge. Não faça commit ou push sem aprovação expressa.
5. Mensagens de commit e descrição de PR SEM linhas de coautoria ou atribuição: sem Co-Authored-By, sem “Generated with…” e sem links de sessão. Listar os arquivos alterados no PR.
6. Separe sempre FATO (norma ou fonte citada), PRÁTICA (recomendação operacional) e HIPÓTESE (a confirmar). Não invente prazos, valores ou procedimentos. Quando não souber, escreva “a confirmar” e indique a fonte ou canal competente (gov.br, Receita, INSS, SouGov ou órgão destinatário). Registre divergências entre fontes e não universalize experiências específicas.
7. Escreva em português do Brasil, com linguagem clara para quem cuida de idosos. Explique termos técnicos e não presuma incapacidade por idade.

## Convenções

- Markdown UTF-8; nomes de arquivos em minúsculas, sem acentos, palavras separadas por hífen; preservar `README.md` e `prompts/PROJETO.md`.
- Processos com prefixo numérico de dois dígitos e as seções: Quando usar; Pré-requisitos; Passo a passo; Prazos e custos; Armadilhas comuns; Comprovantes a guardar e convenção de nome; Fontes e revisão.
- Fontes: título/link público, data de consulta e escopo. Rever requisitos a cada execução e atualizar este manual quando a fonte mudar.
- Marcadores só são substituídos em cópias externas. Nenhum documento preenchido retorna ao Git.
- Nomes de comprovantes externos: tipo, exercício quando aplicável e [DATA], sem CPF, nome real, NB, matrícula ou protocolo. Data: AAAA-MM-DD.
- Apresentar alterações em patch/diff (-Removido / +Inserido). Na criação, todas as linhas novas são inserções; preservar histórico do README existente.
- Separar também FATO / RELATO / HIPÓTESE no dossiê externo. Relato não vira fato sem evidência.

## Fluxo de revisão

Preparar arquivos e diff → mostrar árvore, resumo e pendências → obter aprovação → commit na branch autorizada → push → PR → revisão humana → merge pelo responsável. Não acrescentar dados de clientes nem material institucional para contextualizar revisão. Antes de publicar, conferir conteúdo, metadados e arquivos ignorados. O `.gitignore` não é mecanismo de controle de acesso.
