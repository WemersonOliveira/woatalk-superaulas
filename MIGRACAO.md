# Migração WOA Talk Superaulas

## Proveniência e escopo

- Origem: `woaeducacional/woaeducacional-lancamentos`, branch `feature/superaulas-woa-exclusive`, commit `5dfd25aa98c09a8b9bd4c1eff7bcfeff67442fb5`, diretório `superaulas/`.
- Destino: `WemersonOliveira/woatalk-superaulas`, branch `feature/migracao-superaulas`, criada da `main` no commit `090d6f92092e614b06805d204d3cd86622c7a0ce`.
- Os 52 arquivos da aplicação foram copiados para a raiz: código, configurações ocultas, lockfile, testes, documentação, SQL, imagens e quatro PDFs.
- `MIGRATION-INVENTORY.json` registra tamanho e SHA-256 de cada arquivo na origem e no destino. 50 arquivos são idênticos byte a byte; somente README.md e VISUALIZAR.md foram adaptados para o novo repositório e para documentar corretamente a rota existente. Este relatório e o inventário são acréscimos.
- Não foram copiados `.git`, dependências, builds, caches ou `.env.local`. `.env.example` mantém os campos de credenciais vazios, sem credenciais reais. A busca por padrões de segredos e a revisão das ocorrências encontraram somente nomes de configuração, exemplos e fixtures fictícias; isso não substitui auditoria especializada.

## Rota e execução independente

O código permanece intacto. `next.config.ts` e `assetPath` usam `/BlackNovember/superaulas` quando `NEXT_PUBLIC_BASE_PATH` está ausente. Acesse localmente `http://localhost:3000/BlackNovember/superaulas`.

Para uma futura hospedagem na raiz, defina explicitamente `NEXT_PUBLIC_BASE_PATH=` (string vazia) antes do build e no ambiente de execução. Remover a variável restaura o prefixo original. Uma alteração exige novo build. Não foi alterado domínio, URL comercial, proxy ou configuração de produção nesta tarefa.

## Validação em 15/11/2026

Ambiente Windows, Node.js 26.13.0 e npm 11.20.0. Convém repetir em Node 24 LTS no CI da futura hospedagem.

- `npm ci`: aprovado, 96 pacotes instalados, auditoria reportou zero vulnerabilidades. npm emitiu aviso de aprovação de script de instalação do esbuild; não impediu testes ou build.
- `npm test`: 17/17 aprovados. A primeira execução no sandbox falhou com EPERM na pasta temporária do TSX; a repetição fora do sandbox passou.
- `npm run typecheck`: aprovado.
- `npm run build`: aprovado, incluindo TypeScript e geração de páginas. Aviso ambiental: Next ignorou um package-lock.json externo ao repositório no diretório do usuário; nenhuma configuração global foi modificada.
- Todos os 52 caminhos estão presentes; imagens e quatro PDFs têm SHA-256 idêntico à origem. O package-lock.json também é idêntico.
- Não foi realizado teste visual no navegador nem teste com serviços externos reais. Os testes de cadastro usam fixtures/mocks.

## Pendências de configuração

Definir separadamente hospedagem e base path; configurar URL e chave publicável Supabase no ambiente autorizado caso o cadastro seja ativado. Sem essas variáveis, o cadastro fica indisponível conforme o comportamento original. Revisar as permissões do banco em tarefa separada; os SQL foram preservados e não executados.

Preservadas as pendências de conteúdo e integração documentadas na origem: vídeos 02 a 04, revisão visual e validação dos links comerciais antes da publicação. REVIEW.md e as observações de verificações externas em VISUALIZAR.md são registros históricos da origem, não resultados novos desta migração.

Nenhuma alteração na origem, merge, publicação, configuração Supabase/Vercel ou migração de banco faz parte desta entrega.
