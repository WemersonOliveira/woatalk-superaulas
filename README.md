# WOA Exclusive — Black November 2026

Aplicação independente das Super Aulas da WOA Talk, desenvolvida em Next.js App Router, React e TypeScript.

Este repositório contém exclusivamente o código-fonte da aplicação Super Aulas. A publicação é feita em um projeto próprio da Vercel, separado do projeto principal de Lançamentos.

---

## 1. Identificação do projeto

| Item | Informação |
|---|---|
| Aplicação | WOA Exclusive — Black November 2026 |
| Projeto Vercel | `woatalk-superaulas` |
| Repositório GitHub | `WemersonOliveira/woatalk-superaulas` |
| Branch principal | `main` |
| Framework | Next.js App Router |
| Interface | React + TypeScript |
| Banco de dados | Supabase |
| Deploy | Vercel |
| Rota oficial | `/blacknovember/superaulas` |
| Base path independente | `/BlackNovember/superaulas` |

**Repositório:**  
https://github.com/WemersonOliveira/woatalk-superaulas

---

## 2. Responsabilidade deste repositório

Este repositório é responsável por toda a aplicação independente Super Aulas.

Inclui:

- Layout e identidade visual.
- Componentes React.
- Conteúdo das aulas.
- Informações comerciais e planos.
- Tabela de preços e lotes.
- Links dos vídeos e materiais.
- Integrações de checkout e WhatsApp.
- Integração de formulário com Supabase.
- Rotas e funcionalidades internas.
- Configurações próprias de execução e build.
- Prefixo de rota (`basePath`).

**Este repositório NÃO é responsável pelo site principal da WOA Talk nem pela landing page principal Black November.**

Essas aplicações pertencem ao projeto `woatalk-lancamentos`.

---

## 3. Organização dos dois projetos

A estrutura de produção utiliza dois projetos Vercel e dois repositórios GitHub independentes.

| Responsabilidade | Projeto Vercel | Repositório GitHub |
|---|---|---|
| Site principal e Black November | `woatalk-lancamentos` | `-woatalk-lancamentos` |
| Aplicação Super Aulas | `woatalk-superaulas` | `woatalk-superaulas` |

### Fluxo de acesso

```text
www.woatalk.com.br
        |
        v
Vercel: woatalk-lancamentos
        |
        |-- /
        |   Site principal
        |
        |-- /blacknovember
        |   Landing page da campanha
        |
        |-- /blacknovember/superaulas
                |
                v
           Rewrite / Proxy
                |
                v
           Vercel: woatalk-superaulas
                |
                v
           Aplicação Super Aulas
```

### Regra fundamental

O código da aplicação Super Aulas deve ser alterado exclusivamente neste repositório.

O encaminhamento da rota oficial pelo domínio principal é configurado no projeto `woatalk-lancamentos`, no repositório:

https://github.com/WemersonOliveira/-woatalk-lancamentos

Não misturar as configurações dos dois projetos.

---

## 4. URLs e rotas

### URL oficial

```text
https://www.woatalk.com.br/blacknovember/superaulas
```

### URL independente da Vercel

```text
https://woatalk-superaulas.vercel.app/BlackNovember/superaulas
```

A aplicação independente foi configurada para atender pelo caminho específico.

Acessar somente a raiz do endereço `.vercel.app` pode retornar 404, pois a aplicação utiliza um `basePath`.

### Diferença entre os caminhos

| Ambiente | Caminho |
|---|---|
| Domínio oficial | `/blacknovember/superaulas` |
| Projeto independente | `/BlackNovember/superaulas` |

**Atenção:** preservar a diferença entre letras maiúsculas e minúsculas nos caminhos configurados.

Não alterar o `basePath` sem verificar o impacto nas rotas, nos bundles e nos arquivos estáticos.

---

## 5. Estado atual da publicação e integração

### Vercel — Super Aulas

Projeto:

```text
woatalk-superaulas
```

O projeto independente possui deploy de produção registrado como Ready e configuração própria de variáveis de ambiente.

A aplicação pode ser validada pelo endereço independente com o caminho completo:

```text
https://woatalk-superaulas.vercel.app/BlackNovember/superaulas
```

### Domínio oficial

O acesso oficial é:

```text
https://www.woatalk.com.br/blacknovember/superaulas
```

O encaminhamento dessa rota é feito pelo projeto `woatalk-lancamentos`.

### Pendência técnica registrada

O encaminhamento da rota oficial foi configurado e o erro 404 foi resolvido.

