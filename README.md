# Projeto de Filmes em ReactJS com API TMDB

Este é um projeto desenvolvido em ReactJS que utiliza a API TMDB (The Movie Database) para exibir filmes na tela inicial, permitir o acesso a informações detalhadas de um filme específico e possibilitar a funcionalidade de salvar filmes, armazenando-os no Local Storage do navegador.

## Instalação

Antes de executar o projeto, é necessário ter o Node.js e o npm instalados em sua máquina. Caso ainda não tenha, você pode baixá-los e instalá-los através do site oficial do Node.js.

Após instalar o Node.js, siga os passos abaixo:

1. Clone este repositório para o seu computador usando o seguinte comando:

   ```
   git clone https://github.com/seu-usuario/nome-do-repositorio.git
   ```

2. Navegue até o diretório do projeto:

   ```
   cd nome-do-repositorio
   ```

3. Instale as dependências do projeto usando o npm:

   ```
   npm install
   ```

## Execução

Inicie o servidor de desenvolvimento:

```
npm start
```

O comando acima irá iniciar o servidor de desenvolvimento e o projeto estará disponível no navegador através do endereço http://localhost:3000.

## Funcionalidades

#### Ver Filmes na Tela Inicial:

A tela inicial do projeto exibirá uma lista de filmes populares obtidos através da API TMDB. Cada filme será representado por uma miniatura contendo informações como título, imagem do pôster, entre outros.

#### Acessar um Filme Específico:

Ao clicar em um filme da tela inicial, o usuário será direcionado para a página de detalhes do filme, onde encontrará informações mais completas sobre o filme selecionado, como sinopse, elenco, classificação, entre outros. Essas informações também serão obtidas através da API TMDB.

#### Salvar Filme:

O projeto possui a funcionalidade de permitir que o usuário salve um filme específico em sua lista de favoritos. Para fazer isso, basta clicar no botão de "Salvar" disponível na página de detalhes do filme. O filme selecionado será então armazenado no Local Storage do navegador.
