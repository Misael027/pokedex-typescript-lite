# Pokédex TypeScript Lite

O **Pokédex TypeScript Lite** é uma aplicação em Node.js com TypeScript executada estritamente via terminal. O sistema funciona como uma ponte de dados assíncrona, consumindo informações em tempo real da API pública [PokeAPI](https://pokeapi.co/) e permitindo gerenciar um catálogo/mochila local com regras de negócio específicas durante a execução do programa.

---

## Objetivo do Projeto

Praticar e aplicar os conceitos fundamentais de desenvolvimento Back-End estudados no Módulo 01:
- **Ambiente Node.js** e JavaScript no Back-End.
- **TypeScript:** Tipagem estática rígida, interfaces, parâmetros e retornos tipados (`Promise<T>`).
- **Programação Orientada a Objetos (POO):** Classes, atributos, métodos e modificadores de acesso (`private`/`public`).
- **Assincronismo:** Uso de `fetch` nativo do Node, Promises e fluxo `async/await`.
- **Tratamento de Erros:** Controle de exceções com blocos `try/catch`.
- **Métodos Funcionais de Array:** Utilização de métodos como `map`, `filter`, `some` e `forEach`.
- **Metodologias e Ferramentas:** Versionamento com Git/GitHub (GitFlow) e organização ágil com Kanban.

---

## Tecnologias Utilizadas

- **Node.js** (Runtime de execução)
- **TypeScript** (Linguagem e tipagem)
- **TSX** (Execução direta de arquivos TypeScript em desenvolvimento)
- **Readline-sync** (Captura de inputs do utilizador para o menu interativo)
- **PokeAPI** (API externa de dados Pokémon)

---

## Explicação dos Arquivos e Arquitetura

O projeto rejeita códigos monolíticos e divide as responsabilidades rigidamente em camadas organizadas na pasta `src/`:

- **`models/`**: Contém as definições de estruturas de dados.
  - `Pokemon.ts`: Define as interfaces `PokemonResumo` (dados simplificados da aplicação) e `PokemonApiResponse` (mapeamento rigoroso do JSON retornado pela API externa).
- **`services/`**: Camada de regras de negócio e integração.
  - `PokeApiService.ts`: Responsável pelo `fetch` assíncrona dos dados na PokeAPI e tratamento de respostas.
  - `BoxService.ts` / **`Classe CatalogoPokemon`**: Gerencia o array em memória dos Pokémon capturados, aplicando os métodos funcionais para validações.
- **`controllers/`**: Camada de interface com o utilizador.
  - `TerminalController.ts`: Orquestra as exibições de texto e captura as ações do utilizador através do menu.
- **`main.ts`**: Ponto de entrada centralizado da aplicação que instancia os serviços e inicia o loop do menu.

---

## 📋 Organização do Kanban

O planeamento e acompanhamento das tarefas deste projeto foram realizados através do Trello.
🔗 **Link do Quadro Técnico:** (https://trello.com/b/6a25c1e5d67dcbdc8c4d0da0/meu-quadro-do-trello)


## Pré-requisitos e Como Instalar

Antes de executar, precisas ter instalado no teu computador o **Node.js** e o **Git**.

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/Misael027/pokedex-typescript-lite.git

   ```
2. Aceda à pasta do projeto:
    cd pokedex-typescript-lite

3. Instale as dependências:
    npm install

---

## Como Executar

A aplicação deve ser iniciada através do comando centralizado no terminal:

```bash
npm run start
```

Exemplos de Execução (Registro de Testes)

=========================================
          MENU POKÉDEX LITE
=========================================
1. Buscar e Adicionar Pokémon
2. Listar Meu Catálogo / Mochila
3. Remover Pokémon do Catálogo
4. Sair do Programa
=========================================

**Busca Válida e Adição ao Catálogo**

1. 
Escolha uma opção: 1 (Buscar Pokémon)
Digite o nome ou ID do Pokémon: pikachu

Saída obtida no terminal:

[OK] Pokémon encontrado: pikachu
#25 - pikachu | Tipos: electric | Altura: 4 | Peso: 60

Deseja adicionar este Pokémon ao seu catálogo? (s/n): s
[OK] pikachu adicionado ao catálogo com sucesso!

 Busca Inválida (Tratamento de Erros)

2.Escolha uma opção: 1 (Buscar Pokémon)
Digite o nome ou ID do Pokémon: pokemon-inexistente

Saída obtida no terminal:

[ERRO] Pokémon não encontrado: pokemon-inexistente.

**Validação de Duplicidade**

3. Escolha uma opção: 1 (Buscar Pokémon)
Digite o nome ou ID do Pokémon: pikachu

Saída obtida no terminal:

[AVISO] pikachu já está no catálogo.

**Remoção de Pokémon por ID**

Escolha uma opção: 3 (Remover Pokémon do Catálogo)
Digite o ID do Pokémon que deseja remover: 25

Saída obtida no terminal:

[OK] Pokémon removido do catálogo com sucesso!