Entretanto, foi identificado um problema no carregamento dos arquivos estáticos da aplicação pelo domínio oficial.

Os recursos que precisam ser verificados incluem:

- CSS.
- JavaScript.
- Imagens.
- Fontes.
- Bundles do Next.js.
- Arquivos em `/_next/static`.

**Estado conhecido:**

| Funcionalidade | Situação |
|---|---|
| Projeto independente na Vercel | Deploy Ready |
| Código das Super Aulas | Repositório independente |
| Acesso pela rota independente | Funcional |
| Encaminhamento do domínio oficial | Configurado |
| Erro 404 da rota oficial | Corrigido |
| Layout completo pelo domínio oficial | Pendente de correção |
| Carregamento de CSS e JavaScript no domínio oficial | Pendente de validação |

Não considerar a integração concluída até que o domínio oficial apresente o mesmo layout e comportamento da aplicação independente.

---

## 6. Desenvolvimento local

### Requisitos

- Node.js 22.13+ ou 24 LTS.
- npm.

### Instalar dependências

```bash
npm ci
```

### Executar aplicação

```bash
npm run dev
```

Abra:

```text
http://localhost:3000/BlackNovember/superaulas
```

### Validar aplicação

```bash
npm test
npm run typecheck
npm run build
npm start
```

Utilize os comandos disponíveis no `package.json` e confira os resultados antes de publicar.

---

## 7. Base path e configuração das rotas

A aplicação preserva o prefixo original:

```text
/BlackNovember/superaulas
```

A variável utilizada é:

```env
NEXT_PUBLIC_BASE_PATH=/BlackNovember/superaulas
```

Para executar o build e o start explicitamente com esse prefixo:

```bash
NEXT_PUBLIC_BASE_PATH=/BlackNovember/superaulas npm run build

NEXT_PUBLIC_BASE_PATH=/BlackNovember/superaulas npm start
```

O Next.js aplica o prefixo às rotas e aos bundles da aplicação.

Os recursos públicos também precisam respeitar os caminhos esperados para a publicação.

### Atenção aos assets

Ao investigar problemas de CSS, JavaScript, imagens ou arquivos estáticos:

1. Conferir o `basePath` da aplicação.
2. Conferir os caminhos gerados no build.
3. Verificar as requisições em `/_next/static`.
4. Verificar os caminhos de imagens e fontes.
5. Comparar o funcionamento pela URL independente e pela URL oficial.
6. Conferir o rewrite no projeto principal.

**Não resolver problemas de assets alterando caminhos aleatoriamente.** Identificar primeiro se a origem está no build da Super Aulas ou no encaminhamento do domínio principal.

### Hospedagem futura em domínio independente

Caso a aplicação passe a utilizar a raiz de um domínio próprio, será necessário revisar o `NEXT_PUBLIC_BASE_PATH` antes do build e na configuração de produção.

A variável vazia representa a publicação na raiz:

```env
NEXT_PUBLIC_BASE_PATH=
```

Essa configuração não deve ser aplicada na publicação atual sem uma decisão explícita de mudança de arquitetura.

---

## 8. Conteúdo e integrações

O arquivo:

```text
lib/campaign.ts
```

Concentra os dados tipados da campanha.

Os 12 valores, quatro lotes, cinco benefícios, idiomas e textos das aulas vêm da referência utilizada no projeto.

Os textos comerciais, valores, datas, condições, 12 links de aulas e contato foram fornecidos pelo usuário. Não foram recalculados juros ou parcelas.

### Integrações principais

**Vídeos**

- `lessons[0].youtubeId`: ID oficial de 11 caracteres.
- O vídeo carrega após interação do usuário.
- Utiliza `youtube-nocookie.com`.
- A Aula 01 utiliza o ID fornecido na referência.
- As aulas 02 a 04 aguardam gravação.

**PDFs**

- `lessons[0].pdf`: caminho do arquivo em `public/`.
- Downloads podem depender do `Content-Disposition` do servidor remoto.

**Checkout**

- `integrations.checkout`: contém 12 URLs oficiais.
- Os links são organizados por planos e condições comerciais.
- Somente URLs HTTPS sem credenciais são aceitas.

**WhatsApp**

- `integrations.whatsapp`: número oficial com DDI e DDD, armazenado apenas com dígitos.
- A página não envia mensagens automaticamente.

**Pagamento**

