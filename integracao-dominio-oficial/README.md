
# Entrega técnica — Super Aulas no domínio oficial

Este diretório contém a configuração de referência para integrar a aplicação WOA Talk Super Aulas ao domínio oficial.

**Endereço final esperado:**
https://www.woatalk.com.br/BlackNovember/superaulas

**Aplicação de origem:**
https://woatalk-superaulas.vercel.app/BlackNovember/superaulas

## Responsabilidade do projeto principal

Oliver deverá identificar o projeto Vercel responsável por www.woatalk.com.br e adicionar as regras do arquivo `vercel.rewrites.example.json` ao `vercel.json` desse projeto.

As regras devem ser mescladas com as configurações existentes, sem remover redirects ou rewrites já utilizados.

Se as regras já existirem no PR #5 de `woaeducacional/woaeducacional-lancamentos`, não duplicá-las.

## Aplicação independente

A Super Aulas já define o caminho-base `/BlackNovember/superaulas` em `next.config.ts`.

Os recursos estáticos utilizam esse prefixo.

Não alterar as variáveis de ambiente, nem configurar um proxy apontando para a própria aplicação.

## Validação antes da publicação

- [ ] Confirmar o projeto Vercel associado ao domínio oficial
- [ ] Validar o Deploy Preview
- [ ] Testar CSS, JavaScript, imagens e PDFs
- [ ] Testar vídeos, navegação e botões de pagamento
- [ ] Confirmar o funcionamento da política de privacidade
- [ ] Garantir que `/BlackNovember` permaneça funcionando
- [ ] Obter aprovação antes do merge em produção

## Observações importantes

Este diretório contém apenas arquivos de referência.

A inclusão desta pasta no repositório independente não ativa automaticamente o proxy.

A configuração efetiva deverá ser realizada no projeto que recebe o domínio www.woatalk.com.br.

Não realizar merge ou publicação sem autorização de Oliver.
