# Política de privacidade — Aposentado em Dia

> **Minuta — revisar com advogado.** Não apresentar como política implantada. Definir os campos pendentes e validar os controles antes de coletar dados reais.

## Finalidade e controlador

O serviço presta apoio administrativo à gestão de contas e cadastros de aposentados e pensionistas. O controlador será identificado como `[IDENTIFICAÇÃO DO PRESTADOR]`; canal de direitos: `[CANAL DE CONTATO]`. Identificação real e contatos serão fornecidos ao titular no instrumento externo, sem inclusão neste repositório.

**PRÁTICA proposta:** coletar somente o necessário para a demanda contratada e explicar a finalidade em linguagem acessível. Idade não implica incapacidade; representante deve comprovar poderes.

## Categorias e bases legais

**FATO:** a LGPD prevê consentimento no art. 7º, I, e execução de contrato ou procedimentos preliminares solicitados pelo titular no art. 7º, V. A base deve ser definida por finalidade, sem tratar consentimento como autorização ilimitada.

Dados comuns podem abranger identificação, contato, representação, vínculos, documentos fiscais e bancários necessários. Dados de saúde e biometria são sensíveis, sujeitos ao art. 11. A base de execução contratual do art. 7º, V, não autoriza automaticamente seu tratamento.

**PRÁTICA proposta:** para organizar pedido de isenção com dados de saúde, avaliar consentimento específico e destacado (art. 11, I) ou outra hipótese efetivamente aplicável do art. 11, com fundamentação jurídica documentada. Não invocar tutela da saúde como se este serviço administrativo fosse serviço médico. Não coletar biometria para arquivo próprio; quando necessária, usar o procedimento do canal oficial.

**A confirmar com advogado:** mapa de operações, bases legais, papéis do prestador e de fornecedores e instrumentos de representação.

## Onde ficam os dados

**PRÁTICA proposta:** documentos reais ficam exclusivamente em `[AMBIENTE EXTERNO PROTEGIDO]`, separado do Git e de contas institucionais de trabalho do responsável, com criptografia, autenticação forte, segregação por cliente, backup protegido e registro de acesso.

Este repositório contém somente manual e modelos vazios. Dados não podem ser enviados em commits, PRs, issues, anexos, logs ou prompts de IA. Senhas e códigos de autenticação não devem ser coletados para guarda pelo prestador.

**A confirmar antes da coleta:** provedor, localização, contratos, medidas de segurança e eventual transferência internacional com os requisitos legais aplicáveis. Nenhum armazenamento foi escolhido ou declarado implantado por este texto.

## Quem acessa e compartilhamento

**PRÁTICA proposta:** acesso nominal apenas ao prestador autorizado e a pessoas formalmente habilitadas, pelo mínimo necessário. Familiar não recebe acesso automático. Área de saúde deve ter permissões mais restritas. Revisar e revogar acessos ao encerrar a necessidade.

Compartilhar com Receita, INSS, Gestão de Pessoas, banco ou outros destinatários apenas quando necessário à finalidade, com base legal e poderes adequados, pelo canal oficial. Não comercializar dados. Identificar fornecedores e destinatários no aviso externo ao titular, sem prometer ausência absoluta de compartilhamento.

## Retenção e descarte

**FATO:** arts. 15 e 16 da LGPD regulam término do tratamento e hipóteses de conservação. Não há nesta minuta um prazo único válido para todos os documentos.

**PRÁTICA proposta:** definir tabela externa por categoria, finalidade, fundamento, evento inicial, prazo e revisão. Findo o tratamento, eliminar dados sem fundamento de conservação; devolver originais quando cabível e registrar descarte mínimo. Tratar cópias locais, lixeira, compartilhamentos e backups no procedimento, respeitando seu ciclo documentado.

**A confirmar com advogado:** prazos contratuais, fiscais e de exercício de direitos aplicáveis, critérios de conservação, suspensão de descarte em disputa e ciclo de expurgo de backups. Não reter indefinidamente “por segurança”.

## Direitos do titular

**FATO:** art. 18 prevê, nas condições legais, confirmação do tratamento, acesso, correção, anonimização/bloqueio/eliminação de dados desnecessários ou irregulares, portabilidade observada a regulamentação, eliminação de dados tratados com consentimento ressalvadas hipóteses legais, informação sobre compartilhamento e sobre recusa e consequências do consentimento e sua revogação.

**PRÁTICA proposta:** receber solicitações gratuitamente pelo canal informado, verificar identidade de forma proporcional e responder conforme rito legal. Explicar limites legais de conservação e os efeitos da revogação na parte do serviço que depende de consentimento. Não condicionar direitos à compra de serviço adicional.

## Incidentes e revisão

**PRÁTICA proposta:** conter acesso indevido, preservar registro mínimo externo, avaliar impacto e aplicar deveres legais de comunicação quando cabíveis. Não publicar detalhes de incidentes de clientes no Git. Responsável, fluxo e prazos normativos de incidente: **a confirmar na regulamentação vigente da ANPD e com advogado**, antes da operação.

Revisar esta minuta quando mudarem finalidades, fornecedores, fluxos ou normas. Informar alterações relevantes aos titulares pelo canal externo.

## Fontes

Consulta em 30/10/2026:

- [LGPD — texto atualizado na Câmara dos Deputados](https://www2.camara.leg.br/legin/fed/lei/2018/lei-13709-14-agosto-2018-787077-normaatualizada-pl.html), especialmente arts. 5º, 6º, 7º, 8º, 11, 15, 16, 18, 33, 46 e 48.
- [ANPD — perguntas frequentes](https://www.gov.br/anpd/pt-br/acesso-a-informacao/perguntas-frequentes).

**HIPÓTESE:** o desenho operacional acima ainda depende de implantação e validação. Este documento não certifica conformidade.