- `integrations.payment`: link oficial Asaas para Pix com valor informado pelo cliente.
- Não existe cobrança automática dentro da aplicação.
- A equipe precisa confirmar o comprovante antes de confirmar a matrícula.

**Artes e materiais**

Os arquivos públicos e caminhos das imagens devem ser mantidos organizados em `public/`.

Consulte a documentação de assets antes de substituir ou remover arquivos utilizados pela aplicação.

### Dados comerciais e datas

Os controles dependentes de valores reais ficam desabilitados e identificados quando não possuem configuração válida.

A tabela apresenta os quatro lotes para comparação e habilita somente o lote vigente conforme a regra de novembro de 2026.

A data é verificada no navegador após a hidratação e atualizada periodicamente, inclusive ao retornar à aba.

As datas inicial e final são inclusivas.

Fora do período, o CTA fica indisponível. O WhatsApp permanece acessível.

A regra visual da aplicação não substitui a configuração de validade e preço no Asaas, nem garante a validade de um checkout externo.

---

## 9. Componentes e acessibilidade

A aplicação utiliza componentes reutilizáveis para organizar conteúdo, aulas, preços, matrícula e formulários.

Entre os principais recursos:

- Player de vídeo com carregamento após interação.
- Componentes de matrícula.
- Formulário de interessados.
- Integração com API de leads.
- Estrutura semântica.
- Rótulos de controles.
- Foco visível.
- Link para pular diretamente ao conteúdo.
- Suporte a movimento reduzido.
- Cabeçalhos associados nas tabelas.

### Formulário e Supabase

A rota:

```text
/api/leads
```

Integra o formulário com o Supabase.

A página verifica no servidor se as variáveis necessárias estão disponíveis.

As políticas RLS e as permissões do banco devem ser respeitadas.

Não expor chaves administrativas ou secretas no navegador.

### Responsividade

A interface possui estilos para telas pequenas, intermediárias e grandes.

No celular:

- Cards ficam organizados em uma coluna.
- A tabela permite rolagem horizontal.
- Os controles devem permanecer acessíveis por teclado.

O layout e o contraste ainda precisam de validação visual em navegadores reais após a correção da integração oficial.

---

## 10. Variáveis de ambiente na Vercel

Na captura do projeto `woatalk-superaulas` aparecem estas quatro variáveis:

| Variável | Ambiente exibido |
|---|---|
| `NEXT_PUBLIC_BASE_PATH` | Production e Preview |
| `NEXT_PUBLIC_SUPABASE_URL` | Production e Preview |
| `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY` | Production e Preview |
| `LEAD_CAPTURE_ENABLED` | Production e Preview |

Os valores devem ser consultados diretamente no painel do projeto Vercel.

### Segurança

- Nunca publicar chaves secretas no GitHub.
- Não utilizar chaves administrativas no frontend.
- Não compartilhar valores entre projetos sem verificar a configuração.
- Não copiar variáveis do projeto `woatalk-lancamentos` automaticamente.
- Manter `.env.example` sem credenciais reais.

---

## 11. Estrutura do repositório

Estrutura observada:

```text
woatalk-superaulas/
│
├── app/
├── components/
├── lib/
├── public/
├── supabase/
├── tests/
│
├── .env.example
├── .gitignore
├── MIGRACAO.md
├── MIGRATION-NOTES.md
├── README.md
├── README-DEV.md
├── SUPABASE.md
├── VISUALIZAR.md
├── next.config.ts
├── package.json
├── package-lock.json
└── tsconfig.json
```

### Documentos complementares

| Arquivo | Finalidade |
|---|---|
| `MIGRACAO.md` | Registro da migração |
| `MIGRATION-NOTES.md` | Observações técnicas da migração |
| `README-DEV.md` | Orientações de desenvolvimento |
| `SUPABASE.md` | Configuração e integração do banco |
| `VISUALIZAR.md` | Orientações para visualizar a aplicação |
| `next.config.ts` | Configuração do Next.js |
| `.env.example` | Exemplo de variáveis de ambiente |

Antes de alterar funcionalidades importantes, consultar os documentos relacionados.

---

## 12. Git e Pull Requests

Repositório oficial:

https://github.com/WemersonOliveira/woatalk-superaulas

Branch principal:

```text
main
```

As alterações devem ser feitas em branches específicas.

### Fluxo recomendado

```bash
git checkout main
git pull origin main

git checkout -b feature/nome-da-alteracao

# Realizar alterações

git add .
git commit -m "feat: descricao da alteracao"

git push -u origin feature/nome-da-alteracao
```

Depois:

