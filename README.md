# React: desenvolva aplicações web usando JSX e Hooks - Formação

Esse repositório contém projetos utilizados nos diferentes cursos da formação "React: desenvolva aplicações web usando JSX e Hooks". Abaixo listamos os conceitos aplicados nessa formação.

Alguns cursos dessa formação fazem parte de outra formação de HTML/CSS e, como ja haviam sido concluidos, não serão listados. Portanto, os conceitos apontados nesse arquivo são referentes à conceitos de JavaScript, Node e React apenas.

Além disso, nem todos os projetos trabalhados foram publicados utilizando o Github Pages ou Vercel pois, se tratando de uma revisão de conceitos, decidi publicar o que achei mais interessante dentro do escopo do que foi aprendido na formação.

## JavaScript

Abaixo estão os projetos referentes aos cursos de revisão de JavaScript.

### alura-midi - (NÃO PUBLICADO)

Os conceitos abordados no projeto alura-midi estão descritos a seguir:

* document.querySelector()
* document.querySelectorAll()
* classList
* javaScript events: onkeyup(), onkeydown(), onkeypress()
* template string para dinamizar e aproveitar padronização do html/css
* boas práticas para evitar repetição de código

### fokus - (PUBLICADO com Github Pages)

Os conceitos abordados no projeto fokus estão descritos a seguir:

* defer
* querySelector()
* querySelectorAll()
* addEventListener()
* setAttribute()
* innerHTML
* textContent
* classList
* Audio class
* setInterval()
* clearInterval()
* Date class
* toLocaleTimeString()

## Node

Abaixo estão os projetos referentes aos cursos de revisão de Node.js.

### nodejs-vidflow-vite - (PUBLICADO com Vercel)

Os conceitos abordados no projeto Vidflow estão descritos a seguir:

* configuração de projeto HTML/CSS para utilização do ambiente Node
* instalação ambiente Node
* npm init - utilidade package.json
* npm install - gerenciador de pacotes
* npx eslint 'nome do arquivo' - executa pacote para verficação de erros no arquivo especificado
* npx eslint . - executa pacote para verficação de erros em todo o projeto
* extensão ESLint no VS Code
* extensão Prettier formatação de código - dependencia DEV (npm install --save-dev --save-exact prettier)
* config Prettier "editor.defaultFormatter": "esbenp.prettier-vscode",
* config VS Code "editor.formatOnSave": true
* identificação de pacotes locais e globais (npx nome-do-pacote para executar local)
* versionamento - major version.minor version.patch version
    - major version - descontinuar ou modificar recursos existentes - necessario migrar/atualizar
    - minor version - correcoes junto de novas funcionalidades
    - patch version - versao de correcao de bugs

* criação de scripts para resumir comandos npm - alias 'npm run script-definido-package.json'
* utilização do axios para requisições no backend
* utilização argumentos --save-dev e --save-exact
* utilização do Node server Vite para instalação de dependencias e uso em produção do axios

## React

Abaixo estão os projetos referentes aos cursos de revisão de React.

### react-components - (NÃO PUBLICADO)

Os conceitos abordados no projeto react-components estão descritos a seguir:

* componentes com React utilizando sintaxe JSX
* uso de compilador Babel para compilar JSX em JavaScript legivel para o navegador
* integração do HTML/CSS fornecido com o React utilizando createRoot() e render()
* criação e utilização de Props (properties) parametrizando valores fornecidos para os Components
* utilização da Prop 'children' (reservado para o React) para flexibilização do conteúdo renderizado
* aplicação do Hook useState
* utilizar estados para rastrear e atualizar dinamicamente os dados nos campos de entrada

### code-connect (NÃO PUBLICADO)

* instalação e utilização do Node server Vite para build e deploy do projeto
* criação de React components: forma de melhorar o desenvolvimento de software, tornando o código simples, rápido, eficaz, com mais qualidade, produtivo e reutilizável.
* utilização de useState e useEffect para renderizar dados de "API" externa
* utilização de props com useState
* deploy utilizando GitHub pages e gh-pages lib (configurando o projeto para publicação)
* deploy utilizando Vercel