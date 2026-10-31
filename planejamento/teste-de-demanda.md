# Teste de demanda — página com triagem

Proposta de 31/10/2026, ainda não publicada.

## Objetivo

**HIPÓTESE:** existe interesse em apoio administrativo para aposentados e familiares. Observar necessidades e pedidos de retorno; triagem não comprova disposição para pagar nem contratação.

**PRÁTICA:** página de apresentação com assistente de perguntas prontas, sem IA generativa, e sem WhatsApp pessoal. Uma pergunta por vez, alternativas grandes e telefone opcional. Sem nome, e-mail, campo livre ou anexos.

## Fluxo

1. Para mim, familiar ou outra pessoa.
2. Categoria de ajuda: cadastros, documentos/imposto de renda, benefícios, prazos ou ainda não sabe.
3. Momento da necessidade.
4. Telefone com DDD, opcional. Exigir autorização específica quando informado; permitir continuar sem telefone.
5. Conferência e confirmação explícita de envio.

As respostas ficam apenas em memória até o envio. Fechar o assistente apaga os dados locais. Nenhum dado de interessado é colocado em URL, Git, issue, PR, arquivo local ou ferramenta de IA.

## Recebimento privado — pendente

**FATO:** a versão preparada não tem servidor conectado; apresenta aviso de demonstração e não afirma registrar leads. GitHub Pages hospeda a interface, não o armazenamento das respostas.

**PRÁTICA proposta:** usar Make como receptor e armazenamento privado, sujeito à escolha do responsável. Não criar conta nem ativar cenário antes dessa definição. Não incluir credencial no navegador. Qualquer endpoint público de recebimento fica visível ao visitante, mesmo quando não versionado; não usar sua URL como única proteção.

Contrato mínimo esperado da integração: POST HTTPS com JSON, validação de campos por lista permitida, limite de tamanho, proteção contra abuso, telefone validado apenas quando autorizado, identificação estável do envio para evitar duplicações em tentativas, persistência privada e resposta JSON `{ok: true, requestId: ...}` somente após confirmar gravação. Rejeitar campos inesperados e não devolver registros ou telefones publicamente. CORS deve permitir a origem da página; credenciais administrativas ficam no servidor.

Antes de habilitar: definir acesso do responsável, finalidade, retenção, eliminação e canal de direitos; substituir o aviso de demonstração na política pelo aviso real. Não ativar coleta só por ter uma URL. O workflow aguarda `LEAD_ENDPOINT`; sua configuração é etapa posterior à revisão jurídica/operacional mínima. Há time-out de envio; falha não é apresentada como sucesso e exige confirmação do servidor.

## Publicação

Arquivos públicos: `site/index.html`, `styles.css`, `triagem.js`, `app.js` e `config.js`. O workflow publica somente `site/`, manualmente na main após merge pelo responsável. A proposta deve seguir branch → aprovação → commit/push → PR → revisão humana; nenhum merge por IA.

**A confirmar:** plano e configuração de GitHub Pages, visibilidade pública autorizada, serviço receptor, limite de operações/custos, controles de abuso e regras de privacidade. O e-mail do histórico é tarefa separada; não reescrever histórico como parte desta entrega.

## Medição

Manter fora do Git as contagens de manifestações recebidas, categorias, momentos e pedidos de retorno. Após conversas, registrar propostas e contratações em controle privado. Não tratar submissão anônima como pessoa única; deduplicação por requestId evita reenvio da mesma tentativa, não prova unicidade de visitante. Sem análise de visitas, não calcular conversão visita → contato.

## Fontes

- [GitHub Pages — introdução](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site), consultado em 31/10/2026.
- Integração Make e armazenamento: **a confirmar antes da implantação**.