1. Abrir um Pull Request.
2. Revisar os arquivos modificados.
3. Validar os checks.
4. Aprovar e integrar na `main`.
5. Confirmar o deploy do projeto `woatalk-superaulas`.

### Regra

Código em uma branch ou Pull Request não deve ser considerado publicado em produção até que o merge e o deploy estejam confirmados.

---

## 13. Testes

O projeto utiliza testes com Node.js, TypeScript, renderização React e integração em JSDOM.

As validações incluem:

- Conteúdo e preços.
- Links independentes.
- Segurança das URLs.
- Carregamento de vídeo após clique.
- PDFs independentes.
- Checkout de cada plano.
- Contato e Pix.
- Fórmulas e datas em Brasília.
- Virada de lote com a página aberta.
- Prefixo de rota.

### Limitação dos testes

Os testes em JSDOM não substituem a validação em navegador real.

É necessário verificar manualmente:

- Layout e responsividade.
- Contraste.
- Navegação por teclado.
- Carregamento dos assets.
- Reprodução efetiva do YouTube.
- Integração externa de pagamento.
- Comportamento pelo domínio oficial.

---

## 14. Pendências antes da publicação completa

1. Receber os vídeos das aulas 02 a 04. O quinto? A referência atual indica que a Aula 01 possui vídeo integrado.
2. Conferir no Asaas os destinos, preços, parcelamento e validade dos links antes da publicação. Nenhuma transação foi realizada nesta revisão.
3. Validar visualmente desktop e mobile com as artes reais, navegação por teclado e contraste; testar integrações oficiais parte a parte.
4. Aprovar a integração de hospedagem separadamente. Remover robots, exclusões e faixas de prévia somente após aprovação.

### Pendência adicional da integração oficial

- [ ] Corrigir o carregamento de CSS e JavaScript na rota oficial.
- [ ] Validar imagens, fontes e arquivos estáticos.
- [ ] Conferir a compatibilidade do `basePath` com o rewrite.
- [ ] Comparar o resultado visual na URL independente e na URL oficial.
- [ ] Confirmar que o projeto principal continua funcionando.
- [ ] Validar o deploy dos dois projetos após a correção.

---

## 15. Regras para evitar confusão e retrabalho

1. O código das Super Aulas pertence exclusivamente a este repositório.
2. O projeto Vercel correspondente é `woatalk-superaulas`.
3. O site principal e Black November pertencem a `woatalk-lancamentos`.
4. O encaminhamento do domínio oficial é configurado no projeto de Lançamentos.
5. As variáveis de ambiente dos projetos são independentes.
6. Não alterar `basePath` sem verificar rotas e assets.
7. Não modificar `vercel.json` neste repositório se a configuração de encaminhamento pertence ao projeto principal.
8. Não considerar um deploy Ready como prova de que a integração pelo domínio oficial está visualmente correta.
9. Sempre validar a aplicação independente e a rota oficial após alterações.

---

## 16. Links de referência

### Super Aulas

- GitHub: https://github.com/WemersonOliveira/woatalk-superaulas
- Projeto Vercel: `woatalk-superaulas`
- URL independente: https://woatalk-superaulas.vercel.app/BlackNovember/superaulas
- URL oficial: https://www.woatalk.com.br/blacknovember/superaulas

### Projeto Lançamentos

- GitHub: https://github.com/WemersonOliveira/-woatalk-lancamentos
- Projeto Vercel: `woatalk-lancamentos`
- Site: https://www.woatalk.com.br
- Black November: https://www.woatalk.com.br/blacknovember

---

## Resumo operacional

| Pergunta | Resposta |
|---|---|
| Onde alterar o layout das Super Aulas? | Neste repositório |
| Onde alterar os vídeos e materiais? | Neste repositório |
| Onde alterar preços e conteúdo das Super Aulas? | Neste repositório |
| Onde configurar o Supabase desta aplicação? | Neste repositório e no projeto Vercel correspondente |
| Qual projeto Vercel publica as Super Aulas? | `woatalk-superaulas` |
| Onde corrigir o rewrite do domínio oficial? | Projeto `woatalk-lancamentos` |
| Onde corrigir o CSS/JS da própria aplicação? | Começar por este repositório |
| Os projetos compartilham o mesmo Git? | Não |

**Princípio operacional: este repositório controla a aplicação Super Aulas. O projeto Lançamentos controla o domínio principal e o encaminhamento de acesso. Cada um deve ser atualizado e validado separadamente.**
